import { SearchIcon } from '@heroicons/react/solid'
import { LocationMarkerIcon } from '@heroicons/react/solid'


function Body() {
    return (
        <div className="w-full flex text-lg flex-col">
            <div className="flex items-center justify-center">
                {/*What input*/}
                <div className="border py-3 flex flex-grow ml-20 p-2 rounded-lg max-w-lg border-black">
                    <h1 className="pr-2 font-bold">What</h1>
                    <input 
                    className="flex-grow focus-within:outline-none" 
                    type="text" 
                    placeholder="Job title, keyword or company"
                    />
                    <SearchIcon className="h-6 justify-right right-4" />
                </div>
                {/*Where input*/}
                <div className="border py-3 flex p-2 rounded-lg ml-4 mr-20 flex-grow border-black">
                    <h1 className="pr-2 font-bold">What</h1>
                    <input 
                    className="flex-grow  focus-within:outline-none" 
                    type="text" 
                    placeholder="City, state, zip code or 'remote'"
                    />
                    <LocationMarkerIcon className="h-6 justify-right right-4" />

                </div>
            </div>
            {/*Post a job*/}
            <div className="align-center mt-4 flex w-full justify-center items-center">
                <p className="text-blue-800 font-bold" >Employers: post a job - <span className="text-black font-normal">your next hire is here.</span></p>
            </div>
        </div>
    )
}

export default Body
