import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-incrementador",
  templateUrl: "./incrementador.component.html",
  styleUrls: ["./incrementador.component.css"]
})
export class IncrementadorComponent implements OnInit {
  @ViewChild('txtPorecentaje') txtPorecentaje: ElementRef;

  @Input("nombre") leyenda: string = "Leyenda";
  @Input() porcentaje: number = 50;
  @Output("actualizaValor") CambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    console.log("Leyenda", this.leyenda);
    console.log("Porcentaje", this.porcentaje);
  }

  ngOnInit() {
    console.log("Leyenda", this.leyenda);
    console.log("Porcentaje", this.porcentaje);
  }
  onChanges(newValue: number) {
    // let elemHTML: any = document.getElementsByName("porcentaje")[0];
    // console.log(this.txtPorecentaje);

    if (newValue >= 100) {
      this.porcentaje = 100;
    } else if (newValue <= 0) {
      this.porcentaje = 0;
    } else {
      this.porcentaje = newValue;
    }

    // elemHTML.value = this.porcentaje;

    this.txtPorecentaje.nativeElement.value = this.porcentaje;
    this.CambioValor.emit(newValue);
  }
  CambiarValor(valor: number) {
    if (this.porcentaje >= 100 && valor > 0) {
      this.porcentaje = 100;
      return;
    }

    if (this.porcentaje <= 0 && valor < 0) {
      this.porcentaje = 0;
      return;
    }
    this.porcentaje += valor;
    this.CambioValor.emit(this.porcentaje);
    this.txtPorecentaje.nativeElement.focus();
  }
}
