import {Component, ElementRef, ViewChild} from '@angular/core';
import {CapacitorGoogleMaps} from '@capacitor-community/capacitor-googlemaps-native';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('map') mapView: ElementRef;

  constructor() {
    this.initialize();
  }

  async initialize() {
    try{
      await CapacitorGoogleMaps.initialize({
        key: 'GOOGLE_MAPS_IOS_API_KEY'
      });
    } catch (e) {
        console.log(e);
    }
  }

  async ionViewDidEnter() {
    const boundingRect = this.mapView.nativeElement.getBoundingClientRect() as DOMRect;

    CapacitorGoogleMaps.create({
      width: Math.round(boundingRect.width),
      height: Math.round(boundingRect.height),
      x: Math.round(boundingRect.x),
      y: Math.round(boundingRect.y),
      latitude: -33.86,
      longitude: 151.20,
      zoom: 12
    });

    CapacitorGoogleMaps.addListener('onMapReady', async function() {

      CapacitorGoogleMaps.addMarker({
        latitude: -33.86,
        longitude: 151.20,
        title: 'Custom Title',
        snippet: 'Custom Snippet',
      });

      CapacitorGoogleMaps.setMapType({
        type: 'normal'
      });
    });
  }

  ionViewDidLeave() {
    CapacitorGoogleMaps.close();
  }
}
