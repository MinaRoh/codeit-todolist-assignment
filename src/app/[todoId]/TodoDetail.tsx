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
import { EditedTodoProps, TodoProps } from '@/store/todoStore';
import { useEffect, useState } from 'react';
import { getTodoDetail } from '@/app/apis/todoApi';


const TodoDetail = ({todoId}:{todoId:number}) => {
  const [todoDetail, setTodoDetail] = useState<EditedTodoProps>(); // id로 얻어온 기존 todo detail
  const [editedTodoDetail, setEditedTodoDetail] = useState<EditedTodoProps>({}as EditedTodoProps); // 수정된 todo detail

  useEffect(() => {
    try {
      getTodoDetail(todoId).then((res) => {
        console.log(res);
        const { tenantId, ...restTodo } = res; // tenantId 제외하고 newTodo에 저장
        setTodoDetail(restTodo);
        setEditedTodoDetail(restTodo); // 수정될 todo도 일단 초기화
      });
    } catch (err) {
      console.error(err);
    }
  }, []);


  const onCheckClick = () => {
    setEditedTodoDetail(prev => ({
      ...prev, isCompleted: prev.isCompleted ? !prev.isCompleted : true
    }));
  };

  const onTodoTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEditedTodoDetail(prev => ({
      ...prev, name: value
    }));
  };

  const onImageUpload = (newImageUrl: string) => {
    // 이미지 업로드 시 이미지 URL 업데이트
    setEditedTodoDetail(prev => ({
      ...prev, imageUrl: newImageUrl
    }));
  };

  const onMemoChange = (newMemoText: string) => {
    setEditedTodoDetail(prev => ({
      ...prev, memo: newMemoText
    }));
  };


  return (todoDetail ?
      
  <div className='flex flex-col justify-center items-center w-full h-full bg-orange-200 gap-4 tablet:gap-7'>
      <div className='w-full'>
          <TodoContainer type='detail' additionalClasses={todoDetail.isCompleted? 'bg-violet-100' : 'bg-white'}>
          <Image src={todoDetail.isCompleted ? checkbox_done : checkbox} alt={todoDetail.isCompleted ? 'checked' : 'unchecked'}
          onClick={onCheckClick}/>
            <TodoInput text={editedTodoDetail.name || ''} detailPage onChange={onTodoTextChange}/>
          </TodoContainer>
      </div>

      <div className='w-full h-[311px] flex flex-col tablet:flex-row desktop:flex-row desktop-fhd:flex-row gap-4 tablet:gap-6 desktop:gap-6 desktop-fhd:gap-5'>
          <ImageContainer imageUrl={todoDetail.imageUrl}/>
          <MemoContainer memoText={editedTodoDetail.memo || ''} onMemoChange={onMemoChange}/>
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