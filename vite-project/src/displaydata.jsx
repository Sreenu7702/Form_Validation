const user={
    name:'heday Lamarr',
    imageUrl:'https://react.dev/images/docs/scientists/yXOvdOSs.jpg',
    imageSize:90,
};
function Profile(){
    return(
        <>
        <h1>{user.name}</h1>
        <img className="user" src={user.imageUrl} alt={'photo of'+user.name} style={{width:user.imageSize,height:user.imageSize}} />
        </>
    )
}
export default Profile