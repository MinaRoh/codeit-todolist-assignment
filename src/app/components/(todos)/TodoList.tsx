'use client';
import Image from 'next/image';
import { TodoProps } from '@/store/todoStore';
import Todo from './Todo';

interface TodoListInfo {
    imageLabel: any;
    altText: string;
    todos: TodoProps[];
    emptyImage: any;
}

/** todo, done list 내부의 디자인 및 전달받은 todos를 map을 통해 Todo 컴포넌트로 전달(todo.name, todo.isCompleted 등) */
const TodoList = ({imageLabel, altText, todos, emptyImage}: TodoListInfo) => {

  return (
    <div className='flex flex-col w-full bg-pink-200 gap-4'>
      {/* 라벨영역 */}
      <div className='flex justify-start'>
          <Image src={imageLabel} alt={altText} />
      </div>
      
      {/* 투두리스트영역 */}
      <div className='flex flex-col items-center gap-3'>
        {
          todos ? todos.map((todo) => (
            <Todo key={todo.id} id={todo.id} name={todo.name} isCompleted={todo.isCompleted} />
          ))
            :
            // todo 혹은 done이 하나도 없다면 empty 이미지 표시
          <div>
            <Image src={emptyImage} alt='Done list is empty' />
            <p className='text-slate-400 font-bold text-center'>아직 다 한 일이 없어요.<br/>해야 할 일을 체크해보세요!</p> 
          </div>
        }
      </div>
    </div>
  );
};

export default TodoList;