import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]'
})
export class ScrollAnimationDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // 1. Ocultamos el elemento inicialmente añadiendo una clase CSS
    this.renderer.addClass(this.el.nativeElement, 'scroll-animate');

    // 2. Creamos un "observador" que vigilará el elemento
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        // 3. Si el elemento entra en la pantalla (isIntersecting es true)
        if (entry.isIntersecting) {
          // 4. Añadimos la clase que dispara la animación de "aparecer"
          this.renderer.addClass(this.el.nativeElement, 'is-visible');
          // 5. Dejamos de observar este elemento para no repetir la animación (optimización)
          observer.unobserve(this.el.nativeElement);
        }
      });
    });

    // 6. Le decimos al observador que empiece a vigilar nuestro elemento
    observer.observe(this.el.nativeElement);
  }
}