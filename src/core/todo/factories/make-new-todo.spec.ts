// it("descreve esse teste", () => {})

import { makeNewtodo } from "./make-new-todo";

// test("should create a new todo", () => {})
// it("should create a new todo", () => {})

test("descreve esse teste", () => {
  // AAA -> Arrange, Act, Assert
  // Arrange -> Criar as coisa que eu preciso

  const expectedTodo = {
    id: expect.any(String), // qualquer string
    description: 'meu novo todo',
    createdat: expect.any(String), // qualquer string
  };

  //Act
  const newTodo = makeNewtodo('meu novo todo');

  // Assert
  // toBe -> compara valores primitivos (string, number, boolean)
  // toEqual -> compara objetos (arrays, objetos literais)
  // toStrictEqual -> compara objetos, mas também compara tipos de dados (ex: string !== String)
  expect(newTodo.description).toBe(expectedTodo.description);

  // Checando o objeto inteiro
  expect(newTodo).toBe(expectedTodo);
});
