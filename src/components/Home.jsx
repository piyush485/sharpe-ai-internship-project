import { Link } from "react-router-dom"
import hero from '../../public/hero.png'

// Home section of the Website 
export default function Home() {
  return (
    <section className="h-screen bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto gap-4 lg:gap-8 lg:py-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-none dark:text-white">Embrace the Shift: Web3 and the Future of the Internet</h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-base lg:text-lg xl:text-xl dark:text-gray-400">&quot;Empowering Decentralization for Seamless Connectivity and Ownership&quot;</p>
          <div className="flex flex-col sm:flex-row">
            <Link to="/transaction" className="inline-flex items-center justify-center mb-3 sm:mb-0 mr-0 sm:mr-3 px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              Transaction
              <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </Link>
            <Link to="/data" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              Data
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="overflow-hidden border border-transparent rounded-lg">
            <img className="w-full h-auto" src={hero} alt="mockup" />
          </div>
        </div>
      </div>



    </section>
  )
}