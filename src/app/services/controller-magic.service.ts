import { Injectable } from '@angular/core';
import { Controller } from "scrollmagic";

@Injectable({
  providedIn: 'root'
})
export class ControllerMagicService {

  controller = new Controller();

  constructor() { }
}
