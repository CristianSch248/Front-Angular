import { ErrorHandler, Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService extends ErrorHandler{
  constructor(){
    super();
  }

  override handleError(error: HttpErrorResponse| any) {
    /* # Se o erro for uma instancia de Response, ou seja, ele vai conter:
     * - status: 404, 401, 500 ...
     * - URL: local do erro
     * - statusText: representação textual do status
     */

    if(error instanceof HttpErrorResponse){
      switch(error.status){
        case 400:
          alert('400 Bad Request: Usuário ou Senha incorretos')
          break;
        case 403:
          alert('403: Forbidden')
          break;
        case 500:
          alert('500: Internal Server Error')
          break;
      }
    }
  }
}
