import { TagEntity } from "src/tag/tag.entity";
import { FileEntity } from "src/file/file.entity";
import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

@Entity("file_tag")
export class FileTagEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => FileEntity, (file) => file.fileTags)
  file: FileEntity;

  @ManyToOne(() => TagEntity, (tag) => tag.fileTags)
  tag: TagEntity;
}
