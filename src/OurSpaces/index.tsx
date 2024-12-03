import arrow from '../static_assets/icons/arrow.svg';
import workspace from '../static_assets/icons/workspace.svg';

import directions from '../static_assets/icons/assistant_direction.svg';

import { useEffect, useState } from 'preact/hooks';
import { iSpace } from './types';
import { Button } from '../ui/button';


export function OurSpaces() {

    const SpaceItem = ({ space }: { space: iSpace }) => {
        return <div className="bg-white p-4 rounded-md shadow-md">
            <div className="flex justify-between items-center">
                <p className="text-xl">{space.name}</p>
                <div className="bg-secondary-lightGrey px-4 py-2  rounded-md flex flex-col space-y-1 border">
                    <img src={directions} />
                    <p className="text-xs text-secondary-darkGrey">6km</p>
                </div>
            </div>
            <div className="rounded-lg overflow-hidden max-h-80 min-h-72 my-4 relative"
                style={{
                    backgroundImage: `url("https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/main/${space.images[0]}")`,
                    backgroundSize: 'cover'
                }}
            >
                <div className="absolute top-5 left-5 rounded-md p-2 border-primary-darkYellow border text-primary-500 flex space-x-1" style={{
                    background: 'linear-gradient(#263238, #2F4B59)'
                }}>
                    <img src={workspace} className="h-6" />
                    <p>
                        Workspace
                    </p>
                </div>
            </div>
            <div className="flex space-x-4">
                <Button space={space} variant="day" />
                <Button space={space} variant="bulk" />
            </div>
        </div>
    }

    const [data, setData] = useState<iSpace[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/repos/MujtabaKably/bhive-interview-project-data/contents/data.json')
            .then(res => res.json())
            .then(d => {
                setData(JSON.parse(atob(d.content)))
            });
    }, [])

    return <section
        id="spaces"
        className="bg-gray-50 sm:px-[10%] px-6 flex flex-col space-y-6 pb-10 pt-10"
    >
        <div className="flex justify-between pb-10">
            <p className="text-4xl font-semibold">
                Our Spaces
            </p>
            <img src={arrow} className="sm:hidden block" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {
                data.length &&
                data.map(space => {
                    return <SpaceItem space={space} />
                })
            }
        </div>
    </section>
}

