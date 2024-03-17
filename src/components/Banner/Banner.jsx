import banner from '../../assets/images/banner.png';

const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${banner})` }} className="min-h-[185px] md:min-h-[340px] lg:min-h-[455px] xl:min-h-[530px] 2xl:min-h-[600px] bg-no-repeat bg-center bg-contain 2xl:bg-cover mt-7 md:mt-10 text-center flex items-center justify-center">
            <div className='space-y-4 md:space-y-7 lg:space-y-10'>
                <div className='space-y-2 md:space-y-3 lg:space-y-6'>
                    <h1 className='text-lg md:text-3xl lg:text-5xl font-bold text-white text'>Track Your Calories, Transform <br />
                        Your Health!</h1>
                    <p className='text-xs md:text-base lg:text-lg text-white max-w-[340px] md:max-w-[600px] lg:max-w-[930px] mx-auto'>Explore a vast database of delicious recipes, discover their calorie counts, and take control of your nutrition <span className='hidden md:inline'>journey today. Start counting, start thriving with Calorie Counter.</span></p>
                </div>
                <div className='space-x-4 md:space-x-6'>
                    <button className='text-xs md:text-base lg:text-xl font-semibold py-1 md:py-3 lg:py-5 px-2 md:px-4 lg:px-8 rounded-full text-[#150B2B] bg-[#0BE58A] border-2 border-[#0BE58A]'>Explore Now</button>
                    <button className='text-xs md:text-base lg:text-xl font-semibold py-1 md:py-3 lg:py-5 px-2 md:px-4 lg:px-8 rounded-full text-white border-2'>Our Feedback</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;