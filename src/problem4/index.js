const { ethers } = require("ethers")
//please put in the appropriate apikey
const apikey = ""

const contractAddress = "0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c"
const provider = new ethers.providers.JsonRpcProvider(`https://bsc.getblock.io/mainnet/?api_key=${apikey}`)
const ABI = [
    "function balanceOf(address account) external view returns (uint256)"
]

const contract = new ethers.Contract(contractAddress, ABI, provider)
const addresses = [
    "0x123d475e13aa54a43a7421d94caa4459da021c77",
    "0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
    "0xfe808b079187cc460f47374580f5fb47c82b87a5",
]
const run = () => {
    Promise.all(addresses.map((addr) => contract.balanceOf(addr))).then(values=>{
        values.forEach((raw,i) => console.log(`${addresses[i]} ${raw.toNumber()}`))
    })
}

run();
