import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Class } from './class.model';

@ObjectType()
export class School {
  @Field(() => ID)
  id: number;

  @Field()
  skz: string;

  @Field()
  schoolLevel: number;

  @Field((type) => [Class], { nullable: true })
  classes: Class[];

  @Field()
  created_at: Date;
}
