import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'acms-dynamic-shell';

  constructor(translateService: TranslateService) {
    translateService.use('pt-BR');
  }
}
