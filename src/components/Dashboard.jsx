import DashboardHeader from "./DashboardHeader";
import SegmentedProgress from "./SegmentedProgress";
import SegmentedLineProgress from "./SegmentedLineProgress";
import { dashboardData } from "../utils/dashboardData";

const Dashboard = () => {
  const widgetData = {
    circleSegments: [
      { name: "Segment 1", percent: 30, color: "#ff0000" },
      { name: "Segment 2", percent: 50, color: "#00ff00" },
      { name: "Segment 3", percent: 30, color: "#0000ff" },
    ],
    lineSegments: [
      { name: "Segment 1", percent: 25, color: "#ff7f00" },
      { name: "Segment 2", percent: 50, color: "#7f00ff" },
      { name: "Segment 3", percent: 25, color: "#00ffff" },
    ],
  };

  return (
    <div className="bg-[#f0f8ff] p-7">
      <DashboardHeader />
      <div className="bg-[#f0f8ff] p-7">
        {dashboardData.circleSegments.map((segment, index) => (
          <div key={segment.id} className="mb-8">
            <h1 className="text-xl font-bold mb-4">{segment.name}</h1>
            <SegmentedProgress widgets={segment.widgets} />
          </div>
        ))}
      </div>
      <SegmentedLineProgress segments={widgetData.lineSegments} />
    </div>
  );
};

export default Dashboard;
