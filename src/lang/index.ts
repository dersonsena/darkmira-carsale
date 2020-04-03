import messages from "./messages";
import { appLanguage } from "../config/general";
import { get } from "../core/utils";

export enum LANGUAGES {
  PT_BR = "ptBr",
  EN = "en"
}

export const LOCAL_STORAGE_LANG_NAME = "app_language";

let locale = appLanguage();

export const setLocale = (newLocale: LANGUAGES) => {
  locale = newLocale;
};

export const getLocale = (): LANGUAGES => {
  return locale;
};

export const getLocaleName = (localeCode: LANGUAGES = getLocale()): string => {
  switch (localeCode) {
    case LANGUAGES.EN:
      return lang("languages.en");
    case LANGUAGES.PT_BR:
      return lang("languages.ptBr");
    default:
      return "";
  }
};

const lang = (path: string, fallback = ""): string => {
  return get(messages(locale), path, fallback);
};

export default lang;
