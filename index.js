//Exercise 1
let cats = ["Milo", "Otis", "Garfield"];

//Exercise 2 
function destructivelyAppendCat(name){
    cats.push(name);
}

//Exercise 3 
function destructivelyPrependCat(name){
    cats.unshift(name);
}

//Exercise 4 
function destructivelyRemoveLastCat(){
    cats.pop();
}

//Exercise 5 
function destructivelyRemoveFirstCat(){
    cats.shift();
}

//Exercise 6 
function appendCat(name){
    return [...cats, name];
}

//Exercise 7 
function prependCat(name){
    return [name, ...cats];
}

//Exercise 8 
function removeLastCat(){
    return cats.slice(0, cats.length - 1);
}

//Exercise 9
function removeFirstCat(){
    return cats.slice(1);
}
