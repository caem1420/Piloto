import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { Chart } from 'chart.js';
import { DOCUMENT } from "@angular/common"

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('barChart', { static: false }) barChart;
  @ViewChild('barChart1', { static: false }) barChart1;
  @ViewChild('barChart2', { static: false }) barChart2;
  @ViewChild('barChart3', { static: false }) barChart3;
  @ViewChild('lineChart', { static: false }) lineChart;
  valores: any;
  query: any;
  data: any;
  boolsearch: any;
  idInput: any;
  boolresultssearch: any;
  estadistica: boolean;
  estadisticaAcquisitionMonth: boolean;
  estadisticaAcquisitionMonthDate: boolean;
  estadisticaAcquisitionYear: boolean;
  estadisticaCompany: boolean;
  estadisticaCountry: boolean;
  estadisticaValue: boolean;
  constructor(public http: HttpClient, public alertcontroller: AlertController) {
    console.log("hola");
    this.http.get("http://181.54.237.244:3000/?rq=all").subscribe(data => {
      console.log(data)
      this.valores = data;
    })
    this.boolsearch = false;
    this.boolresultssearch = false;
    this.estadisticaAcquisitionMonth = false;
    this.estadisticaAcquisitionMonthDate = false;
    this.estadisticaAcquisitionYear = false;
    this.estadisticaCompany = false;
    this.estadisticaCountry = false;
    this.estadisticaValue = false;
  }

  ngOnInit() {

  }

  queryFunction() {
    console.log(this.query)
    switch (this.query) {
      case "AcquisitionID":
        this.boolsearch = false;
        this.estadisticaAcquisitionMonth = false;
        this.estadisticaAcquisitionMonthDate = false;
        this.estadisticaAcquisitionYear = false;
        this.estadistica = true;
        this.estadisticaCompany = false;
        this.estadisticaCountry = false;
        this.estadisticaValue = false;
        this.http.get("http://181.54.237.244:3000/?rq=id").subscribe(data => {
          console.log(data)
          this.data = data;


        })

        break;

      case "AcquisitionMonth":
        this.boolsearch = false;
        this.estadisticaAcquisitionMonth = true;
        this.estadisticaAcquisitionMonthDate = false;
        this.estadisticaAcquisitionYear = false;
        this.estadisticaCompany = false;
        this.estadisticaCountry = false;
        this.estadisticaValue = false;
        this.http.get("http://181.54.237.244:3000/?rq=mes").subscribe(data => {
          var arreglotemp = [];
          var conteo = []
          this.data = data;
          console.log(this.data["valores"])

          this.data["valores"].forEach(element => {
            if (!arreglotemp.includes(element)) {
              // if(element == ""){
              //   if(!arreglotemp.includes("No aporta")){
              //     arreglotemp.push("No aporta")
              //   }  
              // }
              arreglotemp.push(element)
            }
          });
          console.log(arreglotemp)

          arreglotemp.forEach(elemento => {
            //var naranjas = fruits.filter(fruit => fruit == "Orange")
            console.log(elemento)
            conteo.push(this.data["valores"].filter(val => val == elemento).length)
          });
          console.log(conteo)

          var myChart = new Chart(this.barChart.nativeElement, {
            type: 'bar',
            data: {
              labels: arreglotemp,
              datasets: [{
                label: "All",
                data: conteo,
                backgroundColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1
              }]
            },
            options: {
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
                }]
              }
            }
          });


          var grande = 0;
          var tempindex = 0;
          for (var i = 0; i <= grande; i++) {
            if (conteo[i] > grande) {
              grande = conteo[i];
              tempindex = i;
            }
          }

          document.getElementById("textoAcquisitionMonth").innerHTML = "El mes con mas ventas es: " + arreglotemp[tempindex] + " con: " + grande

        })

        break;
      case "AcquisitionMonthDate":
        this.boolsearch = false;
        this.estadisticaAcquisitionMonth = false;
        this.estadisticaAcquisitionMonthDate = true;
        this.estadisticaAcquisitionYear = false;
        this.estadisticaCompany = false;
        this.estadisticaCountry = false;
        this.estadisticaValue = false;
        this.http.get("http://181.54.237.244:3000/?rq=mesfecha").subscribe(data => {
          console.log(data)
          this.data = data;
          var arreglotemp = []
          var conteo = []
          this.data["valores"].forEach(element => {
            if (!arreglotemp.includes(element)) {
              // if(element == ""){
              //   if(!arreglotemp.includes("No aporta")){
              //     arreglotemp.push("No aporta")
              //   }  
              // }
              arreglotemp.push(element)
            }
          });
          console.log(arreglotemp)

          arreglotemp.forEach(elemento => {
            //var naranjas = fruits.filter(fruit => fruit == "Orange")
            console.log(elemento)
            conteo.push(this.data["valores"].filter(val => val == elemento).length)
          });
          console.log(conteo)

          var myChart = new Chart(this.barChart1.nativeElement, {
            type: 'bar',
            data: {
              labels: arreglotemp,
              datasets: [{
                label: "All",
                data: conteo,
                backgroundColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255,1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1
              }]
            },
            options: {
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
                }]
              }
            }
          });


          var grande = 0;
          var tempindex = 0;
          for (var i = 0; i <= grande; i++) {
            if (conteo[i] > grande) {
              grande = conteo[i];
              tempindex = i;
            }
          }

          document.getElementById("textoAcquisitionMonthDate").innerHTML = "El dia con mas ventas es: " + arreglotemp[tempindex] + " con: " + grande

        })

        break;

      case "AcquisitionYear":
        this.boolsearch = false;
        this.estadisticaAcquisitionMonth = false;
        this.estadisticaAcquisitionMonthDate = false;
        this.estadisticaAcquisitionYear = true;
        this.estadisticaCompany = false;
        this.estadisticaCountry = false;
        this.estadisticaValue = false;
        this.http.get("http://181.54.237.244:3000/?rq=ano").subscribe(data => {
          console.log(data)
          this.data = data;
          var arreglotemp = []
          var conteo = []
          this.data["valores"].forEach(element => {
            if (!arreglotemp.includes(element)) {
              // if(element == ""){
              //   if(!arreglotemp.includes("No aporta")){
              //     arreglotemp.push("No aporta")
              //   }  
              // }
              arreglotemp.push(element)
            }
          });
          console.log(arreglotemp)

          arreglotemp.forEach(elemento => {
            //var naranjas = fruits.filter(fruit => fruit == "Orange")
            console.log(elemento)
            conteo.push(this.data["valores"].filter(val => val == elemento).length)
          });
          console.log(conteo)

          var myChart = new Chart(this.barChart2.nativeElement, {
            type: 'bar',
            data: {
              labels: arreglotemp,
              datasets: [{
                label: "All",
                data: conteo,
                backgroundColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255,1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1
              }]
            },
            options: {
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
                }]
              }
            }
          });


          var grande = 0;
          var tempindex = 0;
          for (var i = 0; i <= grande; i++) {
            if (conteo[i] > grande) {
              grande = conteo[i];
              tempindex = i;
            }
          }



          document.getElementById("textoAcquisitionYear").innerHTML = "El Año con mas ventas es: " + arreglotemp[tempindex] + " con: " + grande
        })

        break;
      case "Company":
        this.boolsearch = false;
        this.estadisticaAcquisitionMonth = false;
        this.estadisticaAcquisitionMonthDate = false;
        this.estadisticaAcquisitionYear = false;
        this.estadisticaCompany = true;
        this.estadisticaCountry = false;
        this.estadisticaValue = false;

        this.http.get("http://181.54.237.244:3000/?rq=compania").subscribe(data => {
          console.log(data)
          this.data = data;
        })

        break;
      case "Business":
        this.boolsearch = false;
        this.estadisticaAcquisitionMonth = false;
        this.estadisticaAcquisitionMonthDate = false;
        this.estadisticaAcquisitionYear = false;
        this.estadisticaCompany = false;
        this.estadisticaValue = false;                                             //PENDIENTE
        this.http.get("http://181.54.237.244:3000/?rq=negocio").subscribe(data => {
          console.log(data)
          this.data = data;
        })

        break;
      case "Country":
        this.boolsearch = false;
        this.estadisticaAcquisitionMonth = false;
        this.estadisticaAcquisitionMonthDate = false;
        this.estadisticaAcquisitionYear = false;
        this.estadisticaCompany = false;
        this.estadisticaCountry = true;
        this.estadisticaValue = false;
        this.http.get("http://181.54.237.244:3000/?rq=pais").subscribe(data => {
          console.log(data)
          this.data = data;
          var arreglotemp = []
          var conteo = []
          this.data["valores"].forEach(element => {
            if (!arreglotemp.includes(element)) {
              // if(element == ""){
              //   if(!arreglotemp.includes("No aporta")){
              //     arreglotemp.push("No aporta")
              //   }  
              // }
              arreglotemp.push(element)
            }
          });
          console.log(arreglotemp)

          arreglotemp.forEach(elemento => {
            //var naranjas = fruits.filter(fruit => fruit == "Orange")
            console.log(elemento)
            conteo.push(this.data["valores"].filter(val => val == elemento).length)
          });
          console.log(conteo)

          var myChart = new Chart(this.barChart3.nativeElement, {
            type: 'bar',
            data: {
              labels: arreglotemp,
              datasets: [{
                label: "All",
                data: conteo,
                backgroundColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255,1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1
              }]
            },
            options: {
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
                }]
              }
            }
          });


          var grande = 0;
          var tempindex = 0;
          for (var i = 0; i <= grande; i++) {
            if (conteo[i] > grande) {
              grande = conteo[i];
              tempindex = i;
            }
          }



          document.getElementById("textoCountry").innerHTML = "El pais con mas ventas es: " + arreglotemp[tempindex] + " con: " + grande



        })

        break;
      case "Value (USD)":
        this.boolsearch = false;
        this.estadisticaAcquisitionMonth = false;
        this.estadisticaAcquisitionMonthDate = false;
        this.estadisticaAcquisitionYear = false;
        this.estadisticaCompany = false;
        this.estadisticaValue = true;
        this.http.get("http://181.54.237.244:3000/?rq=valor").subscribe(data => {
          console.log(data)
          this.data = data;
          var arreglotemp = []
          var conteo = []
          this.data["valores"].forEach(element => {
            if (!arreglotemp.includes(element)) {
              // if(element == ""){
              //   if(!arreglotemp.includes("No aporta")){
              //     arreglotemp.push("No aporta")
              //   }  
              // }
              arreglotemp.push(element)
            }
          });
          console.log(arreglotemp)

          arreglotemp.forEach(elemento => {
            //var naranjas = fruits.filter(fruit => fruit == "Orange")
            console.log(elemento)
            conteo.push(this.data["valores"].filter(val => val == elemento).length)
          });
          console.log(conteo)

          var contador = [];
          arreglotemp.forEach((elemento,i)=>{
            contador.push(i);
          })

          var myChart = new Chart(this.lineChart.nativeElement, {
            type: 'line',
            data: {
              labels: contador,
              datasets: [{
                label: 'Valor USD',
                backgroundColor: "rgb(132,161,240)",
                borderColor: "rgb(132,161,240)",
                data: arreglotemp,
                fill: false,
              }]
            },

          })

        })

        break;
      case "Derived products":
        this.boolsearch = false;
        this.estadisticaAcquisitionMonth = false;
        this.estadisticaAcquisitionMonthDate = false;
        this.estadisticaAcquisitionYear = false;
        this.estadisticaCompany = false;
        this.http.get("http://181.54.237.244:3000/?rq=derivados").subscribe(data => {
          console.log(data)
          this.data = data;
        })

        break;
      case "ParentCompany":
        this.boolsearch = false;
        this.estadisticaAcquisitionMonth = false;
        this.estadisticaAcquisitionMonthDate = false;
        this.estadisticaAcquisitionYear = false;
        this.estadisticaCompany = false;
        this.http.get("http://181.54.237.244:3000/?rq=comprador").subscribe(data => {
          console.log(data)
          this.data = data;
        })

        break;
      case "search":
        this.boolsearch = true
        this.estadisticaAcquisitionMonth = false;
        this.estadisticaAcquisitionMonthDate = false;
        this.estadisticaAcquisitionYear = false;
        this.estadisticaCompany = false;
        break;

      default:
        console.error("error")
        break;
    }
  }

  busquedaId(id) {
    console.log(id)
    this.http.get("http://181.54.237.244:3000/?rq=search&query=" + id).subscribe(async data => {
      console.log(data)
      this.data = data;
      if (this.data["valores"].length === 0) {
        this.boolresultssearch = false;
        const alert = await this.alertcontroller.create({
          header: 'ID',
          subHeader: 'Sin resultados',
          message: 'La busqueda no ha dado ningin resultado.',
          buttons: ['OK']
        });

        await alert.present();
      } else {
        this.boolresultssearch = true;
      }

    })
  }

}
