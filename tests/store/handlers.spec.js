import { location } from 'store/handlers';

const getNewState = (handler, previousState, action) => {
  const handlerAction = handler[action.type];
  if (handlerAction) {
    return handlerAction(previousState, action);
  } else {
    return previousState;
  }
};

describe('handlers', () => {
  // describe('counter', () => {
  //   it('responds to INCREMENT_COUNTER correctly', () => {
  //     expect(getNewState(radios, 1, { type: 'SET_RADIO_VALUE', groupID: 'Apples', value: 'Goldrush' })).to.eq();
  //     expect(getNewState(radios, 2, { type: 'INCREMENT_COUNTER', value: 1 })).to.eq(3);
  //     expect(getNewState(radios, 2, { type: 'INCREMENT_COUNTER', value: 2 })).to.eq(4);
  //   });

  //   it('responds to DECREMENT_COUNTER correctly', () => {
  //     expect(getNewState(radios, 1, { type: 'DECREMENT_COUNTER', value: 1 })).to.eq(0);
  //     expect(getNewState(radios, 2, { type: 'DECREMENT_COUNTER', value: 1 })).to.eq(1);
  //     expect(getNewState(radios, 2, { type: 'DECREMENT_COUNTER', value: 2 })).to.eq(0);
  //   });
  // });

  describe('location', () => {
    it('responds to LOCATION_CHANGE correctly', () => {
      expect(getNewState(location, '/', { type: 'LOCATION_CHANGE', location: '/newPath' })).to.eq('/newPath');
    });
  });
});
