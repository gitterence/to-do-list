import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";
import { useState } from "react";


const TodoItem = ({ todo, removeTodo, toggleTodoStatus }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className='group flex items-center my-2 p-4 gap-4 rounded-2xl cursor-pointer hover:-translate-y-0.5 hover:shadow-lg hover:shadow-sky-500/20 border border-transparent hover:border-white/80 hover:bg-white/20 transition-all duration-300' role="listitem">
            <div className='flex flex-1 items-start min-w-0'>
                {/* Checkbox Area */}
                <div
                    className='cursor-pointer pt-1 flex-shrink-0'
                    onClick={() => toggleTodoStatus(todo.id)}
                    role="button"
                    aria-pressed={todo.isCompleted}
                    tabIndex={0}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleTodoStatus(todo.id)}
                    aria-label={`Mark "${todo.text}" as ${todo.isCompleted ? 'incomplete' : 'complete'}`}
                >
                    {todo.isCompleted ? (
                        <div className='w-7 text-teal-500 drop-shadow-sm'>
                            <FaRegCheckCircle size={21} />
                        </div>

                    ) : (
                        <div className='w-7 text-slate-300 hover:text-slate-400 transition-colors'>
                            <FaRegCircle size={21} />
                        </div>
                    )}
                </div>

                {/* Text Area */}
                <div 
                    className='flex-1 cursor-pointer ml-4 min-w-0'
                    onClick={() => setIsExpanded(!isExpanded)}
                    role="button"
                    tabIndex={0}
                    aria-expanded={isExpanded}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setIsExpanded(!isExpanded)}
                >
                    <p className={`text-lg text-slate-700 break-words min-w-0 cursor-pointer
                        ${todo.isCompleted ? "line-through opacity-40 text-slate-400" : ""}
                        ${!isExpanded ? "line-clamp-2" : ""}
                        transition-all duration-300 ease-in-out`}>
                        {todo.text}
                    </p>
                </div>
            </div>

            {/* Delete Button */}
            <div
                className='cursor-pointer text-slate-400 opacity-100 md:opacity-0 md:group-hover:opacity-100 hover:!text-rose-500 hover:scale-110 active:scale-95 transition-all duration-300 self-start pt-1 px-1 flex-shrink-0'
                onClick={(e) => { e.stopPropagation(); removeTodo(todo.id); }}
                role="button"
                tabIndex={0}
                aria-label={`Delete task "${todo.text}"`}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.stopPropagation();
                        removeTodo(todo.id);
                    }
                }}
            >
                <FiTrash2 size={20} />
            </div>
        </div>
    );
};

export default TodoItem;
