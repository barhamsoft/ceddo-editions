import Link from "next/link";

export default function Home() {
     return (
          <div>
               <Link href="/1">
                    <a>Link to /1</a>
               </Link>
               <br />
               <Link href="/2">
                    <a>Link to /2</a>
               </Link>
               <br />
               <Link href="/3">
                    <a>Link to /3</a>
               </Link>
          </div>
     );
};
