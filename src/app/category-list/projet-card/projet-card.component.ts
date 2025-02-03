import {Component, Input} from '@angular/core';
import {Project} from "../../model/Project";
import {MatIconButton} from "@angular/material/button";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {MatDialog} from "@angular/material/dialog";
import {ProjectModalComponent} from "../project-modal-component/project-modal.component";

@Component({
  selector: 'app-projet-card',
  imports: [
    MatIconButton,
    NgIf,
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './projet-card.component.html',
  styleUrl: './projet-card.component.scss'
})
export class ProjetCardComponent {
  @Input() project!: Project;
  constructor(private dialog: MatDialog) {}
  isGithubLink(link: string): boolean {
    return link.includes('github.com');
  }

  isPrintablesLink(link: string): boolean {
    return link.includes('printables.com');
  }
  openModal(): void {
    this.dialog.open(ProjectModalComponent, {
      data: { project: this.project },
      disableClose: false,
      hasBackdrop: true
    });
  }
}
