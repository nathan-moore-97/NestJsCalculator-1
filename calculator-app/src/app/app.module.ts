import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorFormComponent } from './calculator-form/calculator-form.component';
import { HistoryComponent } from './history/history.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorFormComponent,
    HistoryComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
