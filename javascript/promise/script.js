// const a = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject({ data: "Mahni yoxdur" });
//   }, 2000);
// });
// console.log(a);

// const musics = [];

// function getMusicianAlbum() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (musics.length > 0) {
//         resolve(musics);
//       } else {
//         reject("Musics are not found.");
//       }
//     }, 3000);
//   });
// }

// setTimeout(() => {
//   musics.push({
//     title: "Nese",
//   });
// }, 2000);

// const result = getMusicianAlbum().then(() => {
//   console.log("Promise Resolved");
// });

// console.log("result: ", result);

// const result = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Hec birsey");
//   }, 500);
// });

// result
//   .then((data) => {
//     console.log("Promise ugurlu");
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("Xetayla qarsilasildi");
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Bitti");
//   });

// console.log(result);

// function getData(status) {
//   return new Promise((res, rej) => {
//     if (status) {
//       res("Ugurlu");
//     } else {
//       rej("Ugursuz");
//     }
//   });
// }

// getData(true)
//   .then((data) => {
//     console.log(data);
//     return getData(true);
//   })
//   .catch((data) => {
//     console.log(data);
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .then((data) => {
//     console.log(data);
//     return getData(false);
//   })
//   .catch((data) => {
//     console.log(data);
//   })
//   .catch((data) => {
//     console.log(data);
//   })
//   .finally(() => {
//     console.log("Bitti");
//   });

// const result = await ourPromise;

// async function getPromiseResult() {
//   try {
//     const ourPromise = new Promise((res, rej) => {
//       setTimeout(() => {
//         res("Salam");
//       }, 2000);
//     });
//     const result = await ourPromise;
//     console.log("result", result);
//   } catch (err) {
//     console.log("Something went wrong!", err);
//   }
// }

// getPromiseResult();

// async function getData() {
//   await new Promise((res) => {
//     setTimeout(() => {
//       res();
//     }, 2000);
//   });

//   console.log("hello");
//   return 5;
// }

// getData();

// console.log("Finish");

// async function getData() {
//   return [2, 3, 4, 5];
// }

// getData().then((data) => console.log(data[0]));
