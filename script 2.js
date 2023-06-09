const app = Vue.createApp({
    data() {
        return{
            images : [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ],
            counter : 0,
        }
    },
     methods: {
        
     }
});
app.mount('#root');







eleBtnDown.addEventListener("click", up)
eleBtnUp.addEventListener("click", down)







//FUNCTION
function render(){
    eleCont.innerHTML = '';
    elePreview.innerHTML = '';
    for(let i = 0; i < images.length; i++){
        if(counter == i){
            eleCont.innerHTML += `<div class="current-img" style="background-image: url('${images[i].image}')">
            <h3 class="titolo">${images[i].title}</h3>
            <p class="paragrafo">${images[i].text}</p>
            </div>`
            elePreview.innerHTML += `<div style="background-image: url('${images[i].image}');" class="img-miniature  img-active"></div>`;
        }else{
            eleCont.innerHTML += `<div class="current-img hidden" style="background-image: url('${images[i].image}')">
            <h3 class="titolo">${images[i].title}</h3>
            <p class="paragrafo">${images[i].text}</p>
            </div>`
            elePreview.innerHTML += `<div style="background-image: url('${images[i].image}');" class="img-miniature"></div>`
        }
    
    }
}



function down(){
    counter--;
    if(counter == -1){
        counter = 4
    }
    render();
}
function up(){
    counter++;
    if(counter == 5){
        counter = 0
    }
    render();
}
function bonus(){
    if(timerselect==1){
        clearInterval(auto);
        setInterval(newauto);
        timerselect = 0
    }else{
        clearInterval(newauto);
        setInterval(auto);
        timerselect = 1
    }

}