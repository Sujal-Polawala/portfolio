// src/components/Breadcrumbs.jsx
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="text-xl text-left text-gray-300 mb-6">
      <ol className="flex items-center space-x-2">
        <li>
          <Link to="/" className="text-cyan-400 hover:underline">
            Home
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={to} className="flex items-center space-x-2">
              <span className="mx-1 text-cyan-400/50">/</span>
              {isLast ? (
                <span className="text-white capitalize">{value}</span>
              ) : (
                <Link to={to} className="text-cyan-400 hover:underline capitalize">
                  {value}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;