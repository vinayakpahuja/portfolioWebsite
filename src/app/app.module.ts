import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {ProjectsComponent} from './projects/projects.component';
import {RecommendationComponent} from './recommendation/recommendation.component';
import {SkillsComponent} from './skills/skills.component';
import {ResumeComponent} from './resume/resume.component';
import {ResumeActualComponent} from './resume-actual/resume-actual.component';
import {MymodalComponent} from './mymodalcomponent/mymodalcomponent.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ContactComponent} from './contact/contact.component';
import {HttpClientModule} from '@angular/common/http';
import {FooterComponent} from './footer/footer.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    HomeComponent,
    ProjectsComponent,
    RecommendationComponent,
    SkillsComponent,
    ResumeComponent,
    ResumeActualComponent,
    MymodalComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule, NgbModule.forRoot(), HttpClientModule, FormsModule
  ],
  entryComponents: [
    MymodalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
