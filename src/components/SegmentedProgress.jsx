import { Circle } from "rc-progress";

const SegmentedProgress = ({ widgets }) => {
  let accumulatedPercent = 0;

  return (
    <div className="relative w-32 h-32">
      {widgets.map((widget, index) => {
        const segmentStart = accumulatedPercent;
        accumulatedPercent += widget.percents[index].percent;

        return (
          <div
            key={index}
            className="absolute inset-0"
            style={{
              transform: `rotate(${(segmentStart / 100) * 360}deg)`,
              transformOrigin: "center center",
            }}
          >
            <Circle
              percent={widget.percents[index].percent}
              strokeWidth={15}
              strokeColor={widget.percents[index].color}
              trailWidth={15}
              trailColor="transparent"
              strokeLinecap="butt"
            />
          </div>
        );
      })}
    </div>
  );
};

export default SegmentedProgress;
