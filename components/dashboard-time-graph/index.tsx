import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";
import ImageWrapper from "common/image-wrapper";
import { DBTGHeaderBlock } from "styles/components/graph";
import { timeGraphData } from "utils/data/time-graph";
import Images from "assets/images";

const {info} = Images;

function DBTimeGraph() {
  return (
    <ResponsiveContainer width="100%" height="35%">
      <LineChart
        width={600}
        height={300}
        data={timeGraphData}
        style={{ fontSize: "14px" }}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 0,
        }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <ReferenceLine label="" stroke="" strokeDasharray="3 3" />
        <Legend />
        <Line
          isAnimationActive={false}
          type="monotone"
          dataKey="views"
          label={false}
          stroke="#FF5403"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

const DBTimeGrapHeader = () => {
  return (
    <DBTGHeaderBlock>
      <div className="top">
        <div>Page Views</div>
        <div>
          <ImageWrapper src={info} alt="info" />
        </div>
      </div>
      <div className="bottom">All time</div>
      <div className="view">500</div>
      <br/>
    </DBTGHeaderBlock>
  );
};

export { DBTimeGraph, DBTimeGrapHeader };
