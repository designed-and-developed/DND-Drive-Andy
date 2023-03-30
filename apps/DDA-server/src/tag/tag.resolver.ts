import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TagService } from './tag.service';
import { CreateTagInput } from './dto/create-tag.input';
import { UpdateTagInput } from './dto/update-tag.input';

@Resolver('Tag')
export class TagResolver {
  constructor(private readonly tagService: TagService) {}

  @Mutation('createTag')
  create(@Args('createTagInput') createTagInput: CreateTagInput) {
    return this.tagService.create(createTagInput);
  }

  @Query('tags')
  findAll() {
    return this.tagService.findAll();
  }

  @Query('tag')
  findOne(@Args('id') id: number) {
    return this.tagService.findOne(id);
  }

  @Mutation('updateTag')
  update(@Args('updateTagInput') updateTagInput: UpdateTagInput) {
    return this.tagService.update(updateTagInput.id, updateTagInput);
  }

  @Mutation('removeTag')
  remove(@Args('id') id: number) {
    return this.tagService.remove(id);
  }
}
