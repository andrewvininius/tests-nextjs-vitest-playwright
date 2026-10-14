import * as sanitizeStrMod from '@/Utils/sanitize-str'
import { makeValidatedTodo } from "./make-validated-todo";

describe('makeValidatedTodo (unit)', () =>{
    test('deve chamar a função sanitizeStr com o valor correto', () => {
        // Mockar(mock) => Subistituir alguma coisa temporariamente
        //Arrange
        const description = 'abcd';
        const sanitizeStrSpy = vi.spyOn()
        // vi.unmock;
        // vi.spyOn;
        // vi.stubGlobal;
        // vi.stubEnv
        // vi.mocked

        // Act
        makeValidatedTodo(description)

        //Assert
        expect(asdf).t;
    });

    test('deve chamar a validateTodoDescription com o retorne de sanitizeStr', () => {});

    test('deve chamar makeNewTodo se validateTodoDescription retornou sucesso', () => {});

    test('deve chamar retonar validateTodoDescription.error se a validaçao falhou', () => {});


});