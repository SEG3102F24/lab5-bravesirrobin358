import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirestoreModule } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterOutlet, FirestoreModule],
  providers: [],
})
export class AppComponent {
  title = 'employeeapp';
}
