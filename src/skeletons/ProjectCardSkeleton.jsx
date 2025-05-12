const ProjectCardSkeleton = () => {
  return (
    <div className="bg-[#1e1e1e] border border-[#2e2e2e] rounded-2xl p-6 shadow-md animate-pulse">
      <div className="h-6 bg-gray-600 rounded w-3/4 mb-4"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-700 rounded w-full"></div>
        <div className="h-4 bg-gray-700 rounded w-5/6"></div>
        <div className="h-4 bg-gray-700 rounded w-2/3"></div>
      </div>
      <div className="mt-6 flex justify-between items-center">
        <div className="h-8 w-20 bg-gray-700 rounded"></div>
        <div className="h-6 w-12 bg-gray-700 rounded-full"></div>
      </div>
    </div>
  );
};

export default ProjectCardSkeleton;