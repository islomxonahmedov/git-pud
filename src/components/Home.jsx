import Section1 from "./pages/Section1/Section1"
import Section2 from "./pages/Section2/Section2"
import Section3 from "./pages/Section3/Section3"
import Section4 from "./pages/Section4/Section4"
import Section5 from "./pages/Section5/Section5"
import Section6 from "./pages/Section6/Section6"

function Home() {
  return (
    <div className="container">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </div>
  )
}

export default Home