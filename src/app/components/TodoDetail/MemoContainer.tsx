const MemoContainer = ({memoText}:{memoText:string}) => {

  return (
    <div className='flex flex-col w-full min-h-40 rounded-3xl bg-cover bg-center bg-no-repeat bg-memo'>
      {memoText}
    </div>
  )
}

export default MemoContainer;