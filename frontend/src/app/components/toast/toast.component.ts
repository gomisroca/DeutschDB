import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { ToastService } from '@app/services/toast.service';

@Component({
  selector: 'app-toast-container',
  standalone: true,
  imports: [NgClass],
  template: `
    <div class="fixed top-4 right-4 z-50 flex flex-col gap-2 w-80">
      @for (toast of toastService.toasts(); track toast.id) {
        <div
          class="flex items-start gap-3 rounded-xl px-4 py-3 shadow-lg text-white animate-slide-in"
          [ngClass]="toastClasses(toast.type)"
        >
          <span class="flex-1 text-sm">
            {{ toast.message }}
          </span>

          <button
            class="opacity-70 hover:opacity-100 text-lg leading-none"
            (click)="toastService.remove(toast.id)"
          >
            ✕
          </button>
        </div>
      }
    </div>
  `,
})
export class ToastContainerComponent {
  toastService = inject(ToastService);

  toastClasses(type: string) {
    return {
      'bg-green-600': type === 'success',
      'bg-red-600': type === 'error',
      'bg-blue-600': type === 'info',
      'bg-yellow-500 text-black': type === 'warning',
    };
  }
}
