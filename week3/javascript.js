
let password=prompt("enter the password: ");
let length=password.length;
c1=false
if (length>=8){
c1=true;
}
console.log(c1);

let specialChar=["!", "%", "?", "&"];

for (i=0; i<length; i++){
    console.log(password[i]);
}


let specialChar=["!", "%", "?", "&"];

for (i=0; i<length; i++){
    
    for(g=0; g<specialChar.length; g++){
    if (password[i]===specialChar[g]){
        c2=true;}
    }    
    //this checks the number
    for(m=0; m<num.length; m++){
    if (password[i]==num[m]){
        
        c3=true;}
    } // number checks ends 
    
    //this checks the space
    if (password[i]===" "){
    c4=false;}
}
console.log("password has special character: " + c2)


/*
for (k=0; k<length; k++){
    console.log(password[k]);
    
    for(m=0; m<num.length; m++){
    if (password[k]==num[m]){
        
        c3=true;}
    }    
}
console.log("password have numbers: " + c3)

    
let space=" ";

for (i=0; i<length; i++){
   
    if (password[i]===space){
        c4=false;}
   
}
*/
console.log("password hasn't space: " + c4)








