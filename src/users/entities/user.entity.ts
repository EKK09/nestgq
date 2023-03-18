import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int, { description: 'user uid' })
  uid: number;

  @Field(() => String, { description: 'User name' })
  name: string;
}
