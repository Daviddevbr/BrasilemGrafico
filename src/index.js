import { graficoFaxaEtaria } from "./graficoFaxaEtaria.js";

import { graficoCor } from "./graficoCor.js"

import { graficoPopulacaoHistorico } from "./graficoPopulacaoHistorico.js"

import { graficoGenero } from "./graficoGenero.js"

import { graficocloudBrasil } from "./graficocloudBrasil.js";




let buttom = document.querySelectorAll(".buttonMenu")
let corpoMapa = document.getElementsByName("apresenta_corpo")
let menuHamburher=document.querySelector("#menubuger")
let listaDesodernada=document.querySelector("ul")

menuHamburher.addEventListener("click", ()=>{

  console.log(listaDesodernada.style.display)

    if(listaDesodernada.style.display=="flex"){
        listaDesodernada.style.display="none"
    }else{
        listaDesodernada.style.display="flex"
    }

})


graficocloudBrasil()

buttom.forEach((buttons, index) => {
    buttons.addEventListener("click", () => {

        switch (index) {
            case 0:
                corpoMapa[0].id = "graficoFaxaEtaria"
                graficoFaxaEtaria()
           

                break;
            case 1:
                corpoMapa[0].id = "graficoCor"

                graficoCor()

                break;
            case 2:
                corpoMapa[0].id = "graficoPopulacaoHistorico"
                graficoPopulacaoHistorico()


                break;
            case 3:
                corpoMapa[0].id = "graficoGenero"
                graficoGenero()


                break;
            default:
        }

    })
})

