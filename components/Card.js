import styled from '@emotion/styled'
import Link from 'next/link'


function Card ({item}) {

  const {API_URL} = process.env

  return(
    <CardWrap>
   <div className='images'>
   <img src={API_URL + item.images.url} alt='Avatar' />
   </div>
   <div className='body'>
   <h2>{item.title}</h2>
   <p dangerouslySetInnerHTML={{__html: item.info}}></p>
   <Link href="/movies/[slug]" as={`/movies/${item.slug}`}>
   <a>Read more about this article</a>
   </Link>
   </div>
    </CardWrap>
  )
}

const CardWrap = styled.div`
width: 100%;
border: 1px solid #ccc;
margin-top: 50px;
border-radius: 5px;
overflow: hidden;
box-shadow: 0 0 10px rgba(0,0,0, 0.2);

body{
  padding: 20px;
}
h2{
  margin-bottom: 20px;
}
p{
 color: #666;
 line-height: 1.5;
}
a{
  display: inline-block;
  margin: 20px 0;
}

`

export default Card