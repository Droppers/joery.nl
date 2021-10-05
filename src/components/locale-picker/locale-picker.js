import React, { useState } from "react";
import { TranslationSettings } from "utils/translate";
import SvgFlagNL from "assets/vector/icons/locales/flag-nl.svg";
import SvgFlagEN from "assets/vector/icons/locales/flag-en.svg";
import SvgArrowDown from "assets/vector/icons/arrow-down.svg";

const LOCALES = [
  { locale: "nl", flag: SvgFlagNL, name: "Nederlands" },
  { locale: "en", flag: SvgFlagEN, name: "English" },
];

const LocalePicker = () => {
  const [updateNow, setUpdateNow] = useState(true);

  const activeLocale = LOCALES.find(
    (a) => a.locale === TranslationSettings.locale
  );
  const sortedLocales = [...LOCALES];
  sortedLocales.splice(LOCALES.indexOf(activeLocale), 1);
  sortedLocales.unshift(activeLocale);

  return (
    <div className="locale-picker">
      <div className="selected">
        <activeLocale.flag className="flag" />
        <SvgArrowDown className="arrow" />
      </div>
      <div className="options">
        <For
          of={sortedLocales}
          each="locale"
          body={(locale) => (
            <div
              className="option"
              key={locale.locale}
              onClick={() => {
                TranslationSettings.locale = locale.locale;
                setUpdateNow(!updateNow);
              }}
              tabIndex={0}
              role="button"
            >
              <locale.flag className="flag" />
              <span>{locale.name}</span>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default LocalePicker;
