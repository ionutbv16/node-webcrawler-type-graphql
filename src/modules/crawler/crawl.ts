
const cheerio = require('cheerio');
const request = require('request');
import { v4 as uuidv4 } from 'uuid';
import { DOMAIN_TO_CRAWL, DONE_MESSAGE } from '../config/config'
import { collectInternalLinks } from './crawl.utils'
import { Url } from "../types/urls"

const crawledPages: string[] = [];

export const crawledPagesData: Url[] = [];

let foundPages: string[] = [];
let index = 0;

const domain = DOMAIN_TO_CRAWL

export const crawl : () => void = async () => {
	// if it's the first start
    if (index === 0) {
        foundPages.push(domain + '/');
    }

    const pageToCrawl = foundPages[index];	
     // exit the process if both arrays are the same or the next page is not defined
    if (foundPages === crawledPages || !pageToCrawl) {
        //console.log('process.exit', crawledPagesData)
        console.log(DONE_MESSAGE)
        return
    }	

    // if pageToCrawl is not yet in list of crawledPages
    if (crawledPages.indexOf(pageToCrawl) === -1) {
        //console.log('crawledPages pageToCrawl', crawledPages, pageToCrawl)
        if (pageToCrawl) {
            new Promise(resolve => {
            visitPage(pageToCrawl, resolve)
            }).then(function() {
                index++;
                crawl();
            });
        } else {
            process.nextTick(crawl);
        }
    } else {
        process.nextTick(crawl);
    }
}

const visitPage = (url: string, callback: () => void) => {
    // @ts-ignore 
    request('https://' + url, (error: string, response: { statusCode: number; }, body: string) => {
        // Check status code (200 is HTTP OK)
        if (!response || response.statusCode !== 200) {
            process.nextTick(callback);
            return;
        }

        crawledPages.push(url);
        
        const $ = cheerio.load(body);
        const title: string = $("title").text();

        crawledPagesData.push({
            id: uuidv4(),
            urla: url,
            title: title
        });
        
        console.log('crawledPagesData', crawledPagesData);

        collectInternalLinks($, domain, foundPages).then(
            // @ts-ignore 
            (newFoundPages: any[]) => {
                foundPages = newFoundPages;
                callback();
        });
    });
}	

