import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  constructor(private notify: NotificationService) {}

  notifyHttpError(
    err: HttpErrorResponse,
    message: string = 'Erreur lors de la requête HTTP'
  ) {
    console.error(err);
    let errorCode = err.error.error;
    errorCode = err.error.message.includes('email_uniq') && 'email_uniq';
    this.notify.showError(this.setErrorMessage(errorCode));
    return throwError(() => new Error(message));
  }

  setErrorMessage(error: string) {
    switch (error) {
      case 'email_format':
        return "Le format de l'adresse e-mail n'est pas valide";
      case 'email_required':
        return "La saisie d'une adresse e-mail est obligatoire";
      case 'password_format':
        return "Le format du mot de passe n'est pas valide";
      case 'password_required':
        return "La saisie d'un mot de passe est obligatoire";
      case 'firstname_length':
        return 'Le nom doit contenir au minimum 2 caractères';
      case 'firstname_required':
        return 'La saisie du nom est obligatoire';
      case 'lastname_length':
        return 'Le prénom doit contenir au minimum 2 caractères';
      case 'lastname_required':
        return 'La saisie du prénom est obligatoire';
      case 'email_uniq':
        return 'Cette adresse e-mail est déjà utilisée';
      default:
        return "Erreur serveur, merci de contacter l'administrateur";
    }
  }
}
