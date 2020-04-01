import ptBr from "./pt-br";
import en from "./en";
import { LANGUAGES } from "./index";

export default (locale: LANGUAGES): object => {
  const messages = {
    [LANGUAGES.PT_BR]: ptBr,
    [LANGUAGES.EN]: en
  };

  return messages[locale];
};
