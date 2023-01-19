function sing(){
    let str = "";
    for(let i = 0; i < 11; i++){
        if(i === 4) str += 'whisper words of wisdom, ';
        else if (i === 10) str += 'there will be an answer, let it be';
        else str += 'let it be, ';
    }
    return str;
}
/* OTRA FORMA DE FUNCIONAR
const letra="";
let a="";
function sing (letra){
    for (let i=0;i<4;i++) letra+="let it be, ";
    
    letra+=" whisper words of wisdom, "
    for (let i=0;i<5;i++) letra+="let it be, ";

    letra+=" there will be an answer, "
    for (let i=0;i<1;i++) letra+="let it be";

    return letra
    }
*/

//Your code above ^^^

console.log(sing());