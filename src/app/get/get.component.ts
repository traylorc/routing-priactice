import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  id: number = 0;

  constructor(private route: ActivatedRoute, private router: Router)
   {

   }

   navToHome(): void
   {
      this.router.navigateByUrl("/home");
   }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

  }

}
