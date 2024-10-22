import { Component, OnInit } from '@angular/core';
import { IconsRegistryService } from '../../services/icons-registry.service';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MatIconModule,MatSidenavModule, MatButtonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent implements OnInit {
  private navIcons: string[] = [
    'mh-Beneficiary',
    'mh-Logout',
    'mh-Manage Users',
    'mh-News',
    'mh-Projects',
    'mh-Transaction',
    'mh-hBars'
  ];
  isSidebarOpen:boolean=false;
  constructor(
    private iconsRegistryService: IconsRegistryService,
  ) {
    this.iconsRegistryService.registerIcons(this.navIcons);
  }
  ngOnInit(): void {}
  toggoleSideBar(){
    this.isSidebarOpen =! this.isSidebarOpen
  }
}
