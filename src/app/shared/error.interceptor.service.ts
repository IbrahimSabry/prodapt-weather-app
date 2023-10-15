import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => {
                let errorMessage =  error.error.message;

                //If we need to map error messeges not retrieve as is from Backend
                switch (error.status) {
                    case 400:
                        errorMessage = error.error.message;
                        break;
                    case 401:
                        errorMessage = 'Error: Unauthorized';
                        break;
                    case 403:
                        errorMessage = 'Error: Forbidden';
                        break;
                    case 404:
                        errorMessage = 'Error: Not Found';
                        break;
                    case 500:
                        errorMessage = 'Error: Server Error';
                        break;
                    default:
                        errorMessage = `Error: ${error.message}`;
                }
                return throwError(errorMessage);
            })
        );
    }
}
