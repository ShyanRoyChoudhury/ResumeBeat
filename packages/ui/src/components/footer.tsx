import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';

export function Footer() {
  return (
    <div className="flex justify-evenly py-6">
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
  );
}
