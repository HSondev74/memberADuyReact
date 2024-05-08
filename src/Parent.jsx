import { useState } from "react";
import Header from "./Header";

const Parent = () => {
     const [work, setWork] = useState(1);

     function sum() {
          setWork(work + 5);
     }
     console.log("rendering Header");
     return (
          <section>
               <Header work={work} setWork={sum} />
               <div>{work}</div>
               <footer>Footer</footer>
          </section>
     );
};

export default Parent;
