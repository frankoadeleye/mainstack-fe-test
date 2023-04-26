import { PieChart, Pie } from "recharts";

const data02 = [
 {
      icon: "",
      "name": "Nigeria",
      "percentage": 50,
      "fill": "#599EEA",
    },
    {
      icon: "",
      "name": "United States",
      "percentage": 30,
      fill: "#844FF6"
    },
    {
      icon: "",
      "name": "Netherlands",
      "percentage": 10,
       fill: "#F09468"
    },
    {
      icon: "",
      "name": "Andorra",
      "percentage": 3.5,
      fill: "#FAB70A"
    },
    {
      icon: "",
      "name": "Others",
      "percentage": 6.5,
      fill: "#0FB77A"
    },
];

function DBTimePieChart({data}) {
  return (
    <PieChart width={160} height={160}>
      <Pie
        data={data}
        dataKey="percentage"
        nameKey="name"
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
      />
    </PieChart>
  );
}

export default DBTimePieChart;
