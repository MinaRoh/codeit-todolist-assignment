import Image from 'next/image';
import TodoContainer from '../common/TodoContainer';
import TodoInput from '../common/TodoInput';
import checkbox from '../../../../public/icons/checkbox/Property 1=Default.svg';
import checkbox_done from '../../../../public/icons/checkbox_done/Property 1=Frame 2610233.svg';
import Link from 'next/link';
import useTodoStore, { TodoProps } from '@/store/todoStore';

const Todo = (todo: TodoProps) => {
  const { updateTodoIsCompletedStore } = useTodoStore((state) => ({updateTodoIsCompletedStore: state.updateTodoIsCompletedStore}));
  
  const checkImg = todo.isCompleted ? checkbox_done : checkbox;
  const checkImgAlt = todo.isCompleted ? 'is done' : 'is not done';
  const additionalClasses = todo.isCompleted ? 'bg-violet-100 line-through' : 'bg-white';

  // checkbox 클릭시 해당 세부 페이지로 넘어가는 것 방지
  const onCheckImageClick = (event:React.MouseEvent) => {
    event.stopPropagation(); // 이벤트 전파 방지
    event.preventDefault(); // 링크 기본 동작 방지
    onCheckClick();
  }
  const onCheckClick = () => {
    updateTodoIsCompletedStore(todo.id, !todo.isCompleted); // 바뀐 부분만 전달해
  };

  return (
    <Link href={`/${todo.id}`} className='w-full'>
      <TodoContainer type='list' additionalClasses={additionalClasses}>
        <Image src={checkImg} alt={checkImgAlt} width={32} height={32} onClick={onCheckImageClick} />
        <TodoInput text={todo.name} detailPage={false} readOnly additionalClasses='cursor-pointer'/>
      </TodoContainer>
    </Link>
  )
}

export default Todo;