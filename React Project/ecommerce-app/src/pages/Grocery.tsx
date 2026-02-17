interface GroceryData {
    name: string;
    originalPrice: number;
    discountedPrice: number;
    discount: string;
    quantity: string;
    url: string;
}

interface GroceryProps{
    grocery: GroceryData;
    deleteGrocery: (name: string) => void;
}

function Grocery(Props: GroceryProps) {
 const {grocery, deleteGrocery} = Props;

 console.log(deleteGrocery);

    return(
       <div className="card" style={{width: "18rem"}}>
  <img src={grocery.url} className="card-img-top" alt={grocery.name} />
  <div className="card-body">
    <h5 className="card-title">{grocery.name}</h5>
    <p className="card-text">Original Price: ${grocery.originalPrice}</p>
    <p className="card-text">Discounted Price: ${grocery.discountedPrice}</p>
    <p className="card-text">Discount: {grocery.discount}</p>
    <p className="card-text">Quantity: {grocery.quantity}</p>
    <button type="button" className="btn btn-outline-danger btn-sm w-100" onClick={() => deleteGrocery(grocery.name)}>
                        Delete
    </button>
  </div>
</div>
    );
}

export default Grocery;