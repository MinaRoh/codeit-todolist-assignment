import TodoListContainer from './components/Todos/TodoListContainer';
import AddTodoContainer from './components/Todos/AddTodoContainer';


export default function TodoListPage() {
  return (
    <main className='flex min-h-screen min-w-screen w-full flex-col items-center p-4 gap-6 desktop:px-28 desktop-fhd:px-[360px]'>
        <AddTodoContainer />
        <TodoListContainer />
    </main>
  );
};
