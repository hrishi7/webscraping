
const request = require('request');
const cheerio = require('cheerio');


    var options = {
        method: 'GET',
        url: 'https://www.zomato.com/kolkata/the-cake-xpress-kankurgachi',
        json: true,
        headers: {
            'Connection': 'keep-alive',
            'Accept-Encoding': '',
            'Accept-Language': 'en-US,en;q=0.8'
        }
    };

request(options, (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
    const sectitle = $('.sc-RbTVP');
    const resturentName = sectitle.find('h1').text();
    const address = $('.sc-jEdsij').find('p').text();
    const rating = $('.sc-hwcHae').find('article').text();
    const votes = $('.sc-hwcHae').find('p').text();
    console.log(resturentName);
    console.log(address);
    console.log(rating);
    console.log(votes);
  }
});
