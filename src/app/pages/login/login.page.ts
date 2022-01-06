import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';
import { UiServiceService } from '../../services/ui-service.service';
import { Usuario } from '../../interfaces/interfaces';
import { environment } from '../../../environments/environment.prod';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild('slidePrincipal') slides: IonSlides;

  loginUser = {
    username: '',
    password: '',
  };

  registerUser: Usuario = {
    email: '',
    password: '',
    nombre: '',
    username: '',
    avatar: 'av-1.png',
  };

  password2: string;

  constructor(
    private usuarioService: UsuarioService,
    private navController: NavController,
    private uiServiceService: UiServiceService
  ) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.slides.lockSwipes(true);
  }

  async login(flogin: NgForm) {
    if (flogin.invalid) {
      this.uiServiceService.alertaInformativa(
        'Ha fallado el formulario de login'
      );
      return;
    }

    const valido = await this.usuarioService.login(
      this.loginUser.username,
      this.loginUser.password
    );

    if (valido) {
      // Navegar al tabs
      this.navController.navigateRoot('/main/tabs/tab1', { animated: true });
    } else {
      // Mostrar alerta de usuario o contraseña incorrectas
      this.uiServiceService.alertaInformativa(
        'Usuario o contraseña incorrectos'
      );
    }
    console.log(this.loginUser);
  }

  async registro(fregistro: NgForm) {
    if (fregistro.invalid) {
      return;
    }
    if (this.password2 !== this.registerUser.password) {
      this.uiServiceService.alertaInformativa('Las contraseñas no coinciden');
      return;
    }
    const valido = await this.usuarioService.registro(this.registerUser);

    if (valido) {
      this.navController.navigateRoot('/main/tabs/tab1', { animated: true });
    } else {
      this.uiServiceService.alertaInformativa('Registro incorrecto');
    }
  }

  mostrarRegistro() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(1);
    this.slides.lockSwipes(true);
  }
  mostrarLogin() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(0);
    this.slides.lockSwipes(true);
  }

  avatarSelected(event) {
    this.registerUser.avatar = event;
  }
}
