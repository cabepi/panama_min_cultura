import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import loginHandler from '../../api/login';
import proxyHandler from '../../api/proxy';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Mount the serverless functions to emulate Vercel behavior in local setup
app.post('/api/login', loginHandler);
app.post('/api/proxy', proxyHandler);

// Health check endpoint
app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', environment: 'development' });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
