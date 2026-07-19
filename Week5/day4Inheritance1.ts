class Browser {
  browserName: string;
  browserVersion: string;
  constructor(name: string, version: string) {
    this.browserName = name
    this.browserVersion = version
  }

 openURL(url: string) {
    console.log(`${this.browserName} opened ${url}`);
}
  closeBrowser() {
    console.log("Browser is closed")
  }
  navigateBack() {
    console.log("Navigated back")
  }
}
class Chromee extends Browser {
  openIncognito() {
    console.log("Incognito mode is opened")
  }
  clearCache() {
    console.log("Cache is cleared")
  }
}
class Edgee extends Browser {
  takeSnap() {
    console.log("Snapshot is taken")
  }
  clearCookies() {
    console.log("Cookies are cleared")
  }
}
class Safari extends Browser {
  readerMode() {
    console.log("Reader mode is opened")
  }
  fullScreenMode() {
    console.log("Full screen mode is opened")
  }
}
const chrome = new Chromee("Chrome", "91.0")
console.log(chrome.browserName, chrome.browserVersion);
chrome.openURL("https://www.chrome.com")
chrome.openIncognito()
chrome.clearCache()
chrome.closeBrowser()
chrome.navigateBack()
const edge = new Edgee("Edge", "101.0")
console.log(edge.browserName, edge.browserVersion);
edge.openURL("https://www.edge.com")
edge.takeSnap()
edge.clearCookies()
edge.closeBrowser()
edge.navigateBack()
const safari = new Safari("Safari", "15.0")
console.log(safari.browserName, safari.browserVersion);
safari.openURL("https://www.safari.com")
safari.readerMode()
safari.fullScreenMode()
safari.closeBrowser()
safari.navigateBack()
