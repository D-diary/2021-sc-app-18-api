/*************** global init **************/


/************** user function *************/


/************** event callback ************/


/*************** event init ***************/


/*************** start init ***************/



axios.get('../json/city.list.json').then(onGet).catch(onError);

function onGet(r) {
  console.log(r);
  const cityList =r.data;
  const korCity = cityList.filter(v => v.country === 'KR');
  console.log(korCity);
  const city = korCity.map(v => ({id:v.id, name:v.name, lat: v.coord.let, lon:coord.lon}));
  const seoul = city.filter(v => v.name === 'Seoul');
  let [, {id, name, lat, lon}] = seoul;

  console.log(korCity, city);
  console.log(id, name, lat, lon);
}

function onError(err) {
  console.log(err);
}