import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';
import { LoginComponent } from './login/login.component';
import { QuestionListComponent } from './questions/list/question-list.component';
import { QuestionDetailComponent } from './questions/detail/question-detail.component';
import { CandidateDetailComponent } from './candidates/detail/candidate-detail.component';
import { CandidatesListComponent } from './candidates/list/candidates-list.component';
import { TestBuilderComponent } from './test/test-builder/test-builder.component';
import { TestPlayerComponent } from './test/test-player/test-player.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    pathMatch: 'full'
  },
  {
    path: 'question',
    children: [
      {
        path: 'detail/:id',
        component: QuestionDetailComponent
      }
    ]
  },
  {
    path: 'candidate',
    children: [
      {
        path: 'detail/:id',
        component: CandidateDetailComponent
      }
    ]
  },
  {
    path: 'test-builder/:id',
    component: TestBuilderComponent
  },
  {
    path: 'test-player/:id',
    component: TestPlayerComponent
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
