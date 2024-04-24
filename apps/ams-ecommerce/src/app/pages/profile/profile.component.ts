import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import {  RouterModule } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  imports: [JsonPipe, AsyncPipe, RouterModule ]
})
export class ProfileComponent implements OnInit, OnDestroy {
  apiService = inject(ApiService)
  profileData$!: Observable<any>;
  private routeSubscription: Subscription | null = null;

  

  ngOnInit() {
      
    this.fetchProfileData();
      
  }

  ngOnDestroy() {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }

  fetchProfileData() {
    this.profileData$ = this.apiService.fetchProfileData()
  }
}
