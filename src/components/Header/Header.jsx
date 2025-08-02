import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center py-5 border-b-2'>
            <h1 className='text-3xl md:text-4xl text-red-800 font-bold'>Knowledge Cafe</h1>
            <img className='w-9 h-9 md:w-14 md:h-14 object-cover' src={profile} alt="" />
        </header>
    );
};

export default Header;