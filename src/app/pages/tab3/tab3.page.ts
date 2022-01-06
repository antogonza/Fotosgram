import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from '../../interfaces/interfaces';
import { NgForm } from '@angular/forms';
import { UiServiceService } from '../../services/ui-service.service';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  usuario: Usuario = {};

  constructor(
    private usuarioService: UsuarioService,
    private uiService: UiServiceService,
    private postService: PostsService
  ) {}

  ngOnInit() {
    this.usuario = this.usuarioService.getUsuario();

    console.log(this.usuario);
  }

  async actualizar(fActualizar: NgForm) {
    if (fActualizar.invalid) {
      return;
    }

    const actualizado = await this.usuarioService.actualizaUsuario(
      this.usuario
    );
    console.log('Actualizado');

    if (actualizado) {
      // Toast con el mensaje de actualizado
      this.uiService.presentToast('Actualizado correctamente');
    } else {
      // Toast con el error
      this.uiService.presentToast('No se pudo actualizar');
    }
  }

  logout() {
    this.postService.paginaPosts = 0;

    console.log('Log out');
    this.usuarioService.logout();
  }
}
