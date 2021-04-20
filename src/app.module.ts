import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { SchoolResolver } from './school.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
  ],
  providers: [SchoolResolver],
})
export class AppModule {}
