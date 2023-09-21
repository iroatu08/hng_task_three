import { auth } from "@clerk/nextjs";
import Gallery from "./gallery/page";
import Link from 'next/link';


export default function Home() {
  const { userId } = auth();
  return (
    <>
      {userId ? (
        <Gallery />
      ) : ( <>

      <div className="flex items-center flex-col gap-10">
      <h1 className="text-lg lg:text-[64px] font-bold ">
          Login to access gallery{" "}
         
        </h1>
         <Link href="sign-in" className=" px-8 py-2 rounded-md text-black bg-white ">
         Sign In
       </Link>
      </div>
       
       </>
      )}
    </>
  );
}
