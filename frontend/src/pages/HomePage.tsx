import landingPage from "../assets/landing.png";
import downloadApp from "../assets/appDownload.png";
import { Input } from "@/components/ui/input";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12 mb-10">
      <div className="container mx-auto shadow-xl rounded-xl bg-white -mt-12 py-8 md:px-32 mb-5">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold tracking-wide text-orange-500 mb-4">
            Tuck into a takeway today
          </h1>
          <span className="text-lg font-semibold">
            food is just a click away
          </span>
          <Input
            placeholder="Search"
            className="max-w-[500px] mt-5 px-4 py-5"
            type="text"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <img src={landingPage} />
        </div>
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold tracking-tighter text-3xl">
            Order takeway even faster!
          </span>
          <span>
            Download the MernEats App for faster ordering and personalised
            recommendations
          </span>
          <img src={downloadApp} />
        </div>
      </div>
    </div>
  );
}
