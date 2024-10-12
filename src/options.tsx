import { OptionsLayout } from "@/layouts/OptionsLayout"
import React from "react"

import { getLocales } from "./utils/helper"

const Options = () => {
  return (
    <OptionsLayout>
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-3xl">{getLocales("options")}</h1>
      </div>
    </OptionsLayout>
  )
}

export default Options
