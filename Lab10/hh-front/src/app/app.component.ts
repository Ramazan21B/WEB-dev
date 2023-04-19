import {Component, OnInit} from '@angular/core';
import {Company,Vacancy} from "../models";
import {GetdataService} from "./getdata.service";
import {dateTimestampProvider} from "rxjs/internal/scheduler/dateTimestampProvider";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hh-front';
  companies:Company[] = []
  vacancies:Vacancy[] = []
  constructor(private getService:GetdataService) {}
  company_name:string = ""
  company_description:string = ""
  company_city:string = ""
  company_address:string = ""
  vacancy_name:string = ""
  vacancy_description:string = ""
  vacancy_salary:number = NaN
  vacancy_company:number = NaN
  ngOnInit() {
    this.getService.getCompanies().subscribe((data)=>this.companies = data)
  }
  show(id:number){
    this.getService.getVacancies(id).subscribe((data)=>this.vacancies = data)
  }
  addCompany(){
    this.getService.addCompanies(this.company_name,this.company_description,this.company_city,this.company_address).subscribe((data)=>{this.companies.push(data);this.company_name ="";this.company_description = "";this.company_city = "";this.company_address = ""})
  }
  addVacancy(){
    this.getService.addVacancy(this.vacancy_name,this.vacancy_description,this.vacancy_salary,this.vacancy_company).subscribe((data)=>{this.vacancies.push(data);this.vacancy_name = "";this.vacancy_description="";this.vacancy_salary = NaN;this.vacancy_company = NaN})
  }
  deleteCompany(id:number){
    this.getService.deleteCompany(id).subscribe((data)=>this.companies = this.companies.filter((company)=>company.id != id))
  }
  deleteVacancy(id:number){
    this.getService.deleteVacancy(id).subscribe((data)=>this.vacancies = this.vacancies.filter((vacancy)=>vacancy.id != id))
  }
}
