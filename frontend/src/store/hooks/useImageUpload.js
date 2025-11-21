// Debería guardar esta api key en un .env, pero para facilitar el trabajo 
// del reviewer la guardo directamente aqui
const IMGBB_API_KEY = '9d8e80bedb9dc81b84a2624ba09774bb';

export async function uploadImageToImgbb(file) {
  if (!file) throw new Error('No file provided');

  const formData = new FormData();
  formData.append('image', file);

  const response = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error.message || 'Error uploading image');
  }

  const data = await response.json();
  return data.data.url;
}
