import Vue from "vue";
import VueI18n from "vue-i18n";
import elementEnLocale from "element-ui/lib/locale/lang/en"; // element-ui lang
import elementZhLocale from "element-ui/lib/locale/lang/zh-CN"; // element-ui lang
import elementJaLocale from "element-ui/lib/locale/lang/ja"; // element-ui lang
import elementKoLocale from "element-ui/lib/locale/lang/ko"; // element-ui lang
import enLocale from "./en";
import zhLocale from "./zh";
import koLocale from "./ko";
import jaLocale from "./ja";
import LangStorage from "./../utils/lang";

Vue.use(VueI18n);

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale
  },
  zh: {
    ...zhLocale,
    ...elementZhLocale
  },
  ko: {
    ...koLocale,
    ...elementKoLocale
  },
  ja: {
    ...jaLocale,
    ...elementJaLocale
  }
};

const i18n = new VueI18n({
  locale: LangStorage.getLang("en"),
  messages
});

export default i18n;
