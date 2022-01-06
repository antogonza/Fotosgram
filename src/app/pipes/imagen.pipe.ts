import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

const URL = environment.url;

@Pipe({
  name: 'imagen',
})
export class ImagenPipe implements PipeTransform {
  transform(img: any, userId: string): string {
    const url = `${URL}/post/imagen/${userId}/${img}`;
    alert(url);
    return url;
  }
}
