import React from "react";
import Navbar from "../Navbar";
import SingleProgram from "../SingleProgram";
import {
  FaEye,
  FaHandHoldingHeart,
  FaBookOpen,
  FaHistory,
} from "react-icons/fa";
import LinkOfPage from "../LinkOfPage";
import SingleLatestNew from "../InfoInpages";
import image from "../../assets/images/hiker-stand-camping-near-orange-tent-backpack-mountains.jpg";
const WhoArewe = () => {
  return (
    <div>
      <Navbar />

      <LinkOfPage
        homeTitle="الرئيسية"
        breadcrumbs={[
          { name: "الرئيسية", url: "/" },
          { name: "من نحن", url: "/من-نحن" },
        ]}
      />

      <div className="flex justify-center items-center h-auto mt-10">
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
          <SingleProgram
            title="الرؤية والرسالة و القيم"
            icon={<FaEye />}
            link="/من-نحن/الرؤية-والرسالة-والقيم/"
          />
          <SingleProgram
            title="الوعد والقانون"
            icon={<FaHandHoldingHeart />}
            link="/من-نحن/الوعد-و-القانون/"
          />
          <SingleProgram
            title="قصة الكشفية"
            icon={<FaBookOpen />}
            link="/من-نحن/قصة-الكشفية/"
          />
          <SingleProgram
            title="نبدة عن تاريخ الجمعية"
            icon={<FaHistory />}
            link="/من-نحن/نبدة-عن-تاريخ-الجمعية/"
          />
        </div> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
          <SingleLatestNew
            image={image}
            title=" الرؤية والرسالةوالقيم"
            description="نحن نحن نحننحننحن نحننحن"
            link=""
          />
          <SingleLatestNew
            image={image}
            title=" الوعد و القانون"
            date="12-1-2020"
            description="نحن نحن نحننحننحن نحننحن"
            link=""
          />
          <SingleLatestNew
            image={image}
            title=" قصة الكشقية"
            date="12-1-2020"
            description="نحن نحن نحننحننحن نحننحن"
            link="/"
          />
          <SingleLatestNew
            image={image}
            title=" نبدة عن تاريخ الجمعية"
            date="12-1-2020"
            description="نحن نحن نحننحننحن نحننحن"
            link="/"
          />
        </div>
      </div>
    </div>
  );
};

export default WhoArewe;

{
  /* <div
        className="relative bg-cover bg-center h-[60vh] flex justify-center items-center md:gap-5 font-Aljazeera max-w-full"
        style={{
          backgroundImage: `url(${rawshi})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>

        <div className="relative z-10 flex md:gap-5 flex-wrap gap-2 justify-center">
          <Link
            to="الرؤية-والرسالة-والقيم/"
            className="bg-transparent border md:text-2xl text-sm p-3 text-whiteColor  md:p-4 rounded-lg shadow-md hover:bg-gray-100 hover:text-gray-900 transition duration-300 ease-in-out"
          >
            الرؤية والرسالة والقيم
          </Link>
          <Link
            to="الوعد-و-القانون/"
            className="bg-transparent border md:text-2xl text-sm p-3 text-whiteColor  md:p-4 rounded-lg shadow-md hover:bg-gray-100 hover:text-gray-900 transition duration-300 ease-in-out"
          >
            الوعد والقانون
          </Link>
          <Link
            to="قصة-الكشفية/"
            className="bg-transparent border md:text-2xl text-sm p-3 text-whiteColor  md:p-4 rounded-lg shadow-md hover:bg-gray-100 hover:text-gray-900 transition duration-300 ease-in-out"
          >
            قصة الكشفية
          </Link>
          <Link
            to="نبدة-عن-تاريخ-الجمعية"
            className="bg-transparent border md:text-2xl text-sm p-3 text-whiteColor  md:p-4 rounded-lg shadow-md hover:bg-gray-100 hover:text-gray-900 transition duration-300 ease-in-out"
          >
            نبدة عن تاريخ الجمعية
          </Link>
        </div>
      </div> */
}
