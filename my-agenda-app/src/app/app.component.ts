import { Component } from '@angular/core';
import { ɵELEMENT_PROBE_PROVIDERS } from '@angular/platform-browser';

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
  result: any;
  persona: string;



  original = this.contactContainer;
buscador(persona){
  if(persona.length > 0){
    this.contactContainer = this.contactContainer.filter( elemento => elemento.nombre.includes(persona) 
 || elemento.email.includes(persona));
  }
  if(persona.length == 0){
    this.contactContainer = this.original;
  }
}


  addContact(){
    if(!this.error){
      this.contactContainer.push( {
        nombre : this.nombre,
        email : this.email,
        telefono : this.telefono,
        contactado : false  
      })
    this.nombre ="";
    this.email  ="";
    this.telefono ="";
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
  
  //Metedo para borrar todos los contactos (boton papelera)
  deteleContacts(){
    this.contactContainer = [];
  }
  //Metedo para borrar una tarjeta (boton menos)
  deletePerson(person : number){
    this.contactContainer.splice(person,1);
  }

  contacted(i) {
    i.contactado = !i.contactado;
    console.log(i.contactado );
  }

  contactAll() {
    this.contactContainer.forEach( user => user.contactado = !user.contactado);
  }

}
