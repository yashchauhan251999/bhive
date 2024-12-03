import classNames from 'classnames';
import { iSpace } from '../../OurSpaces/types';
import btnArrow from '../../static_assets/icons/btn_arrow.svg';

export function Button({ space, variant }: { space: iSpace, variant: 'day' | 'bulk' }) {
    return (
        <button className={
            classNames(
                " rounded-md p-2 relative w-full",
                [
                    variant === 'day' ?
                        'border bg-secondary-lightGrey' :
                        'border border-primary-darkYellow bg-primary-lightYellow'
                ]
            )
        }>
            {
                variant === 'day' &&
                Boolean(space.day_pass_discounts_percentage['1']?.value) &&
                <div className="absolute text-xs text-white p-1 rounded-md top-[-10px] bg-text-pass left-[35%]">
                    {space.day_pass_discounts_percentage['1']?.value}% Discount
                </div>
            }
            {
                variant === 'bulk' &&
                Boolean(space.day_pass_discounts_percentage['10']?.value) &&
                <div className="absolute text-xs text-white p-1 rounded-md top-[-10px] bg-text-pass left-[35%]">
                    {space.day_pass_discounts_percentage['10']?.value}% Discount
                </div>
            }

            <div className="flex flex-col space-y-1 items-start">
                <p className="text-text-pass sm:text-lg text-sm">{variant === 'day' ? 'Day' : 'Bulk'} Pass</p>
                <p> ₹
                    {
                        variant === 'day' ?
                            space?.day_pass_price
                            :
                            space?.day_pass_price * 10
                    }
                    <span className="text-text-pass sm:text-sm text-xs" >
                        {
                            variant === 'day'
                                ?
                                '/Day'
                                : '/10 Days'
                        } </span> </p>
            </div>
            <img className="h-3 sm:h-4 absolute right-3 top-8" src={btnArrow} />
        </button>
    )
}
