import DBHeader from "components/DBHeader";
import {
  DBLBlock,
  DBLGreeting,
  DBLGreetingRight,
  DBLGreetingLeft,
  DBLContentsWrap,
} from "styles/common/dashboard-layout";

type DBLProps = {
  dayTimeGreeting: string;
  routeSummary: string;
  children: React.ReactNode;
};

function DashboardLayout({
  dayTimeGreeting,
  routeSummary,
  children,
}: DBLProps) {
  return (
    <DBLBlock>
      <DBHeader text="Dashboard" />
      <DBLGreeting>
        <DBLGreetingLeft>
          <div>{dayTimeGreeting}</div>
          <div>{routeSummary}</div>
        </DBLGreetingLeft>
        <DBLGreetingRight>
          <div>view analytics</div>
        </DBLGreetingRight>
      </DBLGreeting>
      <DBLContentsWrap>{children}</DBLContentsWrap>
    </DBLBlock>
  );
}

export default DashboardLayout;
