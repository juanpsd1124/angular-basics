import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  // @Output() onnuevoPersonaje: EventEmitter<Personaje> = new EventEmitter<Personaje>();

  constructor( private dbzService: dbzService ){};

  agregar( ){
    // event.preventDefault(); //Como se previene el refresh normalmente
    
    if( this.nuevo.nombre.trim().length === 0){
      return;
    }
    this.dbzService.agregarPersonaje(this.nuevo);
    // this.onnuevoPersonaje.emit( this.nuevo ); 
    //Forma 1
  
    this.nuevo = {
      nombre: '',
      poder: 0
    }

  };
}
