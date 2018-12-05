"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var IBancorNetwork = exports.IBancorNetwork = 
{
  "contractName": "IBancorNetwork",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "_path",
          "type": "address[]"
        },
        {
          "name": "_amount",
          "type": "uint256"
        },
        {
          "name": "_minReturn",
          "type": "uint256"
        }
      ],
      "name": "convert",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_path",
          "type": "address[]"
        },
        {
          "name": "_amount",
          "type": "uint256"
        },
        {
          "name": "_minReturn",
          "type": "uint256"
        },
        {
          "name": "_for",
          "type": "address"
        }
      ],
      "name": "convertFor",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_path",
          "type": "address[]"
        },
        {
          "name": "_amount",
          "type": "uint256"
        },
        {
          "name": "_minReturn",
          "type": "uint256"
        },
        {
          "name": "_for",
          "type": "address"
        },
        {
          "name": "_block",
          "type": "uint256"
        },
        {
          "name": "_v",
          "type": "uint8"
        },
        {
          "name": "_r",
          "type": "bytes32"
        },
        {
          "name": "_s",
          "type": "bytes32"
        }
      ],
      "name": "convertForPrioritized2",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_path",
          "type": "address[]"
        },
        {
          "name": "_amount",
          "type": "uint256"
        },
        {
          "name": "_minReturn",
          "type": "uint256"
        },
        {
          "name": "_for",
          "type": "address"
        },
        {
          "name": "_block",
          "type": "uint256"
        },
        {
          "name": "_nonce",
          "type": "uint256"
        },
        {
          "name": "_v",
          "type": "uint8"
        },
        {
          "name": "_r",
          "type": "bytes32"
        },
        {
          "name": "_s",
          "type": "bytes32"
        }
      ],
      "name": "convertForPrioritized",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.24;\nimport './token/interfaces/IERC20Token.sol';\n\n/*\n    Bancor Network interface\n*/\ncontract IBancorNetwork {\n    function convert(IERC20Token[] _path, uint256 _amount, uint256 _minReturn) public payable returns (uint256);\n    function convertFor(IERC20Token[] _path, uint256 _amount, uint256 _minReturn, address _for) public payable returns (uint256);\n    function convertForPrioritized2(\n        IERC20Token[] _path,\n        uint256 _amount,\n        uint256 _minReturn,\n        address _for,\n        uint256 _block,\n        uint8 _v,\n        bytes32 _r,\n        bytes32 _s)\n        public payable returns (uint256);\n\n    // deprecated, backward compatibility\n    function convertForPrioritized(\n        IERC20Token[] _path,\n        uint256 _amount,\n        uint256 _minReturn,\n        address _for,\n        uint256 _block,\n        uint256 _nonce,\n        uint8 _v,\n        bytes32 _r,\n        bytes32 _s)\n        public payable returns (uint256);\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/IBancorNetwork.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/IBancorNetwork.sol",
    "exportedSymbols": {
      "IBancorNetwork": [
        2350
      ]
    },
    "id": 2351,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2276,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:9"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/interfaces/IERC20Token.sol",
        "file": "./token/interfaces/IERC20Token.sol",
        "id": 2277,
        "nodeType": "ImportDirective",
        "scope": 2351,
        "sourceUnit": 8902,
        "src": "25:44:9",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 2350,
        "linearizedBaseContracts": [
          2350
        ],
        "name": "IBancorNetwork",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 2289,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "convert",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2285,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2280,
                  "name": "_path",
                  "nodeType": "VariableDeclaration",
                  "scope": 2289,
                  "src": "153:19:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_contract$_IERC20Token_$8901_$dyn_memory_ptr",
                    "typeString": "contract IERC20Token[]"
                  },
                  "typeName": {
                    "baseType": {
                      "contractScope": null,
                      "id": 2278,
                      "name": "IERC20Token",
                      "nodeType": "UserDefinedTypeName",
                      "referencedDeclaration": 8901,
                      "src": "153:11:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20Token_$8901",
                        "typeString": "contract IERC20Token"
                      }
                    },
                    "id": 2279,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "153:13:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_contract$_IERC20Token_$8901_$dyn_storage_ptr",
                      "typeString": "contract IERC20Token[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2282,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 2289,
                  "src": "174:15:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2281,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "174:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2284,
                  "name": "_minReturn",
                  "nodeType": "VariableDeclaration",
                  "scope": 2289,
                  "src": "191:18:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2283,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "191:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "152:58:9"
            },
            "payable": true,
            "returnParameters": {
              "id": 2288,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2287,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2289,
                  "src": "235:7:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2286,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "235:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "234:9:9"
            },
            "scope": 2350,
            "src": "136:108:9",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 2303,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "convertFor",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2299,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2292,
                  "name": "_path",
                  "nodeType": "VariableDeclaration",
                  "scope": 2303,
                  "src": "269:19:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_contract$_IERC20Token_$8901_$dyn_memory_ptr",
                    "typeString": "contract IERC20Token[]"
                  },
                  "typeName": {
                    "baseType": {
                      "contractScope": null,
                      "id": 2290,
                      "name": "IERC20Token",
                      "nodeType": "UserDefinedTypeName",
                      "referencedDeclaration": 8901,
                      "src": "269:11:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20Token_$8901",
                        "typeString": "contract IERC20Token"
                      }
                    },
                    "id": 2291,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "269:13:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_contract$_IERC20Token_$8901_$dyn_storage_ptr",
                      "typeString": "contract IERC20Token[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2294,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 2303,
                  "src": "290:15:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2293,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "290:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2296,
                  "name": "_minReturn",
                  "nodeType": "VariableDeclaration",
                  "scope": 2303,
                  "src": "307:18:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2295,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "307:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2298,
                  "name": "_for",
                  "nodeType": "VariableDeclaration",
                  "scope": 2303,
                  "src": "327:12:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2297,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "327:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "268:72:9"
            },
            "payable": true,
            "returnParameters": {
              "id": 2302,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2301,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2303,
                  "src": "365:7:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2300,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "365:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "364:9:9"
            },
            "scope": 2350,
            "src": "249:125:9",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 2325,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "convertForPrioritized2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2321,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2306,
                  "name": "_path",
                  "nodeType": "VariableDeclaration",
                  "scope": 2325,
                  "src": "420:19:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_contract$_IERC20Token_$8901_$dyn_memory_ptr",
                    "typeString": "contract IERC20Token[]"
                  },
                  "typeName": {
                    "baseType": {
                      "contractScope": null,
                      "id": 2304,
                      "name": "IERC20Token",
                      "nodeType": "UserDefinedTypeName",
                      "referencedDeclaration": 8901,
                      "src": "420:11:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20Token_$8901",
                        "typeString": "contract IERC20Token"
                      }
                    },
                    "id": 2305,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "420:13:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_contract$_IERC20Token_$8901_$dyn_storage_ptr",
                      "typeString": "contract IERC20Token[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2308,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 2325,
                  "src": "449:15:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2307,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "449:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2310,
                  "name": "_minReturn",
                  "nodeType": "VariableDeclaration",
                  "scope": 2325,
                  "src": "474:18:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2309,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "474:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2312,
                  "name": "_for",
                  "nodeType": "VariableDeclaration",
                  "scope": 2325,
                  "src": "502:12:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2311,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "502:7:9",
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
                  "id": 2314,
                  "name": "_block",
                  "nodeType": "VariableDeclaration",
                  "scope": 2325,
                  "src": "524:14:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2313,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "524:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2316,
                  "name": "_v",
                  "nodeType": "VariableDeclaration",
                  "scope": 2325,
                  "src": "548:8:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 2315,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "548:5:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2318,
                  "name": "_r",
                  "nodeType": "VariableDeclaration",
                  "scope": 2325,
                  "src": "566:10:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 2317,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "566:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2320,
                  "name": "_s",
                  "nodeType": "VariableDeclaration",
                  "scope": 2325,
                  "src": "586:10:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 2319,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "586:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "410:187:9"
            },
            "payable": true,
            "returnParameters": {
              "id": 2324,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2323,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2325,
                  "src": "630:7:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2322,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "630:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "629:9:9"
            },
            "scope": 2350,
            "src": "379:260:9",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 2349,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "convertForPrioritized",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2345,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2328,
                  "name": "_path",
                  "nodeType": "VariableDeclaration",
                  "scope": 2349,
                  "src": "727:19:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_contract$_IERC20Token_$8901_$dyn_memory_ptr",
                    "typeString": "contract IERC20Token[]"
                  },
                  "typeName": {
                    "baseType": {
                      "contractScope": null,
                      "id": 2326,
                      "name": "IERC20Token",
                      "nodeType": "UserDefinedTypeName",
                      "referencedDeclaration": 8901,
                      "src": "727:11:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20Token_$8901",
                        "typeString": "contract IERC20Token"
                      }
                    },
                    "id": 2327,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "727:13:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_contract$_IERC20Token_$8901_$dyn_storage_ptr",
                      "typeString": "contract IERC20Token[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2330,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 2349,
                  "src": "756:15:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2329,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "756:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2332,
                  "name": "_minReturn",
                  "nodeType": "VariableDeclaration",
                  "scope": 2349,
                  "src": "781:18:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2331,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "781:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2334,
                  "name": "_for",
                  "nodeType": "VariableDeclaration",
                  "scope": 2349,
                  "src": "809:12:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2333,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "809:7:9",
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
                  "id": 2336,
                  "name": "_block",
                  "nodeType": "VariableDeclaration",
                  "scope": 2349,
                  "src": "831:14:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2335,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "831:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2338,
                  "name": "_nonce",
                  "nodeType": "VariableDeclaration",
                  "scope": 2349,
                  "src": "855:14:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2337,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "855:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2340,
                  "name": "_v",
                  "nodeType": "VariableDeclaration",
                  "scope": 2349,
                  "src": "879:8:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 2339,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "879:5:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2342,
                  "name": "_r",
                  "nodeType": "VariableDeclaration",
                  "scope": 2349,
                  "src": "897:10:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 2341,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "897:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2344,
                  "name": "_s",
                  "nodeType": "VariableDeclaration",
                  "scope": 2349,
                  "src": "917:10:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 2343,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "917:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "717:211:9"
            },
            "payable": true,
            "returnParameters": {
              "id": 2348,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2347,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2349,
                  "src": "961:7:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2346,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "961:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "960:9:9"
            },
            "scope": 2350,
            "src": "687:283:9",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 2351,
        "src": "106:866:9"
      }
    ],
    "src": "0:973:9"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/IBancorNetwork.sol",
    "exportedSymbols": {
      "IBancorNetwork": [
        2350
      ]
    },
    "id": 2351,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2276,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:9"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/interfaces/IERC20Token.sol",
        "file": "./token/interfaces/IERC20Token.sol",
        "id": 2277,
        "nodeType": "ImportDirective",
        "scope": 2351,
        "sourceUnit": 8902,
        "src": "25:44:9",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 2350,
        "linearizedBaseContracts": [
          2350
        ],
        "name": "IBancorNetwork",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 2289,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "convert",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2285,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2280,
                  "name": "_path",
                  "nodeType": "VariableDeclaration",
                  "scope": 2289,
                  "src": "153:19:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_contract$_IERC20Token_$8901_$dyn_memory_ptr",
                    "typeString": "contract IERC20Token[]"
                  },
                  "typeName": {
                    "baseType": {
                      "contractScope": null,
                      "id": 2278,
                      "name": "IERC20Token",
                      "nodeType": "UserDefinedTypeName",
                      "referencedDeclaration": 8901,
                      "src": "153:11:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20Token_$8901",
                        "typeString": "contract IERC20Token"
                      }
                    },
                    "id": 2279,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "153:13:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_contract$_IERC20Token_$8901_$dyn_storage_ptr",
                      "typeString": "contract IERC20Token[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2282,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 2289,
                  "src": "174:15:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2281,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "174:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2284,
                  "name": "_minReturn",
                  "nodeType": "VariableDeclaration",
                  "scope": 2289,
                  "src": "191:18:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2283,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "191:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "152:58:9"
            },
            "payable": true,
            "returnParameters": {
              "id": 2288,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2287,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2289,
                  "src": "235:7:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2286,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "235:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "234:9:9"
            },
            "scope": 2350,
            "src": "136:108:9",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 2303,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "convertFor",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2299,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2292,
                  "name": "_path",
                  "nodeType": "VariableDeclaration",
                  "scope": 2303,
                  "src": "269:19:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_contract$_IERC20Token_$8901_$dyn_memory_ptr",
                    "typeString": "contract IERC20Token[]"
                  },
                  "typeName": {
                    "baseType": {
                      "contractScope": null,
                      "id": 2290,
                      "name": "IERC20Token",
                      "nodeType": "UserDefinedTypeName",
                      "referencedDeclaration": 8901,
                      "src": "269:11:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20Token_$8901",
                        "typeString": "contract IERC20Token"
                      }
                    },
                    "id": 2291,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "269:13:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_contract$_IERC20Token_$8901_$dyn_storage_ptr",
                      "typeString": "contract IERC20Token[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2294,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 2303,
                  "src": "290:15:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2293,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "290:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2296,
                  "name": "_minReturn",
                  "nodeType": "VariableDeclaration",
                  "scope": 2303,
                  "src": "307:18:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2295,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "307:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2298,
                  "name": "_for",
                  "nodeType": "VariableDeclaration",
                  "scope": 2303,
                  "src": "327:12:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2297,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "327:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "268:72:9"
            },
            "payable": true,
            "returnParameters": {
              "id": 2302,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2301,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2303,
                  "src": "365:7:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2300,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "365:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "364:9:9"
            },
            "scope": 2350,
            "src": "249:125:9",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 2325,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "convertForPrioritized2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2321,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2306,
                  "name": "_path",
                  "nodeType": "VariableDeclaration",
                  "scope": 2325,
                  "src": "420:19:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_contract$_IERC20Token_$8901_$dyn_memory_ptr",
                    "typeString": "contract IERC20Token[]"
                  },
                  "typeName": {
                    "baseType": {
                      "contractScope": null,
                      "id": 2304,
                      "name": "IERC20Token",
                      "nodeType": "UserDefinedTypeName",
                      "referencedDeclaration": 8901,
                      "src": "420:11:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20Token_$8901",
                        "typeString": "contract IERC20Token"
                      }
                    },
                    "id": 2305,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "420:13:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_contract$_IERC20Token_$8901_$dyn_storage_ptr",
                      "typeString": "contract IERC20Token[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2308,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 2325,
                  "src": "449:15:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2307,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "449:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2310,
                  "name": "_minReturn",
                  "nodeType": "VariableDeclaration",
                  "scope": 2325,
                  "src": "474:18:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2309,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "474:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2312,
                  "name": "_for",
                  "nodeType": "VariableDeclaration",
                  "scope": 2325,
                  "src": "502:12:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2311,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "502:7:9",
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
                  "id": 2314,
                  "name": "_block",
                  "nodeType": "VariableDeclaration",
                  "scope": 2325,
                  "src": "524:14:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2313,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "524:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2316,
                  "name": "_v",
                  "nodeType": "VariableDeclaration",
                  "scope": 2325,
                  "src": "548:8:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 2315,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "548:5:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2318,
                  "name": "_r",
                  "nodeType": "VariableDeclaration",
                  "scope": 2325,
                  "src": "566:10:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 2317,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "566:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2320,
                  "name": "_s",
                  "nodeType": "VariableDeclaration",
                  "scope": 2325,
                  "src": "586:10:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 2319,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "586:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "410:187:9"
            },
            "payable": true,
            "returnParameters": {
              "id": 2324,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2323,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2325,
                  "src": "630:7:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2322,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "630:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "629:9:9"
            },
            "scope": 2350,
            "src": "379:260:9",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 2349,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "convertForPrioritized",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2345,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2328,
                  "name": "_path",
                  "nodeType": "VariableDeclaration",
                  "scope": 2349,
                  "src": "727:19:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_contract$_IERC20Token_$8901_$dyn_memory_ptr",
                    "typeString": "contract IERC20Token[]"
                  },
                  "typeName": {
                    "baseType": {
                      "contractScope": null,
                      "id": 2326,
                      "name": "IERC20Token",
                      "nodeType": "UserDefinedTypeName",
                      "referencedDeclaration": 8901,
                      "src": "727:11:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20Token_$8901",
                        "typeString": "contract IERC20Token"
                      }
                    },
                    "id": 2327,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "727:13:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_contract$_IERC20Token_$8901_$dyn_storage_ptr",
                      "typeString": "contract IERC20Token[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2330,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 2349,
                  "src": "756:15:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2329,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "756:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2332,
                  "name": "_minReturn",
                  "nodeType": "VariableDeclaration",
                  "scope": 2349,
                  "src": "781:18:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2331,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "781:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2334,
                  "name": "_for",
                  "nodeType": "VariableDeclaration",
                  "scope": 2349,
                  "src": "809:12:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2333,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "809:7:9",
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
                  "id": 2336,
                  "name": "_block",
                  "nodeType": "VariableDeclaration",
                  "scope": 2349,
                  "src": "831:14:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2335,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "831:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2338,
                  "name": "_nonce",
                  "nodeType": "VariableDeclaration",
                  "scope": 2349,
                  "src": "855:14:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2337,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "855:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2340,
                  "name": "_v",
                  "nodeType": "VariableDeclaration",
                  "scope": 2349,
                  "src": "879:8:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 2339,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "879:5:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2342,
                  "name": "_r",
                  "nodeType": "VariableDeclaration",
                  "scope": 2349,
                  "src": "897:10:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 2341,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "897:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2344,
                  "name": "_s",
                  "nodeType": "VariableDeclaration",
                  "scope": 2349,
                  "src": "917:10:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 2343,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "917:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "717:211:9"
            },
            "payable": true,
            "returnParameters": {
              "id": 2348,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2347,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2349,
                  "src": "961:7:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2346,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "961:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "960:9:9"
            },
            "scope": 2350,
            "src": "687:283:9",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 2351,
        "src": "106:866:9"
      }
    ],
    "src": "0:973:9"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-12-03T18:35:11.873Z"
}