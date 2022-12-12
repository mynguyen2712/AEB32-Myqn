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
let x = '1'
let y  = 1
if (a>b) {
    print('a lon hon b')
} else{
    print('b lon hon a')
}
// ---------condition render---------
((x === y) && (a>b))? print('a lon hon b') : print('b lon hon a')
x && print(1)

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

// function bt3(){
    
//     const smallest =  prompt('Enter a First number: ');
//     const num_2 =  prompt('Enter a Second number: ');
//     const num_3 =  prompt('Enter a Third number: ');
//     const num_4 =  prompt('Enter a Four number: ');
//     if (parseInt(num_2) < parseInt(smallest)) smallest = num_2
//     if (parseInt(num_3) < parseInt(smallest)) smallest = num_3
//     if (parseInt(num_4) < parseInt(smallest)) smallest = num_4
//     print(smallest)
// }

// bt3()


//------------------bai tap 3------------------

function b3(){
    const num =  prompt('Please take your number: ?')
    const result = parseInt((num - 1)/2)
    alert(result)

}



//------------------bai tap 4------------------

function b4(){
    const num =  prompt('Please insert your number: ?')
    if (condition) {
        
    }

}