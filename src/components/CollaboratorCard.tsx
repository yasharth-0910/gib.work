export const CollaboratorCard = ({ name, description, logo }: any) => (
    <div className="bg-gray-800 bg-opacity-30 backdrop-blur-sm p-6 rounded-lg border border-gray-700 flex items-center space-x-4 hover:border-teal-500 hover:bg-gray-700 hover:bg-opacity-50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
      <img src={logo} alt={name} width={64} height={64} className="rounded-full" />
      <div>
        <h3 className="text-lg font-semibold mb-1 text-gray-200">{name}</h3>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
  