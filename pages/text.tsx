// import BlurFade from "@/lib/functions";
// import axios from "axios";
// import { GetStaticProps } from "next";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from 'framer-motion';
// import { Button } from "@/components/ui/button";
// import Nav from "@/components/nav";


// export interface TodoProps {
//   todos: Todos[];
// }

// export interface Todos {
//   id: number;
//   title: string;
//   url: string;
// }

// const Test: React.FC<TodoProps> = ({ todos }) => {
//   const [isLoading, setIsLoading] = useState<boolean>(true);

 

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="relative">
//       {!isLoading && 
      
//         <Nav />
      
//       }

//       <div className="grid grid-cols-2 gap-2 py-3 px-3">
//         {todos.map((todo) => (
//           <BlurFade
//             className=""
//             key={todo.id}
//             delay={isLoading ? 2.5 : 0.2}
//             inView
//           >
//             <Link href={`/portfolio/${todo.id}`}>
//             <div className="bg-slate-100 h-[200px] rounded-sm shadow-sm p-2">
//               <div>{todo.id}</div>
//               <div>{todo.title}</div>
//             </div>
//             </Link>
//           </BlurFade>
//         ))}
//       </div>

   

// <AnimatePresence>
//       {isLoading && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.3 }}
//         >
//              <div
//           className={` fadeDiv
        
        
//      bg-slate-950 absolute z-20 top-0 w-full min-h-screen text-white flex items-center justify-center text-5xl`}
//         >
//           Loading...
//         </div>
//         </motion.div>
//       )}
//     </AnimatePresence>




//     </div>
//   );
// };

// export const getStaticProps: GetStaticProps = async () => {
//   const todos = await fetchData();

//   return {
//     props: {
//       todos,
//     },
//   };
// };

// export default Test;

// export const fetchData = async () => {
//   try {
//     const response = await axios.get(
//       "https://jsonplaceholder.typicode.com/albums/"
//     );

//     const hello = response.data;
//     const reducedData = hello.slice(1, 20);
//     console.log(reducedData);
//     return reducedData;

//     //   setData(response);
//   } catch (error) {
//     console.error("error fetching data", error);
//   }
// };
