
import './Header.css';
function Header(props) {
  // Deconstruct props
  // Create variables for props objects (to simplify from props.title, etc.)
  const { title, productCount, categoryCount } = props

  return (
    <div className="Header">
      <h1>{title}</h1>
      <p>Products: {productCount}</p>
      <p>Categories: {categoryCount}</p>
    </div>
  )
}

export default Header