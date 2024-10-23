import { Component } from '@angular/core';
import { NavComponent } from '../../shared/components/nav/nav.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { ProjectsListComponent } from '../../features/project/components/projects-list/projects-list.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavComponent,FooterComponent,ProjectsListComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
