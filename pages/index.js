import CompA from "../components/compA";
import CompB from "../components/compB";


export default function Home() {


  let simpleFunction = function(e) {
    console.log("simple function beep boop");
  }



  return (
    <section>
      <h1>component to component</h1>

      <button onClick={simpleFunction}>Test Button</button>

      <CompA></CompA>
      <CompB></CompB>

    </section>
  )
}
