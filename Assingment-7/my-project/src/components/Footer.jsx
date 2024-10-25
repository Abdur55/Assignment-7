
import logo from '../assets/assets/logo-footer.png'
import bg from '../assets/assets/bg-shadow.png'
const Footer = () => {
    return (
        <div className="">
            <div className='bg-black mb-28'>
            <img className='bg-white w-11/12 mx-auto' src={bg} alt="" />
            <div>
                <img className='mx-auto mb-5' src={logo} alt="" />
            </div>
            <div className="flex justify-between mb-8">

                <div>
                    <h2 className='text-white mb-5'>About Us</h2>
                    <p>We are a passionate team <br /> dedicated to providing best <br /> services to our customers.</p>
                </div>
                <div>
                    <h2 className='text-white mb-5'>Quick Links</h2>
                    <li><a href="#"></a>Home</li>
                    <li><a href="#"></a>Services</li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </div>
                <div className="">
                    <h3 className='text-white mb-5'>Subscribe</h3>
                    <p className='mb-3'>Subscribe to our newsletter for the <br /> latest updates. </p>
                    <div className="">
                        <input className="border p-1 rounded-l-xl" type="email" placeholder="Enter your email" />
                        <button className="border rounded-r-xl p-1  bg-[#dbaccc]">Subscribe</button>
                    </div>
                </div>
            </div>
            <h2 className='border'></h2>
            <h3 className='text-center mb-10'>@2024 Your Company All Rights Reserved.</h3>
            </div>
        </div>
    );
};

export default Footer;