/**
 * Main control for this library.
 */

import { collectionFetch, IFetchResult } from './eslite-com-fetch';
import { IItemType, itemListParser } from './item-list-parser';

const bookCollection: Function = async (keyword: string, page: number = 1): Promise<object> => {
  const htmlCodeAfterFetch: IFetchResult = await collectionFetch(null, keyword, page);
  // To check where the HTML code is from and do next step
  console.log(`>>> You search data using ${htmlCodeAfterFetch.url}`);

  // To check whether data is got
  if (htmlCodeAfterFetch.data.includes('<div class="box_noResult">') !== true) {
    const itemList: IItemType[] = await itemListParser(htmlCodeAfterFetch.data);
    if (itemList.length > 0) {
      // To do here if the HTML code contains one or more result(s)
      console.log('>>> The HTML code contains one or more result(s).');
      console.log(itemList);

      return itemList;
    }
    // To do here if no result is got from the HTML code
    console.log('>>> No result is got from the HTML code.');

    return null;
  }
  // To do here if html code is empty (no result is got from the HTML code)
  console.log('>>> No result is got from the HTML code.');

  return null;
};

// tslint:disable-next-line:no-default-export
export default bookCollection;
