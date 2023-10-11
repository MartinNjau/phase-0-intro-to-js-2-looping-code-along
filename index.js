const names=["Guadalupe", "Ollie", "Aki"];
let arrMsgs=[];
function writeCards(names , surprise) {
    //let arrMsgs=[];
for (let i=0; i<names.length; i++) {
    console.log(arrMsgs.push(`Thank you, ${names[i]}, for the wonderful ${surprise} gift!`));
}
return arrMsgs;
}

function countDown(num) {
  let age=num;
    while(age>=0){
        console.log(age--);
    }
}
countDown(10);
    
