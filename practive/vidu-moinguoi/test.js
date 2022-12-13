const print = console.log
// const lastName =  'Nguyen'
// let lastName = 'Nguyen'
// print(`My ${lastName}`)
let a = 1
let b = 2
// ------------------------------------------------------
// > < >= <=
// == ====
// use 'and' = &&
// use 'or' = ||
// let x = '1'
// let y  = 1
// if (a>b) {
//     print('a lon hon b')
// } else{
//     print('b lon hon a')
// }
// ---------condition render---------
// ((x === y) && (a>b))? print('a lon hon b') : print('b lon hon a')
// x && print(1)

// xep loai hs
let z = 0
switch (z) {
    case 0:
        
        break;
    case 1:
    
        break;
    case 2:
    
        break;

    default:
        break;
}


// const list_1 = [1,2,3,4,5,6,7]
//------------------bai tap 1//------------------
function bt1() {
    const num = prompt('Enter a number: ');
    if (num % 2 === 0) {
        alert(`${num} la so chan`)
    } else {
        alert(`${num} la so le`)
    }
}



//------------------bai tap 1------------------
function bt2(){
    const num =  prompt('Enter a number: ');
    
    const result = num * 2
    alert(result)

}

//------------------bai tap 2------------------

function bt3(){
    const prompt = require('prompt-sync')();
    // const num =  prompt('Please take your number: ?')
    let smallest =  prompt('Enter a First number: ');
    const num_2 =  prompt('Enter a Second number: ');
    const num_3 =  prompt('Enter a Third number: ');
    const num_4 =  prompt('Enter a Four number: ');
    if (parseInt(num_2) < parseInt(smallest)) smallest = num_2
    if (parseInt(num_3) < parseInt(smallest)) smallest = num_3
    if (parseInt(num_4) < parseInt(smallest)) smallest = num_4
    print(smallest)
}



//------------------bai tap 3------------------

function b3(){
    const num =  prompt('Please take your number: ?')
    const result = parseInt((num - 1)/2)
    alert(result)

}



//------------------bai tap 4------------------

function b4(){
    const num =  prompt('Please insert your number: ?')
    const result = parseInt(num) / 10
    const hang_chuc = result.toString().split('.')
    print(`${hang_chuc[0] } so hang chuc`)
    print(hang_chuc[1] + ' so hang don vi')

}



//------------------bai tap 5------------------

function b5(){
    const num =  prompt('Please insert your number: ?')
    if (parseInt(num) % 2 === 0 || parseInt(num) % 3 === 0) {
        print(num + ' : No')
    } else{
        print(num + ' : Yes')
    }

}


//------------------bai tap 6------------------

function b6(){
    const prompt = require('prompt-sync')();
    const first_num =  parseInt(prompt('Please insert your first-number: ?'))
    const second_num =  parseInt(prompt('Please insert your second-number: ?'))
    let n;
    for (let i = 1; i <= first_num && i <= second_num; i++) {
        // check if is factor of both integers54
        if( first_num % i === 0 && second_num % i === 0) {
            n = i;
        }
    }
    print(n)
}
//------------------bai tap 7------------------

function b7(){
    const prompt = require('prompt-sync')();
    const input_text = prompt('Insert the text: ')
    const result = input_text.toLowerCase()
    const split_text = result.split(' ')

    let capital_first_letter
    let create_empty_list = []

    for (const each_text of split_text) {
        capital_first_letter = each_text[0].toUpperCase() + each_text.slice(1)
        create_empty_list.push(capital_first_letter)
    }
    const final_result = create_empty_list.join(' ')

    print(final_result)
}   

//------------------bai tap 8------------------

function b8(){
    const prompt = require('prompt-sync')();
    const text = prompt('Insert The Text You Want: ')
    const spit_text = text.split(' ')
    let result = ''
    for (const each_word of spit_text) {
        result += each_word.length + " " 
    }
    print(result)
}



//------------------bai tap 8------------------

function b9(){
    const prompt = require('prompt-sync')();

    let n =  parseInt(prompt('Insert The Text You Want: '))
    // let n =  10
    let list_1 = []
    let i = 2
    let divisor = []

    for (let p = 1; p <= n; p++) {
        if( n % p === 0 ) {
            divisor.push(p)
        }
    }

    print(divisor.length)


    while (n > 1){
        if (n % i === 0){
            n = n / i;
            // print(i)

            list_1.push(i);
        } else{
            i = i + 1;
            // print(i)
        }  
    }
    const size = list_1.length
    let combine = ''
    for (let x = 0; x < size -1; x++) {
        combine = combine + (list_1[x]).toString() + " * ";
        
    }
    combine = combine + (list_1[size-1]).toString();

    // result_ of combine : 
    print(combine)


    

    
}
b9()