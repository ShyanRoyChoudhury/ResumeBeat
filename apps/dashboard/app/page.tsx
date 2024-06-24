import { Button } from "@repo/ui";

export default function Home() {
  return (
    <div className=" bg-white space-y-8">
      <div className="px-6 md:px-12">
        <div className="bg-[#F4F4F6] rounded-2xl px-10 py-10 md:py-20 space-y-2">
          <div className="font-semibold">AI Powered Resume Builder App</div>
          <div className="text-2xl font-bold">LOREM IPSIUM DAD</div>
          <div className="py-4 space-x-2">
            <Button className="border bg-black text-white px-4 py-2 rounded-md">
              Get Started
            </Button>
            <Button className="">Learn more</Button>
          </div>
        </div>
      </div>
      <div className="">
        <div className="bg-[#272A2E] px-6 text-white">
          <div className="font-semibold">TEst</div>
          <div>TEST@</div>
        </div>
      </div>
    </div>
  );
}
