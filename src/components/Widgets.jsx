// const Widgets = () => {
//   return <div className="p-2">Widgets</div>;
// };

// export default Widgets;

const Widgets = ({ progress }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
      <div className="grid grid-cols-3 gap-4">
        {progress.map((item, index) => {
          const percentage = (item.value / item.max) * 100;
          return (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-24 h-24">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-semibold">
                    {Math.round(percentage)}%
                  </span>
                </div>
                <div
                  className={`w-full h-full rounded-full border-8 border-gray-200 ${item.color}`}
                  style={{
                    transform: `rotate(${(percentage / 100) * 360}deg)`,
                  }}
                />
              </div>
              <label className="flex items-center mt-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-gray-600"
                />
                <span className="ml-2 text-sm font-medium">{item.name}</span>
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Widgets;
