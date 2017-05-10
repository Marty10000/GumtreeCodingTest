Feature: Perform a Google search and scan results for Gumtree pages a\nd record page titles

  Scenario: Search for 'Cars in London', navigate to any Gumtree pages found and record the page titles
    Given an open chrome browser with the Google search page loaded
    When I search for Cars in London
    Then I can navigate to any gumtree pages returned and record the page titles
