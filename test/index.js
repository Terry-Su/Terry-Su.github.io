const ws = new WebSocket('ws://localhost:8080');

ws.onopen = () => {
  console.log('Connected to WebSocket server');
  ws.send('show databases');
};

ws.onmessage = (event) => {
  console.log('Received message:', event.data);
};

ws.onclose = () => {
  console.log('Disconnected from WebSocket server');
};

ws.onerror = (error) => {
  console.error('WebSocket error:', error);
};