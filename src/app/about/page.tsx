import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <>
      <div className="h-screen mt-36">
        <div className="flex justify-around">
          <div className="max-w-[500px]">
            <h1 className="font-font leading-tight text-[#1877f2] text-[60px] font-extrabold">
              About us
            </h1>
            <h6 className="font-font text-[40px]">Welcome to Guide Me Now!</h6>
            <p className="text-lg">
              At Guide Me Now, we're on a mission to make programming and
              development learning an exciting and enriching experience for
              students of all levels. Our platform is designed to empower you on
              your journey to mastering programming languages and technical
              skills with unwavering confidence.
            </p>
            <h6 className="font-font font-medium text-2xl">Our Mission</h6>
            <p className="text-md font-medium">
              We believe that learning should be accessible and enjoyable. Our
              goal is to provide you with the tools and resources you need to
              succeed in the world of programming.
            </p>
          </div>
          <div>
            <Image src={"/about1.png"} width={570} height={500} alt="" />
          </div>
        </div>
      </div>

      <div className=" h-screen mb-20">
        <section className=" ">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light sm:text-lg ">
              <h2 className="mb-4 font-font  text-5xl text-[#1877f2] tracking-tight font-extrabold ">
                What We Offer
              </h2>
              <h6 className="text-3xl font-semibold font-font">
                Interactive Learning
              </h6>
              <p className="mb-4">
                Our platform offers a hands-on approach to learning. We've
                curated a selection of embedded YouTube videos that break down
                complex concepts, making it easier for you to understand and
                apply them. Our interactive coding challenges help you put
                theory into practice, ensuring a well-rounded learning
                experience.
              </p>
              <h6 className="text-3xl font-semibold font-font">
                Comprehensive Documentation
              </h6>
              <p className="mb-4">
                Learning doesn't stop with videos and challenges. We've compiled
                a wide range of development documentation links that accompany
                our tutorials. These resources serve as valuable references,
                enabling you to dive deeper into topics and enhance your skills.
              </p>
              <h6 className="text-3xl font-semibold font-font">
                Quiz Playlists
              </h6>
              <p className="mb-4">
                Test your knowledge with our engaging quiz playlists for various
                programming languages. Practice what you've learned, track your
                progress, and boost your confidence in your coding abilities.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <Image
                width={350}
                height={350}
                className="w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
                alt="office content 1"
              />
              <Image
                width={350}
                height={350}
                className="mt-4 w-full lg:mt-10 rounded-lg"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
                alt="office content 2"
              />
            </div>
          </div>
        </section>
      </div>

      
      <div className="relative bg-[#1877f2]">
        <div className="absolute inset-x-0 bottom-0">
          <svg
            viewBox="0 0 224 12"
            fill="currentColor"
            className="w-full -mb-1 text-white"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z"></path>
          </svg>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
            <h2 className="mb-6  text-6xl text-center font-bold font-font tracking-tight text-white sm:text-4xl sm:leading-none">
              Subscribe to our newsletter
            </h2>
            <p className="mb-6 text-slate-50 md:text-lg">
              Dont miss out—subscribe today and be a part of the future of
              programming.
            </p>
            <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
              <input
                placeholder="Email"
                required
                type="text"
                className="flex-grow w-full h-12 px-4 mb-3  transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline"
              />
              <a
                href="/"
                className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-gray-200 transition duration-200 rounded shadow-md md:w-auto hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none"
              >
                Subscribe
              </a>
            </form>
            <p
              className="max-w-md mb-10 text-xl
             tracking-wide text-slate-50 sm:text-sm sm:mx-auto md:mb-16"
            >
              Empowering you to code the future <br /><span className="font-bold">
              The Guide Me Now Team
                </span> 
            </p>
            <a
              href="/"
              aria-label="Scroll down"
              className="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="currentColor"
              >
                <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
