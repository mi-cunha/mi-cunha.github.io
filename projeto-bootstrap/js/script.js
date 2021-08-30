$(document).ready(function () {

    // modal - Pop-up - descomentar ao fim do projeto
  // $("#modalPopup").modal("show");


//  FILTRO DO PORTFOLIO
$(".filter-btn").on("click", function(){
  let type = $(this).attr("id");
  let boxes = $(".project-box");

  $(".main-btn").removeClass("active");
  $(this).addClass("active");

  if(type == "beds-btn"){
    eachBoxes("beds", boxes);
  } else if (type =="shelfs-btn"){
    eachBoxes("shelfs", boxes);
  } else if(type == "toys-btn"){
    eachBoxes ("toys", boxes);
  } else {
    eachBoxes ("all", boxes)
  }
});

function eachBoxes(type, boxes){
  if(type == "all"){
    $(boxes).fadeIn();
  } else{
    $(boxes).each(function(){
      if(!$(this).hasClass(type)){
        $(this).fadeOut("slow");
      } else {
        $(this).fadeIn();
      }
    });
  }
}
});


// BOTÃO VOLTAR A TOPO
$(window).scroll(function () {
  var altura = $(window).scrollTop();
  if (altura > 400) {
      $(".botao-top").show();
  } else {
      $(".botao-top").hide();
  }
});

$('.botao-top a[href^="#"]').on('click', function (e) {
  e.preventDefault();
  var id = $(this).attr('href'),
      targetOffset = $(id).offset().top;

  $('html, body').animate({
      scrollTop: targetOffset - 100
  }, 1200);
});


// VALIDAÇÃO FORMULÁRIO

$(".nome").blur(function () {
  var nome = document.querySelector(".nome").value;

  if (isNaN(nome)) {
      $(".nome").css("border", "2px solid green");
      return true;
  } else {
      $(".nome").css("border", "2px solid red");
      return false;
  }
});

function valida_email(field) {
  var usuario = field.value.substring(0, field.value.indexOf("@"));
  var dominio = field.value.substring(field.value.indexOf("@") + 1, field.value.length);
  if ((usuario.length >= 1) && (dominio.length >= 3) && (usuario.search("@") == -1) &&
      (dominio.search("@") == -1) && (usuario.search(" ") == -1) && (dominio.search(" ") == -1) &&
      (dominio.search(".") != -1) && (dominio.indexOf(".") >= 1) && (dominio.lastIndexOf(".") < dominio.length - 1)) {
      field.style.border = "2px solid green"
      return true;
  } else {
      field.style.border = "2px solid red"
      return false;
  }
};

$(".tel").blur(function () {
  var tel_valor = document.querySelector(".tel").value;

  if (tel_valor.length == 15) {
      $(".tel").css("border", "2px solid green");
      return true;
  } else {
      $(".tel").css("border", "2px solid red");
      return false;
  }
});




