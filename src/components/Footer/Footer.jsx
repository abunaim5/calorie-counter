const Footer = () => {
    return (
        <div className="mt-14 md:mt-24 bg-[#D7FFEF]">
            <div className="py-20 grid grid-cols-12 gap-4 lg:gap-10 max-w-[1600px] mx-auto px-3 xl:px-[8.75rem] text-center md:text-left">
                <div className="col-span-12 md:col-span-3">
                    <h1 className='text-2xl text-[#150B2B] font-bold mb-2'><span className='text-[#0BE58A]'>Calorie</span> Counter</h1>
                    <p className="text-[#150B2BB3]">Join our community today for delicious ideas to fuel your wellness journey.</p>
                </div>
                <div className="col-span-6 md:col-span-3">
                    <h6 className="text-lg font-bold mb-2 text-gray-700">Services</h6>
                    <div className="space-y-1 text-[#150B2BB3] font-medium">
                        <p><a href=''>Cooking</a></p>
                        <p><a href=''>Teaching</a></p>
                        <p><a href=''>Guiding</a></p>
                        <p><a href=''>Idea Making</a></p>
                    </div>
                </div>
                <div className="col-span-6 md:col-span-3">
                    <h6 className="text-lg font-bold mb-2 text-gray-700">Company</h6>
                    <div className="space-y-1 text-[#150B2BB3] font-medium">
                        <p><a href=''>About us</a></p>
                        <p><a href=''>Contact</a></p>
                        <p><a href=''>Jobs</a></p>
                        <p><a href=''>Press kit</a></p>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-3">
                    <h6 className="text-lg font-bold mb-2 text-gray-700">Legal</h6>
                    <div className="space-y-1 text-[#150B2BB3] font-medium">
                        <p><a href=''>Terms of use</a></p>
                        <p><a href=''>Privacy policy</a></p>
                        <p><a href=''>Cookie policy</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;