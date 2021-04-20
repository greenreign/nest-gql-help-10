import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Class } from './class.model';
import { School } from './school.model';

@Resolver((of) => School)
export class SchoolResolver {
  @Query(() => [School])
  async schools() {
    const schools: School[] = [
      { id: 1, schoolLevel: 1, skz: 'skz', created_at: new Date() } as School,
    ];
    return schools;
  }

  @ResolveField((returns) => [Class])
  async classes(@Parent() school: School) {
    const { id } = school;
    const classes: Class[] = [
      { id: 2, name: 'class', created_at: new Date() } as Class,
    ];
    return classes;
  }
}
