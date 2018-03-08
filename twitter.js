const puppeteer = require("puppeteer")

const loginData = require("./logindata.js")
/*
logindata.js

module.exports = {
	twitter: {
		username: "hogehoge",
		password: "********"
	}
}
*/

module.exports = {
	async function postTweet(text) {
		const browser = await puppeteer.launch()
		const page = await browser.newPage()
		await page.goto("https://twitter.com/login")
		await page.type("#page-container > div > div.signin-wrapper > form > fieldset > div:nth-child(2) > input", loginData.twitter.username)
		await page.type("#page-container > div > div.signin-wrapper > form > fieldset > div:nth-child(3) > input", loginData.twitter.password)
		await page.click("#page-container > div > div.signin-wrapper > form > div.clearfix > button")
		await page.waitForNavigation("networkidle0")
		await page.waitFor(1000)
		await page.click("#global-new-tweet-button")
		await page.keyboard.type(text)
		await page.click("#Tweetstorm-tweet-box-0 > div.tweet-box-content > div.TweetBoxToolbar > div.TweetBoxToolbar-tweetButton > span > button.SendTweetsButton.EdgeButton.EdgeButton--primary.EdgeButton--medium.js-send-tweets")
		
		// await page.evaluate(() => {
		// 	document.getElementById("tweet-box-home-timeline").childNodes[0].innerText = "hoge"
		// })

		await page.waitFor(3000)
		await page.screenshot({ path: "screenshots/test.png" })
		await browser.close()
	}
}
