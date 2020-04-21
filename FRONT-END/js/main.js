function verificaToken(){
  if (localStorage.getItem("token")){
    console.log("Acesso permitido")
    }else{
    alert("Voce precisa está logado");
  window.location.replace("C:/NodeJS-REST-API/FRONT-END/index.html");
  }
}

  function removeToken(){
    localStorage.removeItem("token");
    alert("Saindo do sistema...!")
    window.location.replace("C:/NodeJS-REST-API/FRONT-END/index.html");
  }

$(".drop")
  .mouseover(function() {
  $(".dropdown").show(300);
});
$(".drop")
  .mouseleave(function() {
  $(".dropdown").hide(300);     
});

$(".drop")
  .mouseover(function() {
  $(".dropdown").show(300);
});
$(".drop")
  .mouseleave(function() {
  $(".dropdown").hide(300);     
});