declare const L: any, Config: any;

import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import * as icons from '../../../assets/global/vendor/leaflet/icons/leaflet-color-markers';

const COORDINATES = [
  {longitude: '37.418755', latitude: '55.719615', icon: icons.greenIcon, info: 'Координата 1'},
  {longitude: '37.414021', latitude: '55.739170', icon: icons.greyIcon, info: 'Координата 2'},
  {longitude: '37.540931', latitude: '55.797278', icon: icons.greyIcon, info: 'Координата 3'},
  {longitude: '37.522178', latitude: '55.797417', icon: icons.greyIcon, info: 'Координата 4'}
];

@Component({
  selector: 'app-geomap',
  templateUrl: './geomap.component.html',
  styleUrls: [ './geomap.component.scss' ]
})
export class GeomapComponent implements OnInit, OnDestroy {

  bodyClasses: string[] = 'page-map page-map-full'.split(' ');
  initialLat: number = 55.73448;
  initialLon: number = 37.61558;
  map: any;

  constructor( private renderer: Renderer2 ) {
  }

  ngOnInit() {
    this.bodyClasses.forEach(token => this.renderer.addClass(document.body, token));
    this.map = L.map('map', {
      center: [ this.initialLat, this.initialLon ],
      zoom: 11
    });
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
    // const info = L.control();
    // info.onAdd = function () {
    //   this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    //   this.update();
    //   return this._div;
    // };
    // info.update = function ( props ) {
    //   this._div.innerHTML = '<h4>Информация о координате</h4>' + (props ?
    //     '<b>' + props.info + '</b>'
    //     : 'Нет сведений');
    // };
    //info.addTo(this.map);
    COORDINATES.forEach(coord => {
      const marker = L.marker([ coord.latitude, coord.longitude ], {icon: coord.icon});
      //marker.on('mouseover', () => info.update(coord));
      marker.addTo(this.map);
    });
  }


  ngOnDestroy() {
    this.bodyClasses.forEach(token => this.renderer.removeClass(document.body, token));
  }
}
