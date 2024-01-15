import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablePracComponent } from './table-prac/table-prac.component';

import { ExamplePipePipe } from './pipes/example-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TablePracComponent,
    ExamplePipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
