
import { getTodo } from '@/app/apis/\btodoApi';
import { create } from 'zustand'

export interface TodoProps {
  id: number;
  name: string;
  isCompleted: boolean;
  memo: string;
  imageUrl: string;
}

type TodoStore = {
  todos: TodoProps[];
  getTodoStore: () => Promise<void>;
}

const useTodoStore = create<TodoStore>()((set) => ({
  todos: [],
  getTodoStore: async () => {
    try {
      const todos = await getTodo({ pageNum: 1, pageSize: 10 });
      set({ todos });
    } catch (error) {
      console.error('Error getting todos:', error);
    }
  },
}));


export default useTodoStore;