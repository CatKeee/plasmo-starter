import { DevtoolLayout } from "@/layouts/DevtoolLayout"
import Panel from "url:./panels/panel/index.html"
import SidebarPane from "url:./panels/sidebar-pane/index.html"

chrome.devtools.panels.create("panel", null, Panel.split("/").pop())

chrome.devtools.panels.elements.createSidebarPane(
  "devtool-properties",
  (sidebar) => {
    sidebar.setPage(SidebarPane.split("/").pop())
  }
)

const Devtools = () => {
  return (
    <DevtoolLayout>
      <div>Devtool</div>
    </DevtoolLayout>
  )
}

export default Devtools
