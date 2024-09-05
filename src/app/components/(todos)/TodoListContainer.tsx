import Image from 'next/image';
import TodoLabel from '../../../../public/images/todo/todo.svg';
import DoneLabel from '../../../../public/images/done/done.svg';
import EmptyTodo_small from '../../../../public/images/empty/todo_small/Type=todo, Size=Small.svg';  
import EmptyDone_small from '../../../../public/images/empty/done_small/Type=done, Size=Small.svg';  


const TodoListContainer = () => {
  
  return (
    <div className='flex flex-col w-full bg-green-200 gap-12'>
          <div className='flex flex-col bg-blue-200'>
            <div className='flex justify-start'>
              <Image src={TodoLabel} alt='To do' />
            </div>
            <div className='flex flex-col items-center'>
              <Image src={EmptyTodo_small} alt='To do list is empty' />
              <p className='text-slate-400 font-bold'>할 일이 없어요.<br/>TODO를 새롭게 추가해주세요!</p>
            </div>
          </div>
          <div className='flex flex-col w-full bg-pink-200'>
            <div className='flex justify-start'>
              <Image src={DoneLabel} alt='Done' />
            </div>
            <div className='flex flex-col items-center'>
              <Image src={EmptyDone_small} alt='Done list is empty' />
              <p className='text-slate-400 font-bold'>아직 다 한 일이 없어요.<br/>해야 할 일을 체크해보세요!</p>
            </div>
            
          </div>
        </div>
  )
}

export default TodoListContainer;