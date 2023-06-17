// Init NFTs Array
const NFTs = []

// Create NFT Object
mintNFT({name: "Timothee", theme: "fantasy", background: "forest", style: "abstract"});
mintNFT({
    name: "Balake",
    theme: "space",
    background: "galaxy",
    style: "cosmic"
});
mintNFT({
    name: "Jayqualen",
    theme: "nature",
    background: "mountain",
    style: "realistic"
});
mintNFT({
    name: "A-aron",
    theme: "cyberpunk",
    background: "cityscape",
    style: "futuristic"
});

// Output Each Minted NFT Object
listNFTs(NFTs);
// Output Total NFT Supply
getTotalSupply(NFTs);

// Functions
function mintNFT ({ name, theme, background, style }) {
    NFTs.push({ name, theme, background, style });
    console.log(`Minted:      ${name}`);
}
function listNFTs (NFTs) {
    NFTs.forEach(({ name, theme, background, style })=>{
        console.log("")
        console.log(`Name:       ${name}`)
        console.log(`Theme:      ${theme}`)
        console.log(`Background: ${background}`)
        console.log(`Style:      ${style}`)
    })
}
function getTotalSupply(NFTs) {
    console.log("");
    console.log(`Total Supply:      ${NFTs.length}`);
}