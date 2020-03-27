import messages from "./messages";
import { lang } from "../config/general";
import { get } from "../core/utils";

export enum LANGUAGES {
  PT_BR = "ptBr",
  EN = "en"
}

let locale = lang();

export const setLocale = (newLocale: LANGUAGES) => {
  locale = newLocale;
};

export const getLocale = (): LANGUAGES => {
  return locale;
};

export default (path: string, fallback = "") => {
  return get(messages(locale), path, fallback);
};
