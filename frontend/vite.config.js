import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { loadEnv } from 'vite';
import path from 'path';

const rootDir = path.resolve(__dirname, '../');

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Cargar las variables de entorno desde el archivo .env en la carpeta raíz del proyecto
  const env = loadEnv(mode, __dirname, '');

  return {
    plugins: [react()],
    server: {
      host: true,
      strictPort: true,
      port: env.VITE_APP_PORT || 1233, // Usar el puerto del .env o 1233 por defecto
    },
    define: {
      __APP_ENV__: env.APP_ENV,
      'process.env': JSON.stringify(env), // Hace que las variables de entorno estén disponibles en el código de cliente
    },
  };
});