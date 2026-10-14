import { sanitizeStr } from "@/Utils/sanitize-str";
import { validateTodoDescription } from "../schemas/validate-todo-description";
import { makeNewtodo } from "./make-new-todo";
import { Todo } from "../schemas/todo.contract";


type InvalidTodo = {
    success: false;
    errors: string[];
};

type ValidTodo = {
    success: true;
    data: Todo;
};

type makeValidatedTodo = ValidTodo |  InvalidTodo

export function makeValidatedTodo(description: string): makeValidatedTodo{
    const cleanDescription = sanitizeStr(description);
    const validatedDescription = validateTodoDescription(cleanDescription)

    if(validatedDescription.success) {
        return{
            success: true,
            data: makeNewtodo(cleanDescription),
        };
    }

    return {
        success: false,
        errors: validatedDescription.errors,
    }
};