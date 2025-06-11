import express, { Application } from 'express';
import userRoutes from './routes/userRoutes';

const app: Application = express();

app.use(express.json()); // Middleware to parse JSON

app.use('/users', userRoutes); // Use user routes

export default app;
