import { sanitizeStr } from "./sanitize-str";

describe("sanitizeStr (unit)",() =>{
    test('retorna uma string vazia quando recebe um valor falso', () => {
        // @ts-expect-error testadando a funçao sem parâmetros
        expect(sanitizeStr()).toBe('');
    });
    test('retorna uma string vazia quando recebe um valor que Não é uma string', () => {
        // @ts-expect-error testadando a funçao com tipagem incorreta
        expect(sanitizeStr(123)).toBe('');
    });
    test('Garante o trim da string enviada', () => {
        expect(sanitizeStr('   a  ')).toBe('a');
    });

    test("Garante a string é normalizada com NFC",() => {
        const original = "e\u0301";
        const expected = 'é';
        expect(expected).toBe(sanitizeStr(original));
    });
});