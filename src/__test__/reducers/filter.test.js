import filter from '../../reducers/filter';

describe('test filter', () => {
  test('non action', () => {
    expect(filter({ type: '', labels: [] }, {})).toEqual({
      type: '',
      labels: []
    });
  });
});
