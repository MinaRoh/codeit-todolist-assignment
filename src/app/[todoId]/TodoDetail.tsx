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
  const [todoDetail, setTodoDetail] = useState<EditedTodoProps>({}as EditedTodoProps);
  const [prevTodoDetail, setPrevTodoDetail] = useState<EditedTodoProps>({} as EditedTodoProps);
  const [hasChanged, setHasChanged] = useState<Boolean>(false);

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
        setPrevTodoDetail(restTodo);
        setTodoDetail(restTodo);
      });
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    // prev와 비교해 변경된 부분이 있는지 확인
    setHasChanged(JSON.stringify(prevTodoDetail) !== JSON.stringify(todoDetail));
  }, [todoDetail, prevTodoDetail]);

  const onCheckClick = () => {
    setTodoDetail(prev => ({...prev, isCompleted: prev.isCompleted ? !prev.isCompleted : true}));
  };

  const onTodoTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTodoDetail(prev => ({...prev, name: value}));
  };

  const onImageUpload = (newImageUrl: string) => {
    setTodoDetail(prev => ({...prev, imageUrl: newImageUrl}));
  };

  const onMemoChange = (newMemoText: string) => {
    setTodoDetail(prev => ({...prev, memo: newMemoText}));
  };

  const onEditBtnClick = async () => {
    if (window.confirm('수정된 내용을 저장할까요?')) {
      try {
        await updateTodoStore(todoId, todoDetail);
        alert('저장되었습니다!');
        window.location.pathname = '/';
      } catch (error) {
        console.error('Error updating todo:', error);
        alert('할 일 저장 중 오류가 발생했습니다. 다시 시도해 주세요!');
        window.location.reload();
      }
    } else;
  };

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
  };



  return (todoDetail ?
    <div className='flex flex-col justify-center w-full h-full gap-4 tablet:gap-7'>
      <div className='w-full'>
          <TodoContainer type='detail' additionalClasses={todoDetail.isCompleted? 'bg-violet-100' : 'bg-white'}>
            <Image src={todoDetail.isCompleted ? checkbox_done : checkbox} alt={todoDetail.isCompleted ? 'checked' : 'unchecked'}
          onClick={onCheckClick}/>
            <TodoInput text={todoDetail.name || ''} detailPage onChange={onTodoTextChange}/>
          </TodoContainer>
      </div>

      <div className='w-full h-auto flex flex-col tablet:flex-row desktop:flex-row desktop-fhd:flex-row gap-4 tablet:gap-6 desktop:gap-6 desktop-fhd:gap-5'>
        <ImageContainer imageUrl={todoDetail.imageUrl || ''} onImageUpload={onImageUpload} />
        <MemoContainer memoText={todoDetail.memo || ''} onMemoChange={onMemoChange}/>
      </div>
  

      <div className='w-full flex justify-center items-center desktop:justify-end desktop:gap-4 desktop-fhd:justify-end desktop-fhd:gap-4 mt-6 gap-2'>
        <Button text='수정 완료' icon={check} variant={hasChanged ? 'lime' : 'slate'} purpose='edit' border shadow onClick={onEditBtnClick} />
        <Button text='삭제하기' icon={x} variant='rose' purpose='delete' border shadow onClick={onDeleteBtnClick}/>
      </div>
    </div>
    :
    <div>정보를 불러 올 수 없습니다.</div>
  )
}

export default TodoDetail;