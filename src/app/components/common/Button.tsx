import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface ButtonProps {
  type?: 'submit' | 'button';
  text?: string;
  icon: StaticImageData;
  variant?: 'violet' | 'lime' | 'slate' | 'dark' | 'rose';
  purpose?: 'addtodo' | 'edit' | 'delete' | undefined;
  shadow?: boolean;
  onClick?: () => void;
  additionalClasses?: string;
  textAdditionalClasses?: string;
}

const Button = ({ type, text, icon, variant = 'violet', purpose, onClick, shadow, additionalClasses = '', textAdditionalClasses }: ButtonProps) => {
  const buttonClasses = [
    'btn-base',
    `btn-${variant}`,
    shadow && 'btn-shadow',
    (purpose === 'edit' || purpose === 'delete') && 'w-40 h-16 gap-1',
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