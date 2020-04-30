//Excluir coordenador
//$(document).ready(function () {
  //$("#excluir").click(function () {
    function excluir(){
    var matricula = $("#matricula").val();
    url = window.location.href
    var parametro = url.split("=")[1]
    alert(parametro)    
    //var excluir = "http://localhost:3000/coordenador/excluir/" + matricula;
    //$.ajax({
     // type: "DELETE",
     // url: excluir,
     // dataType: "json",
     // data: { "matricula": matricula },
     // success: function (data) {
       // console.log(data);
       // alert("Coordenador excluido com sucesso!")
     // },
     // error: function (erro) {
       // console.log(erro)
        //alert(erro)
    //  }
    //})
  }

//Atualizar coordenador
$(document).ready(function () {
  $("#atualizar").click(function () {
    var matricula = $("#matricula").val();
    var nome = $("#nome").val();
    var email = $("#email").val();
    var curso = $("#Curso").val();
    var senha = $("#senha").val();
    var atualizar = "http://localhost:3000/coordenador/atualizar/" + matricula;

    event.preventDefault();
    $.ajax({
      type: "PATCH",
      url: atualizar,
      dataType: "json",
      data: {
        "nome": nome,
        "email": email,
        "curso": curso,
        "senha": senha
      },
      success: function (data) {
        console.log(data);
        alert("Registro atualizado com sucesso")
        $("#senha").val("");
        $("#nome").attr("disabled");
        $("#email").attr("disabled");
        $("#senha").attr("disabled");
        $("#atualizar").attr("disabled");
        window.location.replace("listarCoordenador.html");
      },
      error: function (erro) {
        alert("Erro ao tentar atualizar o registro")
        console.log(erro)
      }
    })
  })
})

//Fazer Login
$(document).ready(function () {
  $("#entrar").click(function () {
    var email = $("#email").val();
    var senha = $("#senha").val();
    var login = "http://localhost:3000/coordenador/login";

    event.preventDefault();
    $.ajax({
      type: "POST",
      url: login,
      dataType: "json",
      data: { "email": email, "senha": senha },
      success: function (data) {
        console.log(data);
        alert("Acesso Permitido");
        localStorage.setItem("token", data.token);
        localStorage.setItem("usuario", data.nome);
        window.location.replace("home.html");
      },
      error: function (erro) {
        console.log(erro)
        alert("Erro ao tentar acessar")
        window.location.replace("index.html");
      }
    })
  })
})


//localizar coordenador
//$(document).ready(function(){
//$("#localizar").click(function(){
function localizar() {
  url = window.location.href
  var parametro = url.split("=")[1]
  var urlLocalizar = "http://localhost:3000/coordenador/localizar/" + parametro;
  $.ajax({
    url: urlLocalizar,
    type: "GET",
    dataType: "json",
    success: function (data) {
      $("#nome").val(data.coordenador.nome);
      $("#email").val(data.coordenador.email);
      $("#curso").val(data.coordenador.curso);
      $("#matricula").val(data.coordenador.matricula);

      console.log(data)
    },
    error: function (erro) {
      alert("Matricula não encontrada")

    }
  })
}
//})
//})

//Cadastrar coordenador
$(document).ready(function () {
  $("#cadastrar").click(function () {
    var nome = $("#nome").val();
    var email = $("#email").val();
    var senha = $("#senha").val();
    var matricula = $("#matricula").val();
    var curso = $("#option").val();
    var cadastrar = "http://localhost:3000/coordenador/cadastrar";
    event.preventDefault();
    $.ajax({
      type: "POST",
      url: cadastrar,
      dataType: "json",
      data: {
        "nome": nome, "email": email, "senha": senha,
        "matricula": matricula, "curso": curso
      },
      success: function (data) {
        alert("Operação realizado com sucesso ")
        console.log(data)
        window.location.replace("listarCoordenador.html");
      },
      error: function (erro) {
        alert("Erro ao realizar a operação ")
        console.log(erro)
      }
    })
  })
})


function listar() {
  var corpoTabela = $('#corpo');
  var listar = "http://localhost:3000/coordenador/listar";
  //$("#corpo").remove();
  $.ajax({
    url: listar,
    type: "GET",
    dataType: "json",
    success: (function (data) {
      $.each(data, function (index, item) {
        for (var i = 0; i < item.length; i++) {
          var row = document.createElement('tr');

          row.innerHTML = '<td>' + item[i].matricula + '</td>' + '<td>' + item[i].nome + '</td>' + '<td>' + item[i].email + '</td>' + '<td>' + item[i].curso + '</td>' +
            '<td>'
             + '<a href="editarCoordenador.html?id=' + item[i].matricula + '"' + ' >Editar</a>' + '   '
             + '<a href="listarCoordenador.html?cod=' +item[i].matricula + '"' +'+ onclick="excluir()" >Excluir</a>' + '</td>';
          corpoTabela.append(row);

        }
      })
    })
  })
}

//cpf = 080 598 524 77
  // VANDERLEIA MARIA ALEXANDRE
  //13/08/1986
  //ednaldofreire62@gmail.com 


