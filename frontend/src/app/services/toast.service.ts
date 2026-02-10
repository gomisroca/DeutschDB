import { Injectable, signal } from '@angular/core';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface Toast {
  id: string;
  message: string;
  type: ToastType;
  duration?: number;
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toastsSignal = signal<Toast[]>([]);

  toasts = this.toastsSignal.asReadonly();

  private defaultDuration = 4000;

  show(
    message: string,
    type: ToastType = 'info',
    duration = this.defaultDuration,
  ) {
    const id = crypto.randomUUID();

    const toast: Toast = {
      id,
      message,
      type,
      duration,
    };

    this.toastsSignal.update((t) => [...t, toast]);

    if (duration > 0) {
      setTimeout(() => this.remove(id), duration);
    }
  }

  success(message: string, duration?: number) {
    this.show(message, 'success', duration);
  }

  error(message: string, duration?: number) {
    this.show(message, 'error', duration);
  }

  warning(message: string, duration?: number) {
    this.show(message, 'warning', duration);
  }

  info(message: string, duration?: number) {
    this.show(message, 'info', duration);
  }

  remove(id: string) {
    this.toastsSignal.update((t) => t.filter((toast) => toast.id !== id));
  }

  clear() {
    this.toastsSignal.set([]);
  }
}
