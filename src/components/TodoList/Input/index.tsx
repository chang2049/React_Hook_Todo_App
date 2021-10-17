import React, { FC } from "react";
import TodoList from "..";
import { useRef } from "react";
import { ITodo } from "../typings";

interface IProps {
    addTodo:(todo:ITodo)=>void;
    todoList:ITodo[]
};

const TdInput:FC<IProps> = ({
addTodo,
todoList
})=>{
    const inputRef = useRef<HTMLInputElement>(null);

    const addItem = ():void =>{
        const val: string = inputRef.current!.value.trim();
        if(val.length){
            const isExist = todoList.find(todo=>todo.content==val);
            if(isExist){
                alert("item already existed");
                return;
            }else{
                addTodo({
                    id: new Date().getTime(),
                    content:val,
                    completed:false
                })
            }
            inputRef.current!.value = '';
        }

    }
    return (
        <div className="todo-input">
            <input type="text" placeholder="Write your todo here" ref={inputRef}/>
            <button onClick = { addItem}>add</button>
        </div>
    );
}

export default TdInput;