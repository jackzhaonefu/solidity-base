const { BN, constants, expectEvent, expectRevert, time } = require('@openzeppelin/test-helpers');
const { ZERO_ADDRESS } = constants;
const { accounts, contract } = require('@openzeppelin/test-environment');
const { expect } = require('chai');

const { deployer } = require('./share/deployer_AgentRouter');
var math = require("mathjs");


const ethers = require('ethers');
const { inTransaction } = require('@openzeppelin/test-helpers/src/expectEvent');
const utils = ethers.utils;
const BigNumber = ethers.BigNumber;

const SManager = contract.fromArtifact('SManager');
const PoolSetting = contract.fromArtifact('PoolSetting');

const pool = contract.fromArtifact('Pool');
const Debt = contract.fromArtifact('Debt');

const erc20Contract = contract.fromArtifact('ERC20');
const addressZero = "0x0000000000000000000000000000000000000000";


async function advanceblock(advanceNumber) {
    var currentBlock = await time.latestBlock();
    var target = parseInt(currentBlock) + advanceNumber;
    await time.advanceBlockTo(target)
}