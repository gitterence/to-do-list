import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
import { RiDeleteBin2Line } from "react-icons/ri";


const TodoItem = ({ todo, removeTodo, toggleTodoStatus }) => {
    return (
        <div class='flex items-center my-3 gap-2' role="listitem">
            <div
                class='flex flex-1 items-center cursor-pointer'
                onClick={() => toggleTodoStatus(todo.id)}
                role="button"
                aria-pressed={todo.isCompleted}
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleTodoStatus(todo.id)}
                aria-label={`Mark "${todo.text}" as ${todo.isCompleted ? 'incomplete' : 'complete'}`}
            >
                {todo.isCompleted ? (
                    <div class='w-7 text-blue-600'>
                        <FaRegCheckCircle size={21} />
                    </div>

                ) : (
                    <div class='w-7 text-slate-400'>
                        <FaRegCircle size={21} />
                    </div>

                )}

                <p class={`ml-4 text-lg text-slate-600 break-words min-w-0 flex-1 
                    ${todo.isCompleted ? "line-through opacity-50" : ""}`}>
                    {todo.text}
                </p>
            </div>

            <div
                class='w-3.5 cursor-pointer text-slate-400 hover:text-red-500 transition-colors'
                onClick={() => removeTodo(todo.id)}
                role="button"
                tabIndex={0}
                aria-label={`Delete task "${todo.text}"`}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && removeTodo(todo.id)}
            >
                <RiDeleteBin2Line size={21} />
            </div>
        </div>
    );
};

export default TodoItem;
