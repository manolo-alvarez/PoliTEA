import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

import static java.sql.DriverManager.println;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class PoliticiansTest {

    @Test
    public void testLinkToBioRepresentatives() {
        // execute the test <x = 0, y = 0, z = 0, submitButton = click> and check the output message is correct
        System.setProperty("webdriver.gecko.driver", "src/geckodriver.exe");
        WebDriver wd = new FirefoxDriver(); // launch the browser
        // edit the next line to enter the location of "min.html" on your file system
        wd.get("file:///C:\\Users\\manol\\OneDrive - The University of Texas at Austin\\OneDrive - Personal\\Documents\\Classes\\2020 Spring\\EE 461L\\Team Project\\ee461l-team-project\\Representatives.html");
        WebElement we = wd.findElement(By.id("A000374"));
        we.click(); //click the button
        WebElement result = wd.findElement(By.id("A000374"));
        String output = result.getText(); // read the output text
        assertEquals("Ralph Abraham", output);
        wd.quit(); // close the browser window
    }

    @Test
    public void testLinkToBioSenators() {
        // execute the test <x = 0, y = 0, z = 0, submitButton = click> and check the output message is correct
        System.setProperty("webdriver.gecko.driver", "src/geckodriver.exe");
        WebDriver wd = new FirefoxDriver(); // launch the browser
        // edit the next line to enter the location of "min.html" on your file system
        wd.get("file:///C:\\Users\\manol\\OneDrive - The University of Texas at Austin\\OneDrive - Personal\\Documents\\Classes\\2020 Spring\\EE 461L\\Team Project\\ee461l-team-project\\Senators.html");
        WebElement we = wd.findElement(By.id("H001089"));
        we.click(); //click the button
        WebElement result = wd.findElement(By.id("H001089"));
        String output = result.getText(); // read the output text
        assertEquals("Joshua Hawley", output);
        wd.quit(); // close the browser window
    }

    @Test
    public void testDonorsAndFinancesLink() {
        // execute the test <x = 0, y = 0, z = 0, submitButton = click> and check the output message is correct
        System.setProperty("webdriver.gecko.driver", "src/geckodriver.exe");
        WebDriver wd = new FirefoxDriver(); // launch the browser
        // edit the next line to enter the location of "min.html" on your file system
        wd.get("file:///C:\\Users\\manol\\OneDrive - The University of Texas at Austin\\OneDrive - Personal\\Documents\\Classes\\2020 Spring\\EE 461L\\Team Project\\ee461l-team-project\\Senators.html");
        WebElement we = wd.findElement(By.id("H001089_finance"));
        we.click(); //click the button
        String result = wd.getCurrentUrl();
        assertEquals("file:///C:/Users/manol/OneDrive%20-%20The%20University%20of%20Texas%20at%20Austin/OneDrive%20-%20Personal/Documents/Classes/2020%20Spring/EE%20461L/Team%20Project/ee461l-team-project/financial_main.html", result);
        wd.quit(); // close the browser window
    }
}