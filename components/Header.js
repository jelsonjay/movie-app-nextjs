import styled from '@emotion/styled'
import {rem} from 'polished'


function Header ({isDark}) {
  return (
  <HeaderWrap isDark={isDark}>
 <div className='container'>
 <div className='logo'>
  <img src='/img/logo.svg' alt='Logo'/>
  <span className='logo'>Best Of Movies 2021</span>
  </div>
 </div>

  </HeaderWrap>
  )
}

const HeaderWrap = styled.div`
background: ${props => props.isDark ? '#fbfefd' : 'hsl(212, 33%, 89%)'};
padding: 20px;

.logo{
display:flex;
align-items:center;
}

.logo-text{
color: #333;
font-weight: bold;
font-size: ${rem(20)};
margin-left: ${rem(20)};
}
`





export default Header