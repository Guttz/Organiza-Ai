import { socketServer } from './socket_server';

let app = new socketServer().getApp();
export { app };