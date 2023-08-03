import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://<Karla038.github.io/ApiRickandMortyReact/",
  plugins: [react()],
})
