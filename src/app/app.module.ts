import { BeaconProvider } from './providers/beacon-provider';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { HoursPage } from '../pages/hours/hours';
import { HomePage } from '../pages/home/home';
import { RegistrationPage } from '../pages/registration/registration';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IBeacon } from '@ionic-native/ibeacon';
import { MenuPage } from '../pages/menu/menu';
import { HistoryPage } from '../pages/history/history';
import { MainPage } from '../pages/main/main';
import { EventsPage } from '../pages/events/events';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './providers/auth.firebase';

const firebase = {
  apiKey: "AIzaSyBhZ3afTM-znIoeTMexTm-Ib1CNn5Relj4",
  authDomain: "ibeacontap.firebaseapp.com",
  databaseURL: "https://ibeacontap.firebaseio.com",
  projectId: "ibeacontap",
  storageBucket: "ibeacontap.appspot.com",
  messagingSenderId: "1031840618466"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HoursPage,
    HomePage,
    RegistrationPage,
    MenuPage,
    HistoryPage,
    MainPage,
    EventsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebase, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HoursPage,
    HomePage,
    RegistrationPage,
    MenuPage,
    HistoryPage,
    MainPage,
    EventsPage
  ],
  providers: [
    IBeacon,
    BeaconProvider,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
  ]
})
export class AppModule {}
