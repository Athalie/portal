declare var ol: any;

import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-geomap',
  templateUrl: './geomap.component.html',
  styleUrls: [ './geomap.component.scss' ]
})
export class GeomapComponent implements OnInit, OnDestroy {

  bodyClasses: string[] = 'page-map page-map-full'.split(' ');
  latitude: number = 18.5204;
  longitude: number = 73.8567;
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
        center: ol.proj.fromLonLat([ 73.8567, 18.5204 ]),
        zoom: 8
      })
    });
  }

  ngOnDestroy() {
    this.bodyClasses.forEach(token => document.getElementsByTagName('body')[ 0 ].classList.remove(token));
  }
}
