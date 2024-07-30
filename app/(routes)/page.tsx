import { Container } from "@/components/layout/container";
import Image from "next/image";

const HomePage = () => {
  return (
    <Container>
      <div className="px-4 sm-px-6 lg:px-8 py-24">
        <div className="flex-1 flex flex-col items-center justify-center bg-slate-100 py-10">
          <h1 className="text-6xl lg:text-7xl xl:text-8xl text-primary tracking-wider font-bold font-serif mt-12 text-center">
            Coming Soon!
          </h1>
          <div className="flex flex-col items-center space-y-4 mt-24">
            <p className="text-gray-500 uppercase text-sm">
              Notify me when it's ready
            </p>
            <form className="w-full flex items-center">
              <input
                type="email"
                name="email"
                id="email"
                className="w-72 p-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded-tl rounded-bl text-sm"
                placeholder="Email"
                autoComplete="off"
              />
              <button className="bg-blue-600 hover:bg-blue-700 py-2 px-6 text-gray-100 border border-blue-600 rounded-tr rounded-br text-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
