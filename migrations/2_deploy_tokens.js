const HumanStandardToken = artifacts.require(`./HumanStandardToken.sol`)

module.exports = (deployer) => {
  const totalTokens = 100000000000000000;
  const tokenName = 'YachtCoin';
  const numberOfDecimals = 9;
  const tokenSymbol = "YACHT";

  deployer.deploy(HumanStandardToken, totalTokens, tokenName, numberOfDecimals, tokenSymbol)
}
