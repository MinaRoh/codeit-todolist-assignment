import { addTodo, getTodo, getTodoDetail, updateTodo } from '@/app/apis/todoApi';
import { create } from 'zustand'

export interface TodoProps extends EditedTodoProps {
  id: number;
}

export interface EditedTodoProps {
  name: string;
  memo: string;
  imageUrl: string;
  isCompleted: boolean;
}

type TodoStore = {
  todos: TodoProps[];
  todoDetail: TodoProps;
  getTodoStore: () => Promise<void>;
  getTodoDetailStore: (todoId: number) => Promise<void>;
  addTodoStore: (name: string) => Promise<void>;
  updateTodoStore: (id: number, updatedTodo: EditedTodoProps) => Promise<void>;

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
  getTodoStore: async () => {
    try {
      const todos = await getTodo({ pageNum: 1, pageSize: 100 });
      const sortedTodos = todos.sort((a: { id: number; }, b: { id: number; }) => a.id - b.id); // id 작은것부터 보이도록
      set({ todos: sortedTodos });
    } catch (error) {
      console.error('Error getting todos:', error);
    }
  },
  getTodoDetailStore: async (todoId: number) => {
    try {
      const resJson = await getTodoDetail(todoId);
      const { tenantId, ...todoDetail } = resJson; // tenantId 제외하고 newTodo에 저장

      set({ todoDetail });
    } catch (error) {
      console.error('Error getting todos:', error);
    }
  },
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
}));


export default useTodoStore;