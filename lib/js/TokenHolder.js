"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var TokenHolder = exports.TokenHolder = 
{
  "contractName": "TokenHolder",
  "abi": [
    {
      "constant": false,
      "inputs": [],
      "name": "acceptOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "newOwner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_prevOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_newOwner",
          "type": "address"
        }
      ],
      "name": "OwnerUpdate",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_token",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "withdrawTokens",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b5060008054600160a060020a0319163317905561035e806100326000396000f30060806040526004361061006c5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416635e35359e811461007157806379ba50971461009d5780638da5cb5b146100b2578063d4ee1d90146100e3578063f2fde38b146100f8575b600080fd5b34801561007d57600080fd5b5061009b600160a060020a0360043581169060243516604435610119565b005b3480156100a957600080fd5b5061009b61022b565b3480156100be57600080fd5b506100c76102b3565b60408051600160a060020a039092168252519081900360200190f35b3480156100ef57600080fd5b506100c76102c2565b34801561010457600080fd5b5061009b600160a060020a03600435166102d1565b600054600160a060020a0316331461013057600080fd5b82600160a060020a038116151561014657600080fd5b82600160a060020a038116151561015c57600080fd5b83600160a060020a03811630141561017357600080fd5b85600160a060020a031663a9059cbb86866040518363ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018083600160a060020a0316600160a060020a0316815260200182815260200192505050602060405180830381600087803b1580156101ef57600080fd5b505af1158015610203573d6000803e3d6000fd5b505050506040513d602081101561021957600080fd5b5051151561022357fe5b505050505050565b600154600160a060020a0316331461024257600080fd5b60015460008054604051600160a060020a0393841693909116917f343765429aea5a34b3ff6a3785a98a5abb2597aca87bfbb58632c173d585373a91a3600180546000805473ffffffffffffffffffffffffffffffffffffffff19908116600160a060020a03841617909155169055565b600054600160a060020a031681565b600154600160a060020a031681565b600054600160a060020a031633146102e857600080fd5b600054600160a060020a038281169116141561030357600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790555600a165627a7a7230582034a234b98909a02b1dcfffd7e27c9204412fd83595a704f322f75d0d38fd14260029",
  "deployedBytecode": "0x60806040526004361061006c5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416635e35359e811461007157806379ba50971461009d5780638da5cb5b146100b2578063d4ee1d90146100e3578063f2fde38b146100f8575b600080fd5b34801561007d57600080fd5b5061009b600160a060020a0360043581169060243516604435610119565b005b3480156100a957600080fd5b5061009b61022b565b3480156100be57600080fd5b506100c76102b3565b60408051600160a060020a039092168252519081900360200190f35b3480156100ef57600080fd5b506100c76102c2565b34801561010457600080fd5b5061009b600160a060020a03600435166102d1565b600054600160a060020a0316331461013057600080fd5b82600160a060020a038116151561014657600080fd5b82600160a060020a038116151561015c57600080fd5b83600160a060020a03811630141561017357600080fd5b85600160a060020a031663a9059cbb86866040518363ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018083600160a060020a0316600160a060020a0316815260200182815260200192505050602060405180830381600087803b1580156101ef57600080fd5b505af1158015610203573d6000803e3d6000fd5b505050506040513d602081101561021957600080fd5b5051151561022357fe5b505050505050565b600154600160a060020a0316331461024257600080fd5b60015460008054604051600160a060020a0393841693909116917f343765429aea5a34b3ff6a3785a98a5abb2597aca87bfbb58632c173d585373a91a3600180546000805473ffffffffffffffffffffffffffffffffffffffff19908116600160a060020a03841617909155169055565b600054600160a060020a031681565b600154600160a060020a031681565b600054600160a060020a031633146102e857600080fd5b600054600160a060020a038281169116141561030357600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790555600a165627a7a7230582034a234b98909a02b1dcfffd7e27c9204412fd83595a704f322f75d0d38fd14260029",
  "sourceMap": "478:664:36:-;;;575:28;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;361:5:35;:18;;-1:-1:-1;;;;;;361:18:35;369:10;361:18;;;478:664:36;;;;;;",
  "deployedSourceMap": "478:664:36:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;899:241;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;899:241:36;-1:-1:-1;;;;;899:241:36;;;;;;;;;;;;;;963:182:35;;8:9:-1;5:2;;;30:1;27;20:12;5:2;963:182:35;;;;155:20;;8:9:-1;5:2;;;30:1;27;20:12;5:2;155:20:35;;;;;;;;-1:-1:-1;;;;;155:20:35;;;;;;;;;;;;;;181:23;;8:9:-1;5:2;;;30:1;27;20:12;5:2;181:23:35;;;;740:137;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;740:137:35;-1:-1:-1;;;;;740:137:35;;;;;899:241:36;485:5:35;;-1:-1:-1;;;;;485:5:35;471:10;:19;463:28;;;;;;1027:6:36;-1:-1:-1;;;;;432:22:37;;;;424:31;;;;;;1056:3:36;-1:-1:-1;;;;;432:22:37;;;;424:31;;;;;;1077:3:36;-1:-1:-1;;;;;605:25:37;;625:4;605:25;;597:34;;;;;;1103:6:36;-1:-1:-1;;;;;1103:15:36;;1119:3;1124:7;1103:29;;;;;;;;;;;;;-1:-1:-1;;;;;1103:29:36;-1:-1:-1;;;;;1103:29:36;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1103:29:36;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1103:29:36;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1103:29:36;1096:37;;;;;;465:1:37;;501::35;899:241:36;;;:::o;963:182:35:-;1029:8;;-1:-1:-1;;;;;1029:8:35;1015:10;:22;1007:31;;;;;;1072:8;;;1065:5;;1053:28;;-1:-1:-1;;;;;1072:8:35;;;;1065:5;;;;1053:28;;;1099:8;;;;1091:16;;-1:-1:-1;;1091:16:35;;;-1:-1:-1;;;;;1099:8:35;;1091:16;;;;1117:21;;;963:182::o;155:20::-;;;-1:-1:-1;;;;;155:20:35;;:::o;181:23::-;;;-1:-1:-1;;;;;181:23:35;;:::o;740:137::-;485:5;;-1:-1:-1;;;;;485:5:35;471:10;:19;463:28;;;;;;834:5;;-1:-1:-1;;;;;821:18:35;;;834:5;;821:18;;813:27;;;;;;850:8;:20;;-1:-1:-1;;850:20:35;-1:-1:-1;;;;;850:20:35;;;;;;;;;;740:137::o",
  "source": "pragma solidity ^0.4.24;\nimport './Owned.sol';\nimport './Utils.sol';\nimport './interfaces/ITokenHolder.sol';\nimport '../token/interfaces/IERC20Token.sol';\n\n/*\n    We consider every contract to be a 'token holder' since it's currently not possible\n    for a contract to deny receiving tokens.\n\n    The TokenHolder's contract sole purpose is to provide a safety mechanism that allows\n    the owner to send tokens that were sent to the contract by mistake back to their sender.\n*/\ncontract TokenHolder is ITokenHolder, Owned, Utils {\n    /**\n        @dev constructor\n    */\n    constructor() public {\n    }\n\n    /**\n        @dev withdraws tokens held by the contract and sends them to an account\n        can only be called by the owner\n\n        @param _token   ERC20 token contract address\n        @param _to      account to receive the new amount\n        @param _amount  amount to withdraw\n    */\n    function withdrawTokens(IERC20Token _token, address _to, uint256 _amount)\n        public\n        ownerOnly\n        validAddress(_token)\n        validAddress(_to)\n        notThis(_to)\n    {\n        assert(_token.transfer(_to, _amount));\n    }\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/TokenHolder.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/TokenHolder.sol",
    "exportedSymbols": {
      "TokenHolder": [
        9560
      ]
    },
    "id": 9561,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 9516,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:36"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/Owned.sol",
        "file": "./Owned.sol",
        "id": 9517,
        "nodeType": "ImportDirective",
        "scope": 9561,
        "sourceUnit": 9515,
        "src": "25:21:36",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/Utils.sol",
        "file": "./Utils.sol",
        "id": 9518,
        "nodeType": "ImportDirective",
        "scope": 9561,
        "sourceUnit": 9682,
        "src": "47:21:36",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/interfaces/ITokenHolder.sol",
        "file": "./interfaces/ITokenHolder.sol",
        "id": 9519,
        "nodeType": "ImportDirective",
        "scope": 9561,
        "sourceUnit": 9904,
        "src": "69:39:36",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/interfaces/IERC20Token.sol",
        "file": "../token/interfaces/IERC20Token.sol",
        "id": 9520,
        "nodeType": "ImportDirective",
        "scope": 9561,
        "sourceUnit": 8902,
        "src": "109:45:36",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 9521,
              "name": "ITokenHolder",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9903,
              "src": "502:12:36",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ITokenHolder_$9903",
                "typeString": "contract ITokenHolder"
              }
            },
            "id": 9522,
            "nodeType": "InheritanceSpecifier",
            "src": "502:12:36"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 9523,
              "name": "Owned",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9514,
              "src": "516:5:36",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Owned_$9514",
                "typeString": "contract Owned"
              }
            },
            "id": 9524,
            "nodeType": "InheritanceSpecifier",
            "src": "516:5:36"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 9525,
              "name": "Utils",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9681,
              "src": "523:5:36",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Utils_$9681",
                "typeString": "contract Utils"
              }
            },
            "id": 9526,
            "nodeType": "InheritanceSpecifier",
            "src": "523:5:36"
          }
        ],
        "contractDependencies": [
          9514,
          9681,
          9887,
          9903
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 9560,
        "linearizedBaseContracts": [
          9560,
          9681,
          9514,
          9903,
          9887
        ],
        "name": "TokenHolder",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 9529,
              "nodeType": "Block",
              "src": "596:7:36",
              "statements": []
            },
            "documentation": "@dev constructor",
            "id": 9530,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9527,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "586:2:36"
            },
            "payable": false,
            "returnParameters": {
              "id": 9528,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "596:0:36"
            },
            "scope": 9560,
            "src": "575:28:36",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9558,
              "nodeType": "Block",
              "src": "1086:54:36",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 9553,
                            "name": "_to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9534,
                            "src": "1119:3:36",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 9554,
                            "name": "_amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9536,
                            "src": "1124:7:36",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 9551,
                            "name": "_token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9532,
                            "src": "1103:6:36",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20Token_$8901",
                              "typeString": "contract IERC20Token"
                            }
                          },
                          "id": 9552,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "transfer",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 8880,
                          "src": "1103:15:36",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,uint256) external returns (bool)"
                          }
                        },
                        "id": 9555,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1103:29:36",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 9550,
                      "name": "assert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27897,
                      "src": "1096:6:36",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_assert_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 9556,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1096:37:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9557,
                  "nodeType": "ExpressionStatement",
                  "src": "1096:37:36"
                }
              ]
            },
            "documentation": "@dev withdraws tokens held by the contract and sends them to an account\ncan only be called by the owner\n@param _token   ERC20 token contract address\n@param _to      account to receive the new amount\n@param _amount  amount to withdraw",
            "id": 9559,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 9539,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 9538,
                  "name": "ownerOnly",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9469,
                  "src": "996:9:36",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "996:9:36"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 9541,
                    "name": "_token",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 9532,
                    "src": "1027:6:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20Token_$8901",
                      "typeString": "contract IERC20Token"
                    }
                  }
                ],
                "id": 9542,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 9540,
                  "name": "validAddress",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9592,
                  "src": "1014:12:36",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1014:20:36"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 9544,
                    "name": "_to",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 9534,
                    "src": "1056:3:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 9545,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 9543,
                  "name": "validAddress",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9592,
                  "src": "1043:12:36",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1043:17:36"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 9547,
                    "name": "_to",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 9534,
                    "src": "1077:3:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 9548,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 9546,
                  "name": "notThis",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9606,
                  "src": "1069:7:36",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1069:12:36"
              }
            ],
            "name": "withdrawTokens",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9537,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9532,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 9559,
                  "src": "923:18:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20Token_$8901",
                    "typeString": "contract IERC20Token"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 9531,
                    "name": "IERC20Token",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 8901,
                    "src": "923:11:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20Token_$8901",
                      "typeString": "contract IERC20Token"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9534,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 9559,
                  "src": "943:11:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9533,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "943:7:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9536,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 9559,
                  "src": "956:15:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9535,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "956:7:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "922:50:36"
            },
            "payable": false,
            "returnParameters": {
              "id": 9549,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1086:0:36"
            },
            "scope": 9560,
            "src": "899:241:36",
            "stateMutability": "nonpayable",
            "superFunction": 9902,
            "visibility": "public"
          }
        ],
        "scope": 9561,
        "src": "478:664:36"
      }
    ],
    "src": "0:1143:36"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/TokenHolder.sol",
    "exportedSymbols": {
      "TokenHolder": [
        9560
      ]
    },
    "id": 9561,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 9516,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:36"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/Owned.sol",
        "file": "./Owned.sol",
        "id": 9517,
        "nodeType": "ImportDirective",
        "scope": 9561,
        "sourceUnit": 9515,
        "src": "25:21:36",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/Utils.sol",
        "file": "./Utils.sol",
        "id": 9518,
        "nodeType": "ImportDirective",
        "scope": 9561,
        "sourceUnit": 9682,
        "src": "47:21:36",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/interfaces/ITokenHolder.sol",
        "file": "./interfaces/ITokenHolder.sol",
        "id": 9519,
        "nodeType": "ImportDirective",
        "scope": 9561,
        "sourceUnit": 9904,
        "src": "69:39:36",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/interfaces/IERC20Token.sol",
        "file": "../token/interfaces/IERC20Token.sol",
        "id": 9520,
        "nodeType": "ImportDirective",
        "scope": 9561,
        "sourceUnit": 8902,
        "src": "109:45:36",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 9521,
              "name": "ITokenHolder",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9903,
              "src": "502:12:36",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ITokenHolder_$9903",
                "typeString": "contract ITokenHolder"
              }
            },
            "id": 9522,
            "nodeType": "InheritanceSpecifier",
            "src": "502:12:36"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 9523,
              "name": "Owned",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9514,
              "src": "516:5:36",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Owned_$9514",
                "typeString": "contract Owned"
              }
            },
            "id": 9524,
            "nodeType": "InheritanceSpecifier",
            "src": "516:5:36"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 9525,
              "name": "Utils",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9681,
              "src": "523:5:36",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Utils_$9681",
                "typeString": "contract Utils"
              }
            },
            "id": 9526,
            "nodeType": "InheritanceSpecifier",
            "src": "523:5:36"
          }
        ],
        "contractDependencies": [
          9514,
          9681,
          9887,
          9903
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 9560,
        "linearizedBaseContracts": [
          9560,
          9681,
          9514,
          9903,
          9887
        ],
        "name": "TokenHolder",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 9529,
              "nodeType": "Block",
              "src": "596:7:36",
              "statements": []
            },
            "documentation": "@dev constructor",
            "id": 9530,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9527,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "586:2:36"
            },
            "payable": false,
            "returnParameters": {
              "id": 9528,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "596:0:36"
            },
            "scope": 9560,
            "src": "575:28:36",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9558,
              "nodeType": "Block",
              "src": "1086:54:36",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 9553,
                            "name": "_to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9534,
                            "src": "1119:3:36",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 9554,
                            "name": "_amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9536,
                            "src": "1124:7:36",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 9551,
                            "name": "_token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9532,
                            "src": "1103:6:36",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20Token_$8901",
                              "typeString": "contract IERC20Token"
                            }
                          },
                          "id": 9552,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "transfer",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 8880,
                          "src": "1103:15:36",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,uint256) external returns (bool)"
                          }
                        },
                        "id": 9555,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1103:29:36",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 9550,
                      "name": "assert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27897,
                      "src": "1096:6:36",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_assert_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 9556,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1096:37:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9557,
                  "nodeType": "ExpressionStatement",
                  "src": "1096:37:36"
                }
              ]
            },
            "documentation": "@dev withdraws tokens held by the contract and sends them to an account\ncan only be called by the owner\n@param _token   ERC20 token contract address\n@param _to      account to receive the new amount\n@param _amount  amount to withdraw",
            "id": 9559,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 9539,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 9538,
                  "name": "ownerOnly",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9469,
                  "src": "996:9:36",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "996:9:36"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 9541,
                    "name": "_token",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 9532,
                    "src": "1027:6:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20Token_$8901",
                      "typeString": "contract IERC20Token"
                    }
                  }
                ],
                "id": 9542,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 9540,
                  "name": "validAddress",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9592,
                  "src": "1014:12:36",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1014:20:36"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 9544,
                    "name": "_to",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 9534,
                    "src": "1056:3:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 9545,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 9543,
                  "name": "validAddress",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9592,
                  "src": "1043:12:36",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1043:17:36"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 9547,
                    "name": "_to",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 9534,
                    "src": "1077:3:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 9548,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 9546,
                  "name": "notThis",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9606,
                  "src": "1069:7:36",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1069:12:36"
              }
            ],
            "name": "withdrawTokens",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9537,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9532,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 9559,
                  "src": "923:18:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20Token_$8901",
                    "typeString": "contract IERC20Token"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 9531,
                    "name": "IERC20Token",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 8901,
                    "src": "923:11:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20Token_$8901",
                      "typeString": "contract IERC20Token"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9534,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 9559,
                  "src": "943:11:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9533,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "943:7:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9536,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 9559,
                  "src": "956:15:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9535,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "956:7:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "922:50:36"
            },
            "payable": false,
            "returnParameters": {
              "id": 9549,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1086:0:36"
            },
            "scope": 9560,
            "src": "899:241:36",
            "stateMutability": "nonpayable",
            "superFunction": 9902,
            "visibility": "public"
          }
        ],
        "scope": 9561,
        "src": "478:664:36"
      }
    ],
    "src": "0:1143:36"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-12-03T18:35:11.975Z"
}