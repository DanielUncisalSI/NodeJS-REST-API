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
          $("#token").val(data.token)
          alert("Acesso Permitido")
        },
        error: function (erro) {
          console.log(erro)
          alert(erro)
  
        }
      })
    })
  })