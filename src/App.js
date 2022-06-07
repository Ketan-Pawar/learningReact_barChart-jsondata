// import './App.css';
// import Chart1 from './Chart1';

// const data1 = [12, 36, 3, 25, 35, 10, 30];
// const data2 = [5, 10, 15, 20, 25, 30];
// // const data3 = [10, 5, 10, 5, 10, 5];

// const w ="400";
// const h ="300"

import React from "react";
import BarChart from "./BarChart";
import * as d3 from "d3";
import "./App.css";

function App() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    d3.json("/chart-data.json").then((d) => {
      setData(d);
      setLoading(false);
    });
    return () => undefined;
  }, []);



  return (
    <div className="App">
      <header className="App-header">
        {loading && <div>loading</div>}
        {!loading && <BarChart data={data} />}
      </header>
      {/* <Chart1 data={data1} w={w} h={h} color="orange" />
      <Chart1 data={data2} w={w} h={h} color="cyan" /> */}
    </div>
  );
}

export default App;
