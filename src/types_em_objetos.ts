function resumo(usuario: {nome: string, idade: number}){
  return `Olá ${usuario.nome}, tudo bem? Você tem ${usuario.idade} anos`;
}

let u = {
  nome: 'Felipe',
  idade: 25
}
console.log(resumo(u))