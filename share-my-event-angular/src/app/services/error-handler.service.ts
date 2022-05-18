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
    let errorCode = err.error.code_error;
    errorCode = err.error.fieldErrors?.email[0].code ?? errorCode;
    errorCode = err.status == 401 ? 'unauthorized' : errorCode;

    this.notify.showError(this.setErrorMessage(errorCode));
    return throwError(() => new Error(message));
  }

  setErrorMessage(error: string) {
    switch (error) {
      case 'email_format':
        return "L'adresse e-mail n'est pas valide";
      case 'email_required':
        return "L'adresse e-mail est obligatoire";
      case 'password_format':
        return "Le mot de passe n'est pas valide";
      case 'password_required':
        return 'Le mot de passe est obligatoire';
      case 'firstname_length':
        return 'Le nom doit contenir au minimum 2 caractères';
      case 'firstname_required':
        return 'Le nom est obligatoire';
      case 'lastname_length':
        return 'Le prénom doit contenir au minimum 2 caractères';
      case 'lastname_required':
        return 'Le prénom est obligatoire';
      case 'email_uniq':
        return 'Cette adresse e-mail est déjà associée à un compte';
      case 'unauthorized':
        return 'Identifiants incorrects';

      default:
        return "Erreur serveur, merci de contacter l'administrateur";
    }
  }
}
