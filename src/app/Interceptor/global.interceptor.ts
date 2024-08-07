// import { Injectable } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor
// } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable()
// export class GlobalInterceptor implements HttpInterceptor {

//   constructor() { }

//   intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
//     const token = localStorage.getItem('userToken');
//     const baseUrl: string = 'foodsystem.tryasp.net/';
//     let newHeaders = {};
//     if (token !== null) {
//       newHeaders = {
//         'Authorization': `Bearer ${token}`
//       }
//     }
//     let newRequest = request.clone({
//       setHeaders: newHeaders, url: baseUrl + request.url
//     })
//     return next.handle(newRequest);
//   }
// }


// // import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
// // import { Injectable } from '@angular/core';
// // import { Observable } from 'rxjs';

// // @Injectable()
// // export class GlobalInterceptor implements HttpInterceptor {
// //   constructor() {}

// //   intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
// //     const token = localStorage.getItem('userToken');
// //     const baseUrl: string = 'https://foodsystem.tryasp.net/'; // Ensure HTTPS and a trailing slash

// //     let newHeaders = {};
// //     if (token) {
// //       newHeaders = {
// //         'Authorization': Bearer ${token}
// //       };
// //     }
// //     const newUrl = baseUrl + request.url; // Ensure correct URL concatenation

// //     const newRequest = request.clone({
// //       setHeaders: newHeaders,
// //       url: newUrl
// //     });

// //     return next.handle(newRequest);
// //   }
// // }
