/**
 * Demo
 */

// tslint:disable-next-line:import-name
import bookCollection from './index';

const keywordList: string[] = [
  '春夏秋冬，日日食光。生活美學家的鑄鐵鍋料理手帖', // It will get one result as expected.
  'disease', // It will get more results on 12 ones per page as expected.
  'blablablablablablablablablablablabla' // It will be no result.
];

const demo: Function = async (): Promise<void> => {
  for (const keyword of keywordList) {
    await console.log(`>>> You search data using keyword "${keyword}".`);
    await bookCollection(keyword);
  }
};

demo(keywordList);
