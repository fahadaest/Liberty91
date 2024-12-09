import { ChannelStats, EarningsChart, EntryCallout, Highlights, TeamMeeting, Teams } from './blocks';
import { OpenSource, PremiumFeed, XFeed } from '../../../../components/recent-threats';
import { Activities } from '../../../public-profile/profiles/creator';
const Demo1LightSidebarContent = () => {
  return <div className="gap-5 lg:gap-7.5 flex">

    <div className="">
      <div className="lg:col-span-1">
        <OpenSource />
      </div>
    </div>

    <div className="">
      <div className="lg:col-span-1">
        <PremiumFeed />
      </div>
    </div>

    <div className="">
      <div className="lg:col-span-1">
        <XFeed />
      </div>
    </div>
  </div>;
};
export { Demo1LightSidebarContent };