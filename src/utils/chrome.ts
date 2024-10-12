export interface CreatePopupWindowOptions {
  url: string
  width?: number
  height?: number
}

export const ChromeAPI = {
  /**
   * 打开侧边栏
   * @param {chrome.sidePanel.OpenOptions} options - 侧边栏open参数
   * @param {Function} callback - 成功打开后的回调
   */
  openSidePanel: (
    options: chrome.sidePanel.OpenOptions,
    callback?: () => void
  ) => {
    chrome.sidePanel.open(options, () => {
      callback && callback()
    })
  },

  /**
   * 创建新的弹出窗口
   * @param {CreatePopupWindowOptions} options - 要打开的窗口选项
   * @param {Function} callback - 窗口创建后的回调
   */
  createPopupWindow: (
    { url, width = 600, height = 800 }: CreatePopupWindowOptions,
    callback: (window: chrome.windows.Window) => void
  ) => {
    chrome.windows.create(
      {
        url,
        type: "popup",
        width,
        height
      },
      callback
    )
  },

  /**
   * 获取当前活动的标签页
   * @param {Function} callback - 获取到标签页后的回调
   */
  getActiveTab: (callback: (tab: chrome.tabs.Tab | null) => void) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      callback(tabs.length > 0 ? tabs[0] : null)
    })
  },

  /**
   * 关闭当前的 popup
   */
  closePopup: () => {
    window.close() // 关闭当前的 popup
  },

  /**
   * 获取本地存储数据
   * @param {string} key - 存储的键
   * @param {Function} callback - 获取到数据后的回调
   */
  getStorage: (key: string, callback: (value: any) => void) => {
    chrome.storage.local.get(key, (result) => {
      callback(result[key])
    })
  },

  /**
   * 设置本地存储数据
   * @param {string} key - 存储的键
   * @param {any} value - 要存储的值
   * @param {Function} callback - 存储后的回调
   */
  setStorage: (key: string, value: any, callback?: () => void) => {
    chrome.storage.local.set({ [key]: value }, callback)
  },

  /**
   * 发送消息给背景脚本
   * @param {any} message - 发送的消息
   * @param {Function} callback - 响应的回调
   */
  sendMessage: (message: any, callback: (response: any) => void) => {
    chrome.runtime.sendMessage(message, callback)
  },

  /**
   * 监听来自背景脚本的消息
   * @param {Function} callback - 消息到达后的回调
   */
  onMessage: (
    callback: (
      message: any,
      sender: chrome.runtime.MessageSender,
      sendResponse: (response?: any) => void
    ) => void
  ) => {
    chrome.runtime.onMessage.addListener(callback)
  },

  /**
   * 创建书签
   * @param {string} title - 书签标题
   * @param {string} url - 书签 URL
   * @param {Function} callback - 创建书签后的回调
   */
  createBookmark: (
    title: string,
    url: string,
    callback: (bookmark: chrome.bookmarks.BookmarkTreeNode) => void
  ) => {
    chrome.bookmarks.create({ title, url }, callback)
  },

  /**
   * 获取所有书签
   * @param {Function} callback - 获取到书签后的回调
   */
  getBookmarks: (
    callback: (bookmarks: chrome.bookmarks.BookmarkTreeNode[]) => void
  ) => {
    chrome.bookmarks.getTree(callback)
  },

  /**
   * 显示通知
   * @param {string} title - 通知标题
   * @param {string} message - 通知内容
   * @param {string} iconUrl - 图标 URL
   * @param {string} notificationId - 通知 ID
   */
  showNotification: (
    title: string,
    message: string,
    iconUrl: string = "icon.png",
    notificationId: string
  ) => {
    chrome.notifications.create(notificationId, {
      type: "basic",
      iconUrl,
      title,
      message
    })
  },

  /**
   * 创建上下文菜单
   * @param {string} id - 菜单 ID
   * @param {string} title - 菜单标题
   * @param {Function} callback - 菜单创建后的回调
   */
  createContextMenu: (id: string, title: string, callback?: () => void) => {
    chrome.contextMenus.create(
      {
        id,
        title,
        contexts: ["selection"] // 可以根据需要修改上下文
      },
      callback
    )
  },

  /**
   * 获取所有打开的标签页
   * @param {Function} callback - 获取到标签页后的回调
   */
  getAllTabs: (callback: (tabs: chrome.tabs.Tab[]) => void) => {
    chrome.tabs.query({}, callback)
  },

  /**
   * 更新标签页
   * @param {number} tabId - 标签页 ID
   * @param {Object} updateProperties - 更新属性
   * @param {Function} callback - 更新后的回调
   */
  updateTab: (
    tabId: number,
    updateProperties: chrome.tabs.UpdateProperties,
    callback: (tab: chrome.tabs.Tab) => void
  ) => {
    chrome.tabs.update(tabId, updateProperties, callback)
  },

  /**
   * 关闭标签页
   * @param {number} tabId - 要关闭的标签页 ID
   * @param {Function} callback - 关闭后的回调
   */
  closeTab: (tabId: number, callback: () => void) => {
    chrome.tabs.remove(tabId, callback)
  },

  /**
   * 获取历史记录
   * @param {Function} callback - 获取到历史记录后的回调
   */
  getHistory: (
    callback: (historyItems: chrome.history.HistoryItem[]) => void
  ) => {
    chrome.history.search({ text: "", maxResults: 100 }, callback)
  },

  /**
   * 获取当前窗口
   * @param {Function} callback - 获取到窗口后的回调
   */
  getCurrentWindow: (callback: (window: chrome.windows.Window) => void) => {
    chrome.windows.getCurrent(callback)
  },

  /**
   * 获取当前活动的窗口
   * @param {Function} callback - 获取到活动窗口后的回调
   */
  getActiveWindow: (callback: (window: chrome.windows.Window) => void) => {
    chrome.windows.getLastFocused(callback)
  },

  /**
   * 下载文件
   * @param {string} url - 文件的 URL
   * @param {Function} callback - 下载后的回调
   */
  downloadFile: (url: string, callback: (downloadId: number) => void) => {
    chrome.downloads.download({ url }, callback)
  }
}
