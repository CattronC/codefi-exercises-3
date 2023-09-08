// ! Exercise 1
// We can access outerVar
// We can access innterVar

// ! Exercise 2
function mainFunction(paramOut) {
    innerFunction();
    function innerFunction(paramIn){};
    console.log(mainFunction);
    console.log(innerFunction);
}

mainFunction();

// ! Exercise 3
function outExThree(a){
    function inExThree(x){
        
        return x;
    };
    return inExThree;
};


outExThree(5);
let outerAns = outExThree(5);
console.log(outerAns(6));

// ! Exercise 4
let globalVar = "global"
console.log(globalVar)

function modGlobal(mod1){
    let globalVar = mod1;
    console.log(globalVar);
}

modGlobal('modified');

function localVar(){
    let local = 2;
    // let local = "two";  
    // * cannot redefine two local variables of the same name. Throws an error.
    console.log(local);
}