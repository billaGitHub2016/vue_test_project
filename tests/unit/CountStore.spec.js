import sinon from 'sinon';
import count from '@/store/modules/count.js';
import getters from '@/store/getters.js';

describe('count actions 测试', () => {
  it('addNumAsync 测试', () => {
    const commit = sinon.spy();
    const state = {};

    count.actions.addNumAsync({ commit, state }, 1)
      .then((data) => {
        expect(commit.args).toBe([
          ['ADD_NUM', 1],
        ]);
      });
  });

  it('getCountNum 测试', () => {
    const state = {
      Count: {
        countNum: 999,
      },
    };
    const countNum = getters.countNum(state);
    expect(countNum).toBe(state.Count.countNum);
  });
});
