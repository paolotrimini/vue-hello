// Stampare a schermo il contenuto di una variabile dentro un h1.
// BONUS: utilizzare un data come nome del file immagine in un tag img.


function initVue() {

    var app = new Vue({

        el: '#app',
        data: {
            message: 'Hello Vue js!'
        }

    });

}

function init() {
    initVue();

}
$(init);