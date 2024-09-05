const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_TENANT_ID}`;

export const getTodo = async ({ pageNum = 1, pageSize = 10 }) => {
  try {
    const res = await fetch(`${BASE_URL}/items?page=${pageNum}&pageSize=${pageSize}`, {
      method: 'GET',
      cache: 'no-cache',
    });

    if (!res.ok) {
      throw new Error(`res status: ${res.status}`);
    }

    return res.json();

  } catch (err) {
    console.error(err);
  }
}