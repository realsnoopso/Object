import * as readline from 'readline/promises';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const main = async (name: string) => {
    const taxRate = await getTaxRate();
    const pay = calculatePayFor(name, taxRate);
    const puts = describeResult(name, pay);
}

const employees = [
    {id:1, name:'소민경', payroll: 102000020020}
]

const getTaxRate = async () => {
    const answer = await rl.question('세율을 입력하세요: ');
    rl.close();
    return Number(answer);
}

const calculatePayFor = (name:string, taxRate:number)=> {
    const basePay = employees.find((employee)=> employee.name === name)?.payroll;
    if (!basePay) return 0;
    return (basePay - (basePay * taxRate))
}

const describeResult = (name:string, pay: number)=> {
    rl.write(`이름: ${name}, 급여: ${pay}`)
}

main('소민경').catch(console.error);