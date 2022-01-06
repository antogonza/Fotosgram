import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSanitizerPipe } from './image-sanitizer.pipe';
import { ImagenPipe } from './imagen.pipe';

@NgModule({
  declarations: [ImageSanitizerPipe, ImagenPipe],
  imports: [CommonModule],
  exports: [ImageSanitizerPipe, ImagenPipe],
})
export class PipesModule {}
