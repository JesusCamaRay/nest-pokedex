import { Module } from '@nestjs/common';
import { AxiosAdapter } from './adapters/axios.adapter';
import { ParseMongoIdPipe } from './pipes/parse-mongo-id.pipe';

@Module({
  providers: [AxiosAdapter, ParseMongoIdPipe],
  exports: [AxiosAdapter, ParseMongoIdPipe],
})
export class CommonModule {}
