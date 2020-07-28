import { Component, OnInit } from '@angular/core';
import { LoginLogoutService } from '../Services/login-logout.service';
import { Router } from '@angular/router';
import { CovidUpdatesService } from '../Services/covid-updates.service';
import{covidModel} from '../models/covidModel'


@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.css']
})
export class Covid19Component implements OnInit {

  travelCountry;
  covidData: covidModel[] = [];
  date = [];
  cases = [];
  chartData
  chartOptions
  labels
  colors
  title

  constructor(private loginservice:LoginLogoutService,private router:Router,private covidservice:CovidUpdatesService ) { }

  ngOnInit(): void {
    if(!this.loginservice.isLogin()){
      window.alert("Please login first");
      this.router.navigate(["/login"]);

    }
}
  logOf()
  {
  this.loginservice.logout();
  }

  covid() {
    let resp = this.covidservice.covidApi(this.travelCountry);
    resp.subscribe(data => {
      const length = Object.keys(data).length;
      for (var i = 0; i < length; i++) {
        this.covidData[i] = new covidModel();
        this.covidData[i] = data[i];
      }
      for (var i = 0; i < 30; i++) {
        this.date[i] = this.covidData[i].Date.slice(0, 10)
        this.cases[i] = this.covidData[i].Cases;
      }
      this.graph()
    
    })


  }

  graph() {
    this.title ='Corona Statistics for past 30 days:';
    this.chartOptions = {
      responsive: true
    }

    this.labels = this.date;
    this.chartData = [
    {
        label: 'Past 30 Days Data',
        data: this.cases
      }
    ];
    this.colors = [
      {
        backgroundColor: 'rgba(26, 161, 170, 0.836)',
      }
    ]
  }

 
}

