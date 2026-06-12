const Products=[
    {title:'cabbage',isFruit:false,id:1},
    {title:'Garlic',isFruit:false,id:2},
    {title:'Apple',isFruit:true,id:3}
];

function Shoppinglist(){
    const listitem=Products.map(product=>
        <li key={product.id} style={{color:product.isFruit?'magenta':'darkgreen'}}>{product.title}</li>
    )
    return(
        <ol>{listitem}</ol>
    )
}
export default Shoppinglist