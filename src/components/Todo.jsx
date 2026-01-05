import { LuClipboardList } from "react-icons/lu";


const Todo = () => {
    return (
        <div class='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
            <div class='flex items-center mt-7 gap-2'>
                <h1 class='text-2xl font-semibold'>
                    <LuClipboardList />
                </h1>
                <h1 class='text-2xl font-semibold'>
                    To-Do List
                </h1>
            </div>


        </div>
    );
};

export default Todo;
