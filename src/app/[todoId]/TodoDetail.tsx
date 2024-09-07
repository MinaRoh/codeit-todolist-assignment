'use client';
import Image from 'next/image'
import Button from '../components/common/Button';
import check from '../../../public/icons/check/check.svg'
import checkbox_done from '../../../public/icons/checkbox_done/Property 1=Frame 2610233.svg';
import checkbox from '../../../public/icons/checkbox/Property 1=Default.svg';
import x from '../../../public/icons/x/X.svg';
import TodoContainer from '../components/common/TodoContainer'
import TodoInput from '../components/common/TodoInput';
import MemoContainer from '../components/TodoDetail/MemoContainer';
import ImageContainer from '../components/TodoDetail/ImageContainer';
import { TodoProps } from '@/store/todoStore';
import { useEffect, useState } from 'react';
import { getTodoDetail } from '@/app/apis/\btodoApi';


const TodoDetail = ({todoId}:{todoId:number}) => {
  const [todoDetail, setTodoDetail] = useState<TodoProps>(); // id로 얻어온 기존 todo detail

  useEffect(() => {
    try {
      getTodoDetail(todoId).then((res) => {
        console.log(res);
        const { tenantId, ...restTodo } = res; // tenantId 제외하고 newTodo에 저장
        setTodoDetail(restTodo);
      });
    } catch (err) {
      console.error(err);
    }
  }, [])
  
  return (todoDetail ?
      
  <div className='flex flex-col justify-center items-center w-full h-auto gap-4 tablet:gap-7'>
      <div className='w-full'>
          <TodoContainer type='detail' additionalClasses={todoDetail.isCompleted? 'bg-violet-100' : 'bg-white'}>
            <Image src={todoDetail.isCompleted? checkbox_done: checkbox} alt={todoDetail.isCompleted? 'checked' : 'unchecked'} />
            <TodoInput text={todoDetail.name} detailPage/>
          </TodoContainer>
      </div>

      <div className='w-full flex flex-col tablet:flex-row desktop:flex-row desktop-fhd:flex-row'>
          <ImageContainer imageUrl={todoDetail.imageUrl}/>
          <MemoContainer memoText={todoDetail.memo} />
      </div>
  

      <div className='w-full flex justify-center items-center desktop:justify-end desktop:gap-4 desktop-fhd:justify-end desktop-fhd:gap-4 mt-6 gap-2'>
        <Button text='수정완료' icon={check} variant='lime' purpose='edit' shadow />
        <Button text='삭제하기' icon={x} variant='rose' purpose='delete' shadow/>
      </div>
    </div>
    :
    <div>정보를 불러 올 수 없습니다.</div>
  )
}

export default TodoDetail;