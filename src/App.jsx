import './App.css'

const HERO = {
  name: "Denys",
  age: 28,
  phonenumber: "+380777777777",
  hobby: "gaming"
}

function App() {
  return (
    <div className="App">
      <header>
        <h2>My life</h2>
      </header>
      <main>
        <article>
          <p>My name is {HERO.name}. I am {HERO.age} years old. I like {HERO.hobby}</p>
        </article>
      </main>
      <footer>
        <ul> Contacts
          <li>Phonenumber: {HERO.phonenumber}</li>
        </ul>
      </footer>
    </div>
  )
}

export default App

