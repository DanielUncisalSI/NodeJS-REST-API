//Excluir usuario
$(document).ready(function () {
    $("#excluir").click(function () {
      var matricula = $("#matriculaD").val();
      var excluir = "http://localhost:3000/usuarios/excluir";
      $.ajax({
        type: "post",
        url: excluir,
        dataType: "json",
        data: { "matricula": matricula},
        success: function (data) {
          console.log(data);
          alert("Usuario excluido com sucesso!")
        },
        error: function (erro) {
          console.log(erro)
          alert(erro)
  
        }
      })
    })
  })


//Editar Usuario
$(document).ready(function () {
    $("#atualizar").click(function () {
      var matricula = $("#matE").val();
      var nome =   $("#nomeE").val();
      var email =   $("#emailE").val();
      var id_curso =   $("#id_cursoE").val();
      var ativo =   $("#ativoE").val();
      var atualizar = "http://localhost:3000/usuarios/atualizar";
                   
      $.ajax({
        type: "POST",
        url: atualizar,
        dataType: "json",
        data: { 
            "matricula": matricula,
            "nome": nome,
            "email": email,
            "id_curso": id_curso,
            "ativo": ativo},
        success: function (data) {
          console.log(data);
          alert("Usuario atualizado com sucesso")
        },
        error: function (erro) {
          console.log(erro)
  
        }
      })
    })
  })
  

//Fazer Login
$(document).ready(function () {
    $("#acessar").click(function () {
      var matricula = $("#matriculaA").val();
      var senha =   $("#senhaA").val();
      var login = "http://localhost:3000/usuarios/login";
      $.ajax({
        type: "POST",
        url: login,
        dataType: "json",
        data: { "matricula": matricula,"senha": senha},
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
  

//localizar produto
 $(document).ready(function(){
    $("#localizar").click(function(){
      var mat= $("#mat").val();
      var urlLocalizaUsuario = "http://localhost:3000/usuarios/localizar/"+ mat;
      $.ajax({
        url : urlLocalizaUsuario,
        type : "GET",
        dataType : "json",
        success : function(data){
         $("#matriculaL").val(data.usuario.matricula);
         $("#nomeL").val(data.usuario.nome);
         $("#emailL").val(data.usuario.email); 
         $("#id_cursoL").val(data.usuario.id_curso); 
         $("#ativoL").val(data.usuario.ativo);
         console.log(data) 
        },
        error: function (erro) {
          console.log(erro)
        }
      })
    })
  })

//Cadastrar Usuario
$(document).ready(function () {
    $("#cadastrar").click(function () {
      var matricula = $("#matriculaC").val();
      var nome =   $("#nomeC").val();
      var email =   $("#emailC").val();
      var senha =   $("#senhaC").val();
      var id_curso =   $("#id_cursoC").val();
      var ativo =   $("#ativoC").val();
      var cadastrar = "http://localhost:3000/usuarios/cadastrar";
      $.ajax({
        type: "POST",
        url: cadastrar,
        dataType: "json",
        data: { 
            "matricula": matricula, "nome": nome,
            "email": email, "senha": senha,
            "id_curso": id_curso, "ativo": ativo},
        success: function (data) {
          console.log(data);
          alert("Usuario criado com sucesso")
        },
        error: function (erro) {
          console.log(erro)
  
        }
      })
    })
  })
  
  
  //teste lista os produtos
$(document).ready(function(){
  $("#listara").click(function(){
    $.each({ name: "John", lang: "JS" }, function( k, v ) {
      alert( "Key: " + k + ", Value: " + v );
    });})})

    //listar os produtos
  $(document).ready(function () {
    $("#listar").click(function () {
      var listar = "http://localhost:3000/usuarios/listar";
      //var elementoPai = $(".pai").clone();
      //$(".pai").remove();
      $.ajax({
        url: listar,
        type: "GET",
        dataType: "json",
        success: function (data) {
          $.each(data , function(key, value){
           $('.resultado').append(value.quantidade);
          })
          console.log(data);
        },
        error: function (erro) {
          console.log(erro)
        }
      });
    })
  })
  
 
  
  
  