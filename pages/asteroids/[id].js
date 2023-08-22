import { useRouter } from "next/router";

export const getServerSideProps = async (context) => {
console.log(context)
  const url='https://api.nasa.gov/neo/rest/v1/neo/3328631?api_key=DEMO_KEY'
  const response = await fetch(url);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data: data.near_earth_objects || [] },
  }
};


const Astro=()=> {
  const {query} = useRouter();
  
  //Там указаны данные астероида и список всех его сближений. 
  //По каждому сближению: 
  //скорость относительно Земли, relative_velocity
  // время максимального сближения с Землей,  close_approach_data":[{"close_approach_date":"2015-09-08","close_approach_date_full":"2015-Sep-08 20:28",
  //расстояние до Земли, distanceKl
  // п
  //о орбите вокруг чего летит. orbiting_body
  //https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=DEMO_KEY

//console.log(query,data)
  return(
    <h1>dlkdjdjddj</h1>
  )
}

export default Astro