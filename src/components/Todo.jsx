import { useRef, useEffect } from "react";
import { LuClipboardList } from "react-icons/lu";
import TodoItem from "./TodoItem";
import { useTodos } from "../hooks/useTodos";


const Todo = () => {

    const { todoList, addTodo, removeTodo, toggleTodo } = useTodos();
    const inputRef = useRef(null);
    const listRef = useRef(null);

    useEffect(() => {
        if (listRef.current) {
            listRef.current.scrollTo({
                top: listRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    }, [todoList.length]);

    const handleAdd = (e) => {
        e.preventDefault();
        const inputText = inputRef.current.value.trim();

        if (inputText === "") return;

        addTodo(inputText);
        inputRef.current.value = "";
    }

    return (
        <div className='bg-white/70 backdrop-blur-3xl border-2 border-white/80 shadow-2xl shadow-sky-900/10 mx-auto w-[92%] max-w-md flex flex-col p-7 h-[85vh] max-h-[800px] min-h-[500px] rounded-3xl' aria-labelledby="todo-title">
            <div className="flex items-center gap-4 mt-6 mb-2">
                <div className="p-3 bg-white/70 rounded-2xl border border-white/60 shadow-sm backdrop-blur-sm">
                    <LuClipboardList size={28} className="text-teal-500 drop-shadow-sm" />
                </div>
                <div>
                    <h1 id="todo-title" className="text-2xl font-bold text-slate-800 tracking-tight">To-Do List</h1>
                    <p className="text-slate-500 text-xs font-medium">Stay organized & productive</p>
                </div>
            </div>

            <form className='mt-7' onSubmit={handleAdd}>
                <div>
                    <input
                        type="text"
                        ref={inputRef}
                        className="bg-white/50 border border-white/60 text-slate-800 text-sm rounded-xl focus:ring-2 focus:ring-teal-400/50 focus:border-transparent focus:bg-white block w-full px-4 py-3 shadow-sm placeholder-slate-400 transition-all duration-200 ease-in-out outline-none backdrop-blur-sm"
                        placeholder="Add a new task"
                        required
                        aria-label="New task description"
                    />
                </div>

                <div className="mt-5">
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-gradient-to-r from-teal-400 to-sky-400 text-white font-semibold rounded-xl shadow-md hover:from-teal-500 hover:to-sky-500 hover:shadow-sky-500/25 focus:outline-none active:scale-95 active:shadow-sm cursor-pointer transition-all duration-300"
                        aria-label="Add new task"
                    >
                        Add
                    </button>
                </div>
            </form>

            <div ref={listRef} className='mt-5 flex-1 overflow-y-auto scrollbar-custom pr-2'>
                {todoList.length === 0 ? (
                    <div className="flex flex-col items-center justify-center mt-10 text-center opacity-70">
                        <div className="text-5xl mb-4 drop-shadow-sm">📝</div>
                        <p className="text-slate-400 text-sm font-medium">No tasks yet. Add one to get started!</p>
                    </div>
                ) : (
                    todoList.map((item) => {
                        return <TodoItem
                            key={item.id}
                            todo={item}
                            removeTodo={removeTodo}
                            toggleTodoStatus={toggleTodo}
                        />
                    })
                )}
            </div>

        </div>
    );
};

export default Todo;
