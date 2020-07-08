var mail = ["mail@mail.it", "posta@posta.com", "piccione@piccione.net"];
console.log(mail);

var tuaMail = prompt ("inserisci la tua mail");
console.log(tuaMail);


for (var i=0; i<mail.lenght; i++) {
    if (mail[i]==tuaMail){
        console.log('si')
    } else {
        console.log('no')
    }
}
