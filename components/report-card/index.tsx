import ImageWrapper from "common/image-wrapper";
import DBTimePieChart from "components/dashboard-pie-chart";
import {
  ReportCardBlock,
  RCHeading,
  RCContent,
  RCGraphData,
  RCChart,
  RCDataElementBlock,
  RCDEText,
  RCDataImgWrap,
  RCDEDot,
} from "styles/components/report-card";

type RCDEprops = {
  data: {
    icon: HTMLImageElement;
    country: string;
    percent: string | number;
    fill: string;
    source: string;
  };
};

const RCDataElement = ({ data }: RCDEprops) => {
  const { icon, country, source, percent, fill } = data;
  return (
    <RCDataElementBlock>
      <RCDataImgWrap>
        {icon && <ImageWrapper src={icon} width={21} height={15} alt="Logo" />}
      </RCDataImgWrap>
      <RCDEText>
        {country || source} {percent}% <RCDEDot bgColor={fill} />
      </RCDEText>
    </RCDataElementBlock>
  );
};

function ReportCard({ title, enteries }) {
  return (
    <ReportCardBlock>
      <RCHeading>
        <div>{title}</div>
        <div>View full report</div>
      </RCHeading>
      <RCContent>
        <RCGraphData>
          {enteries.map((entery, index: number) => {
            return <RCDataElement key={index} data={entery} />;
          })}
        </RCGraphData>
        <RCChart>
          <DBTimePieChart data={enteries} />
        </RCChart>
      </RCContent>
    </ReportCardBlock>
  );
}

export default ReportCard;
