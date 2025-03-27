import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { writeFileSync } from 'fs';

// Create a custom 404.html file for GitHub Pages
const createGitHubPages404 = () => {
  return {
    name: 'create-github-pages-404',
    closeBundle() {
      const html404 = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Pine Valley - Redirecting</title>
  <script type="text/javascript">
    var pathSegmentsToKeep = 1;
    var l = window.location;
    l.replace(
      l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
      l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
      l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
      (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
      l.hash
    );
  </script>
</head>
<body>
  Redirecting...
</body>
</html>`;
      writeFileSync('dist/404.html', html404);
      writeFileSync('dist/.nojekyll', '');
    }
  };
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/pineville-host/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    emptyOutDir: true,
    sourcemap: false,
    copyPublicDir: true,
  },
  server: {
    host: "::",
    port: 5000,
  },
  plugins: [
    react(),
    createGitHubPages404(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
