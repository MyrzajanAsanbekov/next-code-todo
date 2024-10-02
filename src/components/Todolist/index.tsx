import React from 'react';
import { IoTrash } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { ITodo } from '@/types';

const TodoList = ({
  todos,
  editId,
  editInputValue,
  setEditId,
  setEditInputValue,
  editHandler,
  deleteTodo,
}: {
  todos: ITodo[];
  editId: number | null;
  editInputValue: string;
  setEditInputValue: (value: string) => void;
  setEditId: (id: number | null) => void;
  editHandler: () => void;
  deleteTodo: (id: number) => void;
}) => {
  return (
    <div className="box">
      {todos.map((el: ITodo) => (
        <ul key={el._id} className="todoList">
          {editId === el._id ? (
            <>
              <input
              className='edit'
                type="text"
                value={editInputValue}
                onChange={(e) => setEditInputValue(e.target.value)}
              />
              <button className='editTodo' onClick={editHandler}>Save</button>
            </>
          ) : (
            <div className="lists">
              <li>{el.title}</li>
              <div className="lists_btn">
                <button onClick={() => deleteTodo(el._id)}><IoTrash />
                </button>
                <button
                  onClick={() => {
                    setEditId(el._id);
                    setEditInputValue(el.title);
                  }}
                >
                  <CiEdit />
                </button>
              </div>
            </div>
          )}
        </ul>
      ))}
    </div>
  );
};

export default TodoList;