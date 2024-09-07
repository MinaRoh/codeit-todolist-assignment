'use client';
import Image from 'next/image';
import ImageIcon from '../../../../public/images/ic/img.svg';
import Plus from '../../../../public/icons/plus/Property 1=Variant2.svg';
import Button from '../common/Button';

const ImageContainer = ({ imageUrl }: { imageUrl: string }) => {

  const onAddImageButtonClick = () => {
  };

return (
  <div className='relative flex justify-center items-center min-w-96 h-80 bg-slate-50 rounded-3xl border-dashed border-2 border-slate-300'>
    <div className='flex justify-center items-center'>
      {imageUrl ? (
        <>이미지 주소 가져오기</>
      ) : (
        <Image src={ImageIcon} alt='empty image icon' width={64} height={64} />
      )}
    </div>
    <div className='absolute right-4 bottom-4'>
      <Button type='button' icon={Plus} variant='slate' onClick={onAddImageButtonClick} />
    </div>
  </div>
);

}

export default ImageContainer;