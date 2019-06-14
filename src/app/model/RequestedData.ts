import { Recipe } from "./Recipe";

export class RequestedData {
  title: string;
  version: number;
  href: string;
  results: Recipe[];
}
