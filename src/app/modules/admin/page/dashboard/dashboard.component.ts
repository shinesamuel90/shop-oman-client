import { Component, OnInit } from '@angular/core';
import { ThemeConstants } from 'src/app/shared/config/theme-constant';
import * as $ from 'jquery'; // import Jquery here

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private colorConfig: ThemeConstants) { }

  themeColors = this.colorConfig.get().colors;

  // Donut Chart Config
  public donutChartLabels: string[] = [' Texas ', ' Utah ', ' Georgia ', ' Nebraska '];
  public donutChartData: number[] = [300, 500, 100, 200];
  public donutChartType = 'doughnut';
  public donutChartLegend = false;
  public dountChartOptions: any = {
      cutoutPercentage: 75,
      maintainAspectRatio: false
  };
  public donutChartColors: any = [{
      backgroundColor: [this.themeColors.info, this.themeColors.primary, this.themeColors.success, this.themeColors.gray],
      pointBackgroundColor : [this.themeColors.info, this.themeColors.primary, this.themeColors.success, this.themeColors.gray]
  }];

  // Line Chart Config
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartData: Array<any> = [
      {data: [65, 59, 80, 81, 56, 55, 40, 37, 54, 76, 63, 62], label: 'Series A'},
      {data: [28, 48, 40, 19, 86, 27, 90, 43, 65 ,76, 87, 85], label: 'Series B'}
  ];
  public lineChartOptions: any = {
      scales: {
          yAxes: [
              {
                  id: 'y-axis-1',
                  type: 'linear',
                  display: true,
                  position: 'left'
              },
              {
                  id: 'y-axis-2',
                  type: 'linear',
                  display: false
              }
          ]
      }
  };
  public lineChartLegend = false;
  public lineChartType = 'line';
  public lineChartColors: Array<any> = [
      {
          backgroundColor: this.themeColors.infoInverse,
          borderColor: this.themeColors.info
      },
      {
          backgroundColor: this.themeColors.successInverse,
          borderColor: this.themeColors.success
      }
  ];

  ngOnInit(): void {
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit() {
      const themeColors = this.colorConfig.get().colors;

      // tslint:disable-next-line: prefer-const
      let sparklineBarData1 = [32, 38, 36, 35, 38, 37, 35, 34, 36, 38, 36, 37, 35, 34, 37, 38, 38];

      // Sparkline
      ($('#dahboard-bar-option') as any ).sparkline(sparklineBarData1,
      {
          type: 'bar',
          height: '60',
          barWidth: 3,
          barSpacing: 8,
          barColor: themeColors.info
      });

      let map;
      if (AmCharts.isReady) {
          createChart();
      } else {
          // tslint:disable-next-line: only-arrow-functions
          AmCharts.ready(function() {
              createChart();
          });
      }

      function createChart() {
          map = new AmCharts.AmMap();

          map.colorSteps = 0;

          map.imagesSettings = {
              rollOverColor: themeColors.info,
              rollOverScale: 1.5,
              selectedScale: 1.5,
              selectedColor: themeColors.info,
              color: themeColors.info
          };

          // tslint:disable-next-line: prefer-const
          let dataProvider = {
              mapVar: AmCharts.maps.usaLow,

              areas: [{
                  id: 'US-TX',
                  color: themeColors.info,
                  rollOverColor: themeColors.info,
                  outlineColor: '#b5bbd7'
              },
              {
                  id: 'US-UT',
                  color: themeColors.primary,
                  rollOverColor: themeColors.primary,
                  outlineColor: '#b5bbd7'
              },
              {
                  id: 'US-GA',
                  color: themeColors.success,
                  rollOverColor: themeColors.success,
                  outlineColor: '#b5bbd7'
              },
              {
                  id: 'US-NE',
                  color: themeColors.gray,
                  rollOverColor: themeColors.gray,
                  outlineColor: '#b5bbd7'
              }]
          };

          map.areasSettings = {
              autoZoom: true,
              unlistedAreasColor: themeColors.white,
              unlistedAreasOutlineColor: '#b5bbd7',
              descriptionWindowHeight: 300,
              descriptionWindowWidth: 300,
              descriptionWindowTop: 400,
              descriptionWindowLeft: 300,
              outlineAlpha: 1,
              outlineThickness: 1.5,
              rollOverOutlineColor: themeColors.white,
          };
          map.dataProvider = dataProvider;

          // tslint:disable-next-line: prefer-const
          let valueLegend = new AmCharts.ValueLegend();
          valueLegend.right = 10;
          valueLegend.minValue = '';
          valueLegend.maxValue = '';
          map.valueLegend = valueLegend;

          map.write('dashboardMap');
      }
  }

}
