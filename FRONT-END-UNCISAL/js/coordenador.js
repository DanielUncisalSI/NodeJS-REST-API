//Excluir coordenador
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
  
  
  //Editar coordenador
  $(document).ready(function () {
    $("#atualizar").click(function () {
      var matricula = $("#matE").val();
      var nome =   $("#nomeE").val();
      var email =   $("#emailE").val();
      var curso =   $("#cursoE").val();
      var atualizar = "http://localhost:3000/coordenador/atualizar/"+matricula;             
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
  var _0x2d7a=['.alert','Erro\x20ao\x20tentar\x20acessar','index.html','replace','http://localhost:3000/coordenador/login','click','token','val','ajax','nome','POST','fadeIn','ready','setItem','location','#email','2000','#entrar','#senha','usuario'];(function(_0x28f028,_0x2d7abc){var _0x44c820=function(_0x8f7d14){while(--_0x8f7d14){_0x28f028['push'](_0x28f028['shift']());}};_0x44c820(++_0x2d7abc);}(_0x2d7a,0x110));var _0x44c8=function(_0x28f028,_0x2d7abc){_0x28f028=_0x28f028-0x0;var _0x44c820=_0x2d7a[_0x28f028];return _0x44c820;};$(document)[_0x44c8('0x0')](function(){$(_0x44c8('0x5'))[_0x44c8('0xd')](function(){var _0x4341c4=$(_0x44c8('0x3'))[_0x44c8('0xf')]();var _0x36820d=$(_0x44c8('0x6'))[_0x44c8('0xf')]();var _0x25af0f=_0x44c8('0xc');$[_0x44c8('0x10')]({'type':_0x44c8('0x12'),'url':_0x25af0f,'dataType':'json','data':{'email':_0x4341c4,'senha':_0x36820d},'success':function(_0x47066b){console['log'](_0x47066b);alert('Acesso\x20Permitido');$(_0x44c8('0x8'))[_0x44c8('0x13')](_0x44c8('0x4'));localStorage[_0x44c8('0x1')](_0x44c8('0xe'),_0x47066b[_0x44c8('0xe')]);localStorage[_0x44c8('0x1')](_0x44c8('0x7'),_0x47066b[_0x44c8('0x11')]);window['location'][_0x44c8('0xb')]('home.html');},'error':function(_0x370c05){console['log'](_0x370c05);alert(_0x44c8('0x9'));window[_0x44c8('0x2')][_0x44c8('0xb')](_0x44c8('0xa'));}});});});
  
  
  //localizar coordenador
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
  
  //Cadastrar coordenador
  var _0x1cbd=['POST','Coordenador\x20criado\x20com\x20sucesso','ajax','Erro\x20ao\x20realizar\x20o\x20cadastro\x20','#option','#senha','val','json','#matricula','replace','click','home.html'];(function(_0x4fe494,_0x1cbd99){var _0x5e97e8=function(_0x4d2580){while(--_0x4d2580){_0x4fe494['push'](_0x4fe494['shift']());}};_0x5e97e8(++_0x1cbd99);}(_0x1cbd,0x1b3));var _0x5e97=function(_0x4fe494,_0x1cbd99){_0x4fe494=_0x4fe494-0x0;var _0x5e97e8=_0x1cbd[_0x4fe494];return _0x5e97e8;};$(document)['ready'](function(){$('#cadastrar')[_0x5e97('0x7')](function(){var _0x57d61c=$('#nome')[_0x5e97('0x3')]();var _0x5e95ec=$('#email')['val']();var _0x259ff1=$(_0x5e97('0x2'))[_0x5e97('0x3')]();var _0x37d9da=$(_0x5e97('0x5'))[_0x5e97('0x3')]();var _0x424023=$(_0x5e97('0x1'))['val']();var _0x20d6a0='http://localhost:3000/coordenador/cadastrar';$[_0x5e97('0xb')]({'type':_0x5e97('0x9'),'url':_0x20d6a0,'dataType':_0x5e97('0x4'),'data':{'nome':_0x57d61c,'email':_0x5e95ec,'senha':_0x259ff1,'matricula':_0x37d9da,'curso':_0x424023},'success':function(_0x2d57d2){alert(_0x5e97('0xa'));window['location'][_0x5e97('0x6')](_0x5e97('0x8'));},'error':function(_0x578e5d){alert(_0x5e97('0x0'));}});});});
  
  
  
  
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
  
  
  
  
  