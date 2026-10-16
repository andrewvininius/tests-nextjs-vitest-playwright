import * as sanitizeStrMod from "@/Utils/sanitize-str";
import { makeValidatedTodo } from "./make-validated-todo";

describe("makeValidatedTodo (unit)", () => {
  test("deve chamar a função sanitizeStr com o valor correto", () => {
    // Mockar(mock) => Subistituir alguma coisa temporariamente

    //Arrange
    const description = "abcd";
    const sanitizeStrSpy = vi
      .spyOn(sanitizeStrMod, "sanitizeStr")
      .mockReturnValue(description);
    // .mockImplementation((s: string) => {
    //     console.log('Eu sou FAKE', s)
    //     return 'e vou retornar o'
    // });

    // vi.unmock;
    // vi.spyOn;
    // vi.stubGlobal;
    // vi.stubEnv
    // vi.mocked

    // Act
    makeValidatedTodo(description);

    //Assert

    // test qu estao passando ('abcd') pq ('abcde') flha pq nao e o se pede
    // expect(sanitizeStrSpy).toHaveBeenCalledExactlyOnceWith('abcd');
    expect(sanitizeStrSpy).toHaveBeenCalledExactlyOnceWith(description);
    expect(sanitizeStrSpy).toHaveBeenCalledTimes(1);
    expect(sanitizeStrSpy).toHaveBeenCalledWith(description);
  });

  // test('deve chamar a validateTodoDescription com o retorne de sanitizeStr', () => {});

  // test('deve chamar makeNewTodo se validateTodoDescription retornou sucesso', () => {});

  // test('deve chamar retonar validateTodoDescription.error se a validaçao falhou', () => {});

  // const cumprimentar = () => {
  //   return "Olá";
  // };

  // test ('verifica o retorno de texto', () =>{
  //   expect(cumprimentar()).toBe('Olá');
  // });


  // test("verifica o retorno de texto", () => {
  //   const cumprimentar = () => {
  //     return "Olá";
  //   };

  //   expect(cumprimentar()).toBe("Olá");
  // });

  // test('verfica o nome retorna texto limpo', () =>{
  //   const formato = () => {
  //     return " maria ".trim()
  //   }
  //   expect(formato()).toBe("maria")
  // });
});
