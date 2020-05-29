function onOff(){ 
    document
        .querySelector("#modal")
        .classList
        .toggle("hide") /* toggle acrescenta ou tira a classe  "hide"  dentro do seletor escolhido anteriormente (footer) */

    document
      .querySelector("body")
      .classList
      .toggle("hideScroll")

    document
      .querySelector("#modal")
      .classList
      .toggle("addScroll")
}



//document
  //  .querySelector("button.fat") /* querySelector serve para buscar um seletor */
    //.addEventListener("click", ) /* quando ele "ouvir" a funçao click ele vai executar a funçao seguinte. */
