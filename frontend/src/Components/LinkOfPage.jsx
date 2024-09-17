import { Link } from "react-router-dom";

const LinkOfPage = ({ breadcrumbs, homeTitle }) => {
  return (
    <div>
      <div className="h-40 px-4 md:px-10 bg-gray-100 text-primary flex flex-col md:flex-row justify-center md:justify-between items-center text-xl font-Aljazeera flex-wrap w-full">
        {/* Home Title */}
        <p className="text-2xl md:text-3xl font-bold ml-0 md:ml-10 text-primary mb-4 md:mb-0">
          {homeTitle}
        </p>

        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-1 rtl:space-x-reverse text-sm md:text-lg">
          {breadcrumbs.map((breadcrumb, index) => (
            <span key={index} className="flex items-center">
              <Link
                to={breadcrumb.url}
                className="text-primary hover:underline font-medium"
              >
                {breadcrumb.name}
              </Link>
              {index < breadcrumbs.length - 1 && (
                <span className="text-gray-500 mx-1 md:mx-2">/</span> // Separator
              )}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default LinkOfPage;
