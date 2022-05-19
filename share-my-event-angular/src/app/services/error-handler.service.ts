import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  constructor(private notify: NotificationService, private router: Router) {}

  notifyHttpError(
    err: HttpErrorResponse,
    message: string = 'Erreur lors de la requête HTTP'
  ) {
    console.error(err);
    let errorCode = err?.error?.code_error;
    errorCode = err.error?.fieldErrors?.email[0].code ?? errorCode;
    errorCode = err.status == 401 ? 'unauthorized' : errorCode;
    errorCode = err.status == 403 ? 'forbidden' : errorCode;

    this.notify.showError(this.setErrorMessage(errorCode));
    if (errorCode == 'unauthorized' || errorCode == 'forbidden') {
      this.router.navigateByUrl('/home');
    }
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
      case 'title_required':
        return 'Le titre est obligatoire';
      case 'title_max_length':
        return 'Le titre doit être compris entre 0 et 50 caractères';
      case 'description_required':
        return 'La description est obligatoire';
      case 'title_max_length':
        return 'La description est obligatoire';
      case 'date_required':
        return 'La date est obligatoire';
      case 'date_earlier':
        return "Impossible d'insérer une date déjà passée";
        return 'Cette adresse e-mail est déjà associée à un compte';
      case 'unauthorized':
        return 'Identifiants incorrects';
      case 'forbidden':
        return 'Accès non autorisé';

      default:
        return "Erreur serveur, merci de contacter l'administrateur";
    }
  }
}
