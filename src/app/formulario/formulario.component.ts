import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FileItem, FileType } from '../../models/file.item.model';
import { FILE_LIST, OWNERS } from '../../data/file.storage';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  @Output() archivoCreado = new EventEmitter<FileItem>();
  fileType = FileType;
  folders = FILE_LIST.filter(file => file.type === FileType.FOLDER);
  owners = OWNERS;
  fileItem: FileItem ={
    id:"",
    name: "",
    creation: new Date(),
    type: FileType.FILE,
    owners: [],
  };

  crearArchivo(form: NgForm) {
    if(form.invalid){
      alert("Por favor, rellene todos los campos");
      console.log(form);
      return;
    }
    this.archivoCreado.emit(this.fileItem);
    //form.reset(); Guarda con resetear el formulario porque se pierde el valor de los campos
    
    //ESTA ES OTRA FORMA PARA NO HACER CON ngModel
    //En tu formulario HTML, los atributos name de los elementos <input>, <select>, etc., deben 
    //coincidir con los nombres de las propiedades en la interfaz FileItem.
    //this.archivoCreado.emit(form.value);
  }

  volver($event: any){

  }
}
