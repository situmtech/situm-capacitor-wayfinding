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
    user: "demoaccount@situm.com",
    apiKey: "f3ef40b65ffd1574403ffef0669bab69c9040463cf16567e12a45e2e2407bb86",
    iosGoogleMapsApiKey: "YOUR_IOS_GOOGLE_MAPS_APIKEY",
    buildingId : "7033",
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
      console.log('ATAG: // ERROR:');
      console.log(`ATAG: ${e}`);
      console.log('ATAG: // END ERROR.');
    }
  }
}
