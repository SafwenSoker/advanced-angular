import { Component, OnInit } from '@angular/core';
import { ToastrService } from '../toastr.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit{
  constructor(private toastrService: ToastrService){

  }  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
    
  showToast(type: string){
    this.toastrService.showToast(type,"Aadvanced Angular","top-left", true);
  }
}
