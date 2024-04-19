import React from "react"
import Harmburger from "./Harmburger"

function App() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

  React.useEffect(() => {
    function watchWidth() {
        setWindowWidth(window.innerWidth)
    }
     window.addEventListener("resize", watchWidth)

     return function() {
        window.removeEventListener("resize", watchWidth)
       }
   }, [])

  return (
    <div className="App">
        <Harmburger />
        <h1>Window width: {window.innerWidth}</h1>
    </div>
  );
}

export default App;
