import nats from 'node-nats-streaming';

console.clear();

// port forward to nats-depl pod
// kubectl get pods
// kubectl port-forward nats-depl-7fc96b95d4-sjvqn 4222:4222

// kubectl port-forward nats-depl-7fc96b95d4-sjvqn 8222:8222
const stan = nats.connect('ticketing', 'abc', {
  url: 'http://localhost:4222',
});

stan.on('connect', () => {
  console.log('Publisher connected to NATS');

  stan.on('close', () => {
    console.log('NATS connection closed');
    process.exit();
  });


  const data = JSON.stringify({
    id: '123',
    title: 'concert',
    price: 20,
  });

  stan.publish('ticket:created', data, () => {
    console.log('Event published');
  });
});