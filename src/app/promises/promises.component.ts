import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.scss']
})
export class PromisesComponent implements OnInit{
  isOnline = false;
  status = "offline";

  constructor(){}

  ngOnInit(): void{
    this.getStatus();
    this.checkLogic();
  }

  getStatus() {
    this.isOnline = false;
  }

  checkLogic() {
    if(this.isOnline) {
      this.status = "online";
    } else {
      this.status = "online";
    }
  }
}
