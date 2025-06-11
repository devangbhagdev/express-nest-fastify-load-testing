import Fastify from 'fastify';
import userRoutes from './routes/user.routes';

const fastify = Fastify({ logger: true });

fastify.register(userRoutes, { prefix: '/users' });

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    console.log(`Server running at http://localhost:3000`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();