**Ionic 5 + Capacitor 3 + capacitor-googlemaps-native (1.0.2) GoogleMap Demo** 

This demo shows how to use capacitor-googlemaps-native capacitor plugin in iOS.

Recently the author fixed following issue which I raised.

https://github.com/capacitor-community/capacitor-googlemaps-native/issues/57

**Requirements**

You need a **GOOGLE MAPS IOS API KEY**

**Test Environment**

OS : macOS Big Sur 11.3.1

XCode : 12.5

iPhone : 14.4.2

**Ionic info**

<pre><code>
ionic info

**Ionic:**

Ionic CLI                     : 6.16.1 (/usr/local/lib/node_modules/@ionic/cli)
Ionic Framework               : @ionic/angular 5.6.8
@angular-devkit/build-angular : 12.0.2
@angular-devkit/schematics    : 12.0.2
@angular/cli                  : 12.0.2
@ionic/angular-toolkit        : 4.0.0

**Capacitor:**

Capacitor CLI      : 3.0.0
@capacitor/android : not installed
@capacitor/core    : 3.0.0
@capacitor/ios     : 3.0.0

**Utility:**

cordova-res : 0.15.3
native-run  : 1.3.0

**System:**

NodeJS : v14.17.0 (/usr/local/bin/node)
npm    : 6.14.13
OS     : macOS Big Sur
</code></pre>


**Installation**

No need to install extra package, once you clone or download this repository all you need to do is run '**npm install**'

If you want to make it from the scratch, create ionic basic project which is 'blank' project using angular, capacitor integration.

Then run following commands by order.

1. npm i --save @capacitor-community/capacitor-googlemaps-native@latest

2. npm install @capacitor/ios

3. npx cap add ios

4. ionic build

5. npx cap sync 

6. npx cap open ios

Run in Xcode 

Done.

**Screen shot**

Simulator

![googlemap_works_sim](https://user-images.githubusercontent.com/2142419/120635795-35c01100-c4b0-11eb-981c-067a36bff017.png)

Real device

![googlemap_works_device](https://user-images.githubusercontent.com/2142419/120635782-32c52080-c4b0-11eb-828c-8e0d4819735f.png)


