import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClaimService } from './core/services/implementations/claim.service';
import { IGetAllQueryParam } from './shared/models/get-all-query-param.model';
import { CarService } from './core/services/implementations/car.service';
import { BrandService } from './core/services/implementations/brand.service';
import { UserService } from './core/services/implementations/user.service';
import { RentalService } from './core/services/implementations/rental.service';
import { IClaimQueryResponse } from './shared/models/claim/get-claim.response.model';
import { IResponseWrapper } from './shared/models/response-wrapper.model';
import { IPaginationInfo } from './shared/models/pagination-info.model';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RentACarNow';

  private claimService: ClaimService;
  private rentalService: RentalService;
  private userService: UserService;
  private brandService: BrandService;
  private carService: CarService;

  public claims: IResponseWrapper<IClaimQueryResponse[]>;

  constructor() {
    this.claimService = inject(ClaimService);
    this.rentalService = inject(RentalService);
    this.userService = inject(UserService);
    this.brandService = inject(BrandService);
    this.carService = inject(CarService);

    const paginationInfo: IPaginationInfo = {
      pageNumber: 1,
      pageItemSize: 100,
      totalItemCount: 100,
      totalPageCount: 100
    }

    const claimQueryResponse: IClaimQueryResponse[] = [];

    const fakeClaims: IResponseWrapper<IClaimQueryResponse[]> = {
      httpStatusCode: 200,
      errorMessages: [],
      data: claimQueryResponse,
      paginationInfo: paginationInfo,
    };

    this.claims = fakeClaims;

    this.claimService.getAll().subscribe(response => {
      console.log(response);
      this.claims = response;
    });

  }

}
