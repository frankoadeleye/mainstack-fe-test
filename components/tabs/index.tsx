import { TabsBlock, TabBlock , TabsWrap} from "styles/components/tabs";

type tabProps = {
  data: {
    text: string;
  };
  onTabClick: React.MouseEventHandler<HTMLDivElement>;
  isActive: boolean;
};

const Tab = ({ data, onTabClick, isActive }: tabProps) => {
  const { text } = data;
  return (
    <TabBlock isActive={isActive} onClick={onTabClick}>
      {text}
    </TabBlock>
  );
};

function Tabs({ enteries, setSelected, selected }) {
  const handleSelectedState = (current: string) => () => {
    setSelected(current);
  };

  return (
    <TabsWrap>
      <TabsBlock>
        {enteries.map((entery, index: number) => {
          return (
            <Tab
              isActive={entery.text === selected}
              onTabClick={handleSelectedState(entery.text)}
              data={entery}
              key={index}
            />
          );
        })}
      </TabsBlock>
    </TabsWrap>
  );
}

export default Tabs;
