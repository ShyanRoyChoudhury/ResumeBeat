import { Button, Footer } from '@repo/ui';
import Image from 'next/image';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';
export default function Home() {
  return (
    <div className="bg-white space-y-24  pb-[10vh]">
      <div className="flex justify-center px-14 pt-[15vh] md:pt-[18vh]">
        <div className="space-y-10 text-center">
          <div className="text-5xl ">Create a Winning Resume with AI</div>
          <div className="font-semibold">
            Let our AI-powered Resume builder help you craft a standout resume
            that lands you your dream job
          </div>
          <div className="flex justify-center space-x-4">
            <div className="bg-[#23297F] h-10 px-4 py-2 text-white rounded-md w-28">
              <Link href="http://localhost:3000/signup">Get Started</Link>
            </div>
            <div className="border-2 border-[#23297F] h-10 px-4 py-2 text-[#23297F] rounded-md w-32 ">
              <Link href="http://localhost:3000">Learn More</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen space-y-6">
        <Marquee pauseOnHover={true} speed={100}>
          <div className="flex items-center">
            <div className="mx-2 h-80 w-80 relative hover:scale-105 transition duration-75">
              <Image
                src={'/assets/pexels-brettjordan-8500465.jpg'}
                alt="marquee image 1"
                layout="fill"
                className="rounded"
              />
            </div>
            <div className="mx-2 h-80 w-80 relative hover:scale-105 transition duration-75">
              <Image
                src={'/assets/pexels-markus-winkler-1430818-12199407.jpg'}
                alt="marquee image 2"
                layout="fill"
                className="rounded"
              />
            </div>
          </div>
          <div className="mx-2 h-80 w-80 relative hover:scale-105 transition duration-75">
            <Image
              src={'/assets/pexels-anntarazevich-5598289.jpg'}
              alt="marquee image 2"
              layout="fill"
              className="rounded"
            />
          </div>
          <div className="mx-2 h-80 w-80 relative hover:scale-105 transition duration-75">
            <Image
              src={'/assets/pexels-markus-winkler-1430818-4101343.jpg'}
              alt="marquee image 2"
              layout="fill"
              className="rounded"
            />
          </div>
        </Marquee>

        <Marquee pauseOnHover={true} speed={100} direction="right">
          <div className="flex items-center">
            <div className="mx-2 h-80 w-80 relative hover:scale-105 transition duration-75">
              <Image
                src={'/assets/writing-7901174_1280.jpg'}
                alt="marquee image 1"
                layout="fill"
                className="rounded"
              />
            </div>
            <div className="mx-2 h-80 w-80 relative hover:scale-105 transition duration-75">
              <Image
                src={'/assets/resume-1799955_1280.png'}
                alt="marquee image 2"
                layout="fill"
                className="rounded"
              />
            </div>
          </div>
          <div className="mx-2 h-80 w-80 relative hover:scale-105 transition duration-75">
            <Image
              src={'/assets/paper-8474772_1280.png'}
              alt="marquee image 2"
              layout="fill"
              className="rounded"
            />
          </div>
          <div className="mx-2 h-80 w-80 relative hover:scale-105 transition duration-75">
            <Image
              src={'/assets/pexels-cottonbro-5989925.jpg'}
              alt="marquee image 2"
              layout="fill"
              className="rounded"
            />
          </div>
        </Marquee>
      </div>

      <div className="md:flex space-y-4 px-14">
        <div className="md:w-1/2  p-2 md:px-16">
          <div className="relative min-h-80 ">
            <Image
              src={
                'https://cdn.pixabay.com/photo/2018/10/05/17/34/cv-3726428_1280.jpg'
              }
              alt="random-resume-image"
              objectFit="cover"
              className="w-full h-full rounded-lg"
              layout="fill"
            />
          </div>
        </div>
        <div className="flex flex-col md:w-1/2 space-y-6">
          <div className="space-y-4. border-l-2 border-black px-6">
            <div className="font-semibold text-3xl">AI Text Improvement</div>
            <p>
              Utilize AI technology to enhance the text on your resume for
              better impact and readability
            </p>
          </div>
          <div className="space-y-4 px-6">
            <div className="font-semibold text-3xl">Customizable Templates</div>
            <p>
              Choose from a variety of professionally designed templates to
              create a unique and standout resume
            </p>
          </div>
          <div className="space-y-4 px-6">
            <div className="font-semibold text-3xl">Easy Editing Tools</div>
            <p>
              Edit and update your resume effortlessly with our user-friendly
              tools and interface
            </p>
          </div>
        </div>
      </div>

      <div className="text-center space-y-4 px-14">
        <div className="text-3xl font-bold">
          Create a standout resume with AI
        </div>
        <p>
          Let our AI technology enhance your resume and increase your chances of
          landing your dream job.
        </p>

        <div className="bg-[#23297F] h-10 px-4 py-2 text-white rounded-md w-28 mx-auto">
          <Link href="http://localhost:3000/signup">Get Started</Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
