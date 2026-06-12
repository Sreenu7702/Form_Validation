function Parent(){
    const name="sreenu"
    return(
        <Child username={name} />
    )
    function Child({username}){
        return <h1>{username}</h1>
    }
}
export default Parent