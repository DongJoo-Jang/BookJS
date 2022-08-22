import plays from './plays.json' assert {type : "json"};
import invoices from './invoices.json' assert {type : "json"};

console.log (plays);
console.log(invoices);
function statement(invoices, plays)
{
    let totalAmount = 0;
    let volumeCredits = 0;
    let result = `청구 내역 (고객명: ${invoice.customer} \n`;
    const format = new Intl.NumberFormat("en-US", 
    {
        style :"currenct", currency : "USD",
        minimumIntegerDigits : 2}).format;

        for(let perf of invoice.perfomances){
            const play = plays[perf.playID];
            let thisAmount = 0;

            switch(play.type){
                case "tragedy":
                    thisAmount = 40000;
                    if(perf.audience > 30){
                        thisAmount += 1000 * (perf.audience - 30);
                    }
                    berak;

                case "comedy":
                    thisAmount = 30000;
                    if(perf.audience > 20){
                        thisAmount += 10000 + 500 * (perf.audience -20);
                    }
                    thisAmount += 300 * perf.audience;
                    break;

                default:
                    throw new Error(`알 수 없는 장르 : ${play.type}`)

            }

        }
}
