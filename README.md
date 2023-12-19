<p align="center"> <img width="233" src="https://situm.com/wp-content/themes/situm/img/logo-situm.svg" style="margin-bottom:1rem" /> <h1 align="center">Situm Capacitor Wayfinding App</h1> </p>

<p align="center" style="text-align:center">

Situm Capacitor Wayfinding is an indoor positioning hybrid app that shows your buildings and lets you locate and navigate on them. It has been made with [Situm Wayfinding Plugin For Capacitor](https://github.com/situmtech/situm-capacitor-plugin-wayfinding) using Ionic Angular.

</p>

<div align="center" style="text-align:center">

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![iOS Dependency](https://img.shields.io/badge/iOS-%3E%3D10.0-green)
![Android Dependency](https://img.shields.io/badge/android-%3E%3D5.0-GREEN)

</div>

> [!IMPORTANT]  
> This guide refers to the old version of the Wayfinding module, which is **no longer maintained**. We strongly recommend adopting [MapView](https://developers.situm.com/sdk_documentation/cordova/jsdoc/latest/mapview), the new visual component available at [@situm/cordova](https://github.com/situmtech/cordova) for both Cordova and Capacitor.
To stay up to date, checkout the [Cordova SDK Changelog](https://situm.com/docs/cordova-sdk-changelog/) and the [example app](https://github.com/situmtech/cordova/tree/master/example) at the public repository.

## What's in here

This project creates a indoor positioning app made in Ionic Angular. Below you can see some snapshots of this app. 

<img src="https://github.com/situmtech/situm-capacitor-wayfinding/blob/feature/readme_improvements/docs/assets/app-preview.png?raw=true" width="300">

This app will allow you to:

* Explore a building from our Demo Account. However you can easily change the credentials to explore a building from your own account.
* Once properly calibrated locate the user in this building.
* Provide navigation instructions to a given point.


## Getting started

### Configuration
The app already provides Situm demo account credentials. Therefore you only need to provide a valid Google Maps API KEY. 
More info is available in the official [Google Documentation](https://developers.google.com/maps/documentation/android-sdk/get-api-key).
Make sure to enable your API KEY for the platforms of your choice.

1. iOS: put your API KEY in the `LibrarySettings` object that you can find in `src/app/home/home.page.ts`. 
```typescript
const librarySettings = {
          ...
          iosGoogleMapsApiKey: "YOUR_IOS_GOOGLE_MAPS_APIKEY",
          ...
        };
```
2. Android: the Google Maps API KEY must be set in the `AndroidManifest.xml` file (that you will find in the `android/src/main` folder) of your project.
```xml
<meta-data android:name="com.google.android.geo.API_KEY"
    android:value="YOUR_ANDROID_GOOGLE_MAPS_APIKEY"/>
```

### Build

Install Ionic CLI (Commnad Line Tools). You can follow the intructions provided in the [Ionic page](https://ionicframework.com/docs/intro/cli#install-the-ionic-cli). You only need to perform the instructions under  `Install the Ionic CLI ` title.

Once you have downloaded this repository:

Run `npm  install` to install the dependencies.

Run `ionic build` to build the project.

Run `ionic cap sync` to keep the native layer up to date.

Finally open your android/iOS platform project with `ionic cap open ios` or `ionic cap open android` and execute them. 

In iOS you will need to provide the proper `Team` in the `Signing And Capabilities` tab of your `Target`.


## Customization. Make this app your own 

### Provide your own Situm Account Credentials

Put your SITUM USER and API KEY in the `LibrarySettings` object that you can find in `src/app/home/home.page.ts`. 
```typescript
const librarySettings = {
          ...
          user: 
          "YOUR_SITUM_USER",
          apiKey: 
          "YOUR_SITUM_APIKEY",
          ...
        };
```

### Icons and splash Screen
You can use [cordova-res](https://capacitorjs.com/docs/guides/splash-screens-and-icons) to simplify the generation of icons and splash screens. 

### Change App Name and Bundle Identifier

1. iOS: 

* Open Xcode, you can run `ionic cap open ios` from Terminal.
* App name and Bundle Identifier are defined in the `General` tab of your `Target`.
* More info and configuration options at the official [Capacitor docs](https://capacitorjs.com/docs/ios/configuration).

2. Android: 

* To change your Application ID edit `applicationId` at the top of android/app/build.gradle:
  ```groovy
    defaultConfig {
    -       applicationId "es.situm.wayfinding.capacitor"
    +       applicationId "com.mycompany.myapp"
  ```
* To change the name of your app, modify the value for `app_name` (and probably `title_activity_main`) in strings.xml:
  ```xml
    <string name="app_name">MyApp</string>
  ```
* More info and configuration options at the official [Capacitor docs](https://capacitorjs.com/docs/android/configuration).

### Change app header title

* Open `src/app/home/home.page.html` and change the text between the `ion-title` tags to the one you prefer.
  ```xml
    <ion-title>
      Situm Wayfinding
    </ion-title>
  ```

## Known issues

### Dark mode

If the dark mode is activated in older versions of the project, the map is not visible. The problem is already solved.

## Versioning

Please refer to [CHANGELOG.md](./CHANGELOG.md) for a list of notables changes for each version of the plugin.

You can also see the [tags on this repository](https://github.com/situmtech/situm-android-getting-started/tags).

---

## Submitting contributions

You will need to sign a Contributor License Agreement (CLA) before making a submission. [Learn more here](https://situm.com/contributions/). 

---
## License
This project is licensed under the MIT - see the [LICENSE](./LICENSE) file for further details.

---

## More information

More info is available at our [Developers Page](https://situm.com/docs/01-introduction/).

---

## Support information

For any question or bug report, please send an email to [support@situm.es](mailto:support@situm.es)
