export const ProjectHighlight = ({ title, description, stats }: any) => (
    <div className="bg-gray-800 bg-opacity-30 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-teal-500 transition-all duration-300 transform hover:-translate-y-1">
      <h3 className="text-xl font-semibold mb-2 text-gray-200">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex justify-between text-sm">
        {stats.map((stat: any, index: number) => (
          <div key={index} className="text-center">
            <p className="text-teal-400 font-bold">{stat.value}</p>
            <p className="text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
  