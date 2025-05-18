# Python code to create a README.md file in a specified path
with open('X:/agent-007/w3notary/w3notary-contracts/README.md', 'w') as f:
    f.write("# W3notary Contracts Module\n")

    f.write("## Purpose\n")
    f.write("This module is designed to facilitate the process of deploying contracts and running tests in the w3notary environment. It utilises the latest tech in Blockchain developments.\n")

    f.write("## Contract Deployment\n")
    f.write("To deploy contracts, use the following command:\n")
    f.write("\n```")
    f.write("\ntruffle migrate --reset")
    f.write("\n```\n")

    f.write("## Running Tests\n")
    f.write("To run the tests included in this module, use the following command:\n")
    f.write("\n```")
    f.write("\ntruffle test")
    f.write("\n```\n")