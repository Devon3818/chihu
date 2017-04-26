import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomeModule } from '../pages/home/home.module';
import { TabsModule } from '../pages/tabs/tabs.module';


import { DiscoverPageModule } from '../pages/discover-page/discover-page.module';
import { MorePageModule } from '../pages/more-page/more-page.module';
import { MessagesPageModule } from '../pages/messages-page/messages-page.module';
import { BroadcastPageModule } from '../pages/broadcast-page/broadcast-page.module';
import { AnswerModule } from '../pages/answer/answer.module';
import { QuestionModule } from '../pages/question/question.module';
import { ArticleModule } from '../pages/article/article.module';
import { AttentionModule } from '../pages/attention/attention.module';
import { InformModule } from '../pages/inform/inform.module';
import { SupportModule } from '../pages/support/support.module';
import { OpenShareModule } from '../pages/open-share/open-share.module';
import { ChatModule } from '../pages/chat/chat.module';
import { PersonModule } from '../pages/person/person.module';
import { PerhomeModule } from '../pages/perhome/perhome.module';
import { PerparticularModule } from '../pages/perparticular/perparticular.module';
import { FocusModule } from '../pages/focus/focus.module';
import { FocusQuestionModule } from '../pages/focus-question/focus-question.module';
import { FocusUserModule } from '../pages/focus-user/focus-user.module';
import { CollectModule } from '../pages/collect/collect.module';
import { MyShareModule } from '../pages/my-share/my-share.module';
import { CreateCookTitleModule } from '../pages/create-cook-title/create-cook-title.module';
import { CreateQuestionTitleModule } from '../pages/create-question-title/create-question-title.module';
import { CreateQuestionTypeModule } from '../pages/create-question-type/create-question-type.module';
import { CreateShareModule } from '../pages/create-share/create-share.module';
import { CreateCookDataModule } from '../pages/create-cook-data/create-cook-data.module';

import { HttpModule } from '@angular/http';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages:true
    }),
    IonicStorageModule.forRoot(),
    SuperTabsModule.forRoot(),
    DiscoverPageModule,
    MessagesPageModule,
    BroadcastPageModule,
    MorePageModule,
    AnswerModule,
    QuestionModule,
    ArticleModule,
    AttentionModule,
    InformModule,
    SupportModule,
    OpenShareModule,
    ChatModule,
    PersonModule,
    PerhomeModule,
    PerparticularModule,
    FocusModule,
    FocusQuestionModule,
    FocusUserModule,
    CollectModule,
    MyShareModule,
    CreateCookTitleModule,
    CreateQuestionTitleModule,
    CreateQuestionTypeModule,
    CreateShareModule,
    CreateCookDataModule,
    TabsModule,
    HomeModule,
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
