import { Publisher, OrderCanceledEvent, Subjects } from '@ticketing-k8s/common';

export class OrderCanceledPublisher extends Publisher<OrderCanceledEvent> {
  subject: OrderCanceledEvent['subject'] = Subjects.OrderCanceled;
}