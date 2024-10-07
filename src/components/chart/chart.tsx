import { ApexOptions } from 'apexcharts';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { api } from '../../../service/axios';

interface Efficiency {
  eficiencia: string;
  temperatura: number;
}

const OptionsChartLine: ApexOptions = {
  title: {
    text: 'Última hora',
    style: {
      color: '#0c0c0c',
      fontWeight: 500,
      fontSize: '20px',
    },
  },
  colors: ['#2e93fa'],
  xaxis: {
    categories: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
  },
  yaxis: {
    show: false,
  },
  stroke: {
    curve: 'smooth',
  },
  dataLabels: {
    enabled: true,
    background: { enabled: true, foreColor: '#fff', padding: 2, opacity: 0.5 },
  },
  tooltip: {
    enabled: true,
    theme: 'dark',
    x: {
      show: false,
    },
  },
  grid: {
    show: false,
  },
};
export function CustomChart() {
  const [series, setSeries] = useState<ApexAxisChartSeries>([
    { name: 'Eficiencia (%)', data: [] },
  ]);

  const [dataHistory, setDataHistory] = useState<Efficiency[]>([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const response = await api.get('efficiency');
      const data: Efficiency[] = await response.data;

      const updateDataHistory = [...dataHistory, ...data]
        .filter((_, index) => index % 11 === 0)
        .slice(1, 13);
      setDataHistory(updateDataHistory);

      setSeries([
        {
          name: 'Eficiencia (%)',
          data: updateDataHistory.map((item) => parseFloat(item.eficiencia)),
        },
      ]);
    };

    fetchHistory();

    const requestInterval = setInterval(fetchHistory, 30000);

    return () => clearInterval(requestInterval);
  }, [dataHistory]);

  return <Chart options={OptionsChartLine} series={series} />;
}
