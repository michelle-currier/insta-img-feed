// var location_id = 'atchafalaya-restaurant';  // Replace with your location id
// var token = 'SPC:Hm4V_rjNq3xaJrbN4iirVQ:Ew4kCA1OYdwLuIa7hFQByLwA5lI';  // Replace with your token
// var url = 'https://customer-api.singleplatform.com/v1/location/' + location_id + '/all';

// var options = {
//     url: url,
//     headers: {
//         'Authorization': token
//     }
// };

// http.get(url, options, (res) => {
//     let rawData = '';
//     res.on('data', (chunk) => { rawData += chunk; });
//     res.on('end', () => {
//         try {
//             const parsedData = JSON.parse(rawData);
//             console.log(parsedData);
//         } catch (e) {
//             console.error(e.message);
//         }
//     });
// })