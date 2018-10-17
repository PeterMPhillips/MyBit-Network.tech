"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var ERC20 = exports.ERC20 = 
{
  "contractName": "ERC20",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
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
      "constant": true,
      "inputs": [
        {
          "name": "_who",
          "type": "address"
        }
      ],
      "name": "balanceOf",
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
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_spender",
          "type": "address"
        }
      ],
      "name": "allowance",
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
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.24;\n\n\n/**\n * @title ERC20 interface\n * @dev see https://github.com/ethereum/EIPs/issues/20\n */\ninterface ERC20 {\n  function totalSupply() external view returns (uint256);\n\n  function balanceOf(address _who) external view returns (uint256);\n\n  function allowance(address _owner, address _spender) external view returns (uint256);\n\n  function transfer(address _to, uint256 _value) external returns (bool);\n\n  function approve(address _spender, uint256 _value) external returns (bool);\n\n  function transferFrom(address _from, address _to, uint256 _value) external returns (bool);\n\n  event Transfer(address indexed from, address indexed to, uint256 value);\n\n  event Approval(address indexed owner, address indexed spender, uint256 value);\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/ERC20.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/ERC20.sol",
    "exportedSymbols": {
      "ERC20": [
        6113
      ]
    },
    "id": 6114,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 6046,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:20"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": "@title ERC20 interface\n@dev see https://github.com/ethereum/EIPs/issues/20",
        "fullyImplemented": false,
        "id": 6113,
        "linearizedBaseContracts": [
          6113
        ],
        "name": "ERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 6051,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6047,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "156:2:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 6050,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6049,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6051,
                  "src": "182:7:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6048,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "182:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "181:9:20"
            },
            "scope": 6113,
            "src": "136:55:20",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6058,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6054,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6053,
                  "name": "_who",
                  "nodeType": "VariableDeclaration",
                  "scope": 6058,
                  "src": "214:12:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6052,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "214:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "213:14:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 6057,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6056,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6058,
                  "src": "251:7:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6055,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "251:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "250:9:20"
            },
            "scope": 6113,
            "src": "195:65:20",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6067,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6063,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6060,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 6067,
                  "src": "283:14:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6059,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "283:7:20",
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
                  "id": 6062,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 6067,
                  "src": "299:16:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6061,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "299:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "282:34:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 6066,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6065,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6067,
                  "src": "340:7:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6064,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "340:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "339:9:20"
            },
            "scope": 6113,
            "src": "264:85:20",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6076,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6072,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6069,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 6076,
                  "src": "371:11:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6068,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "371:7:20",
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
                  "id": 6071,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 6076,
                  "src": "384:14:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6070,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "384:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "370:29:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 6075,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6074,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6076,
                  "src": "418:4:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6073,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "418:4:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "417:6:20"
            },
            "scope": 6113,
            "src": "353:71:20",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6085,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6081,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6078,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 6085,
                  "src": "445:16:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6077,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "445:7:20",
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
                  "id": 6080,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 6085,
                  "src": "463:14:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6079,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "463:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "444:34:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 6084,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6083,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6085,
                  "src": "497:4:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6082,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "497:4:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "496:6:20"
            },
            "scope": 6113,
            "src": "428:75:20",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6096,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6092,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6087,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 6096,
                  "src": "529:13:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6086,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "529:7:20",
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
                  "id": 6089,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 6096,
                  "src": "544:11:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6088,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "544:7:20",
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
                  "id": 6091,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 6096,
                  "src": "557:14:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6090,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "557:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "528:44:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 6095,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6094,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6096,
                  "src": "591:4:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6093,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "591:4:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "590:6:20"
            },
            "scope": 6113,
            "src": "507:90:20",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 6104,
            "name": "Transfer",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 6103,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6098,
                  "indexed": true,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 6104,
                  "src": "616:20:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6097,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "616:7:20",
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
                  "id": 6100,
                  "indexed": true,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 6104,
                  "src": "638:18:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6099,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "638:7:20",
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
                  "id": 6102,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 6104,
                  "src": "658:13:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6101,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "658:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "615:57:20"
            },
            "src": "601:72:20"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 6112,
            "name": "Approval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 6111,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6106,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 6112,
                  "src": "692:21:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6105,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "692:7:20",
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
                  "id": 6108,
                  "indexed": true,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 6112,
                  "src": "715:23:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6107,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "715:7:20",
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
                  "id": 6110,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 6112,
                  "src": "740:13:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6109,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "740:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "691:63:20"
            },
            "src": "677:78:20"
          }
        ],
        "scope": 6114,
        "src": "116:641:20"
      }
    ],
    "src": "0:758:20"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/ERC20.sol",
    "exportedSymbols": {
      "ERC20": [
        6113
      ]
    },
    "id": 6114,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 6046,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:20"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": "@title ERC20 interface\n@dev see https://github.com/ethereum/EIPs/issues/20",
        "fullyImplemented": false,
        "id": 6113,
        "linearizedBaseContracts": [
          6113
        ],
        "name": "ERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 6051,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6047,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "156:2:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 6050,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6049,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6051,
                  "src": "182:7:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6048,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "182:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "181:9:20"
            },
            "scope": 6113,
            "src": "136:55:20",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6058,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6054,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6053,
                  "name": "_who",
                  "nodeType": "VariableDeclaration",
                  "scope": 6058,
                  "src": "214:12:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6052,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "214:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "213:14:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 6057,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6056,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6058,
                  "src": "251:7:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6055,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "251:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "250:9:20"
            },
            "scope": 6113,
            "src": "195:65:20",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6067,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6063,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6060,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 6067,
                  "src": "283:14:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6059,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "283:7:20",
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
                  "id": 6062,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 6067,
                  "src": "299:16:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6061,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "299:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "282:34:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 6066,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6065,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6067,
                  "src": "340:7:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6064,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "340:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "339:9:20"
            },
            "scope": 6113,
            "src": "264:85:20",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6076,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6072,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6069,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 6076,
                  "src": "371:11:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6068,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "371:7:20",
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
                  "id": 6071,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 6076,
                  "src": "384:14:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6070,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "384:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "370:29:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 6075,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6074,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6076,
                  "src": "418:4:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6073,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "418:4:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "417:6:20"
            },
            "scope": 6113,
            "src": "353:71:20",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6085,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6081,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6078,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 6085,
                  "src": "445:16:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6077,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "445:7:20",
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
                  "id": 6080,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 6085,
                  "src": "463:14:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6079,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "463:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "444:34:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 6084,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6083,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6085,
                  "src": "497:4:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6082,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "497:4:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "496:6:20"
            },
            "scope": 6113,
            "src": "428:75:20",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6096,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6092,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6087,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 6096,
                  "src": "529:13:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6086,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "529:7:20",
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
                  "id": 6089,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 6096,
                  "src": "544:11:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6088,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "544:7:20",
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
                  "id": 6091,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 6096,
                  "src": "557:14:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6090,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "557:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "528:44:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 6095,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6094,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6096,
                  "src": "591:4:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6093,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "591:4:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "590:6:20"
            },
            "scope": 6113,
            "src": "507:90:20",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 6104,
            "name": "Transfer",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 6103,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6098,
                  "indexed": true,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 6104,
                  "src": "616:20:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6097,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "616:7:20",
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
                  "id": 6100,
                  "indexed": true,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 6104,
                  "src": "638:18:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6099,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "638:7:20",
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
                  "id": 6102,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 6104,
                  "src": "658:13:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6101,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "658:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "615:57:20"
            },
            "src": "601:72:20"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 6112,
            "name": "Approval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 6111,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6106,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 6112,
                  "src": "692:21:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6105,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "692:7:20",
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
                  "id": 6108,
                  "indexed": true,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 6112,
                  "src": "715:23:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6107,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "715:7:20",
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
                  "id": 6110,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 6112,
                  "src": "740:13:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6109,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "740:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "691:63:20"
            },
            "src": "677:78:20"
          }
        ],
        "scope": 6114,
        "src": "116:641:20"
      }
    ],
    "src": "0:758:20"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-10-17T01:56:53.451Z"
}