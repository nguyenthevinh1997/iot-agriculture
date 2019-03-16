import { Component, OnInit, Input } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Post } from "../post.model";
import { PostsService } from "../posts.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.scss"]
})
export class PostListComponent implements OnInit {
  // posts = [
  //   {title: 'First Post', content:'This is the first post\'s content'},
  //   {title: 'Second Post', content:'This is the second post\'s content'},
  //   {title: 'Third Post', content:'This is the third post \'s content'}
  // ];
  posts: Post[] = [];
  private postsSub : Subscription;
  constructor(public postsService: PostsService) {}

  ngOnInit() {
    this.posts = this.postsService.getPosts();
    this.postsService.getPostsUpdateListener().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }
}
