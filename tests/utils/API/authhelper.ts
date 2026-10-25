// import {request} from '@playwright/test';

// export async function getAuthToken(){
//     const username = process.env.API_USERNAME;
//     const password = process.env.API_PASSWORD;
//     const baseApiURL = process.env.BASE_API_URL;
    
//      const context = await request.newContext();

//     const response = await context.post(`${baseApiURL}/auth`,{
//         data:{
//             username: username,
//             password: password
//         }
//     });

//   const responseBody = await response.json();
//   await context.dispose();
  
//   return responseBody.token || responseBody.accessToken;
// }