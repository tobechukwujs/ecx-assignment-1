const http = require('http');
const PORT = process.env.PORT || 7000;
const server = http.createServer((req, res) => {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  const dateString = now.toLocaleDateString();
  
  res.writeHead(200, { 'Content-Type': 'text/html' });
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Week 1 Server</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          margin: 0;
          padding: 20px;
        }
        .container {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          max-width: 600px;
          text-align: center;
        }
        h1 {
          font-size: 2.5em;
          margin-bottom: 10px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }
        .info {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          padding: 20px;
          margin: 20px 0;
        }
        .info p {
          margin: 10px 0;
          font-size: 1.1em;
        }
        .highlight {
          color: #ffd700;
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Welcome to My Server!</h1>
        <h2>Created by <span class="highlight">Tobechukwu</span></h2>
        
        <div class="info">
          <p>📅 Date: <span class="highlight">${dateString}</span></p>
          <p>⏰ Time: <span class="highlight">${timeString}</span></p>
        </div>
        
        <p>🎓 Week 1 Assignment Complete!</p>
      </div>
    </body>
    </html>
  `;
  
  res.end(html);
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running!`);
  console.log(`Listening on port ${PORT}...`);
 
});