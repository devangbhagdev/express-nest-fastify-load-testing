import { FastifyReply, FastifyRequest } from 'fastify';
import { User } from '../models/user.model';

let users: User[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

export const getUsers = async (req: FastifyRequest, reply: FastifyReply) => {
  reply.send(users);
};

export const getUserById = async (req: FastifyRequest<{ Params: { id: number } }>, reply: FastifyReply) => {
  const user = users.find(u => u.id === req.params.id);
  user ? reply.send(user) : reply.status(404).send({ message: 'User not found' });
};

export const createUser = async (req: FastifyRequest<{ Body: User }>, reply: FastifyReply) => {
  const newUser = req.body;
  users.push(newUser);
  reply.status(201).send(newUser);
};

export const updateUser = async (req: FastifyRequest<{ Params: { id: number }; Body: Partial<User> }>, reply: FastifyReply) => {
  const index = users.findIndex(u => u.id === req.params.id);
  if (index === -1) return reply.status(404).send({ message: 'User not found' });

  users[index] = { ...users[index], ...req.body };
  reply.send(users[index]);
};

export const deleteUser = async (req: FastifyRequest<{ Params: { id: number } }>, reply: FastifyReply) => {
  users = users.filter(u => u.id !== req.params.id);
  reply.send({ message: 'User deleted' });
};