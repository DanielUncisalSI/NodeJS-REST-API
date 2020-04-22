

function verificaToken(){
  if (localStorage.getItem("token")){
    console.log("Acesso permitido")
    }else{
    alert("Voce precisa está logado");
    window.location.replace("index.html");
  }
}

//remove o localStorage 
$(document).ready(function () {
  $("#sair").click(function () {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    alert("Saindo do sistema...!")
  })
  })

  //mostrar usuario logado:
  $(document).ready(function(){
   if(localStorage.getItem("usuario")){ 
   document.getElementById("usuario").innerHTML = "Usuário: "+localStorage.getItem("usuario");
   }
  })


  $(".drop")
  .mouseover(function() {
  $(".dropdown").show(300);
});
$(".drop")
  .mouseleave(function() {
  $(".dropdown").hide(300);     
});