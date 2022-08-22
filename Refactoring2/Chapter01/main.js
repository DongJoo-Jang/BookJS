
const invoices = 
    {
        "customer" : "BigCo",
        "perfomances" : [
            {
                "playID" : "hamlet",
                "audience" : 55
            },
            {
                "playID" : "as-like",
                "audience" : 35
            },
            {
                "playID" :"othello",
                "audience" : 40
            }
        ]
    }


const plays ={
    "hamlet" : {"name" : "hamlet", "type" : "tragedy"},
    "as-like" : {"name" : "As You Like it", "type" : "comedy"},
    "othello" : {"name" : "Othello" , "type" : "tragedy"}
}
console.dir (plays);
console.dir(invoices);

function amountFor(perf,play){
    let result = 0;

    switch(play.type){
        case "tragedy":
            result = 40000;
            if(perf.audience > 30){
                result += 1000 * (perf.audience - 30);
            }
            break;

        case "comedy":
            result = 30000;
            if(perf.audience > 20){
                result += 10000 + 500 * (perf.audience -20);
            }
            result += 300 * perf.audience;
            break;

        default:
            throw new Error(`알 수 없는 장르 : ${play.type}`)
    }
    return result;
}

function statement(invoices, plays)
{
    let totalAmount = 0;
    let volumeCredits = 0;
    let result = `청구 내역 (고객명: ${invoices.customer})\n`;
    const format = new Intl.NumberFormat("en-US", 
    {
        style :"currency", currency : "USD",
        minimumIntegerDigits : 2}).format;
        
        
        for(let perf of invoices.perfomances){
            
            
            const play = plays[perf.playID];
            let thisAmount = amountFor(perf,play);

            volumeCredits += Math.max(perf.audience - 30 , 0);

            if("comedy" === play.type) volumeCredits += Math.floor(perf.audience/5);
            
            result += `${play.name} : ${format(thisAmount/100)} (${perf.audience}석)\n`;
            totalAmount += thisAmount;
        }        
        result += `총액: ${format(totalAmount/100)}\n`;
        result += `적립 포인트 : ${volumeCredits}점\n`;
        return  result;
        
}




console.log (statement(invoices,plays));