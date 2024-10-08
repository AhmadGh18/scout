import React from "react";
import Navbar from "../Navbar";
import LinkOfPage from "../LinkOfPage";

// Sample list of leaders
const leaders = [
  "القائد بلال أبو ياسين",
  "القائد حسام عثمان",
  "القائد جمال دعبول",
  "القائد محمود اللبان",
  "القائد عبد الفتاح خطاب",
  "القائد كامل كلش",
  "القائد المحامي عصام سباط",
  "القائد أحمد جبخنجي",
  "القائد بـدر فــري",
  "القائد محمد رامز استنبولي",
  "القائد أحمــد طيبــا",
  "القائد راشـد زياده",
  "القائد عبد الله زياده",
  "القائد أنور قبيطري",
  "القائد عزت ديب",
  "القائد عبد الرحمن عجاج",
  "القائد عمــر ملك",
  "القائد محمد الحلو",
  "القائد نزيه الشعراني",
  "الشيخ القاضي غالب أيوبي",
  "القائد محسن بارودي",
  "القائد غسان بيتيه",
  "القائد فهمي كرامي",
  "القائد زكي أسعد",
  "القائد حسام عساف",
  "القائد هاني الحريري",
  "القائد يحيى منصور",
  "القائد المهندس رامي بشاشة",
  "القائد قاسم عبد النبي",
  "القائد وســام الحجار",
  "القائد محمـد الشمعة",
  "القائد أحمـد الشمعة",
  "القائد قاسم منصور",
  "القائد خضر سراج باشي",
  "السيد محمد فنج",
  "السيد عدنان سلطاني",
  "القائد زهير القاضي",
  "القائد عمــر سلطاني",
  "القائد باسم سنتينا",
  "دولة الرئيس فؤاد السنيورة",
  "القائد عبد البديع سنو",
  "القائد توفيق السيد",
  "القائد عبد اللطيف السيد",
  "القائد محمــد السـيد",
  "القائد صبحي الشعراني",
  "القائد وجيـه صبـح",
  "القائد أحمـد الصغير",
  "القائد المحامي إبراهيم صفصوف",
  "القائد محمود الصــلا",
  "القائد سمير طرابلسي",
  "الدكتور بسام عبد الملك",
  "القائد المهندس لبيب عبـس",
  "القائد محمـد عبيد",
  "الأستاذ عصام عرقجي",
  "القائد محمود عبود عسل",
  "الدكتور فيصل علم الدين",
  "القائد أمين محمود عيتاني",
  "السيد أكرم عيتاني",
  "السيد زهير عيتاني",
  "القائد بسام غزال",
  "القائد المهندس جهاد غزال",
  "القائد فيصـل غـزال",
  "القائد محمد الغـزال",
  "القائد مروان الغزال",
  "القائد ناصر غزاوي",
  "القائد علي غلاييني",
  "القائد مايز غلاييني",
  "القائد عبد الحميد كريدية",
  "القائد نور الدين هاشم",
  "القائد مصطفى يموت",
  "القائد أسامة يموت",
  "القائد بسام المصري",
  "القائد أحمد كراجه",
  "القائد ماهر الحلبي",
  "القائد محمود ماضي",
];

const GeneraalAuthority = () => {
  return (
    <div>
      <LinkOfPage
        homeTitle="الهيئة العامة"
        breadcrumbs={[
          { name: "الرئيسية", url: "/" },
          { name: "هيكلية الجمعية", url: "/هيكلية-الجمعية" },
          { name: " الهيئة العامة", url: "" },
        ]}
      />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">
          جمعية الكشاف المسلم في لبنان
        </h1>
        <ol className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 list-arabic-indic">
          {leaders.map((leader, index) => (
            <li
              key={index}
              className="flex items-center justify-center p-4 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-100 transition-colors duration-300 text-right rtl:text-left"
            >
              {leader}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default GeneraalAuthority;
