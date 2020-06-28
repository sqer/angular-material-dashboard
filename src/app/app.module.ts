import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from './components/components.module';
import { LeftMenuComponent } from './layout/left-menu/left-menu.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { ChartsComponent } from './charts/charts.component';
import { DoughnutChartComponent } from './charts/doughnut-chart/doughnut-chart.component';
import { ChartsAreaComponent } from './charts/charts-area/charts-area.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    LineChartComponent,
    DoughnutChartComponent,
    ChartsComponent,
    ChartsAreaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
