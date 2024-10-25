
import logo from '../assets/assets/logo.png'
const Navbar = () => {
    return (

        <div>
            <div className='max-w-7xl mr-auto mb-5'>
                <div className='flex justify-between items-center'>
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <div className='flex gap-7'>
                        <a href="#">Home</a>
                        <a href="#">Fixture</a>
                        <a href="#">Teams</a>
                        <a href="#">Schedules</a>
                        <div>
                            <button className='border w-24 '>Coin</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;