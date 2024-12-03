import oneBg from '../../assets/one_bg.jpeg'
import Two from './two'

export default function One({index}: {index: number}) {
    if (index === 0) {
        return <div className="h-full">
        <img className="h-full object-cover " src={oneBg} />
    </div>
    } else {
       return <Two index={index} />
    }
}