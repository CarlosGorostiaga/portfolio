import { Component } from '@angular/core';

@Component({
  selector: 'app-project-showcase',
  templateUrl: './project-showcase.component.html',
  styleUrls: ['./project-showcase.component.css']
})
export class ProjectShowcaseComponent {
  
  // --- AÑADE ESTAS LÍNEAS ---
  lightboxVisible = false;
  selectedImage = '';

  openLightbox(imageUrl: string): void {
    this.selectedImage = imageUrl;
    this.lightboxVisible = true;
  }

  closeLightbox(): void {
    this.lightboxVisible = false;
  }
  // -------------------------

  // ...el resto de tu componente...
}
