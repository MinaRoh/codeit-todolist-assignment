'use client';
import Image from 'next/image';
import ImageIcon from '../../../../public/images/ic/img.svg';
import Plus from '../../../../public/icons/plus/Property 1=Variant2.svg';
import Button from '../common/Button';
import { createRef } from 'react';
import { uploadImage } from '@/app/apis/imageApi';

const ImageContainer = ({ todoId, imageUrl }: { todoId: number, imageUrl: string }) => {
  const fileInputRef = createRef<HTMLInputElement>(); // Image component 내부 대신 create

  const onFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      if (file.size >= 5 * 1024 * 1024) {
        alert('파일 크기는 5MB 이하여야 합니다!');
        return;
      }
      const fileName = file.name;
      const regex = /^[a-zA-Z]+$/; // 파일 이름 영어만 제한하는 정규식
      if (!regex.test(fileName.split('.')[0])) { // 파일 확장자를 제외한 이름만 확인
        alert('이미지 파일 이름은 영어로만 이루어져야 합니다!');
        return;
      }

      const formData = new FormData();
      formData.append('image', file)

      try {
        const res = await uploadImage(formData);
        // res.url로 string type 주소 받아 사용하기
      } catch (err) {
        console.error('error uploading image:', err);
      }
    }
  }

  const onAddImageButtonClick = () => {
    fileInputRef.current?.click();
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
      <input type='file' accept='image/*' className='hidden' onChange={onFileChange} ref={fileInputRef} />
    </div>
  </div>
);

}

export default ImageContainer;