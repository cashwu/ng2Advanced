import {Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  type:string;

  constructor(private router: Router, private route: ActivatedRoute) { 

  }

  ngOnInit() {
    this.route.params.subscribe(a => {
      this.type = a["type"];
      console.log("Matrix .. " + a["name"]);
    });

    this.route.queryParams.subscribe(a => {
      console.log("QueryString .. " + a["name"]);
    });
  }

  goCards(type){
    this.router.navigate([type], { relativeTo: this.route });
  }

}
