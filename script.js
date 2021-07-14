
let i = 0;
let message = 'Se podemos sonhar, também podemos tornar nossos sonhos realidade!';

typing();

function typing(){
  if(i <= message.length){
    document.getElementById('text').innerHTML += message.charAt(i);
    i++;
    setTimeout(typing, 150);
  }

}
// ÁUDIO





