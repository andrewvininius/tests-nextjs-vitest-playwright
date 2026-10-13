import { validateTodoDescription } from "./validate-todo-description";

describe('validataTodoDescription (unit)', () => {
    test('deve retornar erros quando a descriçao tem menos que 4 caracters', () => {
        const description = 'abc';
        expect(validateTodoDescription(description).errors).toStrictEqual([
            "Descrição precisa ter mais de 3 caracteres",
        ]);
    });

    test('deve retornar sucesso quando a descriçao tem mais de 3 caracters', () => {

    });

});