// Your code here:

function song(){
    for (let i = 99; i >= 0; i--) {
        if (i == 1) {
            console.log("1 bottle of milk on the wall, 1 bottle of milk. Take one down and pass it around, no more bottles of milk on the wall.");
        } else if (i == 0) {
            console.log("No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.");
        } else if (i== 2) {
            console.log(`${i} bottles of milk on the wall, ${i} bottles of milk. Take one down and pass it around, ${i-1} bottle of milk on the wall.`);
        } else {
            console.log(`${i} bottles of milk on the wall, ${i} bottles of milk. Take one down and pass it around, ${i-1} bottles of milk on the wall.`);
        }
    }
}

song()


/* OTRA FORMA DE FUNCIONAR

function sing(){
    let str = "";
    for(let i = 99; i > 0; i--){
        str += i;
        str += " bottles of milk on the wall, ";
        str += i;
        str += " bottles of milk.";
        str += "\nTake one down and pass it around, "
        str += i-1;
        str += " bottles of milk on the wall.\n";
            if (i===1){
                str += i;
                str += " bottle of milk on the wall, ";
                str += i;
                str += " bottle of milk.";
                str += "\nTake one down and pass it around, no more bottles of milk on the wall."
                
                let o=99;
                str += "\nNo more bottles of milk on the wall, no more bottles of milk.\nGo to the store and buy some more, "+o+" bottles of milk on the wall.";                       
        }
    }
    return str;
}

console.log(sing());
*/


