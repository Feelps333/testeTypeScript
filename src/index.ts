// Tipagem em variaveis Basicas
let age: number = 25;
let firstName: string = 'Felipe';
const isValid: boolean = true;
let idk: any = 5;

// Tipagem em Arrays 
const listNumbers: number[] = [1, 3, 5, 8]
const booolens: boolean[] = [true, false]
const namesOne: string[] = ['Felipe', 'Silva']

// Tupla 
const person: [number , string] = [25, 'Felipe']

// Lista de Tuplas 
const people: [number, string][] = []

// Intersections 
const productId: string | number = 5

// Enum 
enum Direction {
  Up = 1,
  Down = 2
}
const direction = Direction.Up

// Type Assertions
const productName: any = 'boné'

let itemId = <string>productName
