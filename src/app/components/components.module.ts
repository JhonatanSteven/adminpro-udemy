import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { GraficoDonaComponent } from './grafico-dona/grafico-dona.component';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
      IncrementadorComponent,
      GraficoDonaComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    FormsModule
  ],
  exports: [
    IncrementadorComponent,
    GraficoDonaComponent
  ]
})
export class ComponentsModule { }
