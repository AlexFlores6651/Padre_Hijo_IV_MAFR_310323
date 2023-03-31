import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HijoComponent } from './hijo/hijo.component';
import { PadreComponent} from './padre/padre.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HijoComponent, PadreComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
