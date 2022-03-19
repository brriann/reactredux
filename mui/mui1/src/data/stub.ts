import { Notification, Message } from './types';

export const notifications: Notification[] = [
  {
    id: 1,
    title: 'some notification 1',
  },
  {
    id: 2,
    title: 'some notification 2',
  },
  {
    id: 3,
    title: 'some notification 3',
  },
];

export const messages: Message[] = [
  {
    id: 1,
    subject: 'message 1',
    body: 'asdf',
    from: 'Bob Jones',
  },
  {
    id: 2,
    subject: 'message 2',
    body: 'asdfasdf',
    from: 'Janet Kim',
  },
  {
    id: 3,
    subject: 'message 3',
    body: 'zxcv',
    from: 'Polly Zane',
  },
];
