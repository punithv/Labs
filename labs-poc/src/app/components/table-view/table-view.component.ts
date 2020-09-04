import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { user } from 'src/app/modal/User';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {
  users = null;


  dataSource = new MatTableDataSource<user>(this.users);
  displayedColumns = ['id','real_name','tz'];

  constructor(private http:HttpService) { }

  ngOnInit() {
  this.refreshData();
  }
  refreshData(){
    this .http.getUsers().subscribe((data)=>{
      this.users=data;
      this.dataSource.data = this.users;
      console.log("data"+this.users);
    })

  }

}
