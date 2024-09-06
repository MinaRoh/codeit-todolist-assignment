'use client';
import Button from '../common/Button'
import TodoContainer from '../common/TodoContainer'
import TodoInput from '../common/TodoInput'
import plus_variant from '../../../../public/icons/plus_variant/Property 1=plus.svg';
import useTodoStore from '@/store/todoStore';
import { useState } from 'react';

export const defaultInputText = '할 일을 입력해 주세요';

const AddTodoContainer = () => {
  // add todo 기능 만들기. input 값 가져와서 버튼 누르면 fetch(store거쳐서) 되도록.
  const addTodoStore = useTodoStore((state: any) => state.addTodoStore);
  const [inputText, setInputText] = useState(defaultInputText);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };


  const todoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputText.trim()) { // trim 후 truth값을 가지면(빈 값이 아니면) 실행
      addNewTodo(inputText).then(() => {
        setInputText(defaultInputText); // 입력창 초기화
      });
    }
  }


  const addNewTodo = async (todo: string) => {
    addTodoStore(todo); // todo store에서 서버에 추가
  };
  


  return (
    <form onSubmit={todoSubmit} className='flex justify-center items-center w-full gap-2 bg-yellow-200'>
      <TodoContainer type='addtodo' additionalClasses='bg-slate-100'>
        <TodoInput text={inputText} additionalClasses='text-slate-500' onChange={onChange} />
      </TodoContainer>
      <Button type='submit' icon={plus_variant} variant='violet' shadow/>
    </form>
  )
}
export default AddTodoContainer;