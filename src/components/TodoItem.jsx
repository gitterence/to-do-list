import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
import { RiDeleteBin2Line } from "react-icons/ri";


const TodoItem = ({ id, taskName, isCompleted, removeTodo, toggleTodoStatus }) => {
    return (
        <div class='flex items-center my-3 gap-2'>
            <div class='flex flex-1 items-center cursor-pointer' onClick={() => toggleTodoStatus(id)}>
                {isCompleted ? (
                    <div class='w-7'>
                        <FaRegCheckCircle size={21} />
                    </div>

                ) : (
                    <div class='w-7'>
                        <FaRegCircle size={21} />
                    </div>

                )}

                <p class={`ml-4 text-lg text-slate-600 
                    ${isCompleted ? "line-through" : ""}`}>
                    {taskName}
                </p>
            </div>

            <div class='w-3.5 cursor-pointer'>
                <RiDeleteBin2Line size={21} onClick={() => removeTodo(id)} />
            </div>
        </div>
    );
};

export default TodoItem;
