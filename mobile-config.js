// Set up app metadata 
App.info({
  // the bundle ID must be unique across the entire app store
  // usually reverse domains of the creators are used
  id: 'warchild.ask',
  version: '0.1.1',
  name: 'Ocho',
  description: 'Ask Ocho, Jon Snow, Batman, Superman',
  author: 'Ryan Espinoza',
  email: 'ryan.espinoza@discreteunits.com',
  website: 'discreteunits.com'
});


//Set up icons
App.icons({
  // iOS
  'iphone': 'mobile-resources/ios/icon/Icon-60.png',
  'iphone_2x': 'mobile-resources/ios/icon/Icon-120.png',
  'iphone_3x': 'mobile-resources/ios/icon/Icon-180@3x.png',
  'ipad': 'mobile-resources/ios/icon/Icon-72.png',
  'ipad_2x': 'mobile-resources/ios/icon/Icon-72@2x.png',

  // Android
  //'android_ldpi': 'mobile-resources/android/icon/drawable-ldpi-icon.png',
  //'android_mdpi': 'mobile-resources/android/icon/drawable-mdpi-icon.png',
  //'android_hdpi': 'mobile-resources/android/icon/drawable-hdpi-icon.png',
  //'android_xhdpi': 'mobile-resources/android/icon/drawable-xhdpi-icon.png'

});

// Set up launch screens
App.launchScreens({
  // iOS
  'iphone': 'mobile-resources/ios/splash/Default~iphone.png',
  'iphone_2x': 'mobile-resources/ios/splash/Default@2x~iphone_640x960.png',
  'iphone5': 'mobile-resources/ios/splash/Default-568h@2x~iphone_640x1136.png',
  'iphone6': 'mobile-resources/ios/splash/Default-750@2x~iphone6-portrait_750x1334.png',
  'iphone6p_portrait': 'mobile-resources/ios/splash/Default-750@2x~iphone6-portrait_750x1334.png',
  'iphone6p_landscape': 'mobile-resources/ios/splash/Default-750@2x~iphone6-landscape_1334x750.png',
  'ipad_portrait': 'mobile-resources/ios/splash/Default-Portrait~ipad_768x1024.png',
  'ipad_portrait_2x': 'mobile-resources/ios/splash/Default-Portrait@2x~ipad_1536x2048.png',
  'ipad_landscape': 'mobile-resources/ios/splash/Default-Landscape~ipad_1024x768.png',
  'ipad_landscape_2x': 'mobile-resources/ios/splash/Default-Landscape@2x~ipad_2048x1536.png',

  // Android
  //'android_ldpi_portrait': 'mobile-resources/android/splash/drawable-port-ldpi-screen.png',
  //'android_ldpi_landscape': 'mobile-resources/android/splash/drawable-land-ldpi-screen.png',
  //'android_mdpi_portrait': 'mobile-resources/android/splash/drawable-port-mdpi-screen.png',
  //'android_mdpi_landscape': 'mobile-resources/android/splash/drawable-land-mdpi-screen.png',
  //'android_hdpi_portrait': 'mobile-resources/android/splash/drawable-port-hdpi-screen.png',
  //'android_hdpi_landscape': 'mobile-resources/android/splash/drawable-land-hdpi-screen.png',
  //'android_xhdpi_portrait': 'mobile-resources/android/splash/drawable-port-xhdpi-screen.png',
  //'android_xhdpi_landscape': 'mobile-resources/android/splash/drawable-land-xhdpi-screen.png',

});

//Whitelisted URL's
App.accessRule('http://174.68.67.246:3000/*');
App.accessRule('https://*.googleapis.com/*');
App.accessRule('https://*.google.com/*');
App.accessRule('https://*.gstatic.com/*');
