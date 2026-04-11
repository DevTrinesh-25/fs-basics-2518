// import { Bar } from "react-chartjs-2";

// interface PerformanceChartProps {
//   chartData: {
//     "Q1": number;
//     "Q2": number;
//     "Q3": number;
//     "Q4": number;
//   };
// }

// function PerformanceChart({ chartData }: PerformanceChartProps) {
//   const data = {
//     labels: Object.keys(chartData),
//     datasets: [
//       {
//         label: "Performance",
//         data: Object.values(chartData),
//         backgroundColor: "rgba(54, 162, 235, 0.6)",
//       },
//     ],
//   };

//   return (
//     <div className="card">
//       <h3>Performance Appraisal</h3>
//       <Bar data={data} />
//     </div>
//   );
// }

// export default PerformanceChart;

const PerformanceChart = () => {
  return (
    <div className="card">
      <h4>Performance Appraisal</h4>
      <div className="chart">
        {[40, 70, 50, 90, 60].map((h, i) => (
          <div key={i} className="bar-chart" style={{ height: `${h}px` }} />
        ))}
      </div>
    </div>
  );
};

export default PerformanceChart;