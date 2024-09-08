const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_TENANT_ID}`;

export const uploadImage = async (formData: FormData) => {
  try {
    const res = await fetch(`${BASE_URL}/images/upload`, {
      method: 'POST',
      body: formData,
    });
    if (!res.ok) {
      throw new Error(`res status: ${res.status}`);
    }
    return res.json();
  } catch (err) {
    console.error(err);
  }
};