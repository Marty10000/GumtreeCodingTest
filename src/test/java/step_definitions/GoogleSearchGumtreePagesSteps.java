package step_definitions;

import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;

import java.util.ArrayList;
import java.util.List;

public class GoogleSearchGumtreePagesSteps {

    public WebDriver driver;
    public Scenario scenario;

    public GoogleSearchGumtreePagesSteps()
    {
    	driver = Hooks.driver;
    }

    @Before
    public void before(Scenario scenario) {
        this.scenario = scenario;
    }

    @Given("^an open chrome browser with the Google search page loaded$")
    public void an_open_chrome_browser_with_the_Google_search_page_loaded() throws Throwable {
        driver.get("https://www.google.co.uk/");
    }

    @When("^I search for Cars in London$")
    public void I_search_for_Cars_in_London() throws Throwable {
        WebElement search_field = driver.findElement(By.xpath("//*[@id=\"lst-ib\"]"));
        search_field.sendKeys("Cars in London");
        search_field.sendKeys(Keys.RETURN);
        Thread.sleep(2000);
    }

    @Then("^I can navigate to any gumtree pages returned and record the page titles$")
    public void I_can_record_a_list_of_Gumtree_page_titles_returned() throws Throwable {
        java.util.List<WebElement> links = driver.findElements(By.tagName("cite"));
        List<String> pages = new ArrayList<String>();
        for (int i = 0; i < links.size(); i = i + 1) {
            if(links.get(i).getText().matches(".*www.gumtree.co.*")) {
                pages.add(links.get(i).getText());
            }
        }
        scenario.write(pages.size() + " Gumtree pages found.");
        for (int i = 0; i < pages.size(); i = i + 1) {
            int pageNum = i+1;
            if(pages.get(i).matches("^http.*")){
                driver.get(pages.get(i));
                scenario.write("Page title " + pageNum + " - " + driver.getTitle());
            } else {
                driver.get("http://" + pages.get(i));
                scenario.write("Page title " + pageNum + " - " + driver.getTitle());
            }
        }
    }
}
