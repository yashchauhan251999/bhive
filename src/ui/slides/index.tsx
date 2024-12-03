import One from './one';
import { useState } from 'preact/hooks';

export function UI() {
    const [index, setIndex] = useState(0);

    return <div className="h-full w-full relative overflow-hidden">

        <One index={index} />

        <div className="absolute bottom-8 flex justify-center space-x-4 w-full z-10">
                <button onClick={() => setIndex(i => ( Math.max( i-1, 0  ) ))} className="shadow-md bg-white rounded-full px-2"> {"<"} </button>
                <button onClick={() => setIndex(i => (i+1)%3)} className="shadow-md bg-white rounded-full px-2"> {">"} </button>
        </div>
    </div>
    
}   