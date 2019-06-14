import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { RequestedData } from "../model/RequestedData";

@Injectable({ providedIn: "root" })
export class RecipeService {
  constructor(private http: HttpClient) {}

  searchByDish(term): Observable<RequestedData> {
    const url = "/api/?q=" + term;
    return this.http.get<RequestedData>(url);
  }

  searchByIngredient(term): Observable<RequestedData> {
    const url = "/api/?i=" + term;
    return this.http.get<RequestedData>(url);
  }
}
