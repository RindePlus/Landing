import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync, writeFileSync, copyFileSync } from 'fs'
import { join } from 'path'

// Plugin para crear 404.html para GitHub Pages (necesario para browser routing)
const githubPagesPlugin = () => {
  return {
    name: 'github-pages-404',
    closeBundle() {
      const outDir = 'docs'
      const indexPath = join(outDir, 'index.html')
      const notFoundPath = join(outDir, '404.html')
      
      try {
        // Leer index.html y crear 404.html con el mismo contenido
        const indexContent = readFileSync(indexPath, 'utf-8')
        writeFileSync(notFoundPath, indexContent)
        console.log('✓ Created 404.html for GitHub Pages')
      } catch (error) {
        console.error('Error creating 404.html:', error)
      }
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), githubPagesPlugin()],
  base: '/',
  build: {
    outDir: 'docs',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const ext = info[info.length - 1]
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`
          }
          return `assets/[name]-[hash][extname]`
        }
      }
    }
  },
  assetsInclude: ['**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.svg'],
  optimizeDeps: {
    include: ['react', 'react-dom']
  },
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable'
    }
  }
})
