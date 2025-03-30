import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css',
  standalone: true
})
export class RegisterFormComponent {
  registerForm: FormGroup;
  activeTab: 'user' | 'packet' = 'user'; // Control de pestañas

  constructor(private fb: FormBuilder, private userService: UserService) {
    // Formulario de Usuario
    this.registerForm = this.fb.group({
      name: [''],
      age: [''],
      email: ['']
    });

  }

  // ✅ Este método estaba faltando, lo agregamos aquí:
  setActiveTab(tab: 'user' | 'packet') {
    this.activeTab = tab;
  }

  // Enviar formulario de usuario
  registerUser() {
    if ((this.registerForm.valid)||((this.registerForm.value.name.length>0)&&(this.registerForm.value.email.length>0)&&(this.registerForm.value.age.length>0))) {
      const userData = this.registerForm.value;
      console.log(userData);
      userData.age = parseInt(userData.age, 10); // Convertir a número
     // console.log("userData a enviar:", JSON.stringify(userData, null, 2));
      this.userService.createUser2(userData).subscribe({
        next: (response) => {
          console.log('Usuario exitoso:', response);

        },
        error: (error) => {
          console.error('Error en el registro:', error);
          alert('Error en el usuario, verifica tus credenciales');
        }
      });
    }
  }
}
