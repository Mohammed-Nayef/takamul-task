import { Component } from '@angular/core';
import { IconsRegistryService } from '../../../../shared/services/icons-registry.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.css'
})
export class ProjectsListComponent {

  icons:string[] = [
    'pp-delete',
    'pp-plus',
    'pp-edit-project',
    'pp-manage'
  ]

  constructor(private iconsRegistryService: IconsRegistryService){
    iconsRegistryService.registerIcons(this.icons)
  }


}
