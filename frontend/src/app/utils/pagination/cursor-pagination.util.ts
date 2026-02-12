import { PaginatedResponse } from '@app/services/api.service';
import { Observable } from 'rxjs';

export interface CursorPaginationState<T> {
  data: T[];
  nextCursor?: string;
  loading: boolean;
}

export class CursorPaginator<T> {
  data: T[] = [];
  nextCursor?: string;
  loading = false;

  constructor(
    private fetchFn: (params: {
      take: number;
      cursor?: string;
    }) => Observable<PaginatedResponse<T>>,
    private take = 1,
  ) {}

  load() {
    if (this.loading) return;

    this.loading = true;

    this.fetchFn({
      take: this.take,
      cursor: this.nextCursor,
    }).subscribe((res) => {
      console.log(res);
      this.data = [...this.data, ...res.data];
      this.nextCursor = res.nextCursor;
      this.loading = false;
    });
  }

  reset() {
    this.data = [];
    this.nextCursor = undefined;
  }
}
