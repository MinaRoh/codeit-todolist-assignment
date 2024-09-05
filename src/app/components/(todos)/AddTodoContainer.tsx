import Button from '../common/Button'
import TodoContainer from '../common/TodoContainer'
import TodoInput from '../common/TodoInput'
import plus_variant from '../../../../public/icons/plus_variant/Property 1=plus.svg';


const AddTodoContainer = () => {
  return (
    <div className='flex justify-center items-center w-full gap-2 bg-yellow-200'>
          <TodoContainer type='addtodo' additionalClasses='bg-slate-100'>
            <TodoInput text='할 일을 입력해 주세요' additionalClasses='text-slate-500'/>
          </TodoContainer>
          <Button icon={plus_variant} variant='violet' shadow/>
        </div>
  )
}
export default AddTodoContainer;