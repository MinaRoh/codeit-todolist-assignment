import TodoDetail from '@/app/components/TodoDetail/TodoDetail';

const TodoDetailPage = () => {
  return (
    <main className='flex min-h-screen min-w-screen flex-col items-center p-4 gap-6 desktop:px-28 desktop-fhd:px-[360px] bg-gray-50'>
      <TodoDetail/>
          {/* <AddTodoContainer />
          <TodoListContainer /> */}
      </main>
    );
}

export default TodoDetailPage;