import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

import static java.sql.DriverManager.println;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class MapTest{
    @Test
    public void testLinkToIndividualState() {
        // execute the test <x = 0, y = 0, z = 0, submitButton = click> and check the output message is correct
        System.setProperty("webdriver.gecko.driver", "src/geckodriver.exe");
        WebDriver wd = new FirefoxDriver(); // launch the browser
        // edit the next line to enter the location of "min.html" on your file system
        wd.get("file:///C:\\Users\\asada\\Desktop\\Asad_School\\ee461l-team-project-master\\Splash.html");
        WebElement we = wd.findElement(By.id("s08"));
        we.click(); //click the button
        String result = wd.getCurrentUrl();
        assertEquals("file:///C:\\Users\\asada\\Desktop\\Asad_School\\ee461l-team-project-master\\state_overview.html", result);
        wd.quit(); // close the browser window
    }

    @Test
    public void testLinkToIndividualState2() {
        // execute the test <x = 0, y = 0, z = 0, submitButton = click> and check the output message is correct
        System.setProperty("webdriver.gecko.driver", "src/geckodriver.exe");
        WebDriver wd = new FirefoxDriver(); // launch the browser
        // edit the next line to enter the location of "min.html" on your file system
        wd.get("file:///C:\\Users\\asada\\Desktop\\Asad_School\\ee461l-team-project-master\\Splash.html");
        WebElement we = wd.findElement(By.xpath("//*[text()='Governor of Colorado']"));
        String result = we.getText(); //click the button
        assertEquals('Governor of Colorado', result);
        wd.quit(); // close the browser window
    }
}

