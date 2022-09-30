import "./App.css";
// import { ReactDOM } from "react";
/*
import ConstLet from "./chapters/chapter-2-syntax-additions/const-let";
import Funcs from "./chapters/chapter-2-syntax-additions/functions";
import ObjLiteral from "./chapters/chapter-2-syntax-additions/obj-literal";
import ObjDestruct from "./chapters/chapter-2-syntax-additions/obj-destructuring";
import ClassStaticMeth from "./chapters/chapter-3-modules-class/class-static-method";
import SymbolBasics from "./chapters/chapter-4-symbol/symbol-basics";
import IteratorBasics from "./chapters/chapter-5-iter-generator/iterator-basics";
import CustomIterator from "./chapters/chapter-5-iter-generator/custom-iterator";
import GeneratorBasics from "./chapters/chapter-5-iter-generator/generator-basics";
import PromisesBasics from "./chapters/chapter-6-promises/promises-basics";
import ChainingPromises from "./chapters/chapter-6-promises/chaining-promises";
import BuiltInMethods from "./chapters/chapter-6-promises/built-in-methods";
import ObjectBuiltInFuncs from "./chapters/chapter-7-obj-extensions/object";
import MathBuiltInFuncs from "./chapters/chapter-7-obj-extensions/math";
import Strings from "./chapters/chapter-7-obj-extensions/strings";
import Numbers from "./chapters/chapter-7-obj-extensions/numbers";
import Arrays from "./chapters/chapter-7-obj-extensions/arrays";
import Maps from "./chapters/chapter-8-map-set/maps";
import Sets from "./chapters/chapter-8-map-set/sets";
import CreatingObjs from "./chapters/chapter-9-API-reflect/creating-objs";
import CallFuncs from "./chapters/chapter-9-API-reflect/call-funcs";
import Prototypes from "./chapters/chapter-9-API-reflect/prototypes";
import AccessProperties from "./chapters/chapter-9-API-reflect/access-properties";
import Traps from "./chapters/chapter-10-API-proxy/traps";
import ProxyAsPrototype from "./chapters/chapter-10-API-proxy/proxy-as-prototype";
import ProxyAsProxy from "./chapters/chapter-10-API-proxy/proxy-as-proxy";
import WrapFuncs from "./chapters/chapter-10-API-proxy/wrap-funcs";
import RevocableProxy from "./chapters/chapter-10-API-proxy/revocable-proxy";
import Weather from "./chapters/chapter-11-project/Weather";
import User from "./exercises/prettyPrintJSON";
import OnLoad, { OnLoadFunctional } from "./exercises/focunAnInputOnLoad";
import UpdateRenderedElems from "./exercises/updateRenderedElems";
import "./exercises/asyncAwait";
import Timer from "./exercises/timer";*/
import Counter from "./exercises/useEffectEx";

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById("root"));
// }
// setInterval(tick, 1000);

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h2>Accelerated ES6 Javascript Training</h2>
        <a
          className="App-link"
          href="https://endavace1.udemy.com/course/es6-bootcamp-next-generation-javascript"
          target="_blank"
          rel="noopener noreferrer"
        >
          Udemy Course
        </a>
        {/* <ConstLet />
        <Funcs />
        <ObjLiteral />
        <ObjDestruct />
        <ClassStaticMeth />
        <SymbolBasics />
        <IteratorBasics /> 
        <CustomIterator />
        <GeneratorBasics />
        <PromisesBasics />
        <ChainingPromises />
        <BuiltInMethods />
        <ObjectBuiltInFuncs />
        <MathBuiltInFuncs />
        <Strings />
        <Numbers />
        <Arrays />
        <Maps />
        <Sets />
        <CreatingObjs />
        <CallFuncs />
        <Prototypes />
        <AccessProperties />
        <Traps />
        <ProxyAsPrototype />
        <ProxyAsProxy />
        <WrapFuncs />
        <RevocableProxy />
        <User />
        <OnLoad />
        <OnLoadFunctional />
        <Timer />*/}
        <Counter />

        {/* {setInterval(<UpdateRenderedElems />, 1000)} */}
        {/* <UpdateRenderedElems /> */}
      </div>
      {/* <Weather /> */}
    </div>
  );
}

export default App;
