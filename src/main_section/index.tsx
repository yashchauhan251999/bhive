import coworkingMweb from '../static_assets/right.svg'

import honeycomb from '../static_assets/honeycomb.png'

export function Main() {
    return <section
        className="w-full sm:flex flex-col sm:flex-row-reverse"
    >
        <div className="flex sm:w-[30%] justify-end bg-gray-50 sm:h-full">
            <img src={coworkingMweb} className="sm:w-[90%] block xs:hidden" />
        </div>

        <div className="flex sm:w-[70%] w-full relative justify-center items-center sm:p-[5%] px-6 pt-8 pb-11"
        >
            <div className="absolute h-full w-full"
                style={{
                    background: `url(${honeycomb})`,
                    backgroundSize: 'cover'
                }}
            >
            </div>
            <p className="xl:text-[58px] xl:leading-[70px] lg:text-4xl md:text-3xl text-xl font-semibold text-center">
                Host your meeting with world-class amenities. Starting at 
                <span className="text-primary-lightYellow ml-2">
                     ₹199/-!
                </span>
            </p>
        </div>
    </section>
}

