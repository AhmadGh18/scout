import { Link } from "react-router-dom";

const LinkOfPage = ({ breadcrumbs, homeTitle }) => {
  return (
    <div>
      <div className="h-40 px-4 md:px-10 bg-gray-100 text-primary flex flex-col justify-center items-center text-xl font-Aljazeera w-full">
        {/* Home Title */}
        <p className="text-2xl md:text-3xl font-bold text-primary mb-4 md:mb-1 md:p-2 text-center">
          {homeTitle}
        </p>

        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-1 rtl:space-x-reverse text-sm md:text-lg justify-center ">
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
