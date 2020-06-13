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
  telefono : string;
  error: boolean = false;
  re =new RegExp("/^([0-9])*$/");
  validacionNombre: string = "";
  validacionEmail: string = "";
  validacionTelefono: string = "";
  result: any;
  
  addContact(){
    this.contactContainer.push( {
      nombre : this.nombre,
      email : this.email,
      telefono : this.telefono,
      contactado : false

    })

    console.log(this.contactContainer)


  }

  onBlur(){
    if (this.nombre.length<6) {
      this.error = true;
      this.validacionNombre = "Nombre proporcionado muy corto";
    }
    if (!this.email.includes("@")) {
      this.error =  true;
      this.validacionEmail = "El email es incorrecto";
    }
    if (!this.telefono.match(this.re) && this.telefono.length >= 9 ){
      this.error = true;
      this.validacionTelefono = "El telefono es incorrecto";
    }
    if (this.contactContainer.length> 0){ 
      
      var result = this.contactContainer.filter(contact => contact.email === this.email)

      
      console.log(result)
    }
  }




  deteleContacs(){
    this.contactContainer = [];
  }
}
