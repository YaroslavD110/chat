import { ChatModule } from './chat/chat.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [ChatModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
