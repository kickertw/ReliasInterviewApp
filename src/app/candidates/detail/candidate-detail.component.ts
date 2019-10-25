import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Candidate } from '../shared/models/candidate.model';
import { CandidateService } from '../candidate.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TestService } from '../../test/test.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-candidate-detail',
  templateUrl: './candidate-detail.component.html',
  styleUrls: ['./candidate-detail.component.scss']
})
export class CandidateDetailComponent implements OnInit {
  candidate: Candidate;
  candidateLoaded = false;
  newTestName = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private candidateService: CandidateService,
    public dialog: MatDialog,
    private testService: TestService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    const candidateId = +this.route.snapshot.paramMap.get('id');

    if (candidateId === 0) {
      this.candidate = <Candidate>{
        id: 0,
        firstName: '',
        lastName: '',
        positionType: '',
        created: null,
        tests: null
      };
    } else {
      this.getCandidate(candidateId);
    }
  }

  getCandidate(id: number): void {
    this.candidateService.getCandidate(id).subscribe(response => {
      this.candidate = response;
      this.candidateLoaded = true;
    });
  }

  saveCandidate() {
    if (this.candidate.id === 0) {
      this.candidate.created = new Date();
      console.log(this.candidate);
      this.candidateService.createCandidate(this.candidate).subscribe(
        () => {
          this.toastr.success('', 'Created!', { timeOut: 2000 });
          this.router.navigate(['/']);
        },
        () => {
          this.toastr.error('', 'An unexpected error has occurred!', { timeOut: 2000 });
        }
      );
    } else {
      this.candidateService.updateCandidate(this.candidate).subscribe(
        () => {
          this.toastr.success('', 'Updated!', { timeOut: 2000 });
          this.router.navigate(['/']);
        },
        () => {
          this.toastr.error('', 'An unexpected error has occurred!', { timeOut: 2000 });
        }
      );
    }
  }

  goToTest(testId) {
    this.router.navigate(['/test-builder', testId]);
  }

  allRequiredFields() {
    return this.candidate.firstName.length > 0 && this.candidate.lastName.length > 0 && this.candidate.positionType.length > 0;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '250px',
      data: { name: this.newTestName }
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result.length > 0) {
        this.newTestName = result;
        this.testService
          .createTest(this.newTestName, this.candidate.id)
          .subscribe(res => {
            this.router.navigate(['test-builder', res.testId]);
          });
      } else {
        this.toastr.error('You must give your test a name', 'Add Test Error');
      }
    });
  }
}

@Component({
  selector: 'app-dialog-overview-example-dialog',
  template: `
    <div mat-dialog-content>
      <p>What's the name of your new Test?</p>
      <mat-form-field>
        <input matInput [(ngModel)]="data.name" />
      </mat-form-field>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">Cancel</button>
      <button mat-button [mat-dialog-close]="data.name" cdkFocusInitial>
        Ok
      </button>
    </div>
  `
})
export class DialogOverviewExampleDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

export interface DialogData {
  name: string;
}
