import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-angular-routing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './angular-routing.component.html',
  styleUrl: './angular-routing.component.css'
})
export class AngularRoutingComponent implements OnInit {
    //  http = inject(HttpClient);
    private postService = inject(PostService);
      posts: any = [];

      ngOnInit(): void {
      //  this.fetchPosts();
      this.loadPosts();
      }

      // fetchPosts(){
      //   this.http.get('https://jsonplaceholder.typicode.com/posts?_limit=10').subscribe((posts: any) =>{
      //     console.log(posts);
      //     this.posts = posts;
      //   });
      // }


      // loadPosts(){
      //   this.postService.getPosts().subscribe((posts: any) => {
      //     console.log(posts);
      //     this.posts = posts;
      //   })
      // }

      loadPosts(){
        this.postService.getPosts().subscribe({
          next: (posts: any) => {
            this.posts = posts;
            console.log("posts fetched");
          },
          error: (error) => console.log('Error fetching posts', error)
        })
      }
}
