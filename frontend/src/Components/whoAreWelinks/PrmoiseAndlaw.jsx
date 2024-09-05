import React from "react";

const PrmoiseAndlaw = () => {
  return (
    <div>
      <div className="relative text-right mt-10 md:mr-40 font-Aljazeera border-r-4 border-primary">
        <div className="flex items-center justify-end">
          <p className="text-5xl tracking-wider mr-4">الوعد والقانون</p>
        </div>
        <p className="text-lg tracking-wider mt-10 text-gray-800 mx-auto max-w-[90%] md:max-w-[80%]">
          عند تأسيس الحركة الكشفية عام 1907, وضع بادن باول خُلاصةَ تجاربِه
          ليصوغَ قانوناً للكشافيكون خارطةَ طريقٍ للإهتداء بها في خدمة الفرد
          والوطن.وصاغ عبد الجبار خيري عام 1912 تلك المبادئ بما يتلاءم مع
          مجتمعِنا وبيئتِنا.والقانون عبارةٌ عن عشرة مبادئ أخلاقية, إنْ تبِعَها
          الكشاف يكون قد تَبِعَ دينَه ودنياهوأرضى اللهَ والرسول وأُولي الأمر.
          وهذه المبادئ هي:
        </p>
        <div className="mt-20 px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-screen-xl mx-auto">
            <div className="flex flex-col text-right">
              <p className="mb-2">
                الكشافُ مؤمِنٌ بالله, مُحِبٌّ لوطنِه ومخلِصٌ لرؤسائه ومرؤوسيه.
              </p>
              <p className="mb-2">الكشاف صديقٌ للجميع, وأخٌ لكلِّ كشاف-</p>

              <p className="mb-2">
                الكشاف محبٌّ للطبيعة, يرفق بحيواناتها ويحافظ على نباتِها.
              </p>
              <p className="mb-2">الكشاف يبتسم ولا يعبأ بالصِّعاب.</p>
              <p className="mb-2">الكشاف طاهرُ الفكر والقول والعمل.</p>
            </div>
            <div className="flex flex-col text-right ">
              <p className="mb-2">شرفُ الكشاف يوثَقُ به ويُعتَمَدُ عليه.</p>

              <p className="mb-2">الكشاف نافعٌ ويساعد الآخَرين.</p>

              <p className="mb-2">الكشاف شهمٌ ومهذَّب.</p>
              <p className="mb-2">الكشاف مطيعٌ ويُتقِنُ عمَلَه.</p>
              <p className="mb-2">
                الكشاف مقتَصِد ويحافظ على المُلكية الخاصة والعامة
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrmoiseAndlaw;
