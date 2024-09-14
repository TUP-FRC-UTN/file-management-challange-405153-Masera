import { Component, Input, OnInit } from '@angular/core';
import { FileItem, FileType } from '../../models/file.item.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent 
{
  @Input() files: FileItem[] = [];
  fileType = FileType;

}
