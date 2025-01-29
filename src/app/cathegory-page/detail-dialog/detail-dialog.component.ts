import {
  Component,
  HostListener,
  Inject,
  NgZone,
  OnInit
} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from '@angular/material/dialog';
import { Line } from '../../model/Line';

@Component({
  selector: 'app-detail-dialog',
  templateUrl: './detail-dialog.component.html',
  styleUrls: ['./detail-dialog.component.scss']
})
export class DetailDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Line,
    public dialogRef: MatDialogRef<DetailDialogComponent>,
    private ngZone: NgZone
  ) {
    console.log(data);
  }

  ngOnInit(): void {
  }

  closeDialog(): void {
    // Force dialog close within Angular's zone
    this.ngZone.run(() => {
      this.dialogRef.close();
    });
  }

  @HostListener('window:keyup.esc')
  onKeyUp(): void {
    this.dialogRef.close();
  }

}
