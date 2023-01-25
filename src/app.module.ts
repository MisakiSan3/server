import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VentasModule } from './ventas/ventas.module';

@Module({
  imports: [VentasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
