pragma solidity 0.5.0;

contract B_lockItInn{

    //contract
    //string[] public title;
    mapping(string => address) Owner;
    mapping(string => string) Hashes;

    function toString(address x) private pure returns (string memory) {
        bytes memory b = new bytes(20);
        for (uint i = 0; i < 20; i++)
            b[i] = byte(uint8(uint(x) / (2**(8*(19 - i)))));
        return string(b);
    }

    function append(string memory a, string memory b) private pure returns (string memory) {

        return string(abi.encodePacked(a, b));

    }

    function _setHash(string memory _title, string memory _hash) public{
        string memory add = toString(msg.sender);
        string memory hash_title = append(_title, add);
        Hashes[hash_title] = _hash;
    }

    function _getHash(string memory _title) public view returns(string memory){
        string memory add = toString(msg.sender);
        string memory hash_title = append(_title, add);
        return Hashes[hash_title];
    }
}