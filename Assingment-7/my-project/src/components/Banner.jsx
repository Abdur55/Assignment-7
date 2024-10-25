

import banner from '../assets/assets/banner-main.png'
const Banner = () => {
    return (
        <div>
            <div className="bg-[url('https://i.ibb.co/HhKvwHC/bg-shadow.png')] h-96 w-full bg-cover bg-black rounded-xl mb-16">
                <div className='text-center'>
                    <div>
                        <img className='w-36 h-1/3 mx-auto mb-5' src={banner} alt="" />
                        </div>
                        <div></div>
                    <h2 className='text-white text-4xl font-bold mb-4'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
                    <h3 className='text-white text-2xl font-bold mb-6'>Beyond Boundaries Beyond Limits</h3>
                    <div>
                        <button className='btn border p-2 bg-lime-400'>Claim Free Credit</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;