import './App.css'
import AlertsPage from './components/dynamic_table/pages/AlertsPage'
import ProjectsPage from "./components/dynamic_table/pages/ProjectPage";

function App() {

  return (
    <>
    <AlertsPage />
    <ProjectsPage />
      {/* <div cla/ssName="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App 