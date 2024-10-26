import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/api/orders', async (req: Request, res: Response) => {
  res.send('Hello from orders service');
});

export { router as indexOrderRouter };