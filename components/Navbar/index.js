import styled from '@emotion/styled'
import Link from 'next/link'
import {useRouter} from  'next/router'


const Navbar = ({navbar}) =>{

const router = useRouter()
console.log(router)

  return (
    <NavbarStyled>
    <u>
{navbar.map(item => (
  <li key={item.id}>
  <Link href={item.slug}>
  <a className={router.pathname === item.slug ? 'active' : '' }>{item.title}</a>
  </Link>
  </li>
))}
    </u>
    </NavbarStyled>
  )
}

const NavbarStyled = styled.div`
ul{
  list-style: none;
  padding: 0;
  margin:  0;
  display: flex;
}
li{
  margin-left: 10px
}
a{
  text-decoration: none;
  color: hsl(209, 61%, 16%);
  font-weight: 600;
  text-transform: uppercase;
}
&:hover{
  text-decoration: underline;
}
&:active{
  color: hsl(360, 71%, 66%);
}
`




export default Navbar 