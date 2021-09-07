// const Header = (props) => {
//   return (
//     <header>
//       <h1>{props.title}</h1>    
//     </header>
//   )
// }

// using destructuring...

const Header = ({title}) => {
  return (
    <header>
      <h1>{title}</h1>    
    </header>
  )
}

//if no props are passed on Header function then takes this
Header.defaultProps = {
  title: 'Training schedule'
}

export default Header
