var mail = ["mail@mail.it", "posta@posta.com", "piccione@piccione.net"];


var tuaMail = prompt ("inserisci la tua mail");



for (var i = 0; i < mail.lenght; i++) {
    if (mail[i]==tuaMail){
        document.getElementById('entra').innerHTML=('adesso puoi entrare');
    }
}
