import TodoDetail from '../../components/TodoDetail/TodoDetail';

interface params{
  params: {
    todoId: string;
  }
}
const TodoDetailPage = ({ params: { todoId } }: params) => {
  return ( 
    <main className='flex min-h-screen min-w-screen flex-col items-center p-4 gap-6 desktop:px-28 desktop-fhd:px-[360px] desktop:mx-36 desktop-fhd:max-h-80 desktop:bg-white desktop-fhd:bg-white'>
      <TodoDetail todoId={Number(todoId)} />
      </main>
    );
}

export default TodoDetailPage;