const HumanStandardToken = artifacts.require(`./HumanStandardToken.sol`)

module.exports = (deployer) => {
  const totalTokens = 1000000000000000000;
  const tokenName = 'realTest';
  const numberOfDecimals = 9;
  const tokenSymbol = "RT";

  deployer.deploy(HumanStandardToken, totalTokens, tokenName, numberOfDecimals, tokenSymbol)
}
