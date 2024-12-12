import { OpenSource, PremiumFeed, Xfeed } from '../../../../components/recent-threats-components';

const Demo1LightSidebarContent = () => {
  return (
    <div className="h-screen overflow-y-auto flex gap-5 lg:gap-7.5">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-7.5 w-full">
        <div className="w-full">
          <OpenSource />
        </div>
        <div className="w-full">
          <PremiumFeed />
        </div>
        <div className="w-full">
          <Xfeed />
        </div>
      </div>
    </div>
  );
};
export { Demo1LightSidebarContent };