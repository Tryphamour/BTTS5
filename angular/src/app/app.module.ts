import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndexComponent } from './index/index.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { BracketComponent } from './bracket/bracket.component';
import { MappoolsComponent } from './mappools/mappools.component';
import { PlayersComponent } from './players/players.component';
import { RulesComponent } from './rules/rules.component';
import { StaffComponent } from './staff/staff.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { TimelineComponent } from './schedule/timeline/timeline.component';
import { GroupstageComponent } from './schedule/groupstage/groupstage.component';
import { Round32Component } from './schedule/round32/round32.component';
import { Round16Component } from './schedule/round16/round16.component';
import { QuarterFinalsComponent } from './schedule/quarter-finals/quarter-finals.component';
import { SemiFinalsComponent } from './schedule/semi-finals/semi-finals.component';
import { FinalsComponent } from './schedule/finals/finals.component';
import { GrandFinalsComponent } from './schedule/grand-finals/grand-finals.component';
import { QualifiersComponent } from './schedule/qualifiers/qualifiers.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    ScheduleComponent,
    BracketComponent,
    MappoolsComponent,
    PlayersComponent,
    RulesComponent,
    StaffComponent,
    SignupComponent,
    FooterComponent,
    TimelineComponent,
    GroupstageComponent,
    Round32Component,
    Round16Component,
    QuarterFinalsComponent,
    SemiFinalsComponent,
    FinalsComponent,
    GrandFinalsComponent,
    QualifiersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
