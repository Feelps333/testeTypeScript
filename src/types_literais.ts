// exemplo 1

function mostarTexto (texto: string, alinhamento: 'left' | 'right' | 'center'){
  return `<div style="text-align: ${alinhamento}">${texto}</div>`;
}
mostarTexto('Felipe', 'left')
mostarTexto('Felipe', 'right')
mostarTexto('Felipe', 'center') 

// exemplo 2

type verdadeiroOuFalso = true | false;

function temNome(nome: string): verdadeiroOuFalso{
  if(nome !== ''){
    return true;
  }else{
    return false;
  }
}

// exemplo 3

type opcoes = {
  width: number,
  height: number
}
function config(props: opcoes|'auto'){

}
config({width: 100, height: 200});
config('auto')
// config('automatico') exemplo nao funcional