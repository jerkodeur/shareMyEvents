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
    if (err.error.errors) {
      errorCode = err.error.errors[0].defaultMessage;
    }

    if (err.status == 401) {
      if (err.error.message) {
        switch (err.error.message) {
          case 'Invalid credential':
          case 'Unknown user':
            this.notify.showError('Identifiants incorrects');
            break;
          default:
            this.router.navigateByUrl('/home');
            this.notify.showError('Votre session a expiré');
        }
      }
    }

    if (err.status == 400 || err.status == 404) {
      if (err.error.message) {
        switch (err.error.message) {
          case 'unknown_user_uuid':
            this.notify.showError('Utilisateur inconnu');
        }
      }
      this.notify.showError(this.setErrorMessage(errorCode));
    }

    if (err.status == 403) {
      this.router.navigateByUrl('/home');
      this.notify.showError('Accès non autorisé !');
    }

    if (err.status == 500) {
      this.notify.showError(
        this.setErrorMessage(
          "E500, Erreur serveur, merci de contacter l'administrateur"
        )
      );
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
        return 'Cette adresse e-mail est déjà associée à un compte';
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
      case 'date_future':
        return "Impossible d'insérer une date déjà passée";
      case 'name_unique':
        return 'Un nom similaire existe déjà';
      case 'participant_exist_on_event':
        return "L'adresse email saisie existe déjà sur l'event";
      case 'name_exist_on_event':
        return "Le nom renseigné existe déjà sur l'event";
      case 'unknown_user_mail':
        return 'Adresse email inconnue';
      case 'old_password_required':
        return 'Mot de passe temporaire requis';
      case 'eventId_required':
        return 'Code event requis';
      case 'unknown_participation':
        return "Vous n'êtes pas autorisé à accéder à l'évènement ou les données renseignées ne sont pas correctes";
      default:
        return "Erreur lors de la requête au serveur, merci de contacter l'administrateur";
    }
  }
}
