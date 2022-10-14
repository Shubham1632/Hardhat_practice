//SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.8;

contract SimpleStoarage {
    //it will be initialised as zero
    uint256 favoriteNumnber;

    struct People {
        uint256 favoriteNumnber;
        string name;
    }

    // people public person = people({favoriteint: 2, name: "Shubham"});

    People[] public people;

    mapping(string => uint256) public m;

    function store(uint256 _favint) public {
        favoriteNumnber = _favint;
    }

    function retrive() public view returns (uint256) {
        return favoriteNumnber;
    }

    function addPerson(string memory _name, uint256 _favint) public {
        people.push(People(_favint, _name));
        m[_name] = _favint;
    }
}
