// let idadeDependente = 13;

//aninhados 

// if(idadeDependente >= 13){
//     if(idadeDependente <= 18){
//         console.log(`Seu dependente tem ${idadeDependente} anos e pode ter um cartão de crédito vinculado ao seu!`);
//     }else{
//         console.log(`Seu dependente tem ${idadeDependente} anos e pode ter seu próprio cartão de crédito!`);
//     }
// }else{
//     console.log(`Seu dependente tem ${idadeDependente} anos e não possui idade para ser dependente do seu cartão de crédito!`);
// }

//operadores lógicos

// if(idadeDependente >= 13 && idadeDependente <= 18){
//     console.log(`Seu dependente tem ${idadeDependente} anos e pode ter um cartão de crédito vinculado ao seu!`);
// }else{
//     console.log(`Seu dependente tem ${idadeDependente} anos, consulte outras possibilidades do Labank.`);
// }

//ternario

// idadeDependente === 13? console.log("A idade do dependente é 13 e já pode ter um cartão") : console.log("Consulte outras possibilidades do Labank")

//switch case

// let cartao = +prompt(`Solicitação de cartão de Crédito
// 1- Fácil
// 2- Black
// 3- Platinum
// 4- Master Gold`)

// switch(cartao){
//     case 1:
//         console.log('Cartão Fácil selecionado.');
//         break;
//     case 2:
//         console.log('Cartão Black selecionado.');
//         break;
//     case 3:
//         console.log('Cartão Platinum selecionado.');
//         break;
//     case 4:
//         console.log('Cartão Master Gold selecionado.');
//         break;   
//     default:
//         console.log('Escolha uma das opções disponíveis');
// }

let numero = +prompt('Insira um número divisível por 2 e 3, e tente adivinhar qual o número mais legal deles !!!');

// if(numero % 2 === 0){
//     if(numero % 3 === 0){
//         alert('é divisivel por 2 e 3');
//     }else{
//         alert('É divisivel por 2 e não por 3');
//     }
// }else{
//     alert('Não é divisivel por 2');
// }

if(numero % 2 === 0 && numero % 3 === 0){
    alert('é divisivel por 2 e 3');
    numero === 30? console.log('UFA ACERTEI!') : console.log('não foi dessa vez :(');
    switch (numero) {
        case 6:
            console.log('Você digitou o 6');
            break;
        case 12:
            console.log('Você digitou o 12');
            break;
        case 18:
            console.log('Você digitou o 18');
            break;
        case 24:
            console.log('Você digitou o 24');
            break;
        case 30:
            console.log('Você digitou o 30');
            break;
        default:
            console.log('O número é maior que 30 ou menor que 6');
            break;
    }
}else{
    alert('não é divisivel por 2 e 3');
}
