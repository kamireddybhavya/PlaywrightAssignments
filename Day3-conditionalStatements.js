function launchBrowser(browserName) {
  if (browserName == "chrome") {
    console.log("Browser is Chrome ");
  } else {
    console.log("Browser is not Chrome");
  }
}
launchBrowser("chrome");

function runTests(testType) {
  switch (testType) {
    case "smoke":
      console.log("This is Smoke Testing");
      break;
    case "sanity":
      console.log("This is Sanity Testing");
      break;
    case "regression":
      console.log("This is Regression Testing");
      break;
    default:
      console.log("Default is Smoke Testing");
  }
}

runTests("regression");
