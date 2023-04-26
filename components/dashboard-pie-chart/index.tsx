import { PieChart, Pie } from "recharts";


function DBTimePieChart({data}) {
  return (
    <PieChart width={160} height={160}>
      <Pie
        data={data}
        dataKey="percent"
        nameKey="country"
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
      />
    </PieChart>
  );
}

export default DBTimePieChart;
