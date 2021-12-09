import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-toppers',
  templateUrl: './toppers.component.html',
  styles: [
  ]
})
export class ToppersComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  toppers: Array<any>[] = [];
  constructor(db: AngularFireDatabase) {
    db.list('/users').valueChanges().subscribe((users: any) => {
      
      users.forEach((element: any) => {
        if(element.score > 90) {
          this.toppers.push(element);
        }
      });
      this.dataSource = new MatTableDataSource<any>(this.toppers);
    }) 
  }

  
  displayedColumns: string[] = ['age', 'name', 'score'];
  
  ngOnInit(): void {
  }

}
