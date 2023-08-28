/* 
! To Do:

- [] comment important things
- [] modify report console log

*/
import chalk from "chalk";
const log = console.log
export const testFunction = function(testsArray , cleanFunction){
    const report = {
        "Successful Tests Number": 0,
        "Failed Tests Number": 0,
        "Failed Tests list": []
    
    }
    testsArray.forEach((item, index) => {
        const input = item.input
        const outputExpected = item.outputExpected
        const testDescription = item.description
    
        //const mm=trimAndReplaceAsteriskWithDash(input)
       
        const inputInCleanFunction = cleanFunction(input)
        
    
        if (inputInCleanFunction === outputExpected) {
            log(chalk("-----------------------\n" + `${chalk.yellow.bgHex("#283234")(`Test ${index + 1} :`)} ${chalk.green(`✓✓✓`)} ${chalk.dim(`${testDescription}`)}` + "\n-----------------------"))
            report["Successful Tests Number"]++
        } else {
            log(chalk("-----------------------\n" + `${chalk.yellow.bgHex("#283234")(`Test ${index + 1} :`)} ${chalk.red(`✕✕✕`)} ${chalk.dim(`${testDescription}`)}` + "\n-----------------------"))
            log(chalk(`${chalk.dim(`Expected output ↓`)}\n${chalk.white(`${outputExpected}`)}`))
            log(chalk(`${chalk.dim(`Actual output ↓`)}\n${chalk.red(`${inputInCleanFunction}`)}`))
            report["Failed Tests Number"]++
            report["Failed Tests list"].push(testDescription)
        }
    
    })

    console.log(report)
}