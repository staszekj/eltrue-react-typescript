import {fetchItems} from './fetch-items';

describe('Fetch items', () => {
  it('should fetch items', () => {
    //given
    //when
    return fetchItems([])
      .then((data) => {
        expect(data.length).toBe(20);
      })
  })
});
