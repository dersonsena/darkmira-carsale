import { LANGUAGES, LOCAL_STORAGE_LANG_NAME } from "../lang";

/**
 * @returns {string}
 */
export const appLanguage = (): LANGUAGES => {
  const lsAppLanguage = window.localStorage.getItem(LOCAL_STORAGE_LANG_NAME);

  if (lsAppLanguage) {
    // @ts-ignore
    return window.localStorage.getItem(LOCAL_STORAGE_LANG_NAME);
  }

  return LANGUAGES.PT_BR;
};
