import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule} from "@angular/common/http";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { BuyPage } from '../pages/buy/buy';
import { ContactsPage } from "../pages/contacts/contacts";
import { SendPage} from "../pages/send/send";
import { TransactionsPage} from "../pages/transactions/transactions";
import { SearchPage } from "../pages/search/search";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    BuyPage,
    ContactsPage,
    SendPage,
    TransactionsPage,
    SearchPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    BuyPage,
    ContactsPage,
    SendPage,
    TransactionsPage,
    SearchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
