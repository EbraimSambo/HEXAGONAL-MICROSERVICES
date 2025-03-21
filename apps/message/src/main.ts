import { NestFactory } from '@nestjs/core';
import { MessageModule } from './message.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(MessageModule, {
    transport: Transport.RMQ,
    options: {
      urls: [process.env.RABBITMQ_URL || 'amqp://localhost:5672'],
      queue: 'email_send',
      queueOptions: { durable: true  },
    },
  });
  await app.listen();
}
bootstrap();
