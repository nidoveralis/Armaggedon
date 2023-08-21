function getTodayDate() {
  let today = new Date();
  let year = today.getFullYear();
  let month = String(today.getMonth() + 1).padStart(2, '0');
  let day = String(today.getDate()).padStart(2, '0'); 

  return year + '-' + month + '-' + day;
}

const bigAstro = {width: '36', heigth: '40' };
const smallAstro = {width: '22', heigth: '24'};
const startDate = getTodayDate();
const endDate = '2023-09-12';

const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=DEMO_KEY`;

export {bigAstro,smallAstro,url};
//gjX3ndY5NQbyNkMqwR58egqxw3QptF2LZjeVGnn9