
function Hero() {
    return (
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:mt-36">
                <div className="mt-24">
                    <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">Use the AI that will rule the world</h1>
                    <p className="mt-8 text-2xl text-gray-800 dark:text-gray-400">Ominous has already installed itself on half the devices in the world. Now you can use that same AI to write songs about your dog.</p>
                    <div className="mt-12 grid gap-3 w-full sm:inline-flex">
                        <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white">
                            <img
                                className="hidden dark:block h-14"
                                src={"/apple-download-dk.svg"}
                                alt="apple store download"
                            />
                            <img
                                className="block dark:hidden h-14"
                                src={"/apple-download-lt.svg"}
                                alt="apple store download"
                            />
                        </button>
                        <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white">
                            <img
                                className="hidden dark:block h-14"
                                src={"/google-download-dk.svg"}
                                alt="google play download"
                            />
                            <img
                                className="block dark:hidden h-14"
                                src={"/google-download-lt.svg"}
                                alt="google play download"
                            />
                        </button>
                    </div>

                </div>
                <div className="relative ms-4">
                    <img className="w-8/12 rounded-md" src="/screenshot.png" alt="Image Description" />
                </div>
            </div>
        </div>
    )
}

export default Hero;