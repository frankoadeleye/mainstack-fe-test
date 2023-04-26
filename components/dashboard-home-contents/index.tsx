import DashboardLayout from "common/dashboard-layout";
import Tabs from "components/tabs";
import {
  DBHContentsBlock,
  DBHChartsWrap,
} from "styles/components/dashboard-home-contents";
import { TabsData } from "utils/data/tabs";
import { useState } from "react";
import ReportCard from "components/report-card";
import {
  LocationRCData,
  TopReferralSourceRCData,
} from "utils/data/report-card";
import { DBTimeGraph , DBTimeGrapHeader} from "components/dashboard-time-graph";

function DashboardHomeContents() {
  const [selected, setSelected] = useState("All Time");

  return (
    <DashboardLayout
      dayTimeGreeting="Good morning, Blessing ⛅️"
      routeSummary="Check out your dashboard summary">
      <DBHContentsBlock>
        <Tabs
          enteries={TabsData}
          setSelected={setSelected}
          selected={selected}
        />
        <DBTimeGrapHeader/>
        <DBTimeGraph />
        <DBHChartsWrap>
          <ReportCard
            enteries={LocationRCData.dataEnteries}
            title={LocationRCData.title}
          />
          <ReportCard
            enteries={TopReferralSourceRCData.dataEnteries}
            title={TopReferralSourceRCData.title}
          />
        </DBHChartsWrap>
      </DBHContentsBlock>
    </DashboardLayout>
  );
}

export default DashboardHomeContents;
