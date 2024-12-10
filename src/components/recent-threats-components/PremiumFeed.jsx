import { Link } from 'react-router-dom';
import { useFetchPremiumFeedQuery } from '../../redux/slices/apiSlice';
import { PremiumFeedTimeline } from '../recent-threats-timelines';
import CircularProgress from '@mui/material/CircularProgress';
import questionMarkSvg from '../../assets/question-mark.svg';
import premiumFeedImage from '../../assets/premiumFeed.svg'

const PremiumFeed = () => {
  const { data: premiumFeedData, error: premiumFeedDataError, isLoading: premiumFeedDataLoading, refetch: premiumFeedDataRefetch } = useFetchPremiumFeedQuery();
  console.log(premiumFeedData);

  return <div className="card h-screen">
    <div className="card-header">
      <h3 className="card-title">Premium Feed</h3>

      <div className="flex items-center gap-2">
        <img
          src={questionMarkSvg}
          alt="Help Icon"
          style={{ width: '24px', height: '24px', outline: 'none' }}
        />
      </div>
    </div>

    <div className="card-body flex-1 overflow-y-auto">
      {premiumFeedDataLoading ? (
        <div className="flex justify-center items-center">
          <CircularProgress />
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {premiumFeedData?.results.map((item) => (
            <PremiumFeedTimeline icon={premiumFeedImage} line={true}>
              <div className="flex flex-col">
                <div className="text-sm text-gray-900">
                  <span className="font-semibold text-gray-700"> {item.event_name}</span>
                  <br />
                  <span className="text-sm text-blue-500">{item.source}</span>
                </div>
                <span className="text-xs text-gray-600">5 days ago, 4:07 PM</span>
              </div>
            </PremiumFeedTimeline >
          ))}
        </div>
      )}
      <div className="flex justify-center items-center">
        <CircularProgress />
      </div>
    </div >

  </div >;
};
export { PremiumFeed };