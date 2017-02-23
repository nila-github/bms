import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {

  isStringEmpty(str: string) {
    return str === null || str === undefined || str.trim() == '';
  }

}
