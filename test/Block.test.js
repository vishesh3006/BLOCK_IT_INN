const B_lockItInn = artifacts.require("B_lockItInn");

require('chai')
    .use(require('chai-as-promised'))
    .should()

contract('B_lockItInn', (accounts) => {
    let block;

    // Before(async() => {
    //     block = await B_lockItInn.deployed()
    // })

    describe('deployment', async() => {
        it('deploys successfully', async() => {
            block = await B_lockItInn.deployed()
            const address = block.address;
            assert.notEqual(address, '');
            assert.notEqual(address, 0x0);
            assert.notEqual(address, undefined);
            assert.notEqual(address, null);
        })
    })

    describe('storage', async() => {
        it('updates the blockHash', async() => {
            block = await B_lockItInn.deployed()
            let title = "hello";
            let _hash = "hfb487fbwhe7f";
            await block._setHash(title, _hash);
            const result = await block._getHash(title);
            assert.equal(result, _hash);
        })
    })
})