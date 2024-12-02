import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { dbConnect, getDatabase } from './db.js';
import { myLogger } from './middleware/myLogger.js';
import { requestTime } from './middleware/requestTime.js';
import postsRoutes from './routes/posts.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//* Middleware
app.use(myLogger);
app.use(requestTime);
app.use(cors());
app.use(express.json());

//* Initialize MongoDB
await dbConnect();

//* MongoDB Collections
export const posts = getDatabase().collection('posts');

//* Routes
app.use('/posts', postsRoutes);

app.get('/', (req, res) => {
  res.send(`Hello world! Requested at: ${req.requestTime}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// TODO: Export the app for serverless deployment (vercel)
export default app;
