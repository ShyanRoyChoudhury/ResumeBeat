import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
import { Copyright } from 'lucide-react';
export function Footer() {
  return (
    <div className="md:px-16 space-y-4 px-14 max-w-screen py-4">
      <div className="flex justify-between ">
        <div className="space-y-4">
          <div className="text-2xl font-semibold">ResumeBeat</div>
          <p>Email me at shayan.roy31@gmail.com</p>
        </div>
        <div className="py-4 space-y-2">
          <div className="font-semibold">Follow me</div>
          <div className="flex flex-col items-center space-y-2">
            <a href="https://twitter.com/kenobi8356">
              <FaSquareXTwitter size={22} />
            </a>
            <a href="https://www.linkedin.com/in/shyan-roy-choudhury-79a860198/">
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-b-2 border-black "></div>

      <div className="flex space-x-1 items-center">
        <p>
          <Copyright size={16} />
        </p>
        <p className="font-semibold">2024 ResumeBeat. All rights reserved.</p>
      </div>
    </div>
  );
}
