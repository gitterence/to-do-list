import { useRef } from "react";
import { LuClipboardList } from "react-icons/lu";
import TodoItem from "./TodoItem";
import { useTodos } from "../hooks/useTodos";


const Todo = () => {

    const { todoList, addTodo, removeTodo, toggleTodo } = useTodos();
    const inputRef = useRef(null);

    const handleAdd = () => {
        const inputText = inputRef.current.value.trim();

        if (inputText === "") {
            return null;
        }

        addTodo(inputText);
        inputRef.current.value = "";
    }

    return (
        <div class='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl' aria-labelledby="todo-title">
            <div class="flex items-center gap-4 mt-6 mb-2">
                <div class="p-3 bg-blue-50 rounded-2xl border border-blue-100 shadow-sm">
                    <LuClipboardList size={28} class="text-blue-600" />
                </div>
                <div>
                    <h1 id="todo-title" class="text-2xl font-bold text-slate-800 tracking-tight">To-Do List</h1>
                    <p class="text-slate-500 text-xs font-medium">Stay organized & productive</p>
                </div>
            </div>

            <div class='mt-7'>
                <div>
                    <input
                        type="text"
                        ref={inputRef}
                        class="bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white block w-full px-4 py-3 shadow-sm placeholder-slate-400 transition-all duration-200 ease-in-out outline-none"
                        placeholder="Add a new task"
                        required
                        aria-label="New task description"
                        onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
                    />
                </div>

                <div class="flex justify-center mt-5">
                    <button
                        type="submit"
                        onClick={handleAdd}
                        class="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 hover:shadow-lg focus:outline-none active:scale-95 active:shadow-sm cursor-pointer transition-all duration-200"
                        aria-label="Add new task"
                    >
                        Add
                    </button>
                </div>
            </div>

            <div class='mt-5 flex-1'>
                {todoList.length === 0 ? (
                    <div class="flex flex-col items-center justify-center mt-10 text-center opacity-60">
                        <div class="text-5xl mb-4">📝</div>
                        <p class="text-slate-500 text-sm">No tasks yet. Add one to get started!</p>
                    </div>
                ) : (
                    todoList.map((item) => {
                        return <TodoItem
                            key={item.id}
                            id={item.id}
                            taskName={item.text}
                            isCompleted={item.isCompleted}
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
