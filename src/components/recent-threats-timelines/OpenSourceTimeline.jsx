import { KeenIcon } from '@/components';
const OpenSourceTimeline = ({
  line,
  icon,
  children,
  removeSpace
}) => {
  return <div className="flex items-start relative">
    {line && <div className="w-9 start-0 top-5 absolute bottom-0 rtl:-translate-x-1/4 translate-x-1/4 border-l-4 border-l-gray-200 border-t-0 border-r-0 border-b-0"></div>}

    <div className="flex items-center justify-center shrink-0 rounded-full size-5 text-gray-600">
      <img src={icon} alt="icon" className="w-full h-full object-contain" />
    </div>
    <div className={`ps-2.5 ${!removeSpace ? 'mb-7' : ''} text-md grow`}>{children}</div>
  </div>;
};
export { OpenSourceTimeline };