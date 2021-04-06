// Stampare a schermo il contenuto di una variabile dentro un h1.
// BONUS: utilizzare un data come nome del file immagine in un tag img.


function initVue() {

    new Vue({

        el: '#app',
        data: {
            'bgColor': 'bg-goldenrod'
        }
    });

}

function init() {
    initVue();

}
$(init);