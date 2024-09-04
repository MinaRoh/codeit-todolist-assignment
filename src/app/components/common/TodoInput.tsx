"use client";
import React, { useState } from 'react';

interface InputProps {
  text: string;
  detailPage?: boolean;
  additionalClasses?: string; // 추가된다면 line-through, text-color 등.
}
            
const TodoInput = ({ text, detailPage, additionalClasses = '' }: InputProps) => {
  const [inputValue, setInputValue] = useState(text); // 기존에 입력되어있던 text를 기본값으로

  const onTodoInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }
  const todoInputClasses = [
    'input-base',
    detailPage && 'input-detail',
    additionalClasses,
    ].join(' ');

  return (
    <input type='text' value={inputValue} className={todoInputClasses} onChange={onTodoInputChange}/>
  );
};

export default TodoInput;