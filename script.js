// console.log('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_epowJR24KRya1wP4HjDTsXaJiMVsfCsQK2inym40C9UBLHRtj0IUO3XEjqSQJTnm')

// // API key: live_epowJR24KRya1wP4HjDTsXaJiMVsfCsQK2inym40C9UBLHRtj0IUO3XEjqSQJTnm
// //Cat breed ids: beng, cypr, manx, any random

// console.log($.ajax('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_epowJR24KRya1wP4HjDTsXaJiMVsfCsQK2inym40C9UBLHRtj0IUO3XEjqSQJTnm'))
// // console.log($.ajax('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=cypr&api_key=live_epowJR24KRya1wP4HjDTsXaJiMVsfCsQK2inym40C9UBLHRtj0IUO3XEjqSQJTnm'))
// console.log($.ajax('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=manx&api_key=live_epowJR24KRya1wP4HjDTsXaJiMVsfCsQK2inym40C9UBLHRtj0IUO3XEjqSQJTnm'))
// console.log($.ajax('https://api.thecatapi.com/v1/images/search?limit=3&api_key=REPLACE_ME'))

console.log($.ajax("https://api.thecatapi.com/v1/breeds"));
///////////////////
///Global Variables
//////////////////
let breedId = [
  "abys",
  "aege",
  "abob",
  "acur",
  "asho",
  "awir",
  "amau",
  "amis",
  "bali",
  "bamb",
  "beng",
  "birm",
  "bomb",
  "bslo",
  "bsho",
  "bure",
  "buri",
  "cspa",
  "ctif",
  "char",
  "chau",
  "chee",
  "csho",
  "crex",
  "cymr",
  "cypr",
  "drex",
  "dons",
  "lihu",
  "emau",
  "ebur",
  "esho",
  "hbro",
  "hima",
  "jbob",
  "java",
  "khao",
  "kora",
  "kuri",
  "lape",
  "mcoo",
  "mala",
  "manx",
  "munc",
  "nebe",
  "norw",
  "ocic",
  "orie",
  "pers",
  "pixi",
  "raga",
  "ragd",
  "rblu",
  "sava",
  "sfol",
  "srex",
  "siam",
  "sibe",
  "sing",
  "snow",
  "soma",
  "sphy",
  "tonk",
  "toyg",
  "tang",
  "tvan",
  "ycho",
];
let names = [
  "Abyssinian",
  "Aegean",
  "American Bobtail",
  "American Curl",
  "American Shorthair",
  "American Wirehair",
  "Arabian Mau",
  "Australian Mist",
  "Balinese",
  "Bambino",
  "Bengal",
  "Birman",
  "Bombay",
  "British Longhair",
  "British Shorthair",
  "Burmese",
  "Burmilla",
  "California Spangled",
  "Chantilly-Tiffany",
  "Chartreux",
  "Chausie",
  "Cheetoh",
  "Colorpoint Shorthair",
  "Cornish Rex",
  "Cymric",
  "Cyprus",
  "Devon Rex",
  "Donskoy",
  "Dragon Li",
  "Egyptian Mau",
  "European Burmese",
  "Exotic Shorthair",
  "Havana Brown",
  "Himalayan",
  "Japanese Bobtail",
  "Javanese",
  "Khao Manee",
  "Korat",
  "Kurilian",
  "LaPerm",
  "Maine Coon",
  "Malayan",
  "Manx",
  "Munchkin",
  "Nebelung",
  "Norwegian Forest Cat",
  "Ocicat",
  "Oriental",
  "Persian",
  "Pixie-bob",
  "Ragamuffin",
  "Ragdoll",
  "Russian Blue",
  "Savannah",
  "Scottish Fold",
  "Selkirk Rex",
  "Siamese",
  "Siberian",
  "Singapura",
  "Snowshoe",
  "Somali",
  "Sphynx",
  "Tonkinese",
  "Toyger",
  "Turkish Angora",
  "Turkish Van",
  "York Chocolate",
];
let breedImg = [];
let noImgBreed = [];
//let breedsWithImgs = [];

//////////////
///functions//
/////////////
function getBreedsLoop() {
  $.ajax("https://api.thecatapi.com/v1/breeds").then(
    function (data) {
      for (let i = 0; i < data.length; i++) {
        breedId.push(data[i].id);
        names.push(data[i].name);
        if (data[i].image) {
          breedImg.push(data[i].image.url);
        } else {
          noImgBreed.push(data[i].id);
        }
      }
    },
    function (error) {
      console.log("There seems to be an error");
    }
  );
}
getBreedsLoop();
console.log(breedId);
console.log(breedImg);
console.log(noImgBreed);
console.log(names);
//console.log(breeds);

// let breedsWithImgs = names.filter((breed) => {
//   console.log(breed);
//   //return breed !== "ebur";
// });
// let breedsWithImgs = breeds.filter(breed => {
//     if(breed !== 'ebur' && breed !== 'mala'){
//         return true
//      }
//      return false
// })
// for (let i = 0; i < breeds.length; i++){
//     // if(breeds[i] !== 'ebur' && breeds[i] !== 'mala'){
//     //     breedsWithImgs.push(breeds[i]);
//     // }
//     console.log(breeds[i])
// }
// console.log(breedsWithImgs);

// function getBreedTemp (breedsArr) {
//     console.log(breedsArr)
//     for(let i=0; i < breedsArr.length; i++){
//         console.log(breedsArr[i])
//         //console.log($.ajax(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${breedsArr[i]}&api_key=live_epowJR24KRya1wP4HjDTsXaJiMVsfCsQK2inym40C9UBLHRtj0IUO3XEjqSQJTnm`))
//         //.then( function(data){
//             //console.log(data);
//         //})
//     }

// }
// getBreedTemp(breeds);
