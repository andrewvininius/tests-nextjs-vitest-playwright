import { validateTodoDescription } from "./validate-todo-description";

describe("validataTodoDescription (unit)", () => {
  test("deve retornar erros quando a descriçao tem menos que 4 caracters", () => {
    const description = "abc";
    const result = validateTodoDescription(description);

    expect(result.errors).toStrictEqual([
      "Descrição precisa ter mais de 3 caracteres",
    ]);
    expect(result.success).toBe(false);
  });

  test("deve retornar sucesso quando a descriçao tem mais de 3 caracters", () => {
    const description = "abcd";
    const result = validateTodoDescription(description);

    expect(result.errors).toStrictEqual([]);
    expect(result.success).toBe(true);
  });
});
