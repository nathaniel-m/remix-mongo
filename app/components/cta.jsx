

export default function Cta({ ctabutton_url, ctabutton_text }) {
  return (
    <div className="bg-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Ready to Free Up Your Time?</span>
          <span className="block text-indigo-600">
            Start your FREE trial today.
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md">
     
              <a
              href={ctabutton_url}
                className="
                uppercase 
                tracking-wide 
                mx-auto
                px-8 
                py-3
                md:py-4   
                w-full
                xl:w-full
                flex 
                items-center 
                justify-center 
                text-lg 
                font-medium 
                rounded-3xl 
                text-white 
                bg-500
                hover:bg-700 
                hover:text-white 
                md:text-2xl 
                md:px-10"
              >
                {ctabutton_text}
              </a>
            
          </div>
        </div>
      </div>
    </div>
  );
}
