"use client";
import React, { ReactNode } from 'react';

interface TodoContianerProps  {
  type?: 'list' | 'detail' | 'addtodo';
  additionalClasses?: string; // bg color 등. text color는 TodoInput에서 관리
  children: ReactNode;
  onClick?: () => void;
}


const TodoContainer = ({ type, additionalClasses = '', children }: TodoContianerProps) => {
  const todoContainerClasses = [
    'todo-contianer-base',
    `todo-container-${type}`,
    additionalClasses,
    ].join(' ');


  return (
    <div className={todoContainerClasses} >{children}</div>
  );
};

export default TodoContainer;