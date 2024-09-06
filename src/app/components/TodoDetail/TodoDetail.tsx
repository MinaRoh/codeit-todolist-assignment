import Image from 'next/image'
import Button from '../common/Button'
import check from '../../../../public/icons/check/check.svg'
import checkbox_done from '../../../../public/icons/checkbox_done/Property 1=Frame 2610233.svg';
import x from '../../../../public/icons/x/X.svg';
import TodoContainer from '../common/TodoContainer'
import TodoInput from '../common/TodoInput';
import MemoContainer from './MemoContainer';
import ImageContainer from './ImageContainer';

const TodoDetail = () => {
  return <div className='flex flex-col justify-center items-center w-full h-auto bg-orange-300 gap-4 tablet:gap-7'>
    <div className='w-full'>
        <TodoContainer type='detail' additionalClasses='bg-violet-100'>
          <Image src={checkbox_done} alt='check' />
          <TodoInput text='비타민 챙겨 먹기' detailPage/>
        </TodoContainer>
    </div>

    <div className='w-full flex flex-col bg-green-300 '>
      <div>
        <ImageContainer />
      </div>
      <div>
        <MemoContainer/>
      </div>
    </div>
  

    <div className='w-full justify-center items-center flex bg-indigo-300 mt-6 gap-2'>
      <Button text='수정완료' icon={check} variant='lime' shadow/>
      <Button text='삭제하기' icon={x} variant='rose' shadow/>
    </div>
  </div>
}

export default TodoDetail;