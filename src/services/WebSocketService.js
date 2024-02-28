//WebSocketService.js
import { USE_WEBSOCKET, WEBSOCKET_BASE_URL } from '../config/Config.js';

class WebSocketService {
  constructor(eventId, onUpdate) {
    this.eventId = eventId;
    this.onUpdate = onUpdate;
    this.socket = null;
  }

  connect() {
    if (!USE_WEBSOCKET) {
      console.log("WebSocket connection is disabled in development mode.");
      return;
    }

    this.socket = new WebSocket(`${WEBSOCKET_BASE_URL}ws/${this.eventId}`);
    
    this.socket.onmessage = (event) => {
      this.onUpdate(event.data);
    };

    this.socket.onopen = () => {
      console.log("WebSocket connection established!");
    };

    this.socket.onclose = () => {
      console.log("WebSocket connection closed!");
    };

    this.socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };
  }

  disconnect() {
    if (this.socket) {
      this.socket.close();
    }
  }
}

export default WebSocketService;