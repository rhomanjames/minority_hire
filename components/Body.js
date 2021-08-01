import { SearchIcon } from '@heroicons/react/solid'
import { LocationMarkerIcon } from '@heroicons/react/solid' 
import PlacesAutocomplete, { 
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';


function Body() {
    return (
        <div className="w-full mt-8 flex flex-grow justify-center text-lg flex-col">
            <div className="flex mx-4 items-center flex-col lg:flex-row justify-center">
                {/*What input*/}
                <h1 className="pr-2 mb-0 lg:hidden text-2xl font-bold justify-left w-full">What</h1>
                <div className="border w-full py-3  focus-within:shadow-lg flex flex-grow min-w-lg my-2 p-2 rounded-lg  border-black">
                    <h1 className="pr-2 hidden lg:block font-bold">What</h1>
                    <input 
                    className="flex-grow focus-within:outline-none" 
                    type="text" 
                    placeholder="Job title, keyword or company"
                    />
                    <SearchIcon className="h-6 justify-right right-4" />
                </div>
                {/*Where input*/}
                <h1 className="pr-2 mb-2 mt-8 lg:hidden text-2xl font-bold justify-left w-full">Where</h1>
                <div className="border py-3 w-full mx-4 md focus-within:shadow-lg flex flex-grow p-2 rounded-lg md:ml-4 border-black">
                    <h1 className="pr-2 hidden lg:block font-bold">Where</h1>
                    <input 
                    className="flex-grow focus-within:outline-none" 
                    type="text" 
                    placeholder="City, state, zip code or 'remote'"
                    />
                    <LocationMarkerIcon className="h-6 justify-right right-4" />

                </div>
            </div>
            {/*Find jobs Btn*/}
            <div className="flex items-center w-full px-4 justify-evenly align-center">
                <button className="bg-blue-800 transition p-2 mt-8 items-center w-full font-bold text-white lg:max-w-md rounded-lg">Find Jobs</button>
            </div>
            {/*Post a job*/}
            <div className="align-center place-items-center mt-4 flex w-full justify-center items-center">
                <p className="text-blue-800 cursor-pointer font-bold" >Employers: post a job - <span className="text-black font-normal">your next hire is here.</span></p>
            </div>
        </div>
    )
}

export default Body
