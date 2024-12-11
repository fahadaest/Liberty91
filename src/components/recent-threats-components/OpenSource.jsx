import { Link } from 'react-router-dom';
import { useFetchOpenSourceFeedQuery } from '../../redux/slices/apiSlice';
import { OpenSourceTimeline } from '../recent-threats-timelines';
import CircularProgress from '@mui/material/CircularProgress';
import questionMarkSvg from '../../assets/question-mark.svg';
import redCircle from '../../assets/red-circle.svg'
import { useState, useEffect, useRef } from 'react';

const OpenSource = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(15);
  const [allData, setAllData] = useState([]);
  const { data: openSourceData, error: openSourceDataError, isLoading: openSourceDataLoading, refetch: openSourceDataRefetch } = useFetchOpenSourceFeedQuery({ pageNumber, pageSize });
  const scrollContainerRef = useRef(null);
  console.log(openSourceData);

  useEffect(() => {
    if (openSourceData && openSourceData.results) {
      setAllData((prevData) => [...prevData, ...openSourceData.results]);
    }
  }, [openSourceData]);

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
      <h3 className="card-title">Open Source</h3>
      <div className="flex items-center gap-2">
        <img
          src={questionMarkSvg}
          alt="Help Icon"
          style={{ width: '24px', height: '24px', outline: 'none' }}
        />
      </div>
    </div>

    <div className="card-body flex-1 overflow-y-auto" ref={scrollContainerRef} onScroll={handleScroll} >
      {openSourceDataLoading && pageNumber === 1 ? (
        <div className="flex justify-center items-center">
          <CircularProgress />
        </div>
      ) : (
        <div className="flex flex-col">
          {allData.map((item, index) => (
            <OpenSourceTimeline icon={redCircle} line={true}>
              <div className="flex flex-col">
                <div className="text-sm text-gray-900">
                  <span className="font-semibold text-gray-700"> {item.event_name}</span>
                  <br />
                  <span className="text-sm text-blue-500">{item.source}</span>
                </div>
                <span className="text-xs text-gray-600">5 days ago, 4:07 PM</span>
              </div>
            </OpenSourceTimeline >
          ))}
        </div>
      )}
      {openSourceDataLoading && (
        <div className="flex justify-center items-center">
          <CircularProgress />
        </div>
      )}
    </div >

  </div >;
};
export { OpenSource };