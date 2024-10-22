import { Injectable } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry, MatIconModule} from '@angular/material/icon';
@Injectable({
  providedIn: 'root'
})
export class IconsRegistryService {

  constructor(private domSanitizer:DomSanitizer , private iconRegistry: MatIconRegistry) { 

  }
  registerIcon(svgName : string){
    this.iconRegistry.addSvgIcon(svgName,this.domSanitizer.bypassSecurityTrustResourceUrl(`./assets/SVGs/${svgName}`))
  }
  registerIcons(svgNames : string[]){
    svgNames.forEach(svgName => {
      
      this.iconRegistry.addSvgIcon(svgName,this.domSanitizer.bypassSecurityTrustResourceUrl(`./assets/SVGs/${svgName}.svg`))
    });
  }
}
