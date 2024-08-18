import request from 'supertest';
import { app } from '../../app';

it('can fetch a list of tickets', async () => {
  const tickets = [
    { title: 'ticket1', price: 10 },
    { title: 'ticket2', price: 20 },
    { title: 'ticket3', price: 30 },
  ];

  for (const ticket of tickets) {
    await request(app)
      .post('/api/tickets')
      .set('Cookie', global.signinMock())
      .send(ticket)
      .expect(201);
  }

  const response = await request(app)
    .get('/api/tickets')
    .send()
    .expect(200);

  expect(response.body.length).toEqual(3);
});