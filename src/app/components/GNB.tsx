import Link from 'next/link';
import Logo from '../../../public/images/logo_small/Size=Small.svg';
import LogoWithText from '../../../public/images/logo_large/Size=Large.svg';
import Image from 'next/image';

const Gnb = () => {
  return (
    <nav className='flex items-center py-[10px] pl-10 border-b border-slate-200'>
      <Link href='/'>
        {/* 모바일 화면에서는 작은 로고만 표시 */}
        <div className='block tablet:hidden w-[71px]'>
          <Image
            src={Logo}
            alt='Todolist Logo Small'
            className='w-full h-full'
          />
        </div>

        {/* 태블릿, 데스크탑 크기에서는 큰 로고 (텍스트 포함) 표시, 데스크탑에서 크기 및 여백 조절 */}
        <div className='hidden tablet:block w-[151px] desktop:w-64 desktop:pl-20'>
          <Image
            src={LogoWithText}
            alt='Todolist Logo Large'
            className='w-full h-full'
          />
        </div>
      </Link>
    </nav>
  );
};

export default Gnb;
