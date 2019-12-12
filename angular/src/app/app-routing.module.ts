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


const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'schedule', component: ScheduleComponent },
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
