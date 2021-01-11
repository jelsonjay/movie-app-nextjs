import fetch from 'isomorphic-unfetch'
import Card from 'components/Card'
import {Flex, Box} from 'reflexbox'

 function Home({movies}) {

  console.log(movies)
  return (
  <Box variant="container">
   <Box my={40} as='h1'>Best Movies o 2021</Box>
   <Flex justifyContent='space-between' flexDirection={{_: 'column', md: 'row'}}>
   {movies.map(item => (
    <Box key={item.id} width={{_: '100%', md: '30%'}}>
    <Card item={item} />
    </Box>
   ))}
   </Flex>
  </Box>
  )
}

export async function getServerSideProps(){
  const {API_URL} = process.env

  const res = await fetch(`${API_URL}/movies`)

  const data = await res.json()
  return{
    props:{
      movies: data
    }
  }
}

export default Home