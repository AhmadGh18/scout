import React, { useEffect } from "react";
import Navbar from "../Navbar";
import LinkOfPage from "../LinkOfPage";

const Ourview = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  return (
    <div>
      <LinkOfPage
        homeTitle="الرؤية والرسالة والقيم"
        breadcrumbs={[
          { name: "الرئيسية", url: "/" },
          { name: "من نحن", url: "/من-نحن" },
          { name: "الرؤية والرسالة والقيم ", url: "" },
        ]}
      />
      <div className="relative text-right mt-10 font-Aljazeera flex flex-col items-start">
        {/* Container with a line on the right side */}
        <div className="text-lg tracking-wider text-gray-800 md:mr-8 mr-3 md:max-w-[80%] md:space-y-8">
          {/* Header */}
          <div className="flex items-center justify-start w-full">
            <p className="text-5xl tracking-wide">الرؤية والرسالة والقيم</p>
          </div>

          {/* Main text content */}
          <p className="text-lg leading-10 tracking-wider mt-10 text-gray-800 border-r-4 px-3 border-primary max-w-[90%] md:max-w-[90%]">
            عند تأسيس الحركة الكشفية عام 1907, وضع بادن باول خُلاصةَ تجاربِه
            ليصوغَ قانوناً للكشافيكون خارطةَ طريقٍ للإهتداء بها في خدمة الفرد
            والوطن. وصاغ عبد الجبار خيري عام 1912 تلك المبادئ بما يتلاءم مع
            مجتمعِنا وبيئتِنا. والقانون عبارةٌ عن عشرة مبادئ أخلاقية, إنْ
            تبِعَها الكشاف يكون قد تَبِعَ دينَه ودنياهوأرضى اللهَ والرسول وأُولي
            الأمر. وهذه المبادئ هي:
          </p>

          <div className="text-lg tracking-wider leading-10 mt-10 text-gray-800 max-w-[90%] md:max-w-[90%]">
            <div className="p-4 border-r-4 border-primary bg-white rounded-sm shadow-sm mt-10">
              <p className="text-3xl">الرؤية</p>
              <p className="leading-10">
                بحلول عام 2025 ستكون جمعية الكشاف المسلم في لبنان رائدةً على
                مستوى لبنان في تمكين خمسة آلاف من الشباب ليكونوا مواطنين فاعلين
                في إحداث التغيير الإيجابي في المجتمعات.
              </p>
            </div>

            <div className="p-4 border-r-4 border-primary bg-white rounded-sm shadow-sm mt-10">
              <p className="text-3xl">المهمة</p>
              <p>
                تتمثل مهمة جمعية الكشاف المسلم في لبنان بالمساهمة في تربية
                الشباب من خلال نظام تربوي لاكتساب القيم يرتكز على الوعد و
                القانون لتمكين الشباب من حل المشاكل بإبداع ونزاهة لريادة حياة
                متوازنة لخدمة الوطن والمساعدة في بناء عالم أفضل يلتزم فيه
                المواطنون كأفراد بأداء دور بنّاء في المجتمع. تتماهى القيم, الوعد
                و القانون في جمعية الكشاف المسلم في لبنان مع مبادئ الدين الحنيف
                والخصائص الرئيسية التي نطمح لغرسها وتنميتها في نفوس شباب اليوم.
              </p>
            </div>

            <div className="p-4 border-r-4 border-primary bg-white rounded-sm shadow-sm mt-10">
              <p className="text-3xl">القيم</p>
              <ol className="list-decimal list-inside pr-4 text-lg mt-2">
                <li>النزاهة</li>
                <li>الاحترام</li>
                <li>الرعاية</li>
                <li>الشجاعة</li>
                <li>المسؤولية</li>
                <li>الإيمان</li>
                <li>التعاون</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourview;
