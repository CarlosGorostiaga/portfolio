import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  // Propiedad para controlar si el usuario ha hecho scroll
  isScrolled = false;

  // Escucha el evento de scroll en la ventana del navegador
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Si el scroll vertical es mayor a 10px, isScrolled es true. Si no, es false.
    this.isScrolled = window.scrollY > 10;
  }

}
