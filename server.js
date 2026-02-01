// Use a high port number that's unlikely to be in use
const PORT = parseInt(Bun.env.PORT || process.env.PORT || '12345', 10);

function errorPage(code, title, message) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} - Metris</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      background: linear-gradient(135deg, #0a0f1a 0%, #111827 100%);
      color: #f9fafb;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
    }
    .container {
      text-align: center;
      max-width: 420px;
    }
    .icon {
      width: 80px;
      height: 80px;
      margin: 0 auto 24px;
      background: rgba(16, 185, 129, 0.1);
      border: 1px solid rgba(16, 185, 129, 0.3);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .icon svg {
      width: 40px;
      height: 40px;
      color: #10b981;
    }
    .code {
      font-size: 64px;
      font-weight: 700;
      color: #10b981;
      line-height: 1;
      margin-bottom: 8px;
    }
    h1 {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 12px;
    }
    p {
      font-size: 15px;
      color: #9ca3af;
      line-height: 1.6;
      margin-bottom: 32px;
    }
    .btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 12px 24px;
      background: #10b981;
      color: white;
      font-size: 14px;
      font-weight: 600;
      border: none;
      border-radius: 10px;
      text-decoration: none;
      transition: background 0.2s;
    }
    .btn:hover { background: #059669; }
    .btn svg { width: 18px; height: 18px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="icon">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        ${code === 404 
          ? '<circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>'
          : '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>'
        }
      </svg>
    </div>
    <div class="code">${code}</div>
    <h1>${title}</h1>
    <p>${message}</p>
    <a class="btn" href="/">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
      Go to Portal
    </a>
  </div>
</body>
</html>`;
}

Bun.serve({
  port: PORT,
  async fetch(req) {
    const url = new URL(req.url);
    let filePath = url.pathname === '/' ? 'onboarding-portal.html' : url.pathname.slice(1);
    
    if (!filePath || filePath === '') {
      filePath = 'onboarding-portal.html';
    }
    
    try {
      const file = Bun.file(filePath);
      const exists = await file.exists();
      
      if (!exists) {
        return new Response(
          errorPage(404, "Page not found", "The page you're looking for doesn't exist or may have moved. Head back to the portal to continue."),
          { status: 404, headers: { 'Content-Type': 'text/html' } }
        );
      }
      
      let contentType = 'text/html';
      if (filePath.endsWith('.css')) contentType = 'text/css';
      else if (filePath.endsWith('.js')) contentType = 'application/javascript';
      else if (filePath.endsWith('.png')) contentType = 'image/png';
      else if (filePath.endsWith('.svg')) contentType = 'image/svg+xml';
      else if (filePath.endsWith('.ttf')) contentType = 'font/ttf';
      else if (filePath.endsWith('.jpg') || filePath.endsWith('.jpeg')) contentType = 'image/jpeg';
      
      return new Response(file, {
        headers: { 'Content-Type': contentType }
      });
    } catch (error) {
      console.error('Error:', error);
      return new Response(
        errorPage(500, "Something went wrong", "We hit an unexpected error. Try refreshing the page, or head back to the portal."),
        { status: 500, headers: { 'Content-Type': 'text/html' } }
      );
    }
  },
});

console.log('');
console.log('🚀 ========================================');
console.log('   Metris Onboarding Portal');
console.log('   ========================================');
console.log(`   🌐 http://localhost:${PORT}/onboarding-portal.html`);
console.log('   ========================================');
console.log('');
console.log('Press Ctrl+C to stop the server');
console.log('');
