
import './Header.css';
function Header(props) {
  // const { productCount, categoryCount } = props


  return (
    <div className="Header">
      <h1>Chris' Bodega</h1>
      <p>Products: {props.productCount}</p>
      <p>Categories: {props.categoryCount}</p>
    </div>
  )
}

export default Header