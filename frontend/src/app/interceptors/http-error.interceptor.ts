import { HttpInterceptorFn } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { inject } from '@angular/core';
import { ToastService } from '@app/services/toast.service';

export const httpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const toast = inject(ToastService);

  return next(req).pipe(
    catchError((err) => {
      if (err.status === 404) {
        toast.error('Resource not found');
      }

      if (err.status === 409) {
        toast.warning(err.error?.message ?? 'Conflict');
      }

      if (err.status >= 500) {
        toast.error('Server error');
      }

      return throwError(() => err);
    }),
  );
};
