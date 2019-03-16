import { Post } from "./post.model";
import { Injectable } from "@angular/core";
import {Subject} from 'rxjs';
@Injectable({ providedIn: "root" })
export class PostsService {
  private posts: Post[] = [];
  getPosts() {
    return this.posts;
  }
  addPosts(title: string, content: string) {
    const post = { title: title, content: content };
    this.posts.push(post);
  }
}
