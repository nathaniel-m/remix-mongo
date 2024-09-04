
function HeroAlt() {
   
    return (
        <div className="max-w-7xl py-12 lg:py-32 mx-auto ">
            <div className="items-center text-center  mx-auto">
                <div>
                    <h1 className="block text-3xl font-bold text-white sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">We save you time with admin, So you can spend your time <span className="text-400">COACHING</span></h1>
                    <p className="mt-12 text-3xl text-gray-300 dark:text-gray-400">Coaches love Running Dojo because how much time they save not having to think about the administrative tasks for thier business.</p>
                    <div className="mt-7 w-full justify-center">
                        <a className="mr-3 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-xl font-semibold rounded-lg border border-transparent bg-400 text-black hover:bg-600" href="#">
                            Get started
                            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                        </a>
                        <a className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-xl font-medium rounded-lg border border-400 bg-transparent text-400 shadow-sm hover:bg-600 dark:bg-transparent dark:border-400 dark:text-400 dark:hover:bg-600 dark:hover:text-black" href="#">
                            Contact sales team
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroAlt;