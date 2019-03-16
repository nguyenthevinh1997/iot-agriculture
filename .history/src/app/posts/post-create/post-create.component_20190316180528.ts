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

  constructor(public postsService: PostsService) {}
  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.postsService.addPosts(form.value.title,form.value.content)
  }
  ngOnInit() {}
}
