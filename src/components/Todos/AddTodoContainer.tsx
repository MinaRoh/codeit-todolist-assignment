'use client';
import Button from '../common/Button'
import TodoContainer from '../common/TodoContainer'
import TodoInput from '../common/TodoInput'
import plus_variant from '../../../public/icons/plus_variant/Property 1=plus.svg';
import useTodoStore from '@/store/todoStore';
import { useState } from 'react';

export const defaultInputText = '할 일을 입력해 주세요';

const AddTodoContainer = () => {
  const addTodoStore = useTodoStore((state) => state.addTodoStore);
  const [inputText, setInputText] = useState(defaultInputText);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };


  const todoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputText.trim()) { // trim 후 truth값을 가지면(빈 값이 아니면) 실행
      addNewTodo(inputText).then(() => {
        setInputText(defaultInputText); // 입력창 default로 초기화
      });
    }
  }

  const addNewTodo = async (todo: string) => {
    addTodoStore(todo); // todo store에서 서버에 추가
  };


  return (
    <form onSubmit={todoSubmit} className='w-full flex justify-center items-center gap-2 px-6'>
      <TodoContainer type='addtodo' additionalClasses='flex-grow'>
        <TodoInput text={inputText} additionalClasses='text-slate-500' onChange={onChange} />
      </TodoContainer>
      <Button type='submit' text='추가하기' icon={plus_variant} variant='violet' purpose='addtodo' border shadow
        additionalClasses='w-12 h-12 tablet:w-40 tablet:h-12 tablet:gap-1 desktop:w-40 desktop:h-12 desktop:gap-1 desktop-fhd:w-40 desktop-fhd:h-12 desktop-fhd:gap-1'
      textAdditionalClasses='hidden tablet:inline desktop:inline'/>
    </form>
  )
}
export default AddTodoContainer;