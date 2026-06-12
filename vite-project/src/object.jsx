function Car(){
    const obj={
        name:"fiat",
        model:500,
        color:"white"
    };
    return(
        <>
        <h1>My car is {obj.color} {obj.name} {obj.model}</h1>
        </>
    )

}
export default Car