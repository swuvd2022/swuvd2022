import { BASE_URL } from 'apis';
import { rest } from 'msw';
import { Comment } from 'types/domain';

export const handlers = [
  rest.get(`${BASE_URL}/guestbook?id=:id`, (req, res, ctx) => {
    const productId = Number(req.url.searchParams.get('id'));

    return res(ctx.status(200), ctx.json(comments[productId - 1]));
  }),
];

const comments: Comment[][] = [
  [
    {
      id: 1,
      name: '김의진1',
      message:
        '축하해축하해축하해축하해축하해축하해축하해축하해축하해축하해축하해축하해축하해축하해축하해축하해축하해축하해',
      createdDate: '2022.06.24',
    },
    {
      id: 2,
      name: '김의진2',
      message:
        '축하해축하해축하해축하해축하해축하해축하해축하해축하해축하해축하해축하해축하해축하해축하해축하해축하해축하축하해축하해축하해축하해축하해축하해축하해축하해축하해축하해축하해축하해축하해축하해축하해축하해축하해축하',
      createdDate: '2022.06.24',
    },
    {
      id: 3,
      name: '김의진3',
      message:
        '축하해축하해축하해축하해축하해축하해축하해축하해축하해축하해축하해축하해축하해축하해축하해축하해축하해축하축하해축하해축하해축하해축하해축하해축하해축하해축하해축하해축하해축하해축하해축하해축하해축하해축하해축하축하해축하해축하해축하해축하해축하해축하해축하해축하해축하해축하해축하해축하해축하해축하해축하해축하해축하',
      createdDate: '2022.06.24',
    },
    {
      id: 4,
      name: '김의진4',
      message: '축하해',
      createdDate: '2022.06.24',
    },
    {
      id: 5,
      name: '김의진5',
      message: '축하해',
      createdDate: '2022.06.24',
    },
    {
      id: 6,
      name: '김의진6',
      message: '축하해',
      createdDate: '2022.06.24',
    },
    {
      id: 7,
      name: '김의진7',
      message: '축하해',
      createdDate: '2022.06.24',
    },
    {
      id: 8,
      name: '김의진8',
      message: '축하해',
      createdDate: '2022.06.24',
    },
    {
      id: 9,
      name: '김의진9',
      message: '축하해',
      createdDate: '2022.06.24',
    },
    {
      id: 10,
      name: '김의진10',
      message: '축하해',
      createdDate: '2022.06.24',
    },
    {
      id: 11,
      name: '김의진',
      message: '축하해',
      createdDate: '2022.06.24',
    },
  ],
  [
    {
      id: 1,
      name: '김의진1',
      message: '축하해',
      createdDate: '2022.06.24',
    },
    {
      id: 2,
      name: '김의진2',
      message: '축하해',
      createdDate: '2022.06.24',
    },
    {
      id: 3,
      name: '김의진3',
      message: '축하해',
      createdDate: '2022.06.24',
    },
    {
      id: 4,
      name: '김의진4',
      message: '축하해',
      createdDate: '2022.06.24',
    },
    {
      id: 5,
      name: '김의진5',
      message: '축하해',
      createdDate: '2022.06.24',
    },
    {
      id: 6,
      name: '김의진6',
      message: '축하해',
      createdDate: '2022.06.24',
    },
    {
      id: 7,
      name: '김의진7',
      message: '축하해',
      createdDate: '2022.06.24',
    },
    {
      id: 8,
      name: '김의진8',
      message: '축하해',
      createdDate: '2022.06.24',
    },
    {
      id: 9,
      name: '김의진9',
      message: '축하해',
      createdDate: '2022.06.24',
    },
    {
      id: 10,
      name: '김의진10',
      message: '축하해',
      createdDate: '2022.06.24',
    },
    {
      id: 11,
      name: '김의진',
      message: '축하해',
      createdDate: '2022.06.24',
    },
  ],
  [
    {
      id: 1,
      name: '김의진1',
      message: '축하해',
      createdDate: '2022.06.24',
    },
    {
      id: 2,
      name: '김의진2',
      message: '축하해',
      createdDate: '2022.06.24',
    },
    {
      id: 3,
      name: '김의진3',
      message: '축하해',
      createdDate: '2022.06.24',
    },
    {
      id: 4,
      name: '김의진4',
      message: '축하해',
      createdDate: '2022.06.24',
    },
    {
      id: 5,
      name: '김의진5',
      message: '축하해',
      createdDate: '2022.06.24',
    },
    {
      id: 6,
      name: '김의진6',
      message: '축하해',
      createdDate: '2022.06.24',
    },
    {
      id: 7,
      name: '김의진7',
      message: '축하해',
      createdDate: '2022.06.24',
    },
    {
      id: 8,
      name: '김의진8',
      message: '축하해',
      createdDate: '2022.06.24',
    },
    {
      id: 9,
      name: '김의진9',
      message: '축하해',
      createdDate: '2022.06.24',
    },
    {
      id: 10,
      name: '김의진10',
      message: '축하해',
      createdDate: '2022.06.24',
    },
    {
      id: 11,
      name: '김의진',
      message: '축하해',
      createdDate: '2022.06.24',
    },
  ],
];
