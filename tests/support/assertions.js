import _ from 'lodash';

export const assertPass = (message) => {
  if (message) {
    it(message, () => { assert.isOk(true); });
  } else {
    assert.isOk(true);
  }
};

export const assertFail = (message, provideItBlock = false) => {
  if (provideItBlock) {
    it(message, () => { assert.fail(0, 1); });
  } else {
    assert.fail(0, 1, message);
  }
};

export const assertObjectEquality = (obj1, obj2) => {
  if (_.isEqual(obj1, obj2)) {
    assertPass();
  } else {
    const print = obj => JSON.stringify(obj, null, 2);
    assertFail(`\nExpected object equality:\n${print(obj1)}\n\n${print(obj2)}\n`);
  }
};
