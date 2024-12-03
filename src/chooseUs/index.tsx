import classnames from 'classnames';
import star from '../static_assets/icons/star.svg';
import gym from '../static_assets/icons/dumble.svg';
import wifi from '../static_assets/icons/wifi.svg';
import coffee from '../static_assets/icons/coffee.svg';
import affordable from '../static_assets/icons/rupee.svg';
import lounge from '../static_assets/icons/chair.svg';
import sports from '../static_assets/icons/badminton.svg';
import quick from '../static_assets/icons/clock.svg';
import arrow from '../static_assets/icons/arrow.svg';

export function ChooseUs() {

    const data = [
        {
            icon: star,
            text: 'Community Events'
        },

        {
            icon: gym,
            text: 'Gym Facilities'
        },
        {
            icon: wifi,
            text: 'Highspeed Wifi'
        },
        {
            icon: coffee,
            text: 'Cafe & Tea Bar'
        },
        {
            icon: affordable,
            text: 'Affordable'
        },
        {
            icon: lounge,
            text: 'Comfort Lounges'
        },
        {
            icon: quick,
            text: 'Quick Booking'
        },
        {
            icon: sports,
            text: 'Sports Area'
        },
    ];

    const total = data.length;

    return <section
        className="bg-gray-50 sm:px-[10%] px-6 flex flex-col space-y-4 py-20"
    >
        <div className="flex justify-between items-center pb-10">
            <span className="text-4xl font-semibold">
                Why Choose us?
            </span>
            <a href="#spaces">
                <img src={arrow} className="sm:hidden block" />
            </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mg:gap-0">
            {
                data.map(
                    (
                        { icon, text }, index
                    ) => {
                        return <div
                        className={classnames(
                            "col-span-1 flex flex-col items-center text-left sm:justify-left justify-center",
                            "sm:pl-4 pl-0 sm:flex-row space-y-2 sm:space-y-0 space-x-0 sm:space-x-3 h-24 md:h-16 text-nowrap",
                            "sm:py-2 shadow-md md:shadow-none rounded-md sm:rounded-none lg:border-r lg:border-b bg-white md:bg-gray-50",
                            {
                                'lg:border-r-0': index === 3 || (index + 1) % total === 0,
                                'lg:border-b-0': index > 3
                            },
                            "hover:bg-white hover:rounded-md hover:shadow-lg transition-all duration-300" // Added hover shadow
                        )}
                    >
                    

                            <img src={icon} className="h-8 sm:h-6" />
                            <p className="flex-wrap">{text}</p>
                                                   </div>
                    })
            }
        </div>
    </section>
}

