import styled from '@emotion/styled'
import {rem} from 'polished'
import {Flex, Box} from 'reflexbox'
import NavBar from 'components/Navbar'
import Link from 'next/link'


function Header ({isDark, navbar}) {
  return (
  <HeaderWrap isDark={isDark}>
 <Box className='container'>
  <Flex justifyContent='space-between' alignItems='center'>
  <div className='logo'>
  <Link href='/'>
  <a>
  <img src='/img/logo.svg' alt='Logo'/>
  <span className='logo'>Movies 2021</span>
  </a>
  </Link>
  </div>
  <NavBar navbar={navbar}/>
  </Flex>
 </Box>
  </HeaderWrap>
  )
}

const HeaderWrap = styled.div`
background: ${props => props.isDark ? '#fbfefd' : 'hsl(212, 33%, 89%)'};
padding: 20px;

.logo{
a{
display:flex;
align-items:center;
text-decoration: none;
}

.logo-text{
color: red;
font-weight: bold;
font-size: ${rem(20)};
margin-left: ${rem(20)};
}
}


`





export default Header