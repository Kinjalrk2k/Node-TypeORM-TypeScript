import { Entity, Column } from "typeorm";
import Model from "./Model";

@Entity("posts")
export class Post extends Model {
  @Column()
  title: string;

  @Column()
  body: string;

  constructor({ title, body }: { title: string; body: string }) {
    super();
    Object.assign(this, { title, body });
  }
}
