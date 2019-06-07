import { Builder, ThenableWebDriver, By, WebElementPromise, until } from 'selenium-webdriver';
import * as chrome from 'selenium-webdriver/chrome';
import * as firefox from 'selenium-webdriver/firefox';

export class Browser {
  private driver: ThenableWebDriver;
  public constructor(private browserName: string) {
    this.driver = new Builder()
      .forBrowser(browserName)
      .setChromeOptions(new chrome.Options().headless())
      .setFirefoxOptions(new firefox.Options().headless())
      .build();
  }

  public async navigate(url: string): Promise<void> {
    await this.driver.navigate().to(url);
  }

  public async getTitle(): Promise<string> {
    return this.driver.getTitle();
  }

  public findElementByCss(selector: string): WebElementPromise {
    return this.driver.findElement(By.css(selector));
  }

  public findElementById(elementId: string): WebElementPromise {
    return this.driver.findElement(By.id(elementId));
  }

  public findElementByXpath(xpath: string): WebElementPromise {
    return this.driver.findElement(By.xpath(xpath));
  }

  public async getCurrentUrl(): Promise<string> {
    return this.driver.getCurrentUrl();
  }

  public async waitElementById(elementId: string, timeout: number): Promise<void> {
    await this.driver.wait(until.elementsLocated(By.id(elementId)), timeout);
  }

  public async sleep(ms: number): Promise<void> {
    await this.driver.sleep(ms);
  }

  public async close(): Promise<void> {
    await this.driver.quit();
  }
}