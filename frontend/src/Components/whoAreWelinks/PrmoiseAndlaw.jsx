import React, { useEffect } from "react";
import Navbar from "../Navbar";
import LinkOfPage from "../LinkOfPage";
import { FaHome } from "react-icons/fa";

const PrmoiseAndlaw = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  return (
    <div>
      <LinkOfPage
        homeTitle=" الوعد و القانون"
        breadcrumbs={[
          { name: <FaHome />, url: "/" },
          { name: "من نحن", url: "/من-نحن" },
          { name: "  الوعد و القانون ", url: "" },
        ]}
      />
      <div className="relative text-right mt-10 font-Aljazeera flex flex-col items-start mr-5">
        {/* Container with a line on the right side */}
        <div className="text-lg tracking-wide text-gray-800 md:mr-8 mr-3 md:max-w-[80%] md:space-y-8">
          <div className="flex items-center justify-start w-full">
            <p className="text-5xl tracking-wide">الوعد و القانون</p>
          </div>
        </div>
        <p className="text-lg leading-10 tracking-wider mt-10 text-gray-800 border-r-4 px-3 border-primary max-w-[90%] md:max-w-[90%]">
          عند تأسيس الحركة الكشفية عام 1907, وضع بادن باول خُلاصةَ تجاربِه
          ليصوغَ قانوناً للكشافيكون خارطةَ طريقٍ للإهتداء بها في خدمة الفرد
          والوطن.وصاغ عبد الجبار خيري عام 1912 تلك المبادئ بما يتلاءم مع
          مجتمعِنا وبيئتِنا.والقانون عبارةٌ عن عشرة مبادئ أخلاقية, إنْ تبِعَها
          الكشاف يكون قد تَبِعَ دينَه ودنياهوأرضى اللهَ والرسول وأُولي الأمر.
          وهذه المبادئ هي:
        </p>
        <div className="text-lg leading-10 flex md:flex-row  gap-7  flex-col  p-3 tracking-wider mt-10 text-gray-800 border-r-4 px-3 border-primary max-w-[90%] md:max-w-[90%]">
          <ul className="list-disc space-y-5 pr-3">
            <li>شرفُ الكشاف يوثَقُ به ويُعتَمَدُ عليه.</li>
            <li>الكشاف طاهرُ الفكر والقول والعمل.</li>

            <li>الكشاف نافعٌ ويساعد الآخَرين.</li>
            <li>الكشاف صديقٌ للجميع, وأخٌ لكلِّ كشاف.</li>
            <li>الكشاف شهمٌ ومهذَّب.</li>
          </ul>
          <ul className="list-disc space-y-5 pr-3">
            <li>الكشاف محبٌّ للطبيعة, يرفق بحيواناتها ويحافظ على نباتِها.</li>
            <li>الكشاف مطيعٌ ويُتقِنُ عمَلَه.</li>
            <li>الكشاف يبتسم ولا يعبأ بالصِّعاب.</li>
            <li>الكشاف مقتَصِد ويحافظ على المُلكية الخاصة والعامة.</li>
            <li>
              الكشافُ مؤمِنٌ بالله, مُحِبٌّ لوطنِه ومخلِصٌ لرؤسائه ومرؤوسيه.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PrmoiseAndlaw;
