import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: []
})
export class UsersComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  users: Array<any>[] = [];
  constructor(private db: AngularFireDatabase) {
    db.list('/users').valueChanges().subscribe((users: any) => {
      users.forEach((element: any) => {
        if(element.age <= 21) {
          this.users.push(element);
        }
      });
      this.dataSource = new MatTableDataSource<any>(this.users);
    }) 
  }

  addWinners(data: any) {
    if(confirm("Do you want to continue?")) {
      this.db.list("winners").push(data).then((res) => {
        console.log(res);
      }).catch((err) => {
        console.error(err);
      })
    } 
  }
  displayedColumns: string[] = ['age', 'name', 'score', 'actions'];
  
  ngOnInit(): void {
  }
}
