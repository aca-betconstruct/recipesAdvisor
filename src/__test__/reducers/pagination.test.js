import { FIRST_PAGE, NEXT_PAGE } from '../../constants';
import curPage from '../../reducers/pagination';

describe('test pagination', () => {
  test('FIRST_PAGE when current page is equal 0', () => {
    expect(curPage(0, { type: FIRST_PAGE })).toBe(0);
  });
  test('FIRST_PAGE when current page is not equal 0', () => {
    expect(curPage(5, { type: FIRST_PAGE })).toBe(0);
  });
  test('NEXT_PAGE', () => {
    expect(curPage(4, { type: NEXT_PAGE, payload: 5 })).toBe(5);
  });
});
