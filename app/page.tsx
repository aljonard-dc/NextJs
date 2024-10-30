import Image from "next/image";
import Button from "@/components/Button";
import Searchbar from "@/components/Searchbar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="h-screen px-[16px] md:px-[32px]">
      <div>
        <Header/>
      </div>
      <div className="flex justify-center mb-10">
        <p className="w-full h-80 text-8xl font-semibold flex justify-center items-end text-white ">Google</p>
      </div>
      <div className="flex justify-center align-center">
        <Searchbar/>
      </div>
    
      <div className="flex justify-center p-20 space-x-4">
        <Button 
        title="Google Search"
        href="www.google.com/"
        />
         <Button 
        title="I'm Feeling Lucky"
        href="www.google.com/"
        />
      </div>
      <div className="absolute bottom-0 w-full left-0">
        <Footer/>
      </div>
  </div>
  );
}
