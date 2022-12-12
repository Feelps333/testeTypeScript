let nome: string = 'felipe'
let idade: number = 25
let n1 = 90
let programado: boolean = true
let idades: number[] = [25, 35, 20]
let nomes: string[] = ['Felipe', 'Silva', 'Franca']
let nomes2: any = ['Silva', 'Antonio', 'Feelps']

function firstLetterUpperCase(name: string): string {
  let firtsLetter = name.charAt(0).toUpperCase();
  return firtsLetter+name.substring(1);
}
let res: string = firstLetterUpperCase('felipe')
console.log(res)