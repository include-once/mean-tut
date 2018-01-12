import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postID = null;
  constructor(private route: ActivatedRoute) {
    route.params.subscribe(
        params => {
          this.postID = parseInt(params['id'], 10);
        }
    );
  }

  ngOnInit() {
  }

}
