import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface ButtonProps {
  type?: 'submit' | 'button';
  text?: string;
  icon: StaticImageData;
  variant?: 'violet' | 'lime' | 'slate' | 'dark' | 'rose';
  purpose?: 'addtodo' | 'edit' | 'delete' | undefined;
  border?: boolean;
  shadow?: boolean;
  onClick?: () => void;
  additionalClasses?: string;
  textAdditionalClasses?: string;
}

const Button = ({ type, text, icon, variant = 'violet', purpose, onClick, border, shadow, additionalClasses = '', textAdditionalClasses }: ButtonProps) => {
  const buttonClasses = [
    'btn-base',
    `btn-${variant}`,
    border && 'border-solid border-2 border-slate-900',
    shadow && 'drop-shadow-[4px_4px_rgb(15,23,42)]',
    (purpose === 'edit' || purpose === 'delete') && 'w-40 h-14 gap-1',
    additionalClasses,
    ].join(' ');

  return (
    <button type={type} className={buttonClasses} onClick={onClick}>
      {icon && <Image src={icon} alt='button icon image' />}
      <p className={textAdditionalClasses}>{text}</p>
    </button>
  );
};

export default Button;