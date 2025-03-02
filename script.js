// 1) Create a promise
const p = new Promise((resolve, reject) => {
  const numberOfCustomers = 100;

  if (numberOfCustomers > 5) {
    resolve("Success"); // fulfilled with value
  } else {
    reject("Not enough promotion"); // failure with reason
  }
});

// 2) Consume a promise with .then() & .catch()
// p.then(value => {
//     console.log(value);
// }).catch(reason => {
//     console.log(reason);
// });

// 3) Consume a promise with async/await & try/catch - MODERN WAY

// const checkResults = async () => {
//     try {
//         const value = await p;
//         console.log(value);
//     } catch (reason) {
//         console.log(reason);
//     }
// }
// checkResults();

// 4) Why & Where use promises in web development
// Most common examples of using promises in web development:
// - On frontend: Network requests (e.g. Fetch API or Axios library)
// - On backend: Interacing with file system, database, etc. (e.g. reading a file)

// 5) Fetch API (most common example of promises)

// fetch("https://reqres.in/api/users")
//   .then((response) => {
//     if (!response.ok) {
//       return Promise.reject("4xx or 5xx problem");
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data.data[2].email);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// 6) Promise.all / Promise.any

// Promise.all([fetchPhotoPromise, fetchCommentsPromise]).then((values) => {
//   console.log(values);
// });

// Promise.any([fetchPhotoServer1Promise, fetchPhotoServer2Promise]).then(
//   (value) => {
//     // do something;
//   }
// );
