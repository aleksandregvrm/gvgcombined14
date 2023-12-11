export const landingPageEvent = () => {
    fbq("track", "PageViewHome");
}

export const vendingPageEvent = () => {
    fbq("track", "PageViewVending");
}