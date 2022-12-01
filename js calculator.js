console.log("This is a javascript calculator.");
const number1 = parseFloat(prompt('Enter first number: '));
const operator = prompt('Enter operator ( either +, -, * or / ): ');
const number2 = parseFloat(prompt('Enter second number: '));

let result;

switch(operator)
{
    case '+':
        result=number1+number2;
        break;
    case '-':
        result=number1-number2;
        break;
    case '*':
        result=number1*number2;
        break;
    case '/':
        result=number1/number2;
        break;
    default:
        console.log("Invalid Input");
        break;               
}

// display the result
console.log(`${number1} ${operator} ${number2} = ${result}`);
