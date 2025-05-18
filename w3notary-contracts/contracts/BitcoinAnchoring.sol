Here's a simple example of how that contract might look like in Solidity:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract BitcoinAnchoring {

    // Struct to store the information of notarized transaction
    struct NotarizedTransaction {
        bytes32 notarizedHash;
        string opReturnTxid;
    }

    // Mapping from ID to NotarizedTransaction
    mapping(uint => NotarizedTransaction) public transactions;

    // Counter to keep track of number of transactions
    uint public transactionsCount;

    // Event indicating the notarized transaction
    event Notarized(uint id, bytes32 notarizedHash, string opReturnTxid);

    // Function to create notarized transaction
    function createNotarizedTransaction(bytes32 _notarizedHash, string memory _opReturnTxid) public {
        transactionsCount ++;
        transactions[transactionsCount] = NotarizedTransaction(_notarizedHash, _opReturnTxid);
        emit Notarized(transactionsCount, _notarizedHash, _opReturnTxid);
    }

    // Function to get notarized transaction by Id
    function getNotarizedTransaction(uint _id) public view returns (bytes32, string memory) {
        NotarizedTransaction memory trans = transactions[_id];
        return (trans.notarizedHash, trans.opReturnTxid);
    }

}
```

The above code creates a Solidity contract named `BitcoinAnchoring`. This contract maintains a mapping (`transactions`) of `NotarizedTransaction` structs, which represent individual transactions consisting of a notarized hash and a corresponding Bitcoin OP_RETURN transaction id (`opReturnTxid`).

It provides two methods, one to create a new notarized transaction (`createNotarizedTransaction(bytes32, string)`) and one to retrieve an existing transaction given its id (`getNotarizedTransaction(uint)`).

Finally, it emits a `Notarized` event anytime a new transaction is added to the `transactions` mapping.