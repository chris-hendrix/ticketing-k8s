import nats from 'node-nats-streaming';
import { TicketCreatedPublisher } from './events/ticket-created-publisher';

console.clear();

// port forward to nats-depl pod
// kubectl get pods
// kubectl port-forward nats-depl-7fc96b95d4-sjvqn 4222:4222

// kubectl port-forward nats-depl-7fc96b95d4-sjvqn 8222:8222
const stan = nats.connect('ticketing', 'abc', {
  url: 'http://localhost:4222',
});

stan.on('connect', async () => {
  console.log('Publisher connected to NATS');

  const publisher = new TicketCreatedPublisher(stan);
  await publisher.publish({
    id: '123',
    title: 'concert',
    price: 20,
  });

  stan.on('close', () => {
    console.log('NATS connection closed');
    process.exit();
  });
});