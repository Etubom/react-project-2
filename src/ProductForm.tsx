enum Colour {
  Red,
  Blue,
  Green,
  Yellow,
  White,
}
export interface InterfaceProps {
  id: number
  title: string
  description: string
  imageUrl: string
  inStock: boolean
  colour: Colour
  price: string
  inSale: boolean
}
const ProductForm = () => {
  const handleSubmit = () => {
    console.log('submit clicked')
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product id:</label>
          <input type="text" />
        </div>
        <div>
          <label>Title:</label>
          <input type="text" />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" />
        </div>
        <div>
          <label>Image Link:</label>
          <span>Link goes here</span>
        </div>
        <span>In Sale:</span>
        <label>Yes</label>
        <input type="radio" name="inSale" value="yes" />
        <label>No</label>
        <input type="radio" name="inSale" value="no" />
        <br />
        <span>In Stock:</span>
        <label>Yes</label>
        <input type="radio" name="inStock" value="yes" />
        <label>No</label>
        <input type="radio" name="inStock" value="no" />
        <div>
          <label>Price:</label>
          <span>{`£ price`}</span>
        </div>
        <div>
          <label>Colour:</label>
          <span>enum colour here</span>
        </div>
      </form>
    </>
  )
}

export default ProductForm
