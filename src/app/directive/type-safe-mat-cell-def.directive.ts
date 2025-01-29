import { CdkCellDef } from '@angular/cdk/table';
import { Directive, Input } from '@angular/core';
import { MatLegacyCellDef as MatCellDef, MatLegacyTableDataSource as MatTableDataSource } from "@angular/material/legacy-table";
import { Observable } from 'rxjs';

@Directive({
  selector: '[matCellDefSafe]', // same selector as MatCellDef
  providers: [{ provide: CdkCellDef, useExisting: TypeSafeMatCellDef }],
})
export class TypeSafeMatCellDef<T> extends MatCellDef {
  // leveraging syntactic-sugar syntax when we use *matCellDef
  @Input() matCellDefSafeDataSource: T[] | Observable<T[]> | MatTableDataSource<T> | undefined;

  // ngTemplateContextGuard flag to help with the Language Service
  static ngTemplateContextGuard<T>(
    dir: TypeSafeMatCellDef<T>,
    ctx: unknown,
  ): ctx is { $implicit: T; index: number } {
    return true;
  }
}
