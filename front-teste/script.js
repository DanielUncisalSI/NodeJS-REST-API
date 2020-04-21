//Excluir usuario
$(document).ready(function () {
    $("#excluir").click(function () {
      var matricula = $("#matriculaD").val();
      var excluir = "http://localhost:3000/coordenador/excluir/"+matricula;
                
      $.ajax({
        type: "POST",
        url: excluir,
        dataType: "json",
        data: { "matricula": matricula},
        success: function (data) {
          console.log(data);
          alert("Coordenador excluido com sucesso!")
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
      var curso =   $("#cursoE").val();
      var atualizar = "http://localhost:3000/coordenador/atualizar";             
      $.ajax({
        type: "post",
        url: atualizar,
        dataType: "json",
        data: { 
            "matricula": matricula,
            "nome": nome,
            "email": email,
            "curso": curso},
        success: function (data) {
        console.log(data);
        alert("Coordenador atualizado com sucesso")
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
      var email = $("#emailA").val();
      var senha =   $("#senhaA").val();
      var login = "http://localhost:3000/coordenador/login";
      $.ajax({
        type: "POST",
        url: login,
        dataType: "json",
        data: { "email": email,"senha": senha},
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
  

//localizar
 $(document).ready(function(){
    $("#localizar").click(function(){
      var mat= $("#mat").val();
      var urlLocalizar = "http://localhost:3000/coordenador/localizar/"+ mat;
      $.ajax({
        url : urlLocalizar,
        type : "GET",
        dataType : "json",
        success : function(data){
         $("#matriculaL").val(data.coordenador.matricula);
         $("#nomeL").val(data.coordenador.nome);
         $("#emailL").val(data.coordenador.email); 
         $("#cursoL").val(data.coordenador.curso); 
         console.log(data) 
        },
        error: function (erro) {
          console.log(erro)
        }
      })
    })
  })

//Cadastrar
$(document).ready(function () {
    $("#cadastrar").click(function () {
      var nome =   $("#nomeC").val();
      var email =   $("#emailC").val();
      var senha =   $("#senhaC").val();
      var matricula = $("#matriculaC").val();
      var curso =   $("#cursoC").val();
      nome, email, senha, matricula, curso
      var cadastrar = "http://localhost:3000/coordenador/cadastrar";
      $.ajax({
        type: "POST",
        url: cadastrar,
        dataType: "json",
        data: { 
          "nome": nome, "email": email, "senha": senha, 
          "matricula": matricula, "curso":curso},
        success: function (data) {
          console.log(data);
          alert("Coordenador criado com sucesso")
        },
        error: function (erro) {
          console.log(erro)
  
        }
      })
    })
  })
  
  


    //listar os produtos
    /*$(document).ready(function () {
      $("#listar").click(function () {
        var listar = "http://localhost:3000/usuarios/listar";
        var conteudo = $('.conteudo');
        $(".pai").remove();
        $.ajax({
          url: listar,
          type: "GET",
          dataType: "json",
          
          success: function (data) {
            $.each(data, function(index, item){
             for(var i = 0; i<item.length; i++){   
              conteudo.append(item[i].matricula + " - " +item[i].nome + " - "+item[i].email+" - "+ item[i].ativo + '<br>')
             }
              })
          },
          error: function (erro) {
            console.log(erro)
          }
        });
      })
    })*/
   
    function criarTabela(){
      var corpoTabela = $('#corpo');
      var listar = "http://localhost:3000/coordenador/listar";
      //$("#corpo").remove();
      $.ajax({
        url : listar,
        type : "GET",
        dataType : "json",
        success:(function(data){
          $.each(data, function(index, item){
            for(var i=0; i<item.length; i++){
              var row = document.createElement('tr');
              row.innerHTML = '<td>'+item[i].matricula+'</td>' +  '<td>'+item[i].nome+'</td>' + '<td>'+item[i].email+'</td>'+ '<td>'+item[i].curso+'</td>';
              corpoTabela.append(row);
            }
          })
        })
        })
      }

  
  