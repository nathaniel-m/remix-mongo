
function CardGrid() {
    return (
        <div className="max-w-7xl px-4 lg:px-8 py-12 lg:py-24 mx-auto">
            <div className="mb-6 sm:mb-10 max-w-2xl text-center mx-auto">
                <h1 className="font-medium text-black text-2xl sm:text-4xl dark:text-white">
                    Latest work
                </h1>
            </div>

            <div className=" grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">

                <a className="group block" href="#">
                    <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
                        <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl" src="https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image Description" />
                    </div>

                    <div className="pt-4">
                        <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
                            eYoga
                        </h3>
                        <p className="mt-1 text-gray-600 dark:text-neutral-400">
                            A revamped and dynamic approach to yoga analytics
                        </p>

                        <div className="mt-3 flex flex-wrap gap-2">
                            <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                                Discovery
                            </span>
                            <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                                Brand Guidelines
                            </span>
                            <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                                Yoga
                            </span>
                        </div>
                    </div>
                </a>


                <a className="group block" href="#">
                    <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
                        <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl" src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image Description" />
                    </div>

                    <div className="pt-4">
                        <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
                            Nike React
                        </h3>
                        <p className="mt-1 text-gray-600 dark:text-neutral-400">
                            Rewriting sport's playbook for billions of athletes
                        </p>

                        <div className="mt-3 flex flex-wrap gap-2">
                            <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                                Brand Strategy
                            </span>
                            <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                                Visual Identity
                            </span>
                        </div>
                    </div>
                </a>

                <a className="group block" href="#">
                    <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
                        <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl" src="https://images.unsplash.com/photo-1649999920973-ab6bfd0c0017?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image Description" />
                    </div>

                    <div className="pt-4">
                        <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
                            Day Spa
                        </h3>
                        <p className="mt-1 text-gray-600 dark:text-neutral-400">
                            Designing a new cocktail can
                        </p>

                        <div className="mt-3 flex flex-wrap gap-2">
                            <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                                Brand Strategy
                            </span>
                            <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                                Visual Identity
                            </span>
                        </div>
                    </div>
                </a>

                <a className="group block" href="#">
                    <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
                        <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl" src="https://images.unsplash.com/photo-1528291954423-c0c71c12baeb?q=80&w=3426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image Description" />
                    </div>

                    <div className="pt-4">
                        <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
                            Diamond Dynamics
                        </h3>
                        <p className="mt-1 text-gray-600 dark:text-neutral-400">
                            From cutting-edge equipment to stylish apparel
                        </p>

                        <div className="mt-3 flex flex-wrap gap-2">
                            <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                                Sports Gear
                            </span>
                            <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                                Equipment
                            </span>
                            <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                                Discovery
                            </span>
                        </div>
                    </div>
                </a>

            </div>

            <div className="mt-10 lg:mt-20 text-center">
                <a className="relative inline-block font-medium md:text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 hover:before:bg-black focus:outline-none focus:before:bg-black dark:text-white dark:hover:before:bg-white dark:focus:before:bg-white" href="#">
                    View all Work
                </a>
            </div>
        </div>

    )
}

export default CardGrid;

