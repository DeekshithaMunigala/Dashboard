import { Line } from "rc-progress";

const SegmentedLineProgress = ({ segments }) => {
  let accumulatedPercent = 0;

  return (
    <div className="w-full h-4 relative">
      {segments.map((segment, index) => {
        const segmentStart = accumulatedPercent;
        accumulatedPercent += segment.percent;

        return (
          <Line
            key={index}
            percent={accumulatedPercent}
            strokeWidth={1}
            strokeColor={segment.color}
            trailWidth={1}
            trailColor="transparent"
            className="absolute inset-0"
            strokeLinecap="butt"
            style={{
              clipPath: `inset(0 ${
                100 - accumulatedPercent
              }% 0 ${segmentStart}%)`,
            }}
          />
        );
      })}
    </div>
  );
};

export default SegmentedLineProgress;
