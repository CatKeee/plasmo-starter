import message from "./../../assets/locales/en/messages.json"
import { ChromeAPI } from "./chrome"

type IconName = keyof typeof message

/**
 * 打开侧边烂
 * @param cb 回调函数
 */
export const openSidePanel = (cb?: () => void) => {
  ChromeAPI.getActiveTab((tab) => {
    tab && ChromeAPI.openSidePanel({ tabId: tab.id }, cb)
  })
}

/**
 * 打开新标签页
 * @param url 标签页地址
 */
export const openNewTab = (url: string) => {
  chrome.tabs.create({ url })
}

/**
 * 获取当前插件的信息
 */
export const getExtension = () => {
  return chrome.runtime
}

export const getLocales = (message: IconName | IconName[]) => {
  const isChinese = ["zh-CN", "zh", "zh_TW"].includes(
    chrome.i18n.getUILanguage()
  )
  if (message instanceof Array) {
    return message
      .map((key) => chrome.i18n.getMessage(key))
      .join(isChinese ? "" : " ")
  } else {
    return chrome.i18n.getMessage(message)
  }
}
