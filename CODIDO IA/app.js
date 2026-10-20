import { usuarios } from "./index.js";

try {
  const respuesta = await usuarios(8);
  console.log(JSON.stringify(respuesta, null, 2));
} catch (error) {
  console.error("Ocurrió un error:", error.message);
}