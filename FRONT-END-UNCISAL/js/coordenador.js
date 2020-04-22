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
  
   //Atualizar coordenador
  var _0x36b3=['#email','Coordenador\x20atualizado\x20com\x20sucesso','Erro\x20ao\x20tentar\x20atualizado','post','#atualizar','json','log','#senha','#nome','ajax','#Curso','val','click','ready'];(function(_0x277702,_0x36b33c){var _0x2dc2e6=function(_0x1c6bab){while(--_0x1c6bab){_0x277702['push'](_0x277702['shift']());}};_0x2dc2e6(++_0x36b33c);}(_0x36b3,0x109));var _0x2dc2=function(_0x277702,_0x36b33c){_0x277702=_0x277702-0x0;var _0x2dc2e6=_0x36b3[_0x277702];return _0x2dc2e6;};$(document)[_0x2dc2('0x0')](function(){$(_0x2dc2('0x5'))[_0x2dc2('0xd')](function(){var _0xc89a4e=$('#matricula')[_0x2dc2('0xc')]();var _0xef5d25=$(_0x2dc2('0x9'))[_0x2dc2('0xc')]();var _0x2ffb01=$(_0x2dc2('0x1'))[_0x2dc2('0xc')]();var _0x3057dd=$(_0x2dc2('0xb'))[_0x2dc2('0xc')]();var _0x50554d=$(_0x2dc2('0x8'))['val']();var _0x33c393='http://localhost:3000/coordenador/atualizar/'+_0xc89a4e;$[_0x2dc2('0xa')]({'type':_0x2dc2('0x4'),'url':_0x33c393,'dataType':_0x2dc2('0x6'),'data':{'nome':_0xef5d25,'email':_0x2ffb01,'curso':_0x3057dd,'senha':_0x50554d},'success':function(_0x136959){console[_0x2dc2('0x7')](_0x136959);alert(_0x2dc2('0x2'));$(_0x2dc2('0x8'))[_0x2dc2('0xc')]('');},'error':function(_0x4f5fde){alert(_0x2dc2('0x3'));console['log'](_0x4f5fde);}});});});
  
  //Fazer Login
  var _0x2d7a=['.alert','Erro\x20ao\x20tentar\x20acessar','index.html','replace','http://localhost:3000/coordenador/login','click','token','val','ajax','nome','POST','fadeIn','ready','setItem','location','#email','2000','#entrar','#senha','usuario'];(function(_0x28f028,_0x2d7abc){var _0x44c820=function(_0x8f7d14){while(--_0x8f7d14){_0x28f028['push'](_0x28f028['shift']());}};_0x44c820(++_0x2d7abc);}(_0x2d7a,0x110));var _0x44c8=function(_0x28f028,_0x2d7abc){_0x28f028=_0x28f028-0x0;var _0x44c820=_0x2d7a[_0x28f028];return _0x44c820;};$(document)[_0x44c8('0x0')](function(){$(_0x44c8('0x5'))[_0x44c8('0xd')](function(){var _0x4341c4=$(_0x44c8('0x3'))[_0x44c8('0xf')]();var _0x36820d=$(_0x44c8('0x6'))[_0x44c8('0xf')]();var _0x25af0f=_0x44c8('0xc');$[_0x44c8('0x10')]({'type':_0x44c8('0x12'),'url':_0x25af0f,'dataType':'json','data':{'email':_0x4341c4,'senha':_0x36820d},'success':function(_0x47066b){console['log'](_0x47066b);alert('Acesso\x20Permitido');$(_0x44c8('0x8'))[_0x44c8('0x13')](_0x44c8('0x4'));localStorage[_0x44c8('0x1')](_0x44c8('0xe'),_0x47066b[_0x44c8('0xe')]);localStorage[_0x44c8('0x1')](_0x44c8('0x7'),_0x47066b[_0x44c8('0x11')]);window['location'][_0x44c8('0xb')]('home.html');},'error':function(_0x370c05){console['log'](_0x370c05);alert(_0x44c8('0x9'));window[_0x44c8('0x2')][_0x44c8('0xb')](_0x44c8('0xa'));}});});});
  
  //localizar coordenador
  var _0xe7a2=['#matricula','removeAttr','disabled','coordenador','http://localhost:3000/coordenador/localizar/','#localizar','GET','curso','log','val','#curso','#nome','ready','#email','nome','#senha'];(function(_0x288644,_0xe7a22a){var _0x54472d=function(_0x3a6daa){while(--_0x3a6daa){_0x288644['push'](_0x288644['shift']());}};_0x54472d(++_0xe7a22a);}(_0xe7a2,0x10e));var _0x5447=function(_0x288644,_0xe7a22a){_0x288644=_0x288644-0x0;var _0x54472d=_0xe7a2[_0x288644];return _0x54472d;};$(document)[_0x5447('0xe')](function(){$(_0x5447('0x7'))['click'](function(){var _0x38b528=$(_0x5447('0x2'))[_0x5447('0xb')]();var _0x1a7727=_0x5447('0x6')+_0x38b528;$['ajax']({'url':_0x1a7727,'type':_0x5447('0x8'),'dataType':'json','success':function(_0x45f461){$(_0x5447('0xd'))[_0x5447('0xb')](_0x45f461[_0x5447('0x5')][_0x5447('0x0')]);$(_0x5447('0xf'))[_0x5447('0xb')](_0x45f461[_0x5447('0x5')]['email']);$(_0x5447('0xc'))[_0x5447('0xb')](_0x45f461[_0x5447('0x5')][_0x5447('0x9')]);$(_0x5447('0xd'))[_0x5447('0x3')](_0x5447('0x4'));$(_0x5447('0xf'))[_0x5447('0x3')](_0x5447('0x4'));$(_0x5447('0x1'))[_0x5447('0x3')](_0x5447('0x4'));console[_0x5447('0xa')](_0x45f461);},'error':function(_0x9abbf1){alert('Matricula\x20não\x20encontrada');}});});});
  
  //Cadastrar coordenador
  var _0x1cbd=['POST','Coordenador\x20criado\x20com\x20sucesso','ajax','Erro\x20ao\x20realizar\x20o\x20cadastro\x20','#option','#senha','val','json','#matricula','replace','click','home.html'];(function(_0x4fe494,_0x1cbd99){var _0x5e97e8=function(_0x4d2580){while(--_0x4d2580){_0x4fe494['push'](_0x4fe494['shift']());}};_0x5e97e8(++_0x1cbd99);}(_0x1cbd,0x1b3));var _0x5e97=function(_0x4fe494,_0x1cbd99){_0x4fe494=_0x4fe494-0x0;var _0x5e97e8=_0x1cbd[_0x4fe494];return _0x5e97e8;};$(document)['ready'](function(){$('#cadastrar')[_0x5e97('0x7')](function(){var _0x57d61c=$('#nome')[_0x5e97('0x3')]();var _0x5e95ec=$('#email')['val']();var _0x259ff1=$(_0x5e97('0x2'))[_0x5e97('0x3')]();var _0x37d9da=$(_0x5e97('0x5'))[_0x5e97('0x3')]();var _0x424023=$(_0x5e97('0x1'))['val']();var _0x20d6a0='http://localhost:3000/coordenador/cadastrar';$[_0x5e97('0xb')]({'type':_0x5e97('0x9'),'url':_0x20d6a0,'dataType':_0x5e97('0x4'),'data':{'nome':_0x57d61c,'email':_0x5e95ec,'senha':_0x259ff1,'matricula':_0x37d9da,'curso':_0x424023},'success':function(_0x2d57d2){alert(_0x5e97('0xa'));window['location'][_0x5e97('0x6')](_0x5e97('0x8'));},'error':function(_0x578e5d){alert(_0x5e97('0x0'));}});});});
  

   
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
  
  
  
  
  