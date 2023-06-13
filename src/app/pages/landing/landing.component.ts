import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IconsService } from 'src/app/services/ui/icons.service';

@Component({
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  constructor(private icons: IconsService) {
    this.icons.registerIcons();
  }

  ngOnInit() {

  }

}
