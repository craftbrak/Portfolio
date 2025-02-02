import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Project} from "../../model/Project";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-project-modal-component',
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal-component.scss'
})
export class ProjectModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { project: Project }) {}
}
