import { Publisher, OrderCreatedEvent, Subjects } from '@ticketing-k8s/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: OrderCreatedEvent['subject'] = Subjects.OrderCreated;
}