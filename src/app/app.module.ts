import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { MorePage } from '../pages/more/more';
import { AnswerPage } from '../pages/answer/answer';
import { QuestionPage } from '../pages/question/question';
import { CreateCookTitlePage } from '../pages/create-cook-title/create-cook-title';
import { CreateCookDataPage } from '../pages/create-cook-data/create-cook-data';
import { CreateQuestionTypePage } from '../pages/create-question-type/create-question-type';
import { CreateQuestionTitlePage } from '../pages/create-question-title/create-question-title';
import { CreateSharePage } from '../pages/create-share/create-share';
import { OpenSharePage } from '../pages/open-share/open-share';
import { FocusPage } from '../pages/focus/focus';
import { CollectPage } from '../pages/collect/collect';
import { MySharePage } from '../pages/my-share/my-share';
import { ChatPage } from '../pages/chat/chat';
import { FocusQuestionPage } from '../pages/focus-question/focus-question';
import { FocusUserPage } from '../pages/focus-user/focus-user';
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

import { WorkService } from '../service/work_service';

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
    CreateCookTitlePage,
    CreateCookDataPage,
    CreateQuestionTypePage,
    CreateQuestionTitlePage,
    CreateSharePage,
    OpenSharePage,
    FocusPage,
    FocusQuestionPage,
    FocusUserPage,
    CollectPage,
    MySharePage,
    ChatPage,

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
    CreateCookTitlePage,
    CreateCookDataPage,
    CreateQuestionTypePage,
    CreateQuestionTitlePage,
    CreateSharePage,
    OpenSharePage,
    FocusPage,
    FocusQuestionPage,
    FocusUserPage,
    CollectPage,
    MySharePage,
    ChatPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PublicServe,
    WorkService
  ]
})
export class AppModule {}
