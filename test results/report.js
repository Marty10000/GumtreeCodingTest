$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/GoogleSearchGumrteePages.feature");
formatter.feature({
  "line": 1,
  "name": "Perform a Google search and scan results for Gumtree pages a\\nd record page titles",
  "description": "",
  "id": "perform-a-google-search-and-scan-results-for-gumtree-pages-a\\nd-record-page-titles",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4604638415,
  "status": "passed"
});
formatter.before({
  "duration": 151446,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Search for \u0027Cars in London\u0027, navigate to any Gumtree pages found and record the page titles",
  "description": "",
  "id": "perform-a-google-search-and-scan-results-for-gumtree-pages-a\\nd-record-page-titles;search-for-\u0027cars-in-london\u0027,-navigate-to-any-gumtree-pages-found-and-record-the-page-titles",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "an open chrome browser with the Google search page loaded",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I search for Cars in London",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I can navigate to any gumtree pages returned and record the page titles",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleSearchGumtreePagesSteps.an_open_chrome_browser_with_the_Google_search_page_loaded()"
});
formatter.result({
  "duration": 710077286,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearchGumtreePagesSteps.I_search_for_Cars_in_London()"
});
formatter.result({
  "duration": 2155126981,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearchGumtreePagesSteps.I_can_record_a_list_of_Gumtree_page_titles_returned()"
});
formatter.write("2 Gumtree pages found.");
formatter.write("Page title 1 - Used Cars for sale in London - Gumtree");
formatter.write("Page title 2 - Cheap cars in London | Cars for Sale - Gumtree");
formatter.result({
  "duration": 29311294234,
  "status": "passed"
});
formatter.after({
  "duration": 1024328082,
  "status": "passed"
});
});