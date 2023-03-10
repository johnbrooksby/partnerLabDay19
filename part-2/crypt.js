// let coderArr = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m", " ", "!"];
let coderArr = "qwertyuiopasdfghjklzxcvbnm !";

let decoderArr = "abcdefghijklmnopqrstuvwxyz! ";

function cipher (str) {

    // return str.toLowerCase().split('').map(ele => {
    //     let index = coderArr.indexOf(ele)
    //     return decoderArr[index]
    // }).join("");
    let cipherStr = "";
    for (let i = 0; i < str.length; i++){
        for (let j = 0; j < decoderArr.length; j++){
            if(str[i] === decoderArr[j] && i !== j){
                cipherStr += coderArr[j]
            }
        }
    }
    return (cipherStr)
}

function decipher (str){
    // return str.toLowerCase().split('').map(ele => {
    //     let index = decoderArr.indexOf(ele)
    //     return coderArr[index]
    // }).join("");
    let decipherArr = "";
    for (let i = 0; i < str.length; i++){
        for (let j = 0; j < coderArr.length; j++){
            if(str[i] === coderArr[j] && i !== j){
                decipherArr += decoderArr[j]
            }
        }
    }
    return (decipherArr);
}
cipherString = "i love cryptography!"

console.log(cipher(cipherString))
console.log(decipher(cipher(cipherString)))
