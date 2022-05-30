import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private options = {
    timeOut: 2000,
    progressBar: true,
    countDuplicates: true,
    toastClass: 'toastr',
  };

  constructor(private toastr: ToastrService) {}

  showSuccess(message: string, title: string = '') {
    this.toastr.success(message, title, {
      ...this.options,
      messageClass: 'success-toaster',
    });
  }

  showError(message: string, title: string = '') {
    this.toastr.error(message, title, {
      ...this.options,
      timeOut: 3000,
      messageClass: 'error-toaster',
    });
  }

  showInfo(message: string, title: string = '') {
    this.toastr.info(message, title, this.options);
  }

  showWarning(message: string, title: string = '') {
    this.toastr.warning(message, title, this.options);
  }
}
