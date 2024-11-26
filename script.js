async function buscaEndereco(cep){
  try {
var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
var consultaCepConvertida = await consultaCep.json();
if(consultaCepConvertida.erro) {
  throw Error('CEP inválido');
}
var cidade = document.getElementById('cidade');
var logradouro = document.getElementById('endereco');
var estado = document.getElementById('estado');

          console.log(consultaCepConvertida);
          return consultaCepConvertida;
 }
        catch(erro){
          console.log(erro)
        }
        
 }
var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => 
buscaEndereco(cep.value))