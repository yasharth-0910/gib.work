export const FeatureCard = ({ title, description, icon: Icon }: any) => (
    <div className="bg-gray-800 bg-opacity-30 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-transparent hover:shadow-lg hover:shadow-teal-500/50 hover:ring-2 hover:ring-teal-500 transition-all duration-300 transform hover:-translate-y-1">
      <Icon className="text-gray-400 text-3xl mb-4" />
      <h3 className="text-xl font-semibold mb-2 text-gray-200">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
  