export const getElementsSelector = (domain: string) : string => "a[href^='http://" + domain + "']:not(a[href^='mailto']), " +
            "a[href^='https://" + domain + "']:not(a[href^='mailto']), " +
            "a[href^='https://www." + domain + "']:not(a[href^='mailto']), " +
            "a[href^='http://www." + domain + "']:not(a[href^='mailto']), " +
            "a[href^='/']:not(a[href^='mailto'])";

export const collectInternalLinks = (
    $: (arg0: string) => { (): any; new(): any; attr: { (arg0: string): any; new(): any; }; }, 
    domain: string, 
    foundPages: string[]) : Promise<string[]>  => {
    return new Promise<string[]>(resolve => {
        const elements = getElementsSelector(domain)
        const relativeLinks = $(elements);
        // @ts-ignore 
        relativeLinks.each(function(i: any, e: any) {
            // @ts-ignore 
            let href = $(this).attr('href');

            if (href.indexOf('www.') !== -1) {
                href = href.substr(href.indexOf('www.') + 4, href.length);
            }
            if (href.indexOf('http') === 0) {
                href = href.substr(href.indexOf('://') + 3, href.length);
            } else if (href.indexOf('/') === 0) {
                href = domain + href;
            }
             
            if (foundPages.indexOf(href) === -1) {
                foundPages.push(href);
            }
        });
        resolve(foundPages);
    })
}