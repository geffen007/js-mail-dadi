// var mail = ["mail@mail.it", "posta@posta.com", "piccione@piccione.net"];
//
// var tuaMail = prompt ("inserisci la tua mail");
//
//
// var trovata= false;
//
// for (var i=0; i<mail.length; i++) {
//     if (mail[i]==tuaMail){
//         trovata= true;
//     }
// }
//
//
// if (trovata == true) {
//     document.getElementById('entra').innerHTML=('ora puoi giocare');
// } else {
//     alert (" la tua mail non è presente");
// }

var tiroUtente = 0;
var tiroPc= 0;
var risultato= "parita";


function miolancio() {
    tiroUtente= Math.floor(Math.random()*6)+1;
    document.getElementById("risultato-utente").innerHTML=tiroUtente;

}



function lanciocpu() {
    tiroPc= parseInt(Math.floor(Math.random()*6)+1);
    document.getElementById("risultato-cpu").innerHTML=tiroPc;
}

if (tiroUtente > tiroPc) {
    risultato="hai vinto";
} else {
    risultato="RITENTA SARAI PIU FORTUNATO";
}

document.getElementById("chi-ha-vinto").innerHTML=risultato;

console.log(tiroUtente);
console.log(tiroPc);
console.log(risultato);
