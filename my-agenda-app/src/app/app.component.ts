import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contactContainer = [];
  nombre : string="";
  email : string ="";
  telefono : string="";
  error: boolean = false;
  re =new RegExp("^[0-9]{9}$");
  validacionNombre: string = "";
  validacionEmail: string = "";
  validacionTelefono: string = "";

  addContact(){
    if(!this.error){
      this.contactContainer.push( {
        nombre : this.nombre,
        email : this.email,
        telefono : this.telefono,
        contactado : false  
      })
    }
  }

  onBlur(){
    if (this.nombre.length<6) {
      this.error = true;
      this.validacionNombre = "Nombre proporcionado muy corto";
    }
    if (!this.email.includes("@")) {
      this.error = true;
      this.validacionEmail = "El email introducido es incorrecto";
    }
    if (!this.re.test(this.telefono) ){
      this.error = true;
      this.validacionTelefono = "El telefono debe tener 9 caracteres";
    }
    var emailRepe = this.contactContainer.some(contact => contact.email === this.email);
    if(emailRepe){
      this.error = true;
      this.validacionEmail ="El email ya se encuentra registrado";
    }
  }
  onFocus(){
    this.error = false;
    this.validacionNombre = "";
    this.validacionTelefono = "";
    this.validacionEmail ="";

  }

  deteleContacts(){
    this.contactContainer = [];
  }
}
