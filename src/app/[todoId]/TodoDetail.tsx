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
import useTodoStore, { EditedTodoProps } from '@/store/todoStore';
import { useEffect, useState } from 'react';
import { getTodoDetail } from '@/app/apis/todoApi';


const TodoDetail = ({todoId}:{todoId:number}) => {
  const [todoDetail, setTodoDetail] = useState<EditedTodoProps>(); // id로 얻어온 기존 todo detail
  const [editedTodoDetail, setEditedTodoDetail] = useState<EditedTodoProps>({}as EditedTodoProps); // 수정된 todo detail

  const { updateTodoStore, deleteTodoStore } = useTodoStore((state) => ({
    updateTodoStore: state.updateTodoStore,
    deleteTodoStore: state.deleteTodoStore,
  }));
  
  useEffect(() => {
    try {
      getTodoDetail(todoId).then((res) => {

        // 기본값이 null이기때문에 요청시 null값 방지용
        res.imageUrl = res.imageUrl || '';
        res.memo = res.memo || '';

        const { tenantId, id, ...restTodo } = res; // tenantId, id 제외하고 restTodo로 저장(서버 요청 body 형식에 맞춰)
    
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

  const onEditBtnClick = async () => {
    if (window.confirm('수정된 내용을 저장할까요?')) {
      try {
        await updateTodoStore(todoId, editedTodoDetail);
        alert('저장되었습니다!');
        window.location.pathname = '/';
      } catch (error) {
        console.error('Error updating todo:', error);
        alert('할 일 저장 중 오류가 발생했습니다. 다시 시도해 주세요!');
        window.location.reload();
      }
    } else;
  }

  const onDeleteBtnClick = async () => {
    if (window.confirm('이 할 일을 삭제할까요?')) {
      try {
        await deleteTodoStore(todoId);
        alert('삭제되었습니다!');
        window.location.pathname = '/';
      } catch (error) {
        console.error('Error deleting todo:', error);
        alert('할일 삭제 중 오류가 발생했습니다. 다시 시도해 주세요!');
        window.location.reload();
      }
      
    } else;
  }



  return (todoDetail ?
      
  <div className='flex flex-col justify-center items-center w-full h-full bg-orange-200 gap-4 tablet:gap-7'>
      <div className='w-full'>
          <TodoContainer type='detail' additionalClasses={editedTodoDetail.isCompleted? 'bg-violet-100' : 'bg-white'}>
          <Image src={editedTodoDetail.isCompleted ? checkbox_done : checkbox} alt={editedTodoDetail.isCompleted ? 'checked' : 'unchecked'}
          onClick={onCheckClick}/>
            <TodoInput text={editedTodoDetail.name || ''} detailPage onChange={onTodoTextChange}/>
          </TodoContainer>
      </div>

      <div className='w-full h-[311px] flex flex-col tablet:flex-row desktop:flex-row desktop-fhd:flex-row gap-4 tablet:gap-6 desktop:gap-6 desktop-fhd:gap-5'>
          <ImageContainer imageUrl={todoDetail.imageUrl}/>
          <MemoContainer memoText={editedTodoDetail.memo || ''} onMemoChange={onMemoChange}/>
      </div>
  

      <div className='w-full flex justify-center items-center desktop:justify-end desktop:gap-4 desktop-fhd:justify-end desktop-fhd:gap-4 mt-6 gap-2'>
        <Button text='수정완료' icon={check} variant='lime' purpose='edit' shadow onClick={onEditBtnClick} />
        <Button text='삭제하기' icon={x} variant='rose' purpose='delete' shadow onClick={onDeleteBtnClick}/>
      </div>
    </div>
    :
    <div>정보를 불러 올 수 없습니다.</div>
  )
}

export default TodoDetail;