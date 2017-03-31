import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { MorePage } from '../pages/more/more';
import { AnswerPage } from '../pages/answer/answer';
import { QuestionPage } from '../pages/question/question';
import { PersonPage } from '../pages/person/person';
import { PerhomepagePage } from '../pages/perhomepage/perhomepage';
import { PerparticularPage } from '../pages/perparticular/perparticular';
import { MessagesPage } from '../pages/messages/messages';
import { ArticlePage } from '../pages/article/article';
import { DiscoverPage } from '../pages/discover/discover';
import { AttentionPage } from '../pages/attention/attention';
import { InformPage } from '../pages/inform/inform';
import { SupportPage } from '../pages/support/support';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SuperTabsModule } from 'ionic2-super-tabs';

import { PublicServe } from '../pages/public.serve';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MorePage,
    AnswerPage,
    QuestionPage,
    PersonPage,
    PerhomepagePage,
    PerparticularPage,
    MessagesPage,
    ArticlePage,
    DiscoverPage,
    AttentionPage,
    InformPage,
    SupportPage,

  ],
  imports: [
    SuperTabsModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages:true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MorePage,
    AnswerPage,
    QuestionPage,
    PersonPage,
    PerhomepagePage,
    PerparticularPage,
    MessagesPage,
    ArticlePage,
    DiscoverPage,
    AttentionPage,
    InformPage,
    SupportPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PublicServe
  ]
})
export class AppModule {}
