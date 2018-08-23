declare var ol: any;

import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-geomap',
  templateUrl: './geomap.component.html',
  styleUrls: [ './geomap.component.scss' ]
})
export class GeomapComponent implements OnInit, OnDestroy {

  bodyClasses: string[] = 'page-map page-map-full'.split(' ');
  latitude: number = 55.73448;
  longitude: number = 37.61558;
  map: any;

  constructor() {
  }

  ngOnInit() {
    this.bodyClasses.forEach(token => document.getElementsByTagName('body')[ 0 ].classList.add(token));
    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([ this.longitude, this.latitude ]),
        zoom: 8
      })
    });
  }

  ngOnDestroy() {
    this.bodyClasses.forEach(token => document.getElementsByTagName('body')[ 0 ].classList.remove(token));
  }
}
