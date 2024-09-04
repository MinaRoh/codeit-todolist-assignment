import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface ButtonProps {
  text?: string;
  icon: StaticImageData;
  variant?: 'violet' | 'lime' | 'slate' | 'dark'; 
  shadow?: boolean;
  onClick?: () => void;
  additionalClasses?: string;
}

const Button = ({ text, icon, variant = 'violet', onClick, shadow, additionalClasses = '' }: ButtonProps) => {
  const buttonClasses = [
    'btn-base',
    `btn-${variant}`,
    text ? 'btn-long' : 'btn-cicle', // 버튼에 text가 없으면 원형 버튼이 된다
    shadow && 'btn-shadow',
    additionalClasses,
    ].join(' ');

  return (
    <button className={buttonClasses} onClick={onClick}>
      {icon && <Image src={icon} alt="icon" />}
      {text}
    </button>
  );
};

export default Button;