import { useRouter } from "next/router";
import Asteroid from '../../components/Asteroud/Asteroid';

export const getServerSideProps = async (context) => {

  const {id} = context.params;
  const url=`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=gjX3ndY5NQbyNkMqwR58egqxw3QptF2LZjeVGnn9`;
  const response = await fetch(url);
  const data = await response.json();
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
 
  return(
    <>
      <Asteroid data={data} />
    </>
  )
}

export default Astro