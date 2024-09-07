import TodoListContainer from './components/Todos/TodoListContainer';
import AddTodoContainer from './components/Todos/AddTodoContainer';


export default function TodoListPage() {
  return (
    <main className='flex min-h-screen min-w-screen w-full flex-col items-center p-4 gap-6 desktop:px-28 desktop-fhd:px-[360px] bg-gray-50'>
        <AddTodoContainer />
        <TodoListContainer />
    </main>
  );
} 

{/* <TodoContainer type='list' additionalClasses='bg-white'>
          <Image src={checkbox} alt='check' />
          <TodoInput text='비타민 챙겨 먹기' detailPage={false} />
        </TodoContainer>


        <TodoContainer type='list' additionalClasses='bg-violet-100'>
          <Image src={checkbox_done} alt='check_done' />
          <TodoInput text='비타민 챙겨 먹기' additionalClasses='line-through text-slate-800'/>
        </TodoContainer>


        <TodoContainer type='detail' additionalClasses='bg-white'>
          <Image src={checkbox} alt='check' />
          <TodoInput text='비타민 챙겨 먹기' detailPage/>
        </TodoContainer>

        <TodoContainer type='detail' additionalClasses='bg-violet-100'>
          <Image src={checkbox_done} alt='check' />
          <TodoInput text='비타민 챙겨 먹기' detailPage/>
        </TodoContainer>


        <TodoContainer type='addtodo' additionalClasses='bg-slate-100'>
          <TodoInput text='할 일을 입력해 주세요' additionalClasses='text-slate-500'/>
        </TodoContainer>

        <TodoContainer type='addtodo' additionalClasses='bg-slate-100'>
          <TodoInput
            text='길이가 길어질 경우 다음과 같이 계속 오른쪽으로 갑니다... 길이가 길어질 경우 다음과 같이 계속 오른쪽으로 갑니다... 길이가 길어질 경우 다음과 같' />
        </TodoContainer> */}
