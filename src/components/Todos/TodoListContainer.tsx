'use client';
import TodoLabel from '../../../public/images/todo/todo.svg';
import DoneLabel from '../../../public/images/done/done.svg';
import EmptyTodo_small from '../../../public/images/empty/todo_small/Type=todo, Size=Small.svg';  
import EmptyDone_small from '../../../public/images/empty/done_small/Type=Done, Size=Small.svg';
import useTodoStore, { TodoProps } from '@/store/todoStore';
import { useEffect, useState } from 'react';
import TodoList from './TodoList';

/** fetch로 받아와서 todo, done에 따라 구별해서 TodoList에 전달.  */
const TodoListContainer = () => {
  const [todosToDo, setTodosToDo] = useState<TodoProps[]>([]);
  const [todosDone, setTodosDone] = useState<TodoProps[]>([]);


  const { todos, getTodoStore } = useTodoStore((state) => ({
    todos: state.todos,
    getTodoStore: state.getTodoStore,
  }));

  useEffect(() => {
    try {
      getTodoStore(); // store에서 getTodo(fetch)진행, store에 저장.
    } catch (error) {
      console.error('Error loading todos:', error);
    }
  }, []);

  useEffect(() => {
    setTodosToDo(todos?.filter((todo: TodoProps) => !todo.isCompleted));
    setTodosDone(todos?.filter((todo: TodoProps) => todo.isCompleted));
  }, [todos]);
  
  const TodoListInfo = [
    {
      imageLabel: TodoLabel,
      altText: 'Todo list',
      todos: todosToDo,
      emptyImage: EmptyTodo_small,
      emptyMsg: '할 일이 없어요.\nTodo를 새롭게 추가해주세요!'
    },
    {
      imageLabel: DoneLabel,
      altText: 'Done list',
      todos: todosDone,
      emptyImage: EmptyDone_small,
      emptyMsg: '아직 다 한 일이 없어요.\n해야 할 일을 체크해보세요!'
    },
  ];
  

  return (
    // filteredList: todos.isCompleted 상태에 따라 todo와 done list를 구별하여(TodoListInfo) Todo, Done 의 순서로 해당 배열을 전달한다.
    <div className='flex flex-col w-full gap-12 desktop:flex-row px-6'>
      {TodoListInfo.map((filteredList) => (
        <TodoList key={filteredList.altText} {...filteredList} />
      ))}
    </div>
  )
}

export default TodoListContainer;