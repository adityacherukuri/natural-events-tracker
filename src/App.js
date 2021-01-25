import Map from "./components/Map";
import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Header from "./components/Header";
function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch(
        "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
      );
      const { events } = await res.json();
      setData(events);
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div>
      <Header />
      {!loading ? <Map data={data} /> : <Loader />}
    </div>
  );
}

export default App;
