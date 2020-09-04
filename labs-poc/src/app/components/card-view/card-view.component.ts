import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { user } from 'src/app/modal/User';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {

  constructor(public http:HttpService) { }

  Users:user[];
  display='none';

  ngOnInit() {
    this.refreshData();
  }

  refreshData(){
    this .http.getUsers().subscribe((data)=>{
      this.Users=data;
      console.log("data"+this.Users);
    })

  }
  openModal(){
    this.display='block';
  }
  closeModal(){
    this.display='none';
  }

}
