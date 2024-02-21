import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl:'./app.component.html', 
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'learn-telegu';
  apiUrl = 'http://localhost:3000/api/words/random';
  words: any[] = [];

  constructor(private http: HttpClient) {
    setInterval(() => {
      const flipTelugu = document.getElementById('flip-telugu');
      const flipEnglish = document.getElementById('flip-english');

      if (flipTelugu && flipEnglish) {
        if (flipTelugu.style.display === 'none') {
          flipTelugu.style.display = 'inline';
          flipEnglish.style.display = 'none';
        } else {
          flipTelugu.style.display = 'none';
          flipEnglish.style.display = 'inline';
        }
      }
    }, 5000);
  }

  ngOnInit() {
    this.http.get<any[]>(this.apiUrl).subscribe(
      (response) => {
        this.words = response;
      },
      (error) => {
        console.error('Error fetching random words:', error);
      }
    );
  }
  


}
