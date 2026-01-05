import { useState, useEffect } from "react";

export const useTodos = () => {
    const [todoList, setTodoList] = useState(
        localStorage.getItem("todoList") ? JSON.parse(localStorage.getItem("todoList")) : []
    );

    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(todoList))
    }, [todoList]);

    const addTodo = (text) => {
        const newTodo = {
            id: Date.now(),
            text,
            isCompleted: false
        };
        setTodoList((prev) => [...prev, newTodo]);
    };

    const removeTodo = (id) => {
        setTodoList((prev) => prev.filter((todo) => todo.id !== id));
    };

    const toggleTodo = (id) => {
        setTodoList((prev) => prev.map((todo) =>
            todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        ));
    };

    return { todoList, addTodo, removeTodo, toggleTodo };
};
