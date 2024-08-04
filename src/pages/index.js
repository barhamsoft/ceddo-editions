import Link from "next/link";

export default function Home() {
     return (
          <div className="flex items-center justify-center h-min-screen">
               <div className="flex flex-col items-center space-y-4">
                    <Link href="/1" legacyBehavior>
                         <a className="px-4 py-2 text-white bg-blue-500 rounded-md">/1</a>
                    </Link>
                    <Link href="/2" legacyBehavior>
                         <a className="px-4 py-2 text-white bg-blue-500 rounded-md">/2</a>
                    </Link>
                    <Link href="/3" legacyBehavior>
                         <a className="px-4 py-2 text-white bg-blue-500 rounded-md">/3</a>
                    </Link>
               </div>
          </div>
     );
};
