import MessageButton from "./components/messageButton"
import Header from "./components/header"
import Card from "./components/card"

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="proj-container">
            <Card/>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
