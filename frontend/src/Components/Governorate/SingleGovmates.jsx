import React from "react";
import logo from "../../assets/images/beirutgov.png";
import beirut from "../../assets/images/beirutdownload.png";
const SingleGovmates = ({ city }) => {
  return (
    <div className="flex flex-col justify-start items-end p-8 bg-gray-50 rounded-lg shadow-lg font-Aljazeera">
      {/* Header section with logo and title */}
      <div className="flex items-center md:justify-start mb-8 flex-col md:w-full md:flex-row  w-full">
        <img
          src={logo}
          className="h-40 w-40 object-contain"
          alt="Beirut Gov Logo"
        />
        <p className="md:text-3xl font-bold text-gray-900"> {city}</p>
      </div>

      {/* History and description */}
      <div className="text-right leading-8 space-y-4 text-lg">
        <p>تأسست مفوضية بيروت سنة ١٩١٢ عبر</p>
        <p>تشكيلة مفوضية بيروت القائد محمود ماضي مفوضاً بيروت</p>
        <p>
          The Muslim Scout Association of Lebanon was established in 1912, the
          first Scout movement in Lebanon and the Arab world. Mohammad Abdul
          Jabbar Khairy was the founder of the Scout movement in Lebanon who is
          one of the three Indians who sought education in the universities of
          Beirut. When he traveled to Great Britain the Scout movement aroused
          the interest of Mohammad Khairy during his stay in London for studies.
          On his return to Beirut, and by the encouragement of the
          administration of Dar El O'loum School and its board of trustees
          headed by Sheikh Muhammad Toufik El Hibri (1869-1954), the
          establishment of The Ottoman Scout was announced in 1912. In 1914
          World War I broke out, Khairy left Beirut, so Mohammad Omar Mneimneh
          took charge of the movement, with the participation of Moheiddine
          Nsouli, Baha'elddine Tabbah and Said Sinno in administering the
          school's Scout movement. In 1915 Mohammad Omar Mneimneh traveled to
          Istanbul to serve in the army so the movement stopped. After the war
          the movement was revived by Mohammad Said, Abdullah Dabbouss,
          Moheiddine and AbdulRahman Koronfol and Omar Onssi and supported by
          Saadullah Itani, and was called The Syrian Scout. The first
          constitution was passed on the 30th of September 1920; the name
          Ottoman and Syrian were substituted with Muslim Scout Association. 29
          June 1921. The Muslim Scout Association started its activity under
          this name. The association has proved itself as a protector of
          morality and principles as well as ideals in order to provide a youth
          which is pure in thought, work and word. The emblem of the Muslim
          Scout Association of Lebanon features a hand with an out-turned palm,
          related to the five pillars of Islam
        </p>
      </div>

      {/* Troop information section */}
      <div className="mt-8 text-right space-y-2 text-sm flex justify-between w-full flex-wrap">
        <p>
          <p className="font-bold text-gray-900">إنتشار أفواج المفوضيات</p>
          <p>Currently, there are 9 troops under Beirut's legation:</p>
          <ul className="list-disc list-inside">
            <li>
              Al Iman, Zarif -{" "}
              <a
                href="https://www.facebook.com/iman.troop/"
                className="text-blue-600"
              >
                www.facebook.com/iman.troop/
              </a>
            </li>
            <li>
              Al Hassan Bin Ali, Aramoun -{" "}
              <a
                href="https://www.facebook.com/alhassan.bin.ali"
                className="text-blue-600"
              >
                www.facebook.com/alhassan.bin.ali
              </a>
            </li>
            <li>
              Abu Baker Elsaddik, Aramoun -{" "}
              <a
                href="https://www.facebook.com/abubakrtroop2020/"
                className="text-blue-600"
              >
                www.facebook.com/abubakrtroop2020/
              </a>
            </li>
            <li>
              Ali Ben Abi Taleb, Mar Elias -{" "}
              <a
                href="https://www.facebook.com/BeirutMuslimScout.Ali/"
                className="text-blue-600"
              >
                www.facebook.com/BeirutMuslimScout.Ali/
              </a>
            </li>
            <li>Al Markaz Al Isleme, Aishe Bakkar</li>
            <li>
              Khaled Bin AlWalid, Sakiyat AlJanzir -{" "}
              <a
                href="https://www.facebook.com/khaled.bin.walid.troop"
                className="text-blue-600"
              >
                www.facebook.com/khaled.bin.walid.troop
              </a>
            </li>
            <li>
              Music Band, Bourj Abi Haidar -{" "}
              <a
                href="https://www.facebook.com/pages/Muslim-Scout-Beiruts-Legation"
                className="text-blue-600"
              >
                www.facebook.com/Muslim-Scout-Beirut
              </a>
            </li>
            <li>
              Salah AlDeen AlAyoubi, Tareek Al-Jadida -{" "}
              <a
                href="https://www.facebook.com/Salah.Dien.Ayobi.Trooop"
                className="text-blue-600"
              >
                www.facebook.com/Salah.Dien.Ayobi.Trooop
              </a>
            </li>
          </ul>
        </p>
        <img src={beirut} className="md:h-[400px]" />
      </div>
    </div>
  );
};

export default SingleGovmates;
