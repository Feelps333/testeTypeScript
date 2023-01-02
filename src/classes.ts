// Tipagem em Classes

class Person {
  readonly id: number; // Não permite altera fora da classe
  protected name: string; // Não e possivel acessa fora da classe
  private age: number;  // So pode se acessada dentro da classe

  constructor(id: number, name: string, age: number){
    this.id = id;
    this.name = name;
    this.age = age;
  }
  sayMyName(): string {
    return this.name
  }
}
const personOne = new Person(1, "Felipe", 25)