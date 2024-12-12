import { Link } from 'react-router-dom';
import { useFetchTwitterFeedQuery } from '../../redux/slices/apiSlice';
import { XfeedTimeline } from '../recent-threats-timelines';
import CircularProgress from '@mui/material/CircularProgress';
import questionMarkSvg from '../../assets/question-mark.svg';
import xFeedImage from '../../assets/Xfeed.svg'
import { useState, useEffect, useRef } from 'react';

const Xfeed = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(15);
  const [allData, setAllData] = useState([]);
  const { data: XFeed, error: XFeedError, isLoading: XFeedLoading, refetch: XFeedRefetch } = useFetchTwitterFeedQuery({ pageNumber, pageSize });
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (XFeed && XFeed?.results) {
      setAllData((prevData) => [...prevData, ...XFeed?.results]);
    }
  }, [XFeed]);

  function loadNextPage() {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  }

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
      loadNextPage();
    }
  };

  return <div className="card h-screen">
    <div className="card-header">
      <h3 className="card-title">X-Feed</h3>
      <div className="flex items-center gap-2">
        <img
          src={questionMarkSvg}
          alt="Help Icon"
          style={{ width: '24px', height: '24px', outline: 'none' }}
        />
      </div>
    </div>

    <div className="card-body flex-1 overflow-y-auto" ref={scrollContainerRef} onScroll={handleScroll} >
      {XFeedLoading && pageNumber === 1 ? (
        <div className="flex justify-center items-center">
          <CircularProgress />
        </div>
      ) : (
        <div className="flex flex-col">
          {allData.map((item, index) => (
            <XfeedTimeline icon={xFeedImage} line={true}>
              <div className="flex flex-col">
                <div className="text-sm text-gray-900">
                  <span className="font-semibold text-gray-700"> {item.event_name}</span>
                  <br />
                  <span className="text-sm text-blue-500">{item.source}</span>
                </div>
                <span className="text-xs text-gray-600">5 days ago, 4:07 PM</span>
              </div>
            </XfeedTimeline >
          ))}
        </div>
      )}
      {XFeedLoading && (
        <div className="flex justify-center items-center">
          <CircularProgress />
        </div>
      )}
    </div >

  </div >;
};
export { Xfeed };