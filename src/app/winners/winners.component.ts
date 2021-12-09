import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-winners',
  templateUrl: './winners.component.html',
  styles: [
  ]
})
export class WinnersComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  constructor(db: AngularFireDatabase) {
    db.list('/winners').valueChanges().subscribe((winners: any) => {
      this.dataSource = new MatTableDataSource<any>(winners);
    }) 
  }

  displayedColumns: string[] = ['name', 'score'];
  ngOnInit(): void {
  }

}
