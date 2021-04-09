import { SortPipe } from './sort.pipe';

fdescribe('SortPipe', () => {
  it('create an instance', () => {
    const pipe = new SortPipe();
    expect(pipe).toBeTruthy();

    const items = [ {name:'p1', price:10000}, 
                    {name: 'p20',price:3000},
                    {name: 'p3',price:2000},
                  ]

    // check default sorting should be asc
    expect(pipe.transform(items, 'price'))
                    .toEqual([
                      {name: 'p3',price:2000},
                      {name: 'p20',price:3000},
                      {name:'p1', price:10000},
                    ])

      // check default sorting should be asc
    expect(pipe.transform(items, 'price', 'desc'))
      .toEqual([
        {name:'p1', price:10000},
        {name: 'p20',price:3000},
        {name: 'p3',price:2000}
      ])

  });
});
