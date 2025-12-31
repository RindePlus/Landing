import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

// Plugin to create 404.html for GitHub Pages SPA routing and update favicon cache
const create404Html = () => {
  return {
    name: 'create-404-html',
    closeBundle() {
      const outDir = 'docs'
      const indexPath = join(outDir, 'index.html')
      const html404Path = join(outDir, '404.html')
      
      // Generate version timestamp to bust favicon cache
      const version = Date.now()
      
      try {
        let html = readFileSync(indexPath, 'utf-8')
        
        // Update favicon with version parameter to bust cache
        html = html.replace(
          /href="\.\/favicon\.ico"/g,
          `href="./favicon.ico?v=${version}"`
        )
        
        // Inject redirect script before closing head tag
        const redirectScript = `
    <script>
      // Fix pathname for client-side routing (GitHub Pages SPA)
      (function() {
        var path = window.location.pathname;
        if (path !== '/' && !path.startsWith('/assets/')) {
          sessionStorage.setItem('redirect', path + window.location.search + window.location.hash);
          window.location.replace('/');
        }
      })();
    </script>`
        
        html = html.replace('</head>', redirectScript + '\n  </head>')
        
        // Write updated index.html
        writeFileSync(indexPath, html, 'utf-8')
        
        // Write 404.html with same favicon version
        writeFileSync(html404Path, html, 'utf-8')
      } catch (error) {
        console.warn('Could not create 404.html:', error.message)
      }
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), create404Html()],
  base: './',
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
