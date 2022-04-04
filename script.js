



 let numbers = [];
 let sortNumber;
 let newNumbers;

 //Número de cartas do jogo
 let cards = 16;
 //Vetor com as imgs
 let imgs = [];

 //Variavel que vai receber todos os src da imagem
 let imgSrc;

 //Controlar numero de cliques (max 2)
 let auxClicks = 0;

 //Controlar Primeiro clique
let controlFirstImg = "";

//Controlar Segundo clique
let controlSecondImg = "";

//Salvar o numero da classe da primeira imagem clicada
let firstImgClass;

//Salvar o numero da classe da segunda imagem clicada
let secondImgClass;

let counter = 0;

let content = "";


window.onload = () => {

    //Sortear os 10 numeros
    for(let i = 0; i < 100; i++) {
        sortNumber = Math.floor(Math.random() * cards);
 
        //Adicionar eles ao Array
         for(let b = 0; b < 1; b++) {
             numbers.push(sortNumber);
         }
     }

    newNumbers = numbers.filter((item, i) => numbers.indexOf(item) === i);

    //Array com as imagens
    imgs = [
                "img/cake-slice.png",
                "img/caramel.png",
                "img/cheese-burger.png",
                "img/chocolate.png",
                "img/donut.png",
                "img/ice-cream.png",
                "img/milkshake.png",
                "img/pizza.png",
                "img/cake-slice.png",
                "img/caramel.png",
                "img/cheese-burger.png",
                "img/chocolate.png",
                "img/donut.png",
                "img/ice-cream.png",
                "img/milkshake.png",
                "img/pizza.png",
               ];

    //Coloca as imagens sorteadas nas divs
    for(let b = 0; b < newNumbers.length; b++) {
        document.getElementsByClassName("heroes-imgs")[`${newNumbers[b]}`].src = `${imgs[b]}`;
        imgSrc = document.getElementsByClassName("heroes-imgs")[`${newNumbers[b]}`].src;
    } 

}


function showCard ( classNumber ) {

    //Array com os srcs das imagens
    let imgsSrc = [
                    "http://127.0.0.1:5500/img/cake-slice.png",
                    "http://127.0.0.1:5500/img/caramel.png",
                    "http://127.0.0.1:5500/img/cheese-burger.png",
                    "http://127.0.0.1:5500/img/chocolate.png",
                    "http://127.0.0.1:5500/img/donut.png",
                    "http://127.0.0.1:5500/img/ice-cream.png",
                    "http://127.0.0.1:5500/img/milkshake.png",
                    "http://127.0.0.1:5500/img/pizza.png"
                  ];
    document.getElementsByClassName("back-card")[`${classNumber}`].style.display = "flex";


        if(auxClicks < 1) {
            //Salvar link da primeira imagem clicada
            controlFirstImg = document.getElementsByClassName("heroes-imgs")[`${classNumber}`];

            //Salvar o numero da classe da primeira imagem clicada
            firstImgClass = classNumber;
        }

        auxClicks++;

        if(auxClicks > 1) {

            for(let i = 0; i < cards; i++) {
                document.getElementsByClassName("card")[`${i}`].disabled = true;
            }

            //Salvar link da segunda imagem clicada
            controlSecondImg = document.getElementsByClassName("heroes-imgs")[`${classNumber}`];

            //Salvar o numero da classe da segunda imagem clicada
            secondImgClass = classNumber;

            if(controlFirstImg.src === controlSecondImg.src){
                document.getElementsByClassName("back-card")[`${firstImgClass}`].style.display = "flex";
                document.getElementsByClassName("back-card")[`${secondImgClass}`].style.display = "flex";

                function setCardsDisabledIfEqual(){

                    counter++;
                    //Por 1,5s, ele deixara as cartas desabilitadas
                    for(let i = 0; i < cards; i++) {
                        document.getElementsByClassName("card")[`${i}`].disabled = true;
                    }
  
                    //Após esse tempo, as cartas voltam a ficar habilitadas
                    if(counter === 1){
                        for(let i = 0; i < cards; i++) {
                            document.getElementsByClassName("card")[`${i}`].disabled = false;
                        }
                    }

                    //Zerar contador
                    counter = 0;
                }

                let timersetCardsDisabledIfEqual = setTimeout(setCardsDisabledIfEqual, 1500);

                

                //Desabilitar botões das cartas iguais para o jogador não conseguir clicar nelas
                document.getElementsByClassName("card")[`${firstImgClass}`].disabled = true;
                document.getElementsByClassName("card")[`${secondImgClass}`].disabled = true;
            }else {

                function imgsDisappear(){

                    //Faz o button com a imagem sumir
                    document.getElementsByClassName("back-card")[`${firstImgClass}`].style.display = "none";
                    document.getElementsByClassName("back-card")[`${secondImgClass}`].style.display = "none";
                
                    //Faz a parte de tras aparecer
                    document.getElementsByClassName("card")[`${firstImgClass}`].style.display = "flex";
                    document.getElementsByClassName("card")[`${secondImgClass}`].style.display = "flex";

                    for(let i = 0; i < cards; i++) {
                        document.getElementsByClassName("card")[`${i}`].disabled = false;
                    }

                } 

                //Tempo antes de fazer sumir as imagens
                let timerImgsDisappear = setTimeout(imgsDisappear, 1500);
            }      
            auxClicks = 0;
        }
}



