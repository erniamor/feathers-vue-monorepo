import io from 'socket.io-client'
import socketio from '@feathersjs/socketio-client'
import { createClient } from 'api'

const apiEndPoint = 'http://localhost:3030';

const socket = io(apiEndPoint);
const connection = socketio(socket)
const api = createClient(connection)

export default api;
