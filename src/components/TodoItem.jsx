import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
import { RiDeleteBin2Line } from "react-icons/ri";


const TodoItem = ({ id, taskName, isCompleted, removeTodo, toggleTodoStatus }) => {
    return (
        <div class='flex items-center my-3 gap-2' role="listitem">
            <div
                class='flex flex-1 items-center cursor-pointer'
                onClick={() => toggleTodoStatus(id)}
                role="button"
                aria-pressed={isCompleted}
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleTodoStatus(id)}
                aria-label={`Mark "${taskName}" as ${isCompleted ? 'incomplete' : 'complete'}`}
            >
                {isCompleted ? (
                    <div class='w-7 text-blue-600'>
                        <FaRegCheckCircle size={21} />
                    </div>

                ) : (
                    <div class='w-7 text-slate-400'>
                        <FaRegCircle size={21} />
                    </div>

                )}

                <p class={`ml-4 text-lg text-slate-600 
                    ${isCompleted ? "line-through opacity-50" : ""}`}>
                    {taskName}
                </p>
            </div>

            <div
                class='w-3.5 cursor-pointer text-slate-400 hover:text-red-500 transition-colors'
                onClick={() => removeTodo(id)}
                role="button"
                tabIndex={0}
                aria-label={`Delete task "${taskName}"`}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && removeTodo(id)}
            >
                <RiDeleteBin2Line size={21} />
            </div>
        </div>
    );
};

export default TodoItem;
