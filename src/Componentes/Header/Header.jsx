import './header.css'

function Header(props){
  return (
    <h1>{props.children}</h1>
  )
}

export default Header