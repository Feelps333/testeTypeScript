// Interface em functions
interface MathFunc {
  (x: number, y: number): number
}

// Usuando a interface MathFunc na Function
const sub: MathFunc = (x: number, y: number): number => {
  return x - y;
}

// Chamando a function
const subValue = sub(10, 5)

// Functions com Retorno Definido
const sum = (x: number, y: number): number => {
  return x + y;
}

// Chamando a function
const value = sum(25, 10)

// Functions com Retorno Void
const log = (msg: string): void => {
  console.log(msg)
}
