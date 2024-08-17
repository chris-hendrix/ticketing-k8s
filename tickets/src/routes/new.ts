import express, { Request, Response } from 'express';
import { requireAuth } from '@ticketing-k8s/common';

const router = express.Router();

router.post('/api/tickets', requireAuth, (req: Request, res: Response) => {
  console.log({ req });
  console.log(req.get('set-cookie'));
  res.sendStatus(200);
});

export { router as createTicketRouter };