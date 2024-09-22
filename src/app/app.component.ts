import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClaimService } from './core/services/implementations/claim.service';
import { IGetAllQueryParam } from './shared/models/get-all-query-param.model';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RentACarNow';

  private claimService:ClaimService;
  
  constructor() {
    this.claimService = inject(ClaimService);
    
    const queryParam: IGetAllQueryParam = {
        isAscending :true,
        sortingField:"",
        pageNumber:1,
        pageSize:10
    }

    this.claimService.getAll("/api/v1/Claim/GetAll",queryParam)
    .subscribe(response => console.log(response));
  
  }
  
}
