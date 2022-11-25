// Write your solution here!
const cats=["Milo", "Otis", "Garfield"];

 function destructivelyAppendCat(name){
    cats;
    console.log(cats.push(name));
 }
 destructivelyAppendCat.push('Ralph')

 function destructivelyPrependCat(name){
    cats;
    console.log(cats.unshift('Bob'));
 }
function destructivelyRemoveLastCat(name){
    cats;
    console.log(cats.pop('Garfield'));
}
 function destructivelyRemoveFirstCat(name){
    cats;
    console.log(cats.shift('Milo'));
 }
 function appendCat(name){
  const newCat=[...cats, name];
  return newCat;
 }
 function prependCat(name){
    const newCat=[name, ...cats];
    return newCat;
 }
 function removeLastCat(){
 const newCat=cats.slice(0,2);
 return newCat;
 }
  function removeFirstCat(){
    const newCat=cats.slice(1);
    return newCat;
  }