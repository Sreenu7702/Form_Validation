function Navbar({username}){
    return<h1>Welcome {username}</h1>
}
function Sidebar({username}){
    return <p>User:{username}</p>
}
function Dashboard(){
    const username="Sreenu"
    return(
        <>
        <Navbar username={username}/>
        <Navbar username={username}/>
        </>
    )
}
export default Dashboard