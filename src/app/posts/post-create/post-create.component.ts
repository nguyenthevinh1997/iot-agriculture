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
  post: Post;
  isloading = false;
  private mode = "create";
  private postId: string;
  constructor(
    public postsService: PostsService,
    public route: ActivatedRoute
  ) {}
  onSavePost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isloading = true;
    if (this.mode === "create") {
      this.postsService.addPosts(form.value.title, form.value.content);
    } else {
      this.postsService.updatePost(
        this.postId,
        form.value.title,
        form.value.content
      );
    }

    form.resetForm();
  }
  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("postId")) {
        this.mode = "edit";
        this.postId = paramMap.get("postId");
        //
        this.isloading = true;
        //
        this.postsService.getPost(this.postId).subscribe(postData => {
          this.isloading = false;
          this.post = {
            id: postData._id,
            title: postData.title,
            content: postData.content
          };
        });
      } else {
        this.mode = "create";
        this.postId = null;
      }
    });
  }
}
