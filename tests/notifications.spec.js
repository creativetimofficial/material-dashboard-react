const fetch = require("node-fetch");
describe("Notifications Page", function() {
  beforeEach(function() {
    browser.url("./admin/notifications");
  });
  it("renders Notifications page", function() {
    var results = browser.checkDocument();

    results.forEach(function(result) {
      expect(result.isWithinMisMatchTolerance).to.equal(
        true,
        "screenshot failure"
      );
    });
  });
  it("check the page for broken links", async function() {
    const links = browser.$$("a");

    let urls = links.map(link => link.getAttribute("href"));

    const isValidUrl = url => {
      const regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
      return regexp.test(url);
    };

    const validUrls = urls.filter(isValidUrl);

    const requests = validUrls.map(url => fetch(url));

    const responses = await Promise.all(requests);

    const statusCodes = responses.map(response => response.status);
    if (statusCodes.includes(404)) {
      console.log(
        "============== Notifications Page Broken links ==================="
      );
      statusCodes.forEach((statusCode, i) => {
        if (statusCode == 404 && validUrls[i].indexOf("index.html") === -1) {
          console.log("Invalid url " + validUrls[i]);
        }
      });
      var statusCodeExpeced = new Array(statusCodes.length).fill(200);
      expect(statusCodes).to.deep.equal(statusCodeExpeced);
    }
  });
});
