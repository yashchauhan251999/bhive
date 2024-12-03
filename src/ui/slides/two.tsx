import './styles/two.scss';
import classNames from 'classnames';
import { useEffect, useMemo, useRef } from 'preact/hooks';

export default function Two({index}: {index: number}) {

    const one = 'https://i5.walmartimages.com/dfwrs/76316474-909d/k2-_93921c57-134c-4bf2-8ba8-1dfdb4e92404.v1.png';
    const two = 'https://i5.walmartimages.com/dfwrs/76316474-1773/k2-_ed6f8a74-69e6-46b1-a736-494516096215.v1.png';
    const clouds = 'https://i5.walmartimages.com/dfwrs/76316474-33af/k2-_f62e32ed-7ce1-4207-b005-e93171ab3f2e.v1.png';
    const isNextSlide =  useMemo(() => index === 2, [index]);
    const headingRef = useRef<HTMLDivElement>(null);

    if (![1,2].includes(index) )  {
        return <></>
    }

    useEffect(() => {
        if (typeof window === 'object') {
            const ref = headingRef.current;
            if (index === 2) {
                setTimeout(() => {
                    ref?.classList.add('show');
                }, 1500) // animation-delay
            } else {
                ref?.classList.remove('show');
            }
        } 
    }, [index])

    return <div className="bg-yellow-400 animation-container">
        <div ref={headingRef} className={classNames("heading text-2xl font-semibold")}>
            Here's what's new
        </div>

            <div className={classNames("image-stack", {"vertical": isNextSlide})}>
                <div className="img-array">
                    
                    <div className="one"
                        style={{
                            backgroundImage: `url(${one})`
                        }}
                    >
                        <div className="badge"> Recommended for you </div>
                        <div className="half-blur"></div>

                        <div className="footer">
                            <h2>Peloton</h2>
                            <p>Get 3 months free of the Peloton App</p>
                        </div>
                    </div>

                    <div className="two"
                        style={{
                            backgroundImage: `url(${two})`
                        }}
                    >
                        <div className="badge"> 🔥 Popular </div>
                        <div className="half-blur"></div>

                        <div className="footer">
                            <h2>Burger King Savings</h2>
                            <p>Enjoy 25% off Burger King® every day</p>
                        </div>
                    </div>
                

                    <div className="three"
                        style={{
                            backgroundImage: `url(${clouds})`
                        }}
                    >
                        <div className="badge"> Mark your calendar </div>
                        <div className="half-blur"></div>
                        <div className="footer">
                            <h2>Walmart+ Week</h2>
                            <p>7 days of big member offers & exclusive access! </p>
                        </div>
                    </div> 
                </div>
            </div>

        <div className={classNames("bottom-rounded", {"hide": isNextSlide})}>
            <p className="text-2xl text-blue-600 font-bold text">
                Your membership packs <br /> more perks than ever!
            </p>
        </div>
    </div>
}