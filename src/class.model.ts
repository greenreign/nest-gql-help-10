import { Field, ID, ObjectType } from '@nestjs/graphql';
import { School } from './school.model';

@ObjectType()
export class Class {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field((type) => School)
  school: School;

  @Field()
  created_at: Date;
}
