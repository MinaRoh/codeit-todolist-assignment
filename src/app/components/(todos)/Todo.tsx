import Image from 'next/image';
import TodoContainer from '../common/TodoContainer';
import TodoInput from '../common/TodoInput';
import checkbox from '../../../../public/icons/checkbox/Property 1=Default.svg';
import checkbox_done from '../../../../public/icons/checkbox_done/Property 1=Frame 2610233.svg';

interface TodoProps {
  id: string;
  text: string,
  isCompleted: boolean,
}
const Todo = ({ id, text, isCompleted }: TodoProps) => {

  const checkImg = isCompleted ? checkbox_done : checkbox;
  const checkImgAlt = isCompleted ? 'is done' : 'is not done';
  const additionalClasses = isCompleted ? 'bg-violet-100 line-through' : 'bg-white';

  return (
    <TodoContainer type='list' additionalClasses={additionalClasses}>
      <Image src={checkImg} alt={checkImgAlt} width={32} height={32} />
      <TodoInput text={text} detailPage={false} />
    </TodoContainer>
  )
}

export default Todo;