import { getLocales, openNewTab, openSidePanel } from "@/utils/helper"
import React from "react"

export const Navigate = () => {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center">
      <h1 className="mb-4 text-3xl font-medium">
        {getLocales(["hello"])} Plasmo!
      </h1>
      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={() => openSidePanel(() => window.close())}
          className="rounded bg-indigo-500 p-2 text-white">
          {getLocales(["open", "sidepanel"])}
        </button>
        <button
          onClick={() => openNewTab("chrome://newtab")}
          className="rounded bg-indigo-500 p-2 text-white">
          {getLocales(["open", "newtab"])}
        </button>
        <button
          onClick={() => chrome.runtime.openOptionsPage()}
          className="rounded bg-indigo-500 p-2 text-white">
          {getLocales(["open", "options"])}
        </button>
        <button
          onClick={() =>
            chrome.tabs.create({
              url: chrome.runtime.getURL("/tabs/tabs-demo.html")
            })
          }
          className="rounded bg-indigo-500 p-2 text-white">
          {getLocales(["open", "tabs"])}
        </button>
      </div>
    </div>
  )
}
