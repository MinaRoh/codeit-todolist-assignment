
import { addTodo, getTodo } from '@/app/apis/\btodoApi';
import { create } from 'zustand'

export interface TodoProps {
  id: number;
  name: string;
  memo: string;
  imageUrl: string;
  isCompleted: boolean;
}

type TodoStore = {
  todos: TodoProps[];
  getTodoStore: () => Promise<void>;
  addTodoStore: (name: string) => Promise<void>;
}

const useTodoStore = create<TodoStore>()((set) => ({
  todos: [],
  getTodoStore: async () => {
    try {
      const todos = await getTodo({ pageNum: 1, pageSize: 10 });
      const sortedTodos = todos.sort((a: { id: number; }, b: { id: number; }) => a.id - b.id); // id 작은것부터 보이도록
      set({ todos: sortedTodos });
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
  }
}));


export default useTodoStore;