import Child2 from "./Child2";

const Child1 = ({ variantChange }) => {
     const arr = ["Hi", "Hello", "Hello1"];
     const obj = {
          text: "Hello, world",
     };

     const textSplit = obj.text.split(", ");
     textSplit.forEach((item1) => {
          const foundWord = arr.find((item2) => item2 === item1);
          if (obj.text.includes(foundWord)) {
               obj.text = obj.text.replace(
                    foundWord,
                    variantChange || foundWord
               );
          }
     });

     console.log(obj);
     return (
          <>
               <h1>{obj.text}</h1>
               <Child2 data={1} />
          </>
     );
};
export default Child1;

// component co 2 loai : Function Component va Class Component
// Class Component: co 2 co ban can chu y la :
//=> Constructor dung de nhan gia tri va thuc hien logic.
//=> Render dung de hien thi ra UI.
