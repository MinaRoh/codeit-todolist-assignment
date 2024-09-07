import Image from 'next/image';
import TodoContainer from '../common/TodoContainer';
import TodoInput from '../common/TodoInput';
import checkbox from '../../../../public/icons/checkbox/Property 1=Default.svg';
import checkbox_done from '../../../../public/icons/checkbox_done/Property 1=Frame 2610233.svg';
import Link from 'next/link';


interface SimpleTodoProps {
  id: number;
  name: string;
  isCompleted: boolean;
}

const Todo = ({ id, name, isCompleted }: SimpleTodoProps) => {

  const checkImg = isCompleted ? checkbox_done : checkbox;
  const checkImgAlt = isCompleted ? 'is done' : 'is not done';
  const additionalClasses = isCompleted ? 'bg-violet-100 line-through' : 'bg-white';


  return (
    <Link href={`/${id}`} className='w-full'>
      <TodoContainer type='list' additionalClasses={additionalClasses}>
        <Image src={checkImg} alt={checkImgAlt} width={32} height={32} />
        <p>{id}</p>
        <TodoInput text={name} detailPage={false} />
      </TodoContainer>
    </Link>
  )
}

export default Todo;