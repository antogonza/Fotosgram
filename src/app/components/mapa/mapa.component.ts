/* eslint-disable no-var */
import { Component, OnInit, Input, ViewChild } from '@angular/core';

declare var mapboxgl: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements OnInit {
  @Input() coords: string;
  @ViewChild('mapa') mapa;

  constructor() {}

  ngOnInit() {
    const latLng = this.coords.split(',');
    const lat = Number(latLng[0]);
    const long = Number(latLng[1]);
    mapboxgl.accessToken =
      'pk.eyJ1IjoiYW50b2dvbnphIiwiYSI6ImNreG95ZWw4dDJlcW0ycHViYTR5M3Z3dTEifQ.zOebyxAVTVtVhjNJAoL4WA';
    const map = new mapboxgl.Map({
      container: this.mapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [long, lat],
      zoom: 15,
    });

    const marker = new mapboxgl.Marker().setLngLat([long, lat]).addTo(map);
  }
}
