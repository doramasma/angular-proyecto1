import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contactContainer = [];
  nombre : string;
  email : string;
  telefono : number;

  addContact(){
    this.contactContainer.push( {
      nombre : this.nombre,
      email : this.email,
      telefono : this.telefono,
      contactado : false

    })

    console.log(this.contactContainer)


  }


  deteleContacs(){
    this.contactContainer = [];
  }
}
