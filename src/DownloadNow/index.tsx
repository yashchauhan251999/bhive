import arrow from '../static_assets/icons/arrow.svg';
import apple from '../static_assets/apple.png';
import google from '../static_assets/google.png';
import download from '../static_assets/download.svg';



export function DownloadNow() {
    return <section
        className="bg-gray-50 sm:px-[10%] px-6 flex flex-col space-y-6"
    >
        <div className="flex justify-between lg:pb-28 pb-2">
            <p className="sm:text-4xl text-3xl font-semibold">
                Download our app now
            </p>
            <img src={arrow} className="sm:hidden block" />
        </div>

        <div className="hidden lg:block">
            <div className="border rounded-2xl bg-white pt-[5rem] px-10 flex space-x-8 justify-between relative h-72">
                <img className="left-20 flex-shrink-0 absolute translate-y-[-12rem]" src={download} />

                <div className="w-[25rem] flex-shrink-0">
                </div>

                <div className="flex flex-col space-y-9">
                    <p className="text-text-900 lg:text-lg md:text-sm text-xs">
                        Boost your productivity with the BHIVE Workspace app.
                        Elevate your workspace, collaborate efficiently, and unlock exclusive perks.
                    </p>
                    <div className="flex space-x-2">
                        <img src={apple} />
                        <img src={google} />
                    </div>
                </div>
            </div>
        </div>


        <div className="block lg:hidden">
            <div className="border rounded-2xl bg-white py-[5%] px-10 flex flex-col space-y-8 justify-between relative">
                <img className="h-72 w-full" src={download} />

                <div className="flex flex-col space-y-9">
                    <p className="text-text-900 sm:text-2xl text-xl">
                        Boost your productivity with the BHIVE Workspace app.
                        Elevate your workspace, collaborate efficiently, and unlock exclusive perks.
                    </p>
                    <div className="flex space-x-2">
                        <img src={apple} />
                        <img src={google} />
                    </div>
                </div>
            </div>
        </div>

    </section>
}

