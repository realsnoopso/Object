import * as readline from 'readline/promises';

const main = async (name: string) => {
    const taxRate = await getTaxRate();
    const pay = calculatePayFor(name, taxRate);
    const puts = describeResult(name, pay);
}

const employees = [
    {id:1, name:'소민경', payroll: 102000020020}
]

const getTaxRate = async () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const answer = await rl.question('세율을 입력하세요: ');
    rl.close();
    return Number(answer);
}

const calculatePayFor = (name:string, taxRate:number)=> {
    const payroll = employees.find((employee)=> employee.name === name)?.payroll
    return 0
}

const describeResult = (name:string, pay: number)=> {

}

main('소민경').catch(console.error);