import './MainProducts.css'
import Products from '../products.json'

const MainProducts = () => {
  return (
    
    <div className="card">
      {
          Products.map(product => {
              return(
                  <div className="card-header border border-warning m-4 text-primary" style={{width: 18 + "rem"}}> 
                    <strong>{product.id}</strong><br/><br/>
                    <strong>{product.name}</strong><br/><br/>
                    <strong>{product.supplier}</strong><br/><br/>
                    <strong>{product.description}</strong><br/><br/>
                    <strong>{product.price}</strong><br/>
                  </div>
                  
              )
          })
      }
    </div>
  )
}

export default MainProducts