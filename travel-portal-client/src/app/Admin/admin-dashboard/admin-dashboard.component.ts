import { Component, OnInit, ViewChild } from '@angular/core';
import { Ticket } from '../../models/ticket';
import { RestapiService } from '../../Services/restapi.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { LoginLogoutService } from '../../Services/login-logout.service';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  ticketList:Ticket[]= [];
  ELEMENT_DATA=this.ticketList
  displayedColumns: string[] = ['ticketId','firstName','status','priority','submittedDate','projectName','toTravelCity','Extra'];
    dataSource = new MatTableDataSource<Ticket>(this.ELEMENT_DATA);
    @ViewChild(MatSort, {static: true}) sort: MatSort;
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private loginservice:LoginLogoutService,private service:RestapiService,private router:Router) { }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
 
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getTicketList();
    
  }
 viewDetail(element)
  {
    localStorage.setItem('ticket', JSON.stringify(element));
    this.router.navigate(["/viewTickets"])
  }

getTicketList(){
  let resp=this.service.getAllTickets();
    resp.subscribe(Items => {
     
      const length = Object.keys
      (Items).length; 
      for(var i=0;i<length;i++){
           this.ticketList[i]= new Ticket();
           this.ticketList[i]=Items[i];
      };
      this.dataSource.data=this.ticketList
    })
}

logOf(){
this.loginservice.logout();
}

}
