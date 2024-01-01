function Banner() {
    return (
        <div className='relative banner flex h-ban overflow-hidden max-h-ban mb-10 md:h-[23em] mob:h-[32em]'>
            <div className='left-content w-full'>
                <img
                    src='https://www.theplor.in/cdn/shop/files/24_f54908b7-e191-4744-9baf-e1aa96f24a1a.jpg?v=1695201879&width=750'
                    alt='image1'
                    className='h-37 w-full object-contain xl:object-cover bg-custom-gradient'
                />
            </div>
            <div className='right-content w-full'>
                <img
                    src='https://www.theplor.in/cdn/shop/files/tote-bag-for-men.jpg?v=1695201624&width=750'
                    alt='image2'
                    className='h-37 w-full object-contain xl:object-cover bg-custom-gradient'
                />
            </div>
            <div className='absolute grid gap-8 top-100 left-110 md:top-[13.7em] md:left-72 mob:top-[26.7em]'>
                <h1 className='xl:text-banner text-white leading-ban font-Lora md:w-[6em] md:leading-[1.25em]'>
                    Bold is YOU
                </h1>
                <button
                    type='button'
                    className='bg-white w-1/2 m-auto px-2 py-3 box-content rounded-lg font-Cardo text-light-black leading-4 shadow-btn'
                >
                    SHOP BAGS
                </button>
            </div>
        </div>
    );
}

export default Banner;