//verifica se não está logado
var _0x23c7=['replace','token','Acesso\x20negado,\x20faça\x20logoff\x20antes','home.html'];(function(_0x3a0203,_0x23c70e){var _0x1843cf=function(_0x4fff83){while(--_0x4fff83){_0x3a0203['push'](_0x3a0203['shift']());}};_0x1843cf(++_0x23c70e);}(_0x23c7,0x73));var _0x1843=function(_0x3a0203,_0x23c70e){_0x3a0203=_0x3a0203-0x0;var _0x1843cf=_0x23c7[_0x3a0203];return _0x1843cf;};function verificaLogoff(){if(localStorage['getItem'](_0x1843('0x2'))){alert(_0x1843('0x3'));window['location'][_0x1843('0x1')](_0x1843('0x0'));}}

//verifica token
var _0x2e17=['index.html','Acesso\x20permitido','token','log'];(function(_0x5b2869,_0x2e171b){var _0x2e29f5=function(_0x587d73){while(--_0x587d73){_0x5b2869['push'](_0x5b2869['shift']());}};_0x2e29f5(++_0x2e171b);}(_0x2e17,0x1e3));var _0x2e29=function(_0x5b2869,_0x2e171b){_0x5b2869=_0x5b2869-0x0;var _0x2e29f5=_0x2e17[_0x5b2869];return _0x2e29f5;};function verificaToken(){if(localStorage['getItem'](_0x2e29('0x3'))){console[_0x2e29('0x0')](_0x2e29('0x2'));}else{alert('Acesso negado, voce\x20precisa\x20está\x20logado');window['location']['replace'](_0x2e29('0x1'));}}

//remove o localStorage 
var _0x3829=['usuario','ready','token','removeItem','click','#sair','Saindo\x20do\x20sistema...!'];(function(_0x55a885,_0x38294e){var _0x284903=function(_0x196418){while(--_0x196418){_0x55a885['push'](_0x55a885['shift']());}};_0x284903(++_0x38294e);}(_0x3829,0x1cc));var _0x2849=function(_0x55a885,_0x38294e){_0x55a885=_0x55a885-0x0;var _0x284903=_0x3829[_0x55a885];return _0x284903;};$(document)[_0x2849('0x3')](function(){$(_0x2849('0x0'))[_0x2849('0x6')](function(){localStorage['removeItem'](_0x2849('0x4'));localStorage[_0x2849('0x5')](_0x2849('0x2'));alert(_0x2849('0x1'));});});

 //mostrar usuario logado:
var _0x19f9=['getItem','usuario','getElementById','Usuário:\x20'];(function(_0x3ca792,_0x19f980){var _0xefa8bb=function(_0x5b1626){while(--_0x5b1626){_0x3ca792['push'](_0x3ca792['shift']());}};_0xefa8bb(++_0x19f980);}(_0x19f9,0x163));var _0xefa8=function(_0x3ca792,_0x19f980){_0x3ca792=_0x3ca792-0x0;var _0xefa8bb=_0x19f9[_0x3ca792];return _0xefa8bb;};$(document)['ready'](function(){if(localStorage[_0xefa8('0x1')](_0xefa8('0x2'))){document[_0xefa8('0x3')](_0xefa8('0x2'))['innerText']=_0xefa8('0x0')+localStorage[_0xefa8('0x1')](_0xefa8('0x2'));}});


  $(".drop")
  .mouseover(function() {
  $(".dropdown").show(300);
});
$(".drop")
  .mouseleave(function() {
  $(".dropdown").hide(300);     
});