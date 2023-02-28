// https://eth-goerli.g.alchemy.com/v2/ZBJKYrhmUJrGucWn42KhJTdif69PPnIM

require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli:{
      url: 'https://eth-goerli.g.alchemy.com/v2/ZBJKYrhmUJrGucWn42KhJTdif69PPnIM',
      accounts: ['2b4ae9d9b2c6ef62478e7df978cef14ae908d99849d2e415ee72a077798324f0']
    }
  }
};
