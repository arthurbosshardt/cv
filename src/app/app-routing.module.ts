import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { FormationsComponent } from './formations/formations.component';
import { MeComponent } from './me/me.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'formations', component: FormationsComponent },
  { path: 'me', component: MeComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
