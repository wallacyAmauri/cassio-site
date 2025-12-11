import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Função para determinar o base path
function getBasePath() {
  // Prioridade 1: Variável de ambiente explícita
  if (process.env.VITE_BASE_PATH) {
    return process.env.VITE_BASE_PATH
  }
  
  // Prioridade 2: Detectar do GITHUB_REPOSITORY
  if (process.env.GITHUB_REPOSITORY) {
    const [owner, repo] = process.env.GITHUB_REPOSITORY.split('/')
    
    // Se o repositório é um user page (username.github.io), base path é '/'
    // Exemplo: wallacyamauri/wallacyamauri.github.io -> base path = '/'
    if (repo === `${owner}.github.io` || repo === owner) {
      console.log(`[Vite Config] User page detectado: base path = '/'`)
      return '/'
    }
    
    // Caso contrário, é um project page, usa o nome do repo
    const basePath = `/${repo}/`
    console.log(`[Vite Config] Project page detectado: base path = '${basePath}'`)
    return basePath
  }
  
  // Fallback: sem base path (desenvolvimento local)
  console.log(`[Vite Config] Modo desenvolvimento: base path = '/'`)
  return '/'
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: getBasePath(),
  server: {
    allowedHosts: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json']
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
}) 