import { Component } from '@angular/core';
import { SitumWayfinding } from 'situm-capacitor-plugin-wayfinding';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  // LibrarySettings:
  readonly librarySettings = {
    user: "situm_user",
    apiKey: "situm_apikey",
    iosGoogleMapsApiKey: "ios_goole_maps_apikey",
    buildingId : "building_id",
    dashboardUrl: "https://dashboard.situm.com",
    hasSearchView: true,
    searchViewPlaceholder: "Capacitor WYF",
    useDashboardTheme: false,
  };


  //When the app is loaded
  ionViewDidEnter(){
    this.loadSitumWayfinding('situm-map')
  }

  //Load Situm Wayfinding Module 
  async loadSitumWayfinding(targetId: string) {
    const element: HTMLElement | null = document.getElementById(targetId);
    if (!element) {
      return;
    }
    
    try {
      const wyfResponse = await SitumWayfinding.load(element, this.librarySettings);
    } catch (e) {
    }
  }
}
