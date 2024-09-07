import { ChangeEvent } from 'react';

interface MemoContainerProps {
  memoText: string;
  onMemoChange?: (memoText: string) => void;
}


const MemoContainer = ({ memoText, onMemoChange }: MemoContainerProps) => {

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (onMemoChange) {
      onMemoChange(e.target.value); // 부모에게 변경된 메모 전달
    }
  };
  
  return (
    <div className='flex flex-col w-full h-full items-center rounded-3xl overflow-y-auto bg-memo bg-cover bg-center bg-no-repeat px-2 py-4 memo-scrollbar'>
      <div className='flex justify-center h-auto m-4'>
        <p className='text-amber-800 font-extrabold text-base'>Memo</p>
      </div>
      <textarea value={memoText} onChange={onChange}
        className='flex justify-center text-center w-full h-[230px] resize-none border-none outline-none bg-transparent overflow-y-auto memo-scrollbar'/>
    </div>
  )
}

export default MemoContainer;