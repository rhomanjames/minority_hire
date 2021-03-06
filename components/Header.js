import Image from 'next/image'
import { ChatAltIcon } from '@heroicons/react/solid'
import { BellIcon, MenuIcon } from '@heroicons/react/solid'
import { UserIcon } from '@heroicons/react/solid'



function Header() {
    return (
        <header className="flex top-0 px-4 justify-between w-full border-gray-100 border-b-2">
            {/*Left Div*/}
            <div className="flex space-x-5 pl-2  pb-0 align-center items-center ">
                {/*Logo*/}
                <Image 
                className=" items-center align-center"
                src="https://mms.businesswire.com/media/20210715005145/en/1061835/23/Indeed_Logo_Aurora_RGB.jpg"
                width={77}
                height={40}
                />
                {/*Left tabs*/}
                <p className="border-b-2 border-blue-800 cursor-pointer hidden lg:block py-5">Find jobs</p>
                <p className="py-5 border-transparent border-b-2 cursor-pointer hidden lg:block hover:border-blue-800" >Company reviews</p>
                <p className="py-5 border-transparent border-b-2 cursor-pointer hidden lg:block hover:border-blue-800">Find salaries</p>
            </div>
            {/*Right Div*/}
            <div className="space-x-2 flex align-center items-center">
                <ChatAltIcon className="h-16 p-5 border-b-2 border-transparent cursor-pointer hover:border-blue-800" />
                <BellIcon className="h-16 p-5 border-b-2 border-transparent cursor-pointer hover:border-blue-800" />
                <UserIcon className="h-16 p-5 pr-4 border-b-2 hidden md:block cursor-pointer border-b-transparent hover:border-blue-800 " />
                <MenuIcon className="h-16 p-5 pr-0 border-b-2 md:hidden cursor-pointer border-b-transparent transition hover:scale-110 " />
                <p className="pr-4 border-l-2 border-gray-200 cursor-pointer hidden md:block pl-4">Employers / Post a job</p>
            </div>
        </header>
    )
}

export default Header
