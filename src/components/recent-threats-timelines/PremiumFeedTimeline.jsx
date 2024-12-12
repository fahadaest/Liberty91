import { KeenIcon } from '@/components';
const PremiumFeedTimeline = ({
  line,
  icon,
  children,
  removeSpace
}) => {
  return <div className="flex items-start relative border-b-2 border-dotted border-slate-200">

    <div className="flex items-center justify-center shrink-0 rounded-full size-8 text-gray-600">
      <img src={icon} alt="icon" className="w-full h-full object-contain" />
    </div>
    <div className={`ps-2.5 ${!removeSpace ? 'mb-7' : ''} text-md grow`}>{children}</div>
  </div>;
};
export { PremiumFeedTimeline };