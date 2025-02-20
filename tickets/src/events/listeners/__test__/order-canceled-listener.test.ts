import { OrderCanceledListener } from '../order-canceled-listener';
import { natsWrapper } from '../../../nats-wrapper';
import { OrderCanceledEvent } from '@ticketing-k8s/common';
import { Message } from 'node-nats-streaming';
import { Ticket } from '../../../models/ticket';
import mongoose from 'mongoose';

const setup = async () => {
  const listener = new OrderCanceledListener(natsWrapper.client);

  const orderId = new mongoose.Types.ObjectId().toHexString();
  const ticket = Ticket.build({
    title: 'concert',
    price: 99,
    userId: new mongoose.Types.ObjectId().toHexString(),
  });
  ticket.set({ orderId });
  await ticket.save();

  // create a fake data event
  const data: OrderCanceledEvent['data'] = {
    id: new mongoose.Types.ObjectId().toHexString(),
    version: 1,
    ticket: {
      id: ticket.id,
    },
  };

  // @ts-ignore
  const msg: Message = {
    ack: jest.fn(),
  };

  return { listener, ticket, data, msg, orderId };
};

it('updates the ticket, publishes an event, and acks the message', async () => {
  const { listener, ticket, data, msg } = await setup();

  await listener.onMessage(data, msg);

  const updatedTicket = await Ticket.findById(ticket.id);

  expect(updatedTicket!.orderId).not.toBeDefined();
  expect(msg.ack).toHaveBeenCalled();
  expect(natsWrapper.client.publish).toHaveBeenCalled();
});