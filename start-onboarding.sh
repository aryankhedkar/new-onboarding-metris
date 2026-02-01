#!/bin/bash
cd "$(dirname "$0")/onboarding-portal"

echo "🚀 Starting Metris Onboarding Portal..."
echo ""

# Try ports starting from 5000
PORT=5000
MAX_ATTEMPTS=10
ATTEMPT=0

while [ $ATTEMPT -lt $MAX_ATTEMPTS ]; do
  if lsof -Pi :$PORT -sTCP:LISTEN -t >/dev/null 2>&1 ; then
    PORT=$((PORT + 1))
    ATTEMPT=$((ATTEMPT + 1))
  else
    break
  fi
done

if [ $ATTEMPT -eq $MAX_ATTEMPTS ]; then
  echo "❌ Could not find an available port. Please close some applications."
  exit 1
fi

echo "📍 Using port: $PORT"
echo "🌐 Server will be available at: http://localhost:$PORT"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

PORT=$PORT bun server.js
