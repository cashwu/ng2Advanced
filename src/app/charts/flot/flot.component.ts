import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import {OnDestroy, Component,  OnInit} from '@angular/core';

@Component({
  selector: 'app-flot',
  templateUrl: './flot.component.html',
  styleUrls: ['./flot.component.css']
})
export class FlotComponent implements OnInit, OnDestroy {

  username : string;
  constructor(private router: Router, private route: ActivatedRoute) { }

  parentParams$: Subscription;

  ngOnInit() {
    this.parentParams$ = this.route.parent.params.subscribe(a => {
      this.username = a["username"];
    })
  }

  ngOnDestroy(){
    this.parentParams$.unsubscribe();
  }

}
