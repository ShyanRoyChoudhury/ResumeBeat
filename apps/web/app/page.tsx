import { Footer } from "@repo/ui";
import WaitlistForm from "@repo/ui/src/components/waitlistForm";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { registerWaitlist } from "../lib/waitlist";

export default function Home() {
  return (
    <div className="space-y-20 max-w-screen overflow-x-hidden">
      <div className="flex justify-center px-14 pt-[15vh] md:pt-[18vh]">
        <div className="space-y-10 text-center">
          <div className="text-7xl font-bold">
            Create a Winning Resume with AI
          </div>
          <div className="font-semibold">
            Let our AI-powered Resume builder help you craft a standout resume
            that lands you your dream job
          </div>
          <div className="flex justify-center space-x-4">
            <div className="bg-black  px-4 py-2 text-white rounded-lg hover:rounded-full hover:scale-105 transition duration-300">
              <Link href="http://localhost:3000/signup">Join the waitlist</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen">
        <Marquee speed={60}>
          <div className="flex space-x-8  overflow-hidden">
            <div className="text-9xl">Modular</div>
            <div className="text-9xl font-vanchrome">Modular</div>
            <div className="text-9xl font-wittgenstein">Modular</div>
            <div className="text-9xl font-londrina">Modular</div>
          </div>
        </Marquee>
        <Marquee direction="right" speed={90}>
          <div className="flex space-x-8  overflow-hidden ">
            <div className="text-9xl font-vanchrome">Fully Customizable</div>
            <div className="text-9xl ">Fully Customizable</div>
            <div className="text-9xl font-vanchrome">Fully Customizable</div>
            <div className="text-9xl ">Fully Customizable</div>
          </div>
        </Marquee>
        <Marquee speed={40}>
          <div className="flex space-x-8  overflow-hidden">
            <div className="text-9xl">Templates</div>
            <div className="text-9xl font-wittgenstein">Templates</div>
            <div className="text-9xl font-vanchrome">Templates</div>
            <div className="text-9xl font-wittgenstein">Templates</div>
          </div>
        </Marquee>
        <Marquee speed={70} direction="right">
          <div className="flex space-x-8 overflow-hidden">
            <div className="text-9xl font-londrina">AI Powered</div>
            <div className="text-9xl">AI Powered</div>
            <div className="text-9xl font-vanchrome">AI Powered</div>
            <div className="text-9xl ">AI Powered</div>
          </div>
        </Marquee>
      </div>

      <div className="bg-black text-white w-full h-screen py-32 space-y-8  text-center">
        <div className="flex flex-col justify-center  px-20 md:px-52 lg:px-80 xl:px-100 space-y-8">
          <div className=" text-6xl font-semibold">Be Part of Whats Next</div>
          <WaitlistForm className="" registerWaitlist={registerWaitlist} />
        </div>
        <div className="text-2xl px-20 md:px-52">
          Signup for the launch waitlist and be notified when resumebeat is
          launched
        </div>
      </div>
      <Footer />
    </div>
  );
}
