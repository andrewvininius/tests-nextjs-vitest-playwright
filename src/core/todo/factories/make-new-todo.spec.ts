// it("descreve esse teste", () => {})

import { makeNewtodo } from "./make-new-todo";

// test("should create a new todo", () => {})
// it("should create a new todo", () => {})

test("descreve esse teste", () => {
  // AAA -> Arrange, Act, Assert
  // Arrange -> Criar as coisa que eu preciso

  const expectedTodo = {
    id: "any-id",
    description: 'meu novo todo',
    createdat: new Date().toISOString(),
  };

  //Act
  const newTodo = makeNewtodo('meu novo todo');

  // Assert
  expect(newTodo.description).toBe(expectedTodo.description);
});
