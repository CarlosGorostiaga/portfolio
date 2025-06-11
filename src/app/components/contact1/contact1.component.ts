import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-contact1',
  templateUrl: './contact1.component.html',
  styleUrls: ['./contact1.component.css']
})
export class Contact1Component {

    contactForm!: FormGroup;
  statusMessage: string | null = null;
  isError = false;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    // Inicializamos el formulario con todos los campos y sus validadores
    this.contactForm = this.fb.group({
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      presupuesto: ['', Validators.required],
      ideas: ['', Validators.required]
    });
  }

  onSubmit(): void {
    // Si el formulario no es válido, no hacemos nada
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched(); // Marca todos los campos como "tocados" para mostrar los errores
      return;
    }

    // --- IMPORTANTE: Configuración de Formspree ---
    // 1. Ve a https://formspree.io/
    // 2. Crea una cuenta y un nuevo formulario.
    // 3. Formspree te dará una URL única. Reemplaza la URL de abajo con la tuya.
    const formspreeEndpoint = 'https://formspree.io/f/manjowlw';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    // Enviamos los datos del formulario al endpoint de Formspree
    this.http.post(formspreeEndpoint, this.contactForm.value, { headers: headers })
      .subscribe({
        next: (response) => {
          this.statusMessage = '¡Mensaje enviado con éxito! Te responderé pronto.';
          this.isError = false;
          this.contactForm.reset(); // Resetea el formulario después de un envío exitoso
        },
        error: (error) => {
          console.error('Hubo un error al enviar el formulario', error);
          this.statusMessage = 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.';
          this.isError = true;
        }
      });
  }

}
