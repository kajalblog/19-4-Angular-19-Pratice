import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AdminComponent,UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pratice_Project';
}
