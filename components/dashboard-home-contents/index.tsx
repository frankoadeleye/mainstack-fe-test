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
import { DBTimeGraph, DBTimeGrapHeader } from "components/dashboard-time-graph";
import UseAnalytics from "hooks/useAnalytics";

function DashboardHomeContents() {
  const [selected, setSelected] = useState("All Time");
  const {  topLocations,
    topRefSource, isLoading } = UseAnalytics();

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
        <DBTimeGrapHeader />
        <DBTimeGraph />
        {!isLoading  && (
          <DBHChartsWrap>
            <ReportCard
              enteries={topLocations}
              title="Top Locations"
            />
            <ReportCard
              enteries={topRefSource}
              title="Top Referral Source"
            />
          </DBHChartsWrap>
        )}
      </DBHContentsBlock>
    </DashboardLayout>
  );
}

export default DashboardHomeContents;
