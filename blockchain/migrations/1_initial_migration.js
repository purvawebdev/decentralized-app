const Identity = artifacts.require("Identity");

module.exports = function (deployer) {
    deployer.deploy(Identity, { gas: 6721975 })
        .then(() => {
            console.log('Identity contract deployed!');
        })
        .catch((err) => {
            console.error('Deployment failed:', err);
        });
};
