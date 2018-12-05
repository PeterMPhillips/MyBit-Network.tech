"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var BancorGasPriceLimit = exports.BancorGasPriceLimit = 
{
  "contractName": "BancorGasPriceLimit",
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
      "constant": true,
      "inputs": [],
      "name": "gasPrice",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "_gasPrice",
          "type": "uint256"
        }
      ],
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
          "name": "_gasPrice",
          "type": "uint256"
        }
      ],
      "name": "setGasPrice",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_gasPrice",
          "type": "uint256"
        }
      ],
      "name": "validateGasPrice",
      "outputs": [],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x6080604052600060025534801561001557600080fd5b5060405160208061033a833981016040525160008054600160a060020a031916331781558190811161004657600080fd5b506002556102e1806100596000396000f3006080604052600436106100825763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416636b4dff1f811461008757806379ba5097146100a15780638da5cb5b146100b6578063bf1fe420146100e7578063d4ee1d90146100ff578063f2fde38b14610114578063fe173b9714610135575b600080fd5b34801561009357600080fd5b5061009f60043561015c565b005b3480156100ad57600080fd5b5061009f61017d565b3480156100c257600080fd5b506100cb610205565b60408051600160a060020a039092168252519081900360200190f35b3480156100f357600080fd5b5061009f600435610214565b34801561010b57600080fd5b506100cb61023f565b34801561012057600080fd5b5061009f600160a060020a036004351661024e565b34801561014157600080fd5b5061014a6102af565b60408051918252519081900360200190f35b806000811161016a57600080fd5b60025482111561017957600080fd5b5050565b600154600160a060020a0316331461019457600080fd5b60015460008054604051600160a060020a0393841693909116917f343765429aea5a34b3ff6a3785a98a5abb2597aca87bfbb58632c173d585373a91a3600180546000805473ffffffffffffffffffffffffffffffffffffffff19908116600160a060020a03841617909155169055565b600054600160a060020a031681565b600054600160a060020a0316331461022b57600080fd5b806000811161023957600080fd5b50600255565b600154600160a060020a031681565b600054600160a060020a0316331461026557600080fd5b600054600160a060020a038281169116141561028057600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600254815600a165627a7a723058209d9eb8703cc5204780233af833b6361021d90c1a0f0d9c1b28ed760221a459a30029",
  "deployedBytecode": "0x6080604052600436106100825763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416636b4dff1f811461008757806379ba5097146100a15780638da5cb5b146100b6578063bf1fe420146100e7578063d4ee1d90146100ff578063f2fde38b14610114578063fe173b9714610135575b600080fd5b34801561009357600080fd5b5061009f60043561015c565b005b3480156100ad57600080fd5b5061009f61017d565b3480156100c257600080fd5b506100cb610205565b60408051600160a060020a039092168252519081900360200190f35b3480156100f357600080fd5b5061009f600435610214565b34801561010b57600080fd5b506100cb61023f565b34801561012057600080fd5b5061009f600160a060020a036004351661024e565b34801561014157600080fd5b5061014a6102af565b60408051918252519081900360200190f35b806000811161016a57600080fd5b60025482111561017957600080fd5b5050565b600154600160a060020a0316331461019457600080fd5b60015460008054604051600160a060020a0393841693909116917f343765429aea5a34b3ff6a3785a98a5abb2597aca87bfbb58632c173d585373a91a3600180546000805473ffffffffffffffffffffffffffffffffffffffff19908116600160a060020a03841617909155169055565b600054600160a060020a031681565b600054600160a060020a0316331461022b57600080fd5b806000811161023957600080fd5b50600255565b600154600160a060020a031681565b600054600160a060020a0316331461026557600080fd5b600054600160a060020a038281169116141561028057600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600254815600a165627a7a723058209d9eb8703cc5204780233af833b6361021d90c1a0f0d9c1b28ed760221a459a30029",
  "sourceMap": "536:964:14:-;;;635:5;609:31;;784:122;8:9:-1;5:2;;;30:1;27;20:12;5:2;784:122:14;;;;;;;;;;;;;361:5:35;:18;;-1:-1:-1;;;;;;361:18:35;369:10;361:18;;;784:122:14;;267:11:37;;259:20;;;;;;-1:-1:-1;879:8:14;:20;536:964;;;;;;",
  "deployedSourceMap": "536:964:14:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1339:159;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1339:159:14;;;;;;;963:182:35;;8:9:-1;5:2;;;30:1;27;20:12;5:2;963:182:35;;;;155:20;;8:9:-1;5:2;;;30:1;27;20:12;5:2;155:20:35;;;;;;;;-1:-1:-1;;;;;155:20:35;;;;;;;;;;;;;;1035:149:14;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1035:149:14;;;;;181:23:35;;8:9:-1;5:2;;;30:1;27;20:12;5:2;181:23:35;;;;740:137;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;740:137:35;-1:-1:-1;;;;;740:137:35;;;;;609:31:14;;8:9:-1;5:2;;;30:1;27;20:12;5:2;609:31:14;;;;;;;;;;;;;;;;;;;;1339:159;1436:9;277:1:37;267:11;;259:20;;;;;;1482:8:14;;1469:21;;;1461:30;;;;;;1339:159;;:::o;963:182:35:-;1029:8;;-1:-1:-1;;;;;1029:8:35;1015:10;:22;1007:31;;;;;;1072:8;;;1065:5;;1053:28;;-1:-1:-1;;;;;1072:8:35;;;;1065:5;;;;1053:28;;;1099:8;;;;1091:16;;-1:-1:-1;;1091:16:35;;;-1:-1:-1;;;;;1099:8:35;;1091:16;;;;1117:21;;;963:182::o;155:20::-;;;-1:-1:-1;;;;;155:20:35;;:::o;1035:149:14:-;485:5:35;;-1:-1:-1;;;;;485:5:35;471:10;:19;463:28;;;;;;1132:9:14;277:1:37;267:11;;259:20;;;;;;-1:-1:-1;1157:8:14;:20;1035:149::o;181:23:35:-;;;-1:-1:-1;;;;;181:23:35;;:::o;740:137::-;485:5;;-1:-1:-1;;;;;485:5:35;471:10;:19;463:28;;;;;;834:5;;-1:-1:-1;;;;;821:18:35;;;834:5;;821:18;;813:27;;;;;;850:8;:20;;-1:-1:-1;;850:20:35;-1:-1:-1;;;;;850:20:35;;;;;;;;;;740:137::o;609:31:14:-;;;;:::o",
  "source": "pragma solidity ^0.4.24;\nimport './interfaces/IBancorGasPriceLimit.sol';\nimport '../utility/Owned.sol';\nimport '../utility/Utils.sol';\n\n/*\n    The BancorGasPriceLimit contract serves as an extra front-running attack mitigation mechanism.\n    It sets a maximum gas price on all bancor conversions, which prevents users from \"cutting in line\"\n    in order to front-run other transactions.\n    The gas price limit is universal to all converters and it can be updated by the owner to be in line\n    with the network's current gas price.\n*/\ncontract BancorGasPriceLimit is IBancorGasPriceLimit, Owned, Utils {\n    uint256 public gasPrice = 0 wei;    // maximum gas price for bancor transactions\n    \n    /**\n        @dev constructor\n\n        @param _gasPrice    gas price limit\n    */\n    constructor(uint256 _gasPrice)\n        public\n        greaterThanZero(_gasPrice)\n    {\n        gasPrice = _gasPrice;\n    }\n\n    /*\n        @dev allows the owner to update the gas price limit\n\n        @param _gasPrice    new gas price limit\n    */\n    function setGasPrice(uint256 _gasPrice)\n        public\n        ownerOnly\n        greaterThanZero(_gasPrice)\n    {\n        gasPrice = _gasPrice;\n    }\n\n    /*\n        @dev validate that the given gas price is equal to the current network gas price\n\n        @param _gasPrice    tested gas price\n    */\n    function validateGasPrice(uint256 _gasPrice)\n        public\n        view\n        greaterThanZero(_gasPrice)\n    {\n        require(_gasPrice <= gasPrice);\n    }\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/converter/BancorGasPriceLimit.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/converter/BancorGasPriceLimit.sol",
    "exportedSymbols": {
      "BancorGasPriceLimit": [
        7554
      ]
    },
    "id": 7555,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 7498,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:14"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/converter/interfaces/IBancorGasPriceLimit.sol",
        "file": "./interfaces/IBancorGasPriceLimit.sol",
        "id": 7499,
        "nodeType": "ImportDirective",
        "scope": 7555,
        "sourceUnit": 7731,
        "src": "25:47:14",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/Owned.sol",
        "file": "../utility/Owned.sol",
        "id": 7500,
        "nodeType": "ImportDirective",
        "scope": 7555,
        "sourceUnit": 9515,
        "src": "73:30:14",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/Utils.sol",
        "file": "../utility/Utils.sol",
        "id": 7501,
        "nodeType": "ImportDirective",
        "scope": 7555,
        "sourceUnit": 9682,
        "src": "104:30:14",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 7502,
              "name": "IBancorGasPriceLimit",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 7730,
              "src": "568:20:14",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IBancorGasPriceLimit_$7730",
                "typeString": "contract IBancorGasPriceLimit"
              }
            },
            "id": 7503,
            "nodeType": "InheritanceSpecifier",
            "src": "568:20:14"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 7504,
              "name": "Owned",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9514,
              "src": "590:5:14",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Owned_$9514",
                "typeString": "contract Owned"
              }
            },
            "id": 7505,
            "nodeType": "InheritanceSpecifier",
            "src": "590:5:14"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 7506,
              "name": "Utils",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9681,
              "src": "597:5:14",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Utils_$9681",
                "typeString": "contract Utils"
              }
            },
            "id": 7507,
            "nodeType": "InheritanceSpecifier",
            "src": "597:5:14"
          }
        ],
        "contractDependencies": [
          7730,
          9514,
          9681,
          9887
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 7554,
        "linearizedBaseContracts": [
          7554,
          9681,
          9514,
          9887,
          7730
        ],
        "name": "BancorGasPriceLimit",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 7510,
            "name": "gasPrice",
            "nodeType": "VariableDeclaration",
            "scope": 7554,
            "src": "609:31:14",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 7508,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "609:7:14",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "30",
              "id": 7509,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "635:5:14",
              "subdenomination": "wei",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_0_by_1",
                "typeString": "int_const 0"
              },
              "value": "0"
            },
            "visibility": "public"
          },
          {
            "body": {
              "id": 7522,
              "nodeType": "Block",
              "src": "869:37:14",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 7520,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 7518,
                      "name": "gasPrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        7510
                      ],
                      "referencedDeclaration": 7510,
                      "src": "879:8:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 7519,
                      "name": "_gasPrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7512,
                      "src": "890:9:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "879:20:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 7521,
                  "nodeType": "ExpressionStatement",
                  "src": "879:20:14"
                }
              ]
            },
            "documentation": "@dev constructor\n@param _gasPrice    gas price limit",
            "id": 7523,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 7515,
                    "name": "_gasPrice",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 7512,
                    "src": "854:9:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 7516,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 7514,
                  "name": "greaterThanZero",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9578,
                  "src": "838:15:14",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_uint256_$",
                    "typeString": "modifier (uint256)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "838:26:14"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7513,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7512,
                  "name": "_gasPrice",
                  "nodeType": "VariableDeclaration",
                  "scope": 7523,
                  "src": "796:17:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7511,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "796:7:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "795:19:14"
            },
            "payable": false,
            "returnParameters": {
              "id": 7517,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "869:0:14"
            },
            "scope": 7554,
            "src": "784:122:14",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 7537,
              "nodeType": "Block",
              "src": "1147:37:14",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 7535,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 7533,
                      "name": "gasPrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        7510
                      ],
                      "referencedDeclaration": 7510,
                      "src": "1157:8:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 7534,
                      "name": "_gasPrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7525,
                      "src": "1168:9:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1157:20:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 7536,
                  "nodeType": "ExpressionStatement",
                  "src": "1157:20:14"
                }
              ]
            },
            "documentation": null,
            "id": 7538,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 7528,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 7527,
                  "name": "ownerOnly",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9469,
                  "src": "1098:9:14",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1098:9:14"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 7530,
                    "name": "_gasPrice",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 7525,
                    "src": "1132:9:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 7531,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 7529,
                  "name": "greaterThanZero",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9578,
                  "src": "1116:15:14",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_uint256_$",
                    "typeString": "modifier (uint256)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1116:26:14"
              }
            ],
            "name": "setGasPrice",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7526,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7525,
                  "name": "_gasPrice",
                  "nodeType": "VariableDeclaration",
                  "scope": 7538,
                  "src": "1056:17:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7524,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1056:7:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1055:19:14"
            },
            "payable": false,
            "returnParameters": {
              "id": 7532,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1147:0:14"
            },
            "scope": 7554,
            "src": "1035:149:14",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 7552,
              "nodeType": "Block",
              "src": "1451:47:14",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 7549,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 7547,
                          "name": "_gasPrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7540,
                          "src": "1469:9:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 7548,
                          "name": "gasPrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            7510
                          ],
                          "referencedDeclaration": 7510,
                          "src": "1482:8:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1469:21:14",
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
                      "id": 7546,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        27911,
                        27912
                      ],
                      "referencedDeclaration": 27911,
                      "src": "1461:7:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 7550,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1461:30:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 7551,
                  "nodeType": "ExpressionStatement",
                  "src": "1461:30:14"
                }
              ]
            },
            "documentation": null,
            "id": 7553,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 7543,
                    "name": "_gasPrice",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 7540,
                    "src": "1436:9:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 7544,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 7542,
                  "name": "greaterThanZero",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9578,
                  "src": "1420:15:14",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_uint256_$",
                    "typeString": "modifier (uint256)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1420:26:14"
              }
            ],
            "name": "validateGasPrice",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7541,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7540,
                  "name": "_gasPrice",
                  "nodeType": "VariableDeclaration",
                  "scope": 7553,
                  "src": "1365:17:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7539,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1365:7:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1364:19:14"
            },
            "payable": false,
            "returnParameters": {
              "id": 7545,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1451:0:14"
            },
            "scope": 7554,
            "src": "1339:159:14",
            "stateMutability": "view",
            "superFunction": 7729,
            "visibility": "public"
          }
        ],
        "scope": 7555,
        "src": "536:964:14"
      }
    ],
    "src": "0:1501:14"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/converter/BancorGasPriceLimit.sol",
    "exportedSymbols": {
      "BancorGasPriceLimit": [
        7554
      ]
    },
    "id": 7555,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 7498,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:14"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/converter/interfaces/IBancorGasPriceLimit.sol",
        "file": "./interfaces/IBancorGasPriceLimit.sol",
        "id": 7499,
        "nodeType": "ImportDirective",
        "scope": 7555,
        "sourceUnit": 7731,
        "src": "25:47:14",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/Owned.sol",
        "file": "../utility/Owned.sol",
        "id": 7500,
        "nodeType": "ImportDirective",
        "scope": 7555,
        "sourceUnit": 9515,
        "src": "73:30:14",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/Utils.sol",
        "file": "../utility/Utils.sol",
        "id": 7501,
        "nodeType": "ImportDirective",
        "scope": 7555,
        "sourceUnit": 9682,
        "src": "104:30:14",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 7502,
              "name": "IBancorGasPriceLimit",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 7730,
              "src": "568:20:14",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IBancorGasPriceLimit_$7730",
                "typeString": "contract IBancorGasPriceLimit"
              }
            },
            "id": 7503,
            "nodeType": "InheritanceSpecifier",
            "src": "568:20:14"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 7504,
              "name": "Owned",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9514,
              "src": "590:5:14",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Owned_$9514",
                "typeString": "contract Owned"
              }
            },
            "id": 7505,
            "nodeType": "InheritanceSpecifier",
            "src": "590:5:14"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 7506,
              "name": "Utils",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9681,
              "src": "597:5:14",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Utils_$9681",
                "typeString": "contract Utils"
              }
            },
            "id": 7507,
            "nodeType": "InheritanceSpecifier",
            "src": "597:5:14"
          }
        ],
        "contractDependencies": [
          7730,
          9514,
          9681,
          9887
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 7554,
        "linearizedBaseContracts": [
          7554,
          9681,
          9514,
          9887,
          7730
        ],
        "name": "BancorGasPriceLimit",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 7510,
            "name": "gasPrice",
            "nodeType": "VariableDeclaration",
            "scope": 7554,
            "src": "609:31:14",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 7508,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "609:7:14",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "30",
              "id": 7509,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "635:5:14",
              "subdenomination": "wei",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_0_by_1",
                "typeString": "int_const 0"
              },
              "value": "0"
            },
            "visibility": "public"
          },
          {
            "body": {
              "id": 7522,
              "nodeType": "Block",
              "src": "869:37:14",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 7520,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 7518,
                      "name": "gasPrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        7510
                      ],
                      "referencedDeclaration": 7510,
                      "src": "879:8:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 7519,
                      "name": "_gasPrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7512,
                      "src": "890:9:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "879:20:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 7521,
                  "nodeType": "ExpressionStatement",
                  "src": "879:20:14"
                }
              ]
            },
            "documentation": "@dev constructor\n@param _gasPrice    gas price limit",
            "id": 7523,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 7515,
                    "name": "_gasPrice",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 7512,
                    "src": "854:9:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 7516,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 7514,
                  "name": "greaterThanZero",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9578,
                  "src": "838:15:14",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_uint256_$",
                    "typeString": "modifier (uint256)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "838:26:14"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7513,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7512,
                  "name": "_gasPrice",
                  "nodeType": "VariableDeclaration",
                  "scope": 7523,
                  "src": "796:17:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7511,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "796:7:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "795:19:14"
            },
            "payable": false,
            "returnParameters": {
              "id": 7517,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "869:0:14"
            },
            "scope": 7554,
            "src": "784:122:14",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 7537,
              "nodeType": "Block",
              "src": "1147:37:14",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 7535,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 7533,
                      "name": "gasPrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        7510
                      ],
                      "referencedDeclaration": 7510,
                      "src": "1157:8:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 7534,
                      "name": "_gasPrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7525,
                      "src": "1168:9:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1157:20:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 7536,
                  "nodeType": "ExpressionStatement",
                  "src": "1157:20:14"
                }
              ]
            },
            "documentation": null,
            "id": 7538,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 7528,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 7527,
                  "name": "ownerOnly",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9469,
                  "src": "1098:9:14",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1098:9:14"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 7530,
                    "name": "_gasPrice",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 7525,
                    "src": "1132:9:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 7531,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 7529,
                  "name": "greaterThanZero",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9578,
                  "src": "1116:15:14",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_uint256_$",
                    "typeString": "modifier (uint256)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1116:26:14"
              }
            ],
            "name": "setGasPrice",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7526,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7525,
                  "name": "_gasPrice",
                  "nodeType": "VariableDeclaration",
                  "scope": 7538,
                  "src": "1056:17:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7524,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1056:7:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1055:19:14"
            },
            "payable": false,
            "returnParameters": {
              "id": 7532,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1147:0:14"
            },
            "scope": 7554,
            "src": "1035:149:14",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 7552,
              "nodeType": "Block",
              "src": "1451:47:14",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 7549,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 7547,
                          "name": "_gasPrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7540,
                          "src": "1469:9:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 7548,
                          "name": "gasPrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            7510
                          ],
                          "referencedDeclaration": 7510,
                          "src": "1482:8:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1469:21:14",
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
                      "id": 7546,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        27911,
                        27912
                      ],
                      "referencedDeclaration": 27911,
                      "src": "1461:7:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 7550,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1461:30:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 7551,
                  "nodeType": "ExpressionStatement",
                  "src": "1461:30:14"
                }
              ]
            },
            "documentation": null,
            "id": 7553,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 7543,
                    "name": "_gasPrice",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 7540,
                    "src": "1436:9:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 7544,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 7542,
                  "name": "greaterThanZero",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9578,
                  "src": "1420:15:14",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_uint256_$",
                    "typeString": "modifier (uint256)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1420:26:14"
              }
            ],
            "name": "validateGasPrice",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7541,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7540,
                  "name": "_gasPrice",
                  "nodeType": "VariableDeclaration",
                  "scope": 7553,
                  "src": "1365:17:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7539,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1365:7:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1364:19:14"
            },
            "payable": false,
            "returnParameters": {
              "id": 7545,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1451:0:14"
            },
            "scope": 7554,
            "src": "1339:159:14",
            "stateMutability": "view",
            "superFunction": 7729,
            "visibility": "public"
          }
        ],
        "scope": 7555,
        "src": "536:964:14"
      }
    ],
    "src": "0:1501:14"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-12-03T18:35:11.902Z"
}