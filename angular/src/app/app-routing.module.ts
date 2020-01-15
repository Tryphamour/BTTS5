import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component'
import { ScheduleComponent } from './schedule/schedule.component';
import { BracketComponent } from './bracket/bracket.component';
import { MappoolsComponent } from './mappools/mappools.component';
import { PlayersComponent } from './players/players.component';
import { RulesComponent } from './rules/rules.component';
import { StaffComponent } from './staff/staff.component';
import { SignupComponent } from './signup/signup.component';
import { TimelineComponent } from './schedule/timeline/timeline.component';
import { GroupstageComponent } from './schedule/groupstage/groupstage.component';
import { QualifiersComponent } from './schedule/qualifiers/qualifiers.component';
import { Round16Component } from './schedule/round16/round16.component';
import { Round32Component } from './schedule/round32/round32.component';
import { QuarterFinalsComponent } from './schedule/quarter-finals/quarter-finals.component';
import { SemiFinalsComponent } from './schedule/semi-finals/semi-finals.component';
import { FinalsComponent } from './schedule/finals/finals.component';
import { GrandFinalsComponent } from './schedule/grand-finals/grand-finals.component';


const routes: Routes = [
  { path: 'index', component: IndexComponent },
  {
    path: 'schedule', component: ScheduleComponent,
    children: [
      { path: '', component: TimelineComponent },
      { path: 'qualifiers', component: QualifiersComponent },
      { path: 'groupstage', component: GroupstageComponent },
      { path: 'round32', component: Round32Component },
      { path: 'round16', component: Round16Component },
      { path: 'quarterfinals', component: QuarterFinalsComponent },
      { path: 'semifinals', component: SemiFinalsComponent },
      { path: 'finals', component: FinalsComponent },
      { path: 'grandfinals', component: GrandFinalsComponent }
    ]
  },
  { path: 'bracket', component: BracketComponent },
  { path: 'mappools', component: MappoolsComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'staff', component: StaffComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', redirectTo: '/index', pathMatch: 'prefix' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
