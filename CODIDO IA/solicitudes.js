export async function solicitar(url) {
  const respuesta = await fetch(url);

  if (!respuesta.ok) {
    throw new Error(`Error ${respuesta.status} al consultar ${url}`);
  }

  return respuesta.json();
}