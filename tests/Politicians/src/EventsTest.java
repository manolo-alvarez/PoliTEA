import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

import static java.sql.DriverManager.println;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class EventsTest{
    @Test
    public void testLinkToEvents() {
        // execute the test <x = 0, y = 0, z = 0, submitButton = click> and check the output message is correct
        System.setProperty("webdriver.gecko.driver", "src/geckodriver.exe");
        WebDriver wd = new FirefoxDriver(); // launch the browser
        // edit the next line to enter the location of "min.html" on your file system
        wd.get("file:///C:\\Users\\asada\\Desktop\\Asad_School\\ee461l-team-project-master\\address.html");
        WebElement we = wd.findElement(By.id("inputAddress")).sendKeys("5555 Renner");
        WebElement we = wd.findElement(By.id("inputCity")).sendKeys("Richardson");
        WebElement we = wd.findElement(By.id("inputZip")).sendKeys("75082");
        WebElement we = wd.findElement(By.id("rally-btn"));
        we.click(); //click the button
        String result = wd.getCurrentURL();
        assertEquals("file:///C:\\Users\\asada\\Desktop\\Asad_School\\ee461l-team-project-master\\Events.html", result);
        wd.quit(); // close the browser window
    }

    @Test
    public void testLinkToStateReps() {
        // execute the test <x = 0, y = 0, z = 0, submitButton = click> and check the output message is correct
        System.setProperty("webdriver.gecko.driver", "src/geckodriver.exe");
        WebDriver wd = new FirefoxDriver(); // launch the browser
        // edit the next line to enter the location of "min.html" on your file system
        wd.get("file:///C:\\Users\\asada\\Desktop\\Asad_School\\ee461l-team-project-master\\address.html");
        WebElement we = wd.findElement(By.id("inputAddress")).sendKeys("5555 Renner");
        WebElement we = wd.findElement(By.id("inputCity")).sendKeys("Richardson");
        WebElement we = wd.findElement(By.id("inputZip")).sendKeys("75082");
        WebElement we = wd.findElement(By.id("state-btn"));
        we.click(); //click the button
        String result = wd.getCurrentURL();
        assertEquals("file:///C:\\Users\\asada\\Desktop\\Asad_School\\ee461l-team-project-master\\state_overview.html", result);
        wd.quit(); // close the browser window
    }

    @Test
    public void testLinkToLocations() {
        // execute the test <x = 0, y = 0, z = 0, submitButton = click> and check the output message is correct
        System.setProperty("webdriver.gecko.driver", "src/geckodriver.exe");
        WebDriver wd = new FirefoxDriver(); // launch the browser
        // edit the next line to enter the location of "min.html" on your file system
        wd.get("file:///C:\\Users\\asada\\Desktop\\Asad_School\\ee461l-team-project-master\\address.html");
        WebElement we = wd.findElement(By.id("inputAddress")).sendKeys("5555 Renner");
        WebElement we = wd.findElement(By.id("inputCity")).sendKeys("Richardson");
        WebElement we = wd.findElement(By.id("inputZip")).sendKeys("75082");
        WebElement we = wd.findElement(By.id("polls-btn"));
        we.click(); //click the button
        String result = wd.getCurrentURL();
        assertEquals("file:///C:\\Users\\asada\\Desktop\\Asad_School\\ee461l-team-project-master\\Polls.html", result);
        wd.quit(); // close the browser window
    }

    @Test
    public void testLinkToDistReps() {
        // execute the test <x = 0, y = 0, z = 0, submitButton = click> and check the output message is correct
        System.setProperty("webdriver.gecko.driver", "src/geckodriver.exe");
        WebDriver wd = new FirefoxDriver(); // launch the browser
        // edit the next line to enter the location of "min.html" on your file system
        wd.get("file:///C:\\Users\\asada\\Desktop\\Asad_School\\ee461l-team-project-master\\address.html");
        WebElement we = wd.findElement(By.id("inputAddress")).sendKeys("5555 Renner");
        WebElement we = wd.findElement(By.id("inputCity")).sendKeys("Richardson");
        WebElement we = wd.findElement(By.id("inputZip")).sendKeys("75082");
        WebElement we = wd.findElement(By.id("dist-btn"));
        we.click(); //click the button
        String result = wd.getCurrentURL();
        assertEquals("file:///C:\\Users\\asada\\Desktop\\Asad_School\\ee461l-team-project-master\\district_reps.html", result);
        wd.quit(); // close the browser window
    }
}