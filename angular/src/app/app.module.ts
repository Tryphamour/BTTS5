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
    FooterComponent
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
