import Button from './components/common/Button';
import plus_variant from '../../public/icons/plus_variant/Property 1=plus.svg';
import plus from '../../public/icons/plus/Property 1=Variant2.svg';
import check from '../../public/icons/check/check.svg';
import edit from '../../public/icons/edit/edit.svg';
import checkbox from '../../public/icons/checkbox/Property 1=Default.svg';
import checkbox_done from '../../public/icons/checkbox_done/Property 1=Frame 2610233.svg';
import Image from 'next/image';
import TodoInput from './components/common/TodoInput';
import TodoContainer from './components/common/TodoContainer';

  
export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-between p-24">
      <div className='flex flex-col min-w-screen w-full gap-4 justify-start'>

        <TodoContainer type='list' additionalClasses='bg-white'>
          <Image src={checkbox} alt='check' />
          <TodoInput text='비타민 챙겨 먹기' detailPage={false} />
        </TodoContainer>


        <TodoContainer type='list' additionalClasses='bg-violet-100'>
          <Image src={checkbox_done} alt='check_done' />
          <TodoInput text='비타민 챙겨 먹기' additionalClasses='line-through text-slate-800'/>
        </TodoContainer>


        <TodoContainer type='detail' additionalClasses='bg-white'>
          <Image src={checkbox} alt='check' />
          <TodoInput text='비타민 챙겨 먹기' detailPage/>
        </TodoContainer>

        <TodoContainer type='detail' additionalClasses='bg-violet-100'>
          <Image src={checkbox_done} alt='check' />
          <TodoInput text='비타민 챙겨 먹기' detailPage/>
        </TodoContainer>


        <TodoContainer type='addtodo' additionalClasses='bg-slate-100'>
          <TodoInput text='할 일을 입력해 주세요' additionalClasses='text-slate-500'/>
        </TodoContainer>

        <TodoContainer type='addtodo' additionalClasses='bg-slate-100'>
          <TodoInput
            text='길이가 길어질 경우 다음과 같이 계속 오른쪽으로 갑니다... 길이가 길어질 경우 다음과 같이 계속 오른쪽으로 갑니다... 길이가 길어질 경우 다음과 같' />
        </TodoContainer>



      </div>
    </main>
  );
} 
