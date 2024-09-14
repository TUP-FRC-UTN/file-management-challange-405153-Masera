import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FileItem } from '../models/file.item.model';
import { FILE_LIST } from '../data/file.storage';
import { TablaComponent } from "./tabla/tabla.component";
import { FormularioComponent } from './formulario/formulario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TablaComponent, FormularioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  files: FileItem[] = FILE_LIST;
  title = 'file-management';
  formularioActivo: boolean = false;

  guardarArchivo(archivo: FileItem) {
    this.files.push(archivo);
    this.formularioActivo = false;
  }

  abrirFormulario() {
    this.formularioActivo = true;
  }
}
