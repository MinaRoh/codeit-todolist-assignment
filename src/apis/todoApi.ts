import { UpdateTodoProps } from '@/store/todoStore';

const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_TENANT_ID}`;

export const getTodo = async ({ pageNum = 1, pageSize = 10 }) => {
  try {
    const res = await fetch(`${BASE_URL}/items?page=${pageNum}&pageSize=${pageSize}`, {
      method: 'GET',
    });
    if (!res.ok) {
      throw new Error(`res status: ${res.status}`);
    }
    return res.json();
  } catch (err) {
    console.error(err);
  }
};

export const addTodo = async (todo: string) => {
  try {
    const res = await fetch(`${BASE_URL}/items`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'accept': 'application/json',
      },
      body: JSON.stringify({ name: todo }),
    });
    if (!res.ok) {
      alert('할 일을 추가하는 것에 실패했습니다!');
      throw new Error(`res status: ${res.status}`);
    }
    return res.json();
  } catch (err) {
    console.error(err);
  }
};

export const getTodoDetail = async (itemId: number) => {
  try {
    const res = await fetch(`${BASE_URL}/items/${itemId}`, {
      method: 'GET',
    });

    if (res.status === 404) {
      alert('해당 할 일이 없습니다!');
      window.location.pathname = '/';
    }
    else if (!res.ok) {
      alert('해당 할 일을 가져오는 것에 실패했습니다!');
      window.location.pathname = '/';
      throw new Error(`res status: ${res.status}`);
    }
    return res.json();

  } catch (err) {
    console.error(err);
  }
};

export const updateTodo = async (itemId: number, updatedTodo: UpdateTodoProps) => {
  try {
    const res = await fetch(`${BASE_URL}/items/${itemId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'accept': 'application/json',
      },
      body: JSON.stringify(updatedTodo),
    });
    if (!res.ok) {
      alert('할 일 수정에 실패했습니다!');
      throw new Error(`res status: ${res.status}`);
    }
    return res.json();

  } catch (err) {
    console.error(err);
  }
};

export const deleteTodo = async (itemId: number) => {
  try {
    const res = await fetch(`${BASE_URL}/items/${itemId}`, {
      method: 'DELETE',
    });
    if (!res.ok) {
      alert('할 일 삭제에 실패했습니다!');
      throw new Error(`res status: ${res.status}`);
    }
    return res.json();
  } catch (err) {
    console.error(err);
  }
};