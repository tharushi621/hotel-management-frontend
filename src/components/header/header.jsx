import UserData from "../userData/userData.jsx";

function Header(){
    return(
        <header className='w-full bg-blue-500 flex h-[100px] relative items-center p-[10px]'>
            <h1 className='text-white text-[30px] '>Leonine Villa</h1>
            <UserData imageLink ="https://icon-library.com/images/user-png-icon/user-png-icon-16.jpg" name="Tharu"/>
        </header>
    )
}
export default Header;