

$(document).ready(function () {
    $("#acessar").click(function () {
      var matricula = $("#matricula").val();
      var senha =   $("#senha").val();
      
      var login = "http://localhost:3000/usuarios/login";
      $.ajax({
        type: "POST",
        url: login,
        dataType: "json",
        data: { "matricula": matricula, "senha": senha},
        success: function (data) {
          console.log(data);
             // $("#token").val(data.token)
          alert("Acesso Permitido")
          //window.location.replace("cadastro.html");
          location.assign("cadastro.html")
          //window.location.href="cadastro.html";
        },
        error: function (erro) {
          console.log(erro)
          window.location.replace = "C:\NodeJS-REST-API\login_cadastro\index.html";
          alert("Erro ao tentar se conectar")
  
        }
      })
    })
  })