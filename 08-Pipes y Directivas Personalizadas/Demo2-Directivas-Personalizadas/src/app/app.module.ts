import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResaltadoDirective } from './directives/resaltado.directive';
import { IteracionDirective } from './directives/iteracion.directive';
import { TestComponent } from './componentes/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    ResaltadoDirective,
    IteracionDirective,
    TestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
