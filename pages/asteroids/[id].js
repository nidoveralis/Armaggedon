import { useRouter } from "next/router";
import Asteroid from '../../components/Asteroud/Asteroid';

export const getServerSideProps = async (context) => {
console.log(context)
  const url='https://api.nasa.gov/neo/rest/v1/neo/3328631?api_key=gjX3ndY5NQbyNkMqwR58egqxw3QptF2LZjeVGnn9'
  const response = await fetch(url);
  const data = await response.json();
  console.log('llll')
  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data: data },
  }
};


const Astro=({data})=> {
 
console.log(data)
  return(
    <>
      <Asteroid data={data} />
    </>
  )
}

export default Astro