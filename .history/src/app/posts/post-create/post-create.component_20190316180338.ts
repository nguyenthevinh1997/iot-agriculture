import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Post } from "../post.model";
import { Form, NgForm } from "@angular/forms";
import { PostsService } from "../posts.service";

@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html",
  styleUrls: ["./post-create.component.scss"]
})
export class PostCreateComponent implements OnInit {
  enteredContent = "";
  enteredTitle = "";

  onAddPost(form:NgForm) {
    if(form.invalid){
      return
    }
    const post: Post = {
      title: form.value.title,
      content: form.value.content
    };
  }
  constructor(postsService: PostsService) {}

  ngOnInit() {}
}
