var numeroSecreto = 63;
var chute;

while(chute != numeroSecreto){
  chute = prompt('digite um numero entre 0 e 100');
  if(chute == numeroSecreto){
  alert('acertou!')
}else if( chute < numeroSecreto ){
  alert('chute menor que o numero')
}else if(chute > numeroSecreto){
  alert('chute maior que o numero')
}
}