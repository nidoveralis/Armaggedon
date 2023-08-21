import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import App from '../components/App/App';
import { url,startDate } from '../utils/constant';


export const getStaticProps = async () => {
  const response = await fetch(url);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data: data.near_earth_objects },
  }
};
const a = [{"links":{"self":"http://api.nasa.gov/neo/rest/v1/neo/2465633?api_key=DEMO_KEY"},"id":"2465633","neo_reference_id":"2465633","name":"465633 (2009 JR5)","nasa_jpl_url":"http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2465633","absolute_magnitude_h":20.44,"estimated_diameter":{"kilometers":{"estimated_diameter_min":0.2170475943,"estimated_diameter_max":0.4853331752},"meters":{"estimated_diameter_min":217.0475943071,"estimated_diameter_max":485.3331752235},"miles":{"estimated_diameter_min":0.1348670807,"estimated_diameter_max":0.3015719604},"feet":{"estimated_diameter_min":712.0984293066,"estimated_diameter_max":1592.3004946003}},"is_potentially_hazardous_asteroid":true,"close_approach_data":[{"close_approach_date":"2015-09-08","close_approach_date_full":"2015-Sep-08 20:28","epoch_date_close_approach":1441744080000,"relative_velocity":{"kilometers_per_second":"18.1279360862","kilometers_per_hour":"65260.5699103704","miles_per_hour":"40550.3802312521"},"miss_distance":{"astronomical":"0.3027469457","lunar":"117.7685618773","kilometers":"45290298.225725659","miles":"28142086.3515817342"},"orbiting_body":"Earth"}],"is_sentry_object":false},
{"links":{"self":"http://api.nasa.gov/neo/rest/v1/neo/3426410?api_key=DEMO_KEY"},"id":"3426410","neo_reference_id":"3426410","name":"(2008 QV11)","nasa_jpl_url":"http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3426410","absolute_magnitude_h":21.34,"estimated_diameter":{"kilometers":{"estimated_diameter_min":0.1434019235,"estimated_diameter_max":0.320656449},"meters":{"estimated_diameter_min":143.4019234645,"estimated_diameter_max":320.6564489709},"miles":{"estimated_diameter_min":0.0891057966,"estimated_diameter_max":0.1992466184},"feet":{"estimated_diameter_min":470.4787665793,"estimated_diameter_max":1052.0225040417}},"is_potentially_hazardous_asteroid":false,"close_approach_data":[{"close_approach_date":"2015-09-08","close_approach_date_full":"2015-Sep-08 14:31","epoch_date_close_approach":1441722660000,"relative_velocity":{"kilometers_per_second":"19.7498128142","kilometers_per_hour":"71099.3261312856","miles_per_hour":"44178.3562841869"},"miss_distance":{"astronomical":"0.2591250701","lunar":"100.7996522689","kilometers":"38764558.550560687","miles":"24087179.7459520006"},"orbiting_body":"Earth"}],"is_sentry_object":false},
{"links":{"self":"http://api.nasa.gov/neo/rest/v1/neo/3553060?api_key=DEMO_KEY"},"id":"3553060","neo_reference_id":"3553060","name":"(2010 XT10)","nasa_jpl_url":"http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3553060","absolute_magnitude_h":26.5,"estimated_diameter":{"kilometers":{"estimated_diameter_min":0.0133215567,"estimated_diameter_max":0.0297879063},"meters":{"estimated_diameter_min":13.3215566698,"estimated_diameter_max":29.7879062798},"miles":{"estimated_diameter_min":0.008277629,"estimated_diameter_max":0.0185093411},"feet":{"estimated_diameter_min":43.7058959846,"estimated_diameter_max":97.7293544391}},"is_potentially_hazardous_asteroid":false,"close_approach_data":[{"close_approach_date":"2015-09-08","close_approach_date_full":"2015-Sep-08 12:07","epoch_date_close_approach":1441714020000,"relative_velocity":{"kilometers_per_second":"19.1530348886","kilometers_per_hour":"68950.9255988812","miles_per_hour":"42843.4237422604"},"miss_distance":{"astronomical":"0.4917435147","lunar":"191.2882272183","kilometers":"73563782.385433689","miles":"45710414.7542113482"},"orbiting_body":"Earth"}],"is_sentry_object":false},
]

const Index = ({ data }) => {
//console.log(data[startDate])
  return (
    <Provider store={store}>
      <div>
        <App data={a} />
      </div>
    </Provider >
  )
}

export default Index;