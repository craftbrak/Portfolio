import { CdkCellDef } from '@angular/cdk/table';
import { Directive, Input } from '@angular/core';
import { MatCellDef, MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

@Directive({
    selector: '[matCellDefSafe]', // same selector as MatCellDef
    providers: [{ provide: CdkCellDef, useExisting: TypeSafeMatCellDef }],
    standalone: false
})
export class TypeSafeMatCellDef<T> extends MatCellDef {
  @Input() matCellDefSafeDataSource: T[] | Observable<T[]> | MatTableDataSource<T> | undefined;

  static ngTemplateContextGuard<T>(
    dir: TypeSafeMatCellDef<T>,
    ctx: unknown
  ): ctx is { $implicit: T; index: number } {
    return true;
  }
}
