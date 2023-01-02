type NomeCompleto = string;
let firtsNome: string = 'Felipe';
type Idade = string | number;
type User = {
  nome: string,
  idade: number
}
interface UserTwo {
  nome: string;
  idade: number;
}
function resumo(usuario: User){
  return `Olá ${usuario.nome}, você tem ${usuario.idade} anos`;
}
resumo({
  nome: "Felipe",
  idade: 25
})