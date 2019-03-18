import { Posts } from "./post.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
@Injectable({ providedIn: "root" })
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) {}

  getPosts() {
    this.http
      .get<{ message: string; posts: Posts[] }>(
        "http://localhost:3000/api/posts"
      )
      .subscribe(() => {});
  }
  getPostsUpdateListener() {
    return this.postsUpdated.asObservable();
  }
  addPosts(title: string, content: string) {
    const post = { title: title, content: content };
    this.posts.push(post);
    console.log(this.posts);
    this.postsUpdated.next([...this.posts]);
  }
}
