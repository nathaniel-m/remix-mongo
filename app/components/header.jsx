function Header() {
    return (
        <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-7">
            <nav className="relative max-w-7xl w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 md:px-8 mx-auto" aria-label="Global">
                <div className="md:col-span-3">
                    <a className="flex-none inline-block" href="https://calmbudget.com" aria-label="calm budget">
                        <img
                            className="hidden dark:block w-48"
                            src={"/logo-dk.svg"}
                            alt="calm budget Logo"
                        />
                        <img
                            className="block dark:hidden w-48"
                            src={"/logo-lt.svg"}
                            alt="calm budget Logo"
                        />
                    </a>
                </div>
                <div className="flex items-center gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">
                <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white">
                    <img
                            className="hidden dark:block h-10"
                            src={"/apple-download-dk.svg"}
                            alt="apple store download"
                        />
                        <img
                            className="block dark:hidden h-10"
                            src={"/apple-download-lt.svg"}
                            alt="apple store download"
                        />
                    </button>
                    <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white">
                    <img
                            className="hidden dark:block h-10"
                            src={"/google-download-dk.svg"}
                            alt="google play download"
                        />
                        <img
                            className="block dark:hidden h-10"
                            src={"/google-download-lt.svg"}
                            alt="google play download"
                        />
                    </button>
                </div>
                <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6">
                    <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0">
                        <div>
                            <a className="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-gray-300" href="#">Features</a>
                        </div>
                        <div>
                            <a className="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-gray-300" href="#">Reviews</a>
                        </div>
                        <div>
                            <a className="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-gray-300" href="#">Pricing</a>
                        </div>
                        <div>
                            <a className="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-gray-300" href="#">Faq</a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;