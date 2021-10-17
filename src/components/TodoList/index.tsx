import React, { FC, ReactElement, useCallback, useEffect, useReducer, useState } from "react";
import TdInput from "./Input";
import TdList from "./List";
import { todoReducer } from "./reducer";
import { ACTION_TYPE, IState, ITodo } from "./typings";

const TodoList:FC = ():ReactElement=>{

    // const [todoList, setTodoList] = useState<ITodo[]>([]);
    const initState:IState ={
        todoList:[]
    }

    const[ state, dispatch] = useReducer(todoReducer, initState);

    useEffect(()=>{
        console.log(state.todoList);
    },[state.todoList]);

    const addTodo = useCallback((todo:ITodo)=>{
        // setTodoList(todoList=>[...todoList,todo])
        dispatch({
            type: ACTION_TYPE.ADD_TODO,
            payload:todo
        })
    },[])

    const removeTodo = useCallback((id:number):void=>{
        dispatch({
            type:ACTION_TYPE.REMOVE_TODO,
            payload:id
        })
    },[])

    const toggleTodo = useCallback((id:number):void=>{
        dispatch({
            type:ACTION_TYPE.TOGGLE_TODO,
            payload:id
        })
    },[])


    return (
        <div className="todo-list">
            <TdInput
            addTodo = {addTodo}
            todoList = {state.todoList}
            >
                
            </TdInput>
            <TdList
            todoList = {state.todoList}
            removeTodo = {removeTodo}
            toggleTodo = {toggleTodo}
            ></TdList>
        </div>
    );
}

export default TodoList;