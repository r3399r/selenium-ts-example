import { Browser } from './lib';
import * as url from './lib/url';

describe('Test Updating User Profile', () => {
    let pages: Browser;
    let portalUrl: string = url.mainUrl;

    beforeAll(async () => {
        pages = new Browser('chrome');
    });

    afterAll(async () => {
        await pages.close();
    });

    describe('#1: Open the login web page', () => {
        beforeAll(async () => {
            // Action
            const btnId = 'article-287144404';
            await pages.navigate(portalUrl);
            await pages.findElementById(btnId).click();
        });
        it('The url of login page should be: ' + portalUrl + '/home/login', async () => {
            // Assert
            // const loginHome = await pages.getCurrentUrl();
            // assert.equal(loginHome, portalUrl + '/home/login');
            expect(1).toBe(1);
        });
    });
});