import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FileItem, FileType } from '../../models/file.item.model';

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
  fileItem: FileItem ={
    id:"",
    name: "",
    creation: new Date(),
    type: FileType.FILE,
    owners: [],
  };

  crearArchivo(form: NgForm) {
    this.archivoCreado.emit(this.fileItem);
    form.reset();
  }

  volver($event: any){

  }
}
