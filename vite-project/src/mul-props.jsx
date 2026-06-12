function Head(){
    return(
        <Child name="John" age={22} city="chennai"/>
    )
}
function Child({name,age,city}){
    return(
        <>
        <h1>{name}</h1>
        <h2>{age}</h2>
        <h3>{city}</h3>
        </>
    )
}
export default Head