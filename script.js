// console.log('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_epowJR24KRya1wP4HjDTsXaJiMVsfCsQK2inym40C9UBLHRtj0IUO3XEjqSQJTnm')

// // API key: live_epowJR24KRya1wP4HjDTsXaJiMVsfCsQK2inym40C9UBLHRtj0IUO3XEjqSQJTnm
// //Cat breed ids: beng, cypr, manx, any random

// console.log($.ajax('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_epowJR24KRya1wP4HjDTsXaJiMVsfCsQK2inym40C9UBLHRtj0IUO3XEjqSQJTnm'))
// // console.log($.ajax('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=cypr&api_key=live_epowJR24KRya1wP4HjDTsXaJiMVsfCsQK2inym40C9UBLHRtj0IUO3XEjqSQJTnm'))
// console.log($.ajax('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=manx&api_key=live_epowJR24KRya1wP4HjDTsXaJiMVsfCsQK2inym40C9UBLHRtj0IUO3XEjqSQJTnm'))
// console.log($.ajax('https://api.thecatapi.com/v1/images/search?limit=3&api_key=REPLACE_ME'))

console.log($.ajax('https://api.thecatapi.com/v1/breeds'))
///////////////////
///Global Variables
//////////////////
let breeds = [];

//////////////
///functions//
/////////////
function getBreedsLoop () {
    $.ajax('https://api.thecatapi.com/v1/breeds')
        .then(function(data){
            for(let i = 0; i < data.length; i++){
                breeds.push(data[i].id)
            }
    }, function(error){
        console.log('There seems to be an error')
    })
}
getBreedsLoop()
console.log(breeds);