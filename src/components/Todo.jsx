import { useState, useRef } from "react";
import { LuClipboardList } from "react-icons/lu";
import TodoItem from "./TodoItem";


const Todo = () => {

    const [todoList, setTodoList] = useState([]);

    const inputRef = useRef(null);

    const addTodo = () => {
        const inputText = inputRef.current.value.trim();

        if (inputText === "") {
            return null;
        }

        const newTodo = {
            id: Date.now(),
            text: inputText,
            isCompleted: false
        }

        setTodoList((prevTodos) => [...prevTodos, newTodo]);

        inputRef.current.value = "";
    }

    const removeTodo = (id) => {
        setTodoList((prevTodos) => {
            return prevTodos.filter((item) => item.id !== id)
        })
    }

    const toggleTodoStatus = (id) => {
        setTodoList((prevTodos) => {
            return prevTodos.map((item) => {
                if (item.id === id) {
                    return { ...item, isCompleted: !item.isCompleted }
                }
                return item;
            })
        })
    }

    return (
        <div class='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
            <div class="flex items-center gap-4 mt-6 mb-2">
                <div class="p-3 bg-blue-50 rounded-2xl border border-blue-100 shadow-sm">
                    <LuClipboardList size={28} class="text-blue-600" />
                </div>
                <div>
                    <h1 class="text-2xl font-bold text-slate-800 tracking-tight">To-Do List</h1>
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
                    />
                </div>

                <div class="flex justify-center mt-5">
                    <button
                        type="submit"
                        onClick={addTodo}
                        class="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 hover:shadow-lg focus:outline-none active:scale-95 active:shadow-sm cursor-pointer transition-all duration-200"
                    >
                        Add
                    </button>
                </div>
            </div>

            <div class='mt-5'>
                {todoList.map((item, indx) => {
                    return <TodoItem key={indx} id={item.id} taskName={item.text} isCompleted={item.isCompleted} removeTodo={removeTodo} toggleTodoStatus={toggleTodoStatus} />
                })}
            </div>

        </div>
    );
};

export default Todo;
