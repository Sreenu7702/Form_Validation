function Cond(){
    const islogged=true;
    if(islogged){
        return <h1>WelCome User</h1>
    }
    return <h1>please login</h1>
}
function Cond2(){
    const isLoggedIn=false;
    return(
        <h1>
            {isLoggedIn?"welcoeme user":"please Login"}
        </h1>
    )
}
function Condition(){
    return(
        <>
        <Cond/>
        <Cond2/>
        </>
    )
}
export default Condition