import {Box, Flex} from 'reflexbox'
import getConfig from 'next/config'
import fetch from 'isomorphic-unfetch'

const Movies = ({movie}) => {

  return(
<Box variant='container'>
<Box as='h2' my={40}>{movie.title}</Box>
<Box maxWidth={600}> 
  <p dangerouslySetInnerHTML={{__html: movie.info}}></p>
</Box>

</Box>
  )
}
const {publicRuntimeConfig} = getConfig()

export async function getServerSideProps(context){
  const {slug} = context.query
  const res = await fetch(`${publicRuntimeConfig.API_URL}/movies?slug=${slug}`)
  const data = await res.json()
  return{
    props:{
      movie: data[0]
    }
  }
}
export default Movies