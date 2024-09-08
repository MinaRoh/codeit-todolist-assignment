import { addTodo, deleteTodo, getTodo, getTodoDetail, updateTodo } from '@/apis/todoApi';
import { create } from 'zustand'

export interface TodoProps extends EditedTodoProps {
  id: number;
}

export interface EditedTodoProps extends IsCompletedProps {
  name: string;
  memo: string;
  imageUrl: string;
}

export interface IsCompletedProps {
  isCompleted: boolean;
}

export type UpdateTodoProps = EditedTodoProps | IsCompletedProps;

type TodoStore = {
  todos: TodoProps[];
  todoDetail: TodoProps;
  getTodoStore: () => Promise<void>;
  getTodoDetailStore: (id: number) => Promise<void>;
  addTodoStore: (name: string) => Promise<void>;
  updateTodoStore: (id: number, updatedTodo: EditedTodoProps) => Promise<void>;
  updateTodoIsCompletedStore: (id: number, isCompleted: boolean) => Promise<void>;
  deleteTodoStore: (id: number) => Promise<void>;
}

const useTodoStore = create<TodoStore>()((set) => ({
  todos: [],
  todoDetail: {
    id: 0,
    name: '',
    memo: '',
    imageUrl: '',
    isCompleted: false,
    tenantId: '',
  },

  /** todolist 전체를 서버에 요청해 todos, todosToDo, todosDone에 저장 */
  getTodoStore: async () => {
    try {
      const todos = await getTodo({ pageNum: 1, pageSize: 100 });
      const sortedTodos = todos.sort((a: { id: number; }, b: { id: number; }) => a.id - b.id); // id 작은것부터 보이도록
      set({ todos: sortedTodos });
    } catch (error) {
      console.error('Error getting todos:', error);
    }
  },
  /** todolist 전체를 서버에 요청해 todos, todosToDo, todosDone에 저장 */
  getTodoDetailStore: async (id: number) => {
    try {
      const resJson = await getTodoDetail(id);
      const { tenantId, ...todoDetail } = resJson; // tenantId 제외하고 newTodo에 저장

      set({ todoDetail });
    } catch (error) {
      console.error('Error getting todos:', error);
    }
  },
  /** 입력받은 새로운 todo 1개를 서버에 추가, 기존의 todos와 입력받은 todo를 합쳐 기존의 todos를 업데이트 */
  addTodoStore: async (name: string) => {
    try {
      const resJson = await addTodo(name);
      const { tenantId, ...newTodo } = resJson; // tenantId 제외하고 newTodo에 저장
      set((state) => {
        const updatedTodos = [...state.todos, newTodo];
        return { todos: updatedTodos }
      });
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  },
  /** 기존 todo를 업데이트 (여러개)*/
  updateTodoStore: async (id: number, updatedTodo: EditedTodoProps) => {
    try {
      const resJson = await updateTodo(id, updatedTodo);
      set((state) => {
        // todos를 순회하며 현재 id와 동일한 todo에 대해 응답으로 받은 업데이트된 투두를 기존의 투두에 덮어쓰기
        const updatedTodos = state.todos.map((todo) =>
          todo.id === id ? { ...todo, ...resJson } : todo
        );
        return { todos: updatedTodos }
      })
    } catch (error) {
      console.error('Error editing todo:', error);
    }
  },
  /** isCompleted 상태만 업데이트 */
  updateTodoIsCompletedStore: async (id: number, isCompleted: boolean) => {
    try {
      const resJson = await updateTodo(id, { isCompleted: isCompleted });
      set((state) => {
        // todos를 순회하며 현재 id와 동일한 todo에 대해 응답으로 받은 업데이트된 투두를 기존의 투두에 덮어쓰기
        const updatedTodos = state.todos.map((todo) =>
          todo.id === id ? { ...todo, ...resJson } : todo
        );
        return { todos: updatedTodos }
      })
    } catch (error) {
      console.error('Error editing todo:', error);
    }
  },
  deleteTodoStore: async (id: number) => {
    try {
      await deleteTodo(id);
      set((state) => {
        const updatedTodos = state.todos.filter((todo) => todo.id !== id); // 해당하는 아이디를 제외하고 나머지만 저장
        return { todos: updatedTodos }
      });
    } catch (error) {
      console.error('Error deleting todos:', error);
    }
  },
}));


export default useTodoStore;