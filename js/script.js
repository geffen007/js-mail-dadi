var mail = ["mail@mail.it", "posta@posta.com", "piccione@piccione.net"];
console.log(mail);

var tuaMail = prompt ("inserisci la tua mail");
console.log(tuaMail);

var trovata= false;

for (var i=0; i<mail.length; i++) {
    if (mail[i]==tuaMail){
        trovata= true;
    }
}

console.log(trovata);


if (trovata == true) {
    document.getElementById('entra').innerHTML=('ora puoi entrare')

} else {
    alert (" la tua mail non è presente");
}
