import React from "react";
import Navbar from "./Navbar";
import img from "../assets/LeadersPic/Abdolla.jpg";

const SingleLeader = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row-reverse items-start md:items-center mt-10 font-Aljazeera">
        <div className=" md:h-[60vh] md:w-1/2 flex flex-col items-center mt-0">
          <img
            src={img}
            alt="Leader"
            className=" object-contain mb-4 md:mb-0 h-full w-full"
          />
          <p className="text-primary font-bold text-2xl p-4">
            الرئيس القائد شفيق محمد عمر منيمنة
          </p>
        </div>
        <div className="md:mr-4 border-r-4 border-primary pr-4 text-right leading-8">
          <ul className="list-inside space-y-2">
            <li className="relative pl-8 before:absolute before:-right-2 before:top-1/2 before:-translate-y-1/2 before:text-xl before:text-primary before:content-['•']">
              وُلِد في بيروت عام 1924, وهو إبن المرحوم القائد محمد عمر منيمنة.
            </li>
            <li className="relative pl-8 before:absolute before:-right-2 before:top-1/2 before:-translate-y-1/2 before:text-xl before:text-primary before:content-['•']">
              حائز على: إجازة في الحقوق في الجامعتين اللبنانية والعربية. دبلوم
              في الدراسات العليا للمشرقيات من الجامعة اليسوعية.
            </li>
            <li className="relative pl-8 before:absolute before:-right-2 before:top-1/2 before:-translate-y-1/2 before:text-xl before:text-primary before:content-['•']">
              حامل وسامَيْ الأرز الوطني من رتبة فارس وقومندور.
            </li>
            <li className="relative pl-8 before:absolute before:-right-2 before:top-1/2 before:-translate-y-1/2 before:text-xl before:text-primary before:content-['•']">
              شغِل منصب الأمين العام لمجلس الوزراء من العام 1983 حتى العام 1988.
            </li>
            <li className="relative pl-8 before:absolute before:-right-2 before:top-1/2 before:-translate-y-1/2 before:text-xl before:text-primary before:content-['•']">
              الأمين العام للمجلس الإسلامي الشرعي الأعلى منذ العام 1982 حتى
              18-12-1989.
            </li>
            <li className="relative pl-8 before:absolute before:-right-2 before:top-1/2 before:-translate-y-1/2 before:text-xl before:text-primary before:content-['•']">
              1983 عضو الهيئة العامة للجمعية.
            </li>
            <li className="relative pl-8 before:absolute before:-right-2 before:top-1/2 before:-translate-y-1/2 before:text-xl before:text-primary before:content-['•']">
              انتُخِب عضواً في مجلس أمناء جمعية المقاصد الخيرية الإسلامية في
              بيروت عام 1986, وشارك بعدة لجان منها: المالية, التربية, الشؤون
              القانونية والخلايا الإجتماعية.
            </li>
            <li className="relative pl-8 before:absolute before:-right-2 before:top-1/2 before:-translate-y-1/2 before:text-xl before:text-primary before:content-['•']">
              1987 نال وسام التقدير المذهَّب من جمعية الكشاف المسلم في لبنان
              تقديراً لجهوده.
            </li>
            <li className="relative pl-8 before:absolute before:-right-2 before:top-1/2 before:-translate-y-1/2 before:text-xl before:text-primary before:content-['•']">
              انتُخِب رئيساً لجمعية الكشاف المسلم في لبنان من 14-11-1985 لغاية
              18-12-1989.
            </li>
            <li className="relative pl-8 before:absolute before:-right-2 before:top-1/2 before:-translate-y-1/2 before:text-xl before:text-primary before:content-['•']">
              عضو جمعية قدامى الكشاف المسلم في لبنان منذ العام 1972.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleLeader;
