browser.runtime.onInstalled.addListener((details) => {
	if (details.reason === "install" || details.reason === "update") {
		chrome.tabs.create(
			{
				"url":"https://alpaca-honke.github.io/twishare-to-misskey/installed.html"
			}
		);
	}
});

