# situm-capacitor-wayfinding
Situm Capacitor Wayfinding is a base app made with [Situm Wayfinding Plugin For Capacitor](https://github.com/situmtech/situm-capacitor-plugin-wayfinding). It has been done using Ionic Angular.

## Configuration
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

## Build

Run `npm  install` to install the dependencies.

Run `ionic build` to build the project.

Run `ionic cap sync` to keep the native layer up to date.

Finally open your android/iOS platform project and execute them.

## Customization 

### Icons and splash Screen
You can use [cordova-res](https://capacitorjs.com/docs/guides/splash-screens-and-icons) to simplify the generation of icons and splash screens 

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