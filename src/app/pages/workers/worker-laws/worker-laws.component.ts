import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-worker-laws',
  templateUrl: './worker-laws.component.html',
  styleUrls: ['./worker-laws.component.scss']
})

export class WorkerLawsComponent{
  title = 'worker-laws';

  term: string;

  filterData = [
    {
      lawTitle:'Minimum Wages Act, 1948',
      labourLaws:`The Minimum Wages Act, 1948 (the Minimum Wages Act) provides for fixing of minimum rates of wages in certain employments. The minimum wages are prescribed by States through notifications in the State's Gazette under the Minimum Wages Rules of the specific State.In terms of the provisions of the Minimum Wages Act, an employee means
      (i) any person who is employed for hire or reward to do any work, skilled or unskilled manual or clerical, in a scheduled employment in respect of which minimum rates of wages have been fixed;
      (ii) an outworker, to whom any articles or materials are given out by another person to be made up, cleaned, washed, altered, ornamented, finished, repaired, adapted or otherwise processed for sale for the purposes of the trade or business of that other person; and
      (iii) an employee declared to be an employee by the appropriate Government.`
    },
    {
      lawTitle:'Payment of Wages Act, 1936',
      labourLaws: 'The Payment of Wages Act, 1936 (the Payment of Wages Act) is an Act to regulate the payment of wages to certain classes of employed persons. The Payment of Wages Act seeks to ensure that the employers make a timely payment of wages to the employees working in the establishments and to prevent unauthorized deductions from the wages.According to the Payment of Wages Act, all wages shall be in current coin or currency notes or in both. It is, however, provided that the employer may, after obtaining the written authorisation of the employed person, pay him the wages either by cheque or by crediting the wages in his bank account.'

    },
    {
      lawTitle:'Payment of Bonus Act, 1965',
      labourLaws: 'The Payment of Bonus Act, 1965 (the "Bonus Act") provides for the payment of bonus to persons employed in certain establishments in India either on the basis of profits or on the basis of production or productivity and is applicable to every establishment in which 20 or more persons are employed and to all employees drawing a remuneration of less than Rs 10,000. Those employees who have worked for less than thirty days are not eligible to receive bonus under the Bonus Act. The Bonus Act provides for the payment of bonus between 8.33% (minimum) to 20% (maximum). However, for the calculation of bonus, a maximum salary of Rs 3,500 is considered.'

    }
  ]
}
