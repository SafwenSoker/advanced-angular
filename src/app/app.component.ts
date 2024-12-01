import { Component, OnInit } from '@angular/core';
import { ToastrService } from './toastr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  showToast = false;
  toastrMsg = "";
  toastrType = "";
  toastrPosition= ""
  constructor(private toastrService: ToastrService){}
  ngOnInit(): void {
    this.showToast = true;
    this.toastrService.status.subscribe((msg: string)=> {
      this.toastrType = localStorage.getItem("toastrType") || "";
      this.toastrPosition = localStorage.getItem("toastrPosition") || "";
      console.log(this.toastrType, this.toastrPosition)
      if (msg === null) {
        this.showToast = false;
      } else {
        this.showToast = true;
        this.toastrMsg = msg;
      }
    })
  }

  closeToast(){
    this.showToast = false;
  }

}
