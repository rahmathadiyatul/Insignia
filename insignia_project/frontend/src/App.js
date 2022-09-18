import { useEffects, useState } from 'react'
import './App.css';
import PackagesList from './components/PackagesList';
import Packages from './config/Packages';

function App() {
  const [packages, setPackages] = useState([])
  useEffects(() => {
    Packages.find().then((res) => {
      setPackages(res)
    })
  }, [])
  return (
    <div >
      <header>
        <h1 className="fw-bold text-center py-5">Our Travel Packages</h1>
      </header>
      <PackagesList packages={packages} />
    </div>
  );
}

export default App;
