import Head from 'next/head'
import Header from '../components/Header'
import Body from '../components/Body'
import { SearchIcon } from '@heroicons/react/solid'


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>MinoHire</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*Header*/}
      <Header />
      {/*Body*/}
      <Body />
      {/*Suggested Searches*/}
      <div className="align-center mt-8 flex-col p-4 mx-4 bg-gray-100 border border-b-0  border-gray-300 w-full" >
        <h1 className="font-bold flex w-full justify-center align-center mb-4">Suggested  Searches</h1>
        <div className="flex justify-center flex-col md:flex-row space-x-2">
          <button className="bg-gray-300 transition hover:border-white border-2 group items-center pl-2  ml-2 my-2 rounded-lg justify-center flex p-1 ">React JS <SearchIcon className="h-4 mx-2 group-hover:text-blue-800 transition group-hover:scale-125" /></button>
          <button className="bg-gray-300 transition hover:border-white border-2 group justify-center pl-2 my-2  rounded-lg items-center flex p-1 ">Frontend Web Developer<SearchIcon className="h-4 mx-2 group-hover:text-blue-800 transition group-hover:scale-125" /></button>
          <button className="bg-gray-300 transition hover:border-white border-2  group justify-center pl-2 my-2 rounded-lg items-center flex p-1 ">Javascript Developer<SearchIcon className="h-4 mx-2 group-hover:text-blue-800 transition group-hover:scale-125" /></button>
          <button className="bg-gray-300 transition hover:border-white border-2 group justify-center pl-2 my-2 rounded-lg items-center flex p-1 ">HTML/CSS/Javascript <SearchIcon className="h-4 mx-2 group-hover:text-blue-800 transition group-hover:scale-125" /></button>
        </div>
      </div>
    </div>
  )
}
