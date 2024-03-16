import banner from '../../assets/images/banner.png';

const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${banner})` }} className="min-h-[455px] xl:min-h-[530px] 2xl:min-h-[600px] bg-no-repeat bg-center bg-contain 2xl:bg-cover mt-10 text-center flex items-center justify-center">
            <div className='space-y-10'>
                <div className='space-y-6'>
                    <h1 className='text-5xl font-bold text-white text'>Track Your Calories, Transform <br />
                        Your Health!</h1>
                    <p className='text-lg text-white max-w-[930px] mx-auto'>Explore a vast database of delicious recipes, discover their calorie counts, and take control of your nutrition journey today. Start counting, start thriving with Calorie Counter.</p>
                </div>
                <div className='space-x-6'>
                    <button className='text-xl font-semibold py-5 px-8 rounded-full text-[#150B2B] bg-[#0BE58A] border-2 border-[#0BE58A]'>Explore Now</button>
                    <button className='text-xl font-semibold py-5 px-8 rounded-full text-white border-2'>Our Feedback</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;