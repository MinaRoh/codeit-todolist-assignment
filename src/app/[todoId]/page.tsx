import TodoDetail from './TodoDetail';

interface params{
  params: {
    todoId: string;
  }
}
const TodoDetailPage = ({ params: { todoId } }: params) => {
  console.log(todoId);
  return ( 
    <main className='flex min-h-screen min-w-screen flex-col items-center p-4 gap-6 desktop:px-28 desktop-fhd:px-[360px] bg-gray-50'>
      <TodoDetail todoId={Number(todoId)} />
      </main>
    );
}

export default TodoDetailPage;