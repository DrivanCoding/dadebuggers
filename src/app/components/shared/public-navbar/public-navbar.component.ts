import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'public-navbar',
  templateUrl: './public-navbar.component.html',
  styleUrls: ['./public-navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PublicNavbarComponent {

}
