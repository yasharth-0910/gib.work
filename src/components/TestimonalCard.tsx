import { RxAvatar } from "react-icons/rx";

export const TestimonialCard = ({ quote, author, role }: any) => (
    <div className="bg-gray-800 bg-opacity-30 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-teal-500 transition-all duration-300 transform hover:-translate-y-1">
      <RxAvatar className="text-5xl mx-auto" />
      <p className="text-gray-300 mb-4 italic">"{quote}"</p>
      <p className="text-gray-400 font-semibold">{author}</p>
      <p className="text-gray-500 text-sm">{role}</p>
    </div>
  );