import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit{
 
  @Input('valor') progreso: number = 45;
  @Input() btnClass: string  = 'btn-primary';

  @Output('valor') valorSalida: EventEmitter<number> =  new EventEmitter();

  cambiarValor(valor: number) {
    this.progreso = this.progreso + valor;
    this.valorSalida.emit(this.progreso);
  }

  onChange( nuevoValor: number ){
    if(nuevoValor >= 100){
      this.progreso = 100;
    } else if(nuevoValor <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = nuevoValor;
    }
    this.valorSalida.emit(this.progreso);
  }

  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`;
  }
}
