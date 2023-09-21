import { auth } from '@clerk/nextjs';
import Gallery from "./gallery/page";


export default function Home() {

  const { userId } = auth();
  return (
    <>
     {userId ? <Gallery/> : (  <h1 className='text-2xl font-bold mb-5'>Login to access gallery</h1> )}
      
   
    </>
  );
}
