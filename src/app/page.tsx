import Button from './components/common/Button';
import plus_variant from '../../public/icons/plus_variant/Property 1=plus.svg';
import plus from '../../public/icons/plus/Property 1=Variant2.svg';
import check from '../../public/icons/check/check.svg';
import edit from '../../public/icons/edit/edit.svg';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='flex flex-col gap-4 items-center justify-start'>
        
        <Button text='추가하기' icon={plus_variant} variant='violet' shadow/>
        <Button text='수정완료' icon={check} variant='lime' shadow/>
        <Button icon={plus_variant} variant='violet' shadow/>
        <Button icon={plus} variant='slate'/>
        <Button icon={edit} variant='dark'/>

      </div>
    </main>
  );
} 
