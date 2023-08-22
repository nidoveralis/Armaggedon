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
const dang='&#9888; Опасен';
const api_key = 'gjX3ndY5NQbyNkMqwR58egqxw3QptF2LZjeVGnn9';

const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&api_key=${api_key}`;


export {bigAstro,smallAstro,url, getTodayDate, dang};