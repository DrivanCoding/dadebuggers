import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { Icons } from 'src/app/enums/icons.enum';

@Injectable({
  providedIn: 'root'
})
export class IconsService {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) { }

  registerIcons(): void {
    for (let icon_name in Icons) {
      let icon_path = (Icons as any)[icon_name];
      this.matIconRegistry.addSvgIcon(icon_name, this.domSanitizer.bypassSecurityTrustResourceUrl(icon_path));
    }
  }
}
