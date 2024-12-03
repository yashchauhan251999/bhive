import logo from '../static_assets/icons/logo.svg'
import call from '../static_assets/icons/call.svg'

export function Nav() {
    return <nav className="h-20 w-full border border-b flex items-center justify-between px-8 sticky top-0 bg-white z-10">
        <img src={logo} className="h-10" />
        <div className="border-2 p-2 shadow-sm cursor-pointer flex items-center rounded-lg border-primary-lightYellow">
            <a href="tel:8006519303">
                <img src={call} className="" />
            </a>
        </div>
    </nav>
}       