'use client';
import Image from 'next/image';
import ImageIcon from '../../../../public/images/ic/img.svg';
import Plus from '../../../../public/icons/plus/Property 1=Variant2.svg';
import Edit from '../../../../public/icons/edit/edit.svg';
import Button from '../common/Button';
import { createRef, useState } from 'react';
import { uploadImage } from '@/app/apis/imageApi';

interface ImageContainerProps {
  imageUrl: string;
  onImageUpload?: (imageUrl: string) => void;
}

const ImageContainer = ({ imageUrl, onImageUpload }: ImageContainerProps) => {
  const fileInputRef = createRef<HTMLInputElement>(); // Image component 내부 대신 create
  const [newImageUrl, setNewImageUrl] = useState<string>(imageUrl);
  
  const isImageExist = () => {
    // 이미지 url이 존재하고 첫글자가 'https://'로 시작할 경우에만 이미지가 존재한다고 판단.
    if (imageUrl && imageUrl.startsWith('https://')) return true;
    else return false;
  }
  
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
      formData.append('image', file);

      try {
        const res = await uploadImage(formData);
        const uploadedUrl = res ? res.url : '';

        setNewImageUrl(uploadedUrl);

        if (onImageUpload) {
          onImageUpload(uploadedUrl);
        }

      } catch (err) {
        console.error('error uploading image:', err);
      }
    }
  }

  const onAddImageButtonClick = () => {
    fileInputRef.current?.click();
  };

return (
  <div className='relative flex flex-1 justify-center items-center min-w-96 min-h-[311px] bg-slate-50 rounded-3xl border-dashed border-2 border-slate-300'>
    <div className='flex justify-center items-center'>
      {isImageExist() ? (
        <Image src={imageUrl || newImageUrl} alt='uploaded image'
          className='object-cover rounded-3xl'
          layout='fill' key={newImageUrl} // key 속성으로 리렌더링 유도
        />
      ) : (
        <Image src={ImageIcon} alt='empty image icon' width={64} height={64} />
      )}
    </div>
    <div className='absolute right-4 bottom-4'>
      <Button type='button' icon={isImageExist() ? Edit : Plus} variant={isImageExist() ? 'dark' : 'slate'} onClick={onAddImageButtonClick} />
      <input type='file' accept='image/*' className='hidden' onChange={onFileChange} ref={fileInputRef} />
    </div>
  </div>
);

}

export default ImageContainer;