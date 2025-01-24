import { PokemonStat, RadarChartProps } from "@/types/pokemon";
import { Radar } from "react-chartjs-2";

const RadarChart: React.FC<RadarChartProps> = ({ stats, name }) => {
  const maxStatValue = Math.max(...(stats.map((stat: PokemonStat) => stat.base_stat) || []));

  const radarData = {
    labels: stats.map((stat: PokemonStat) => stat.stat.name),
    datasets: [
      {
        label: `${name}'s Stats`,
        data: stats.map((stat: PokemonStat) => stat.base_stat),
        backgroundColor: "rgba(254, 202, 27, 0.2)",
        borderColor: "#d32f2f",
        borderWidth: 1,
      },
    ],
  };

  const radarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      r: {
        beginAtZero: true,
        max: maxStatValue * 1.2,
        ticks: {
          stepSize: 20,
        },
      },
    },
  };

  return <Radar data={radarData} options={radarOptions} />;
};

export default RadarChart;
