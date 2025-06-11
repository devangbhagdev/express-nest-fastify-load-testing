import { FastifyInstance } from 'fastify';
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} from '../controllers/user.controller';

export default async function userRoutes(fastify: FastifyInstance) {
  fastify.get('/', getUsers);
  fastify.get('/:id', getUserById);
  fastify.post('/', createUser);
  fastify.put('/:id', updateUser);
  fastify.delete('/:id', deleteUser);
}