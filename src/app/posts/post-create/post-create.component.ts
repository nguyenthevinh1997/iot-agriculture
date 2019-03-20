import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Post } from "../post.model";
import { Form, NgForm } from "@angular/forms";
import { PostsService } from "../posts.service";
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html",
  styleUrls: ["./post-create.component.scss"]
})
export class PostCreateComponent implements OnInit {
  enteredContent = "";
  enteredTitle = "";
  private mode = "create";
  private postId: string;
  private post: Post;
  constructor(
    public postsService: PostsService,
    public route: ActivatedRoute
  ) {}
  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.postsService.addPosts(form.value.title, form.value.content);
    form.resetForm();
  }
  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("postId")) {
        this.mode = "edit";
        this.postId = paramMap.get("postId");
        this.post =  this.postsService.getPost(this.postId);
      } else {
        this.mode = "create";
        this.postId = null;
      }
    });
  }
}
