import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { UserService } from 'src/app/services/user.service';

import { ModalComponent } from 'src/app/components/modal/modal.component';
@Component({
  selector: 'app-reset-password-init',
  templateUrl: './reset-password-init.component.html',
  styleUrls: ['./reset-password-init.component.scss'],
})
export class ResetPasswordInitComponent {
  constructor(
    private userService: UserService,
    private modalService: NgbModal
  ) {}

  submitForm(form: any) {
    this.userService.lostPassword$(form.value.email).subscribe();
  }

  openModal(form: any) {
    const modalRef = this.modalService.open(ModalComponent, {
      backdropClass: 'primary-backdrop',
      size: 'md',
      centered: true,
    });
    modalRef.componentInstance.title = 'Réinitialisation du mot de passe';
    modalRef.componentInstance.message = `Etes vous bien sur de vouloir réinitialiser votre mot de passe ?`;
    modalRef.componentInstance.btnName = 'Valider';
    modalRef.componentInstance.action = () => {
      this.submitForm(form);
      modalRef.dismiss('success');
    };
  }
}
