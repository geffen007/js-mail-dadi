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
var risultato;

tiroUtente = Math.floor(Math.random()*6)+1;
document.getElementById("risultato-utente").innerHTML="il tuo dado ha realizzato " + tiroUtente;

tiroPc= Math.floor(Math.random()*6)+1;
document.getElementById("risultato-cpu").innerHTML="il dado del pc ha realizzato " + tiroPc;

if (tiroUtente > tiroPc) {
    risultato="HAI VINTO";
} else if (tiroUtente<tiroPc) {
    risultato="RITENTA SARAI PIU FORTUNATO";
} else {
    risultato= "PARITA\'";
}

document.getElementById("chi-ha-vinto").innerHTML=risultato;



// function miolancio(tiroUtente) {
//     tiroUtente = Math.floor(Math.random()*6)+1;
//     document.getElementById("risultato-utente").innerHTML=miolancio(tiroUtente);
//     return tiroUtente;
// }
// console.log(tiroUtente);
//
// function lanciocpu() {
//     tiroPc= Math.floor(Math.random()*6)+1;
//     document.getElementById("risultato-cpu").innerHTML=tiroPc;
// }
//
// if (tiroUtente > tiroPc) {
//     risultato="hai vinto";
// } else if (tiroUtente<tiroPc) {
//     risultato="RITENTA SARAI PIU FORTUNATO";
// } else {
//     risultato= "parita";
// }
