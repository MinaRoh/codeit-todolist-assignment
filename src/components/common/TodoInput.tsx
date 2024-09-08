'use client';
import React, { useEffect, useState } from 'react';

interface InputProps {
  text: string;
  detailPage?: boolean;
  additionalClasses?: string; // 추가된다면 line-through, text-color 등.
  readOnly?: boolean;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TodoInput = ({ text, detailPage, additionalClasses = '', readOnly, placeholder, onChange }: InputProps) => {
  const [inputValue, setInputValue] = useState(text); // 기존에 입력되어있던 text를 기본값으로

  useEffect(() => {
    setInputValue(text); // 외부에서 전달된 text로 업데이트
  }, [text]);

  
  const onTodoInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
      if (onChange) {
      onChange(e); // AddTodoContainer에서 전달한 onChange 호출
    }
  }

  const todoInputClasses = [
    'input-base',
    detailPage && 'input-detail',
    additionalClasses,
    ].join(' ');

  return (
    <input type='text' placeholder={placeholder} value={inputValue} className={todoInputClasses} onChange={onTodoInputChange} readOnly={readOnly} />
  );
};

export default TodoInput;