import { Button, Footer } from '@repo/ui';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-white space-y-20 px-14 pb-[10vh]">
      <div className="flex justify-center pt-[15vh] md:pt-[25vh]">
        <div className="space-y-10 text-center">
          <div className="text-5xl ">Create a Winning Resume with AI</div>
          <div className="font-semibold">
            Let our AI-powered Resume builder help you craft a standout resume
            that lands you your dream job
          </div>
          <div className="flex justify-center space-x-4">
            <Button className="bg-[#23297F] text-white">Get Started</Button>
            <Button className="border border-[#23297F] text-[#23297F]">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <div className="md:flex space-y-4">
        <div className="md:w-1/2  p-4 md:px-16">
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
          <div className="space-y-4 border-l-2 border-black px-6">
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

      <div className="text-center space-y-4">
        <div className="text-3xl font-bold">
          Create a standout resume with AI
        </div>
        <p>
          Let our AI technology enhance your resume and increase your chances of
          landing your dream job.
        </p>
        <Button className="bg-[#23297F] text-white">Get Started</Button>
      </div>

      <Footer />
    </div>
  );
}
