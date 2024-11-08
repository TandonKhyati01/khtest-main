{
    
    "builds" [
      {
        "src": "dist/index.html",
        "use": "@vercel/static"
      }
    ],
    "routes" [
      {
        "src": "/(.*)",
        "dest": "/dist/index.html"
      }
    ],
    "rewrites" [
      {
        "src": "/api/(.*)",
        "dest": "/api/index.js"
      }
    ]
  }
  