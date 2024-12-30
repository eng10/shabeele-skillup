import { Button } from "../../../components/ui/button";

export default function WorkWithUs() {
  return (
    <div className="container mx-auto px-12 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-[#004d40] mb-12">
        Work with us
      </h1>

      <div className="grid lg:grid-cols-2 gap-8 items-start px-[4rem]">
        <div className="relative">
          <img
            src="/img/about1.png"
            alt="Team of professionals"
            className="rounded-3xl w-full h-[700px] object-cover"
          />
        </div>

        <div className="space-y-6">
          <Button
            variant="default"
            className="bg-[#01C621] rounded-full hover:bg-green-600 text-black font-semibold px-6"
          >
            Work With Us
          </Button>

          <h2 className="text-2xl md:text-3xl font-bold text-[#004d40] leading-tight">
            Drive your career forward with one of the fastest growing
            agriculture solutions providers in Africa
          </h2>

          <p className="text-gray-700">
            We have an exciting agenda to grow our business to deliver
          </p>

          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              First - Class Service To Our Stakeholders.
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Great Career Support And Rewarding Achievement To Team And
              Partners.
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Unbeatable Value To Our Clients.
            </li>
          </ul>

          <div className="pt-6">
            <h3 className="text-2xl font-bold text-[#004d40] mb-4">
              Our Values
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                People Are At The Core Of Our Success.
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Serving Customers From The Heart.
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                The Highest Standard Of Integrity, Fairness, And
                Professionalism.
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Competitive Edge Through Innovation And Creativity.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
