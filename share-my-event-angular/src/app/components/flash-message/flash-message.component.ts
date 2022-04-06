import { Component } from '@angular/core';

import { FlashService } from 'src/app/services/flash.service';

@Component({
  selector: 'app-flash-message',
  templateUrl: './flash-message.component.html',
  styleUrls: ['./flash-message.component.scss']
})
export class FlashMessageComponent {

  state !: any;

  constructor(private flashService: FlashService) {
    this.state = flashService.flash$.subscribe(status => {
      this.state = status
      this.hideMessage(flashService)
    });
  }

  hideMessage = (flashService: FlashService): void => {
    setTimeout(() => {
      flashService.flash$.next({errors:false, message: ""})
    }, 3500);
  }
}
