import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';
import { LoginComponent } from './login/login.component';
import { QuestionListComponent } from './questions/list/question-list.component';
import { QuestionDetailComponent } from './questions/detail/question-detail.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'question',
    children: [
      {
          path: 'list',
          component: QuestionListComponent
      },
      {
        path: 'detail/:id',
        component: QuestionDetailComponent
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
