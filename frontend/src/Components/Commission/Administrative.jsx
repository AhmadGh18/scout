import React from "react";
import Navbar from "../Navbar";
import LinkOfPage from "../LinkOfPage";

const Administrative = () => {
  const names = [
    "عبد الحميد ناصر مستشار القائد العام",
    "د. جميل جارودي نائب القائد العام",
    "محمود عبود عسل أمين السر العام",
    "محمد السـيد المفوض العام",
    "عبد العزيز حامدي المفتش العام",
    "علي الشـماعة الرفاعي أمين الصندوق",
    "د. فؤاد زياده المراقـب المالي",
    "المحامي إبراهيم صفصوف أمين الشؤون القانونية",
    "د. محمد خير القاضي أمين العلاقات العامة",
    "جمال أوطه باشي ممثل الجمعية لدى اتحاد كشاف لبنان",
    "وسام الحجار أمين الشؤون الإعـلامية",
    "باسـم وهبي أمين الشؤون الإجتماعية",
    "محمد عبيد أمين أملاك الجمعية و مقراتها",
    "م. لبيب عبس أمين مشاريع الأراضي التي تمتلكهاالجمعية",
    "فيصل غـزال أمين شؤون الهيئة العامة",
  ];

  return (
    <div>
      <LinkOfPage
        homeTitle="الهيكلية الإدارية"
        breadcrumbs={[
          { name: "الرئيسية", url: "/" },
          { name: "هيكلية الجمعية", url: "/هيكلية-الجمعية" },
          { name: " الهيكلية الإدارية", url: "" },
        ]}
      />
      <div className="relative text-right mt-10 font-Aljazeera w-full flex flex-col items-end tracking-wide leading-9">
        <div className="flex flex-col items-start relative w-full md:pr-10">
          <div className="mb-8">
            <p className="text-2xl font-bold mb-4 md:mr-10 mr-2 text-primary">
              القيادة العامة 2018-2019
            </p>
            <p className="text-lg mb-6 md:mr-10 mr-2 text-secondary">
              القيادة العامة لجمعية الكشاف المسلم في لبنان للعام الكشفي
              2018/2019
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:pr-10 mb-10 mr-3">
            <ul className="list-disc space-y-4">
              {names.slice(0, Math.ceil(names.length / 2)).map((name) => (
                <div
                  key={name}
                  className="flex items-center justify-start text-lg"
                >
                  <li className="mr-4">{name}</li>
                </div>
              ))}
            </ul>
            <ul className="list-disc space-y-4">
              {names.slice(Math.ceil(names.length / 2)).map((name) => (
                <div
                  key={name}
                  className="flex items-center justify-start text-lg"
                >
                  <li className="mr-4">{name}</li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Administrative;
