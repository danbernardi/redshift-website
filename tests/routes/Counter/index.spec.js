import ConnectedCounter, { Counter } from 'routes/Counter';
import testComponent from 'support/testComponent';

testComponent({
  connected: ConnectedCounter,
  unconnected: Counter,
  props: {
    counter: 1,
    dispatch: () => {}
  }
});
