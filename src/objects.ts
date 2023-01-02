// Type 
type Order = {
  productId: string,
  price: number
}
type Grande = number | string;
const grande: Grande = 1;

type UserNew = {
  firstName: string;
  age: number;
  password?: string;  // ? torna opcional
  validation: boolean;
  orders?: Order[];
  register(): boolean;
}
const user: UserNew = {
  age: 25,
  firstName: 'Felipe',
  validation: true,
  orders: [{price: 45, productId: 'Feelps'}],
  register() {
    return true
  }
}
 // Tambem torna opcional ao receber
const printLog = (msg?: string) =>{
  return msg;
}
printLog(user.password!)

// Unios 
type Author = {
  books: string[]
}
const author: Author & UserNew = {
  age: 1,
  books: [],
  firstName: "Name teste",
  validation:true,
  orders:[{productId: 'Eita', price: 66}],
  password: '12345678',
  register() {
    return true
  },
}

// Interfaces 
interface UserInterface {
  readonly firstName: string, // Apenas leitura
  email: string
}
const emailUser: UserInterface = {
  email: 'felipe@gmail.com',
  firstName: 'Felipe'
}