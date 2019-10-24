import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';
import { LoginComponent } from './login/login.component';
import { QuestionListComponent } from './questions/list/question-list.component';
import { QuestionDetailComponent } from './questions/detail/question-detail.component';
<<<<<<< HEAD
import { CandidateDetailComponent } from './candidates/detail/candidate-detail.component';
import { CandidatesListComponent } from './candidates/list/candidates-list.component';
=======
import { TestBuilderComponent } from './test/test-builder/test-builder.component';
import { TestPlayerComponent} from './test-player/test-player.component';
>>>>>>> tw-branch

const routes: Routes = [
  {
    path: '',
    component: CandidatesListComponent,
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
<<<<<<< HEAD
    path: 'candidate',
    children: [
      {
          path: 'list',
          component: CandidatesListComponent
      },
      {
        path: 'detail/:id',
        component: CandidateDetailComponent
      }
    ]
=======
    path: 'test-builder',
    component: TestBuilderComponent
  },
  {
    path: 'test-player',
    component: TestPlayerComponent
>>>>>>> tw-branch
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
