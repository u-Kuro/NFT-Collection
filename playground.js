// Custom Transaction ID
console.log("Transaction ID: TRX10122001")
// Init NFTs Array
const NFTs = []

// Create NFT Object
mintNFT({
    name: "Timothee",
    theme: "Fantasy",
    background: "Forest",
    style: "Abstract"
});
mintNFT({
    name: "Balake",
    theme: "Space",
    background: "Galaxy",
    style: "Cosmic"
});
mintNFT({
    name: "Jayqualen",
    theme: "Nature",
    background: "Mountain",
    style: "Realistic"
});
mintNFT({
    name: "A-aron",
    theme: "Cyberpunk",
    background: "Cityscape",
    style: "Futuristic"
});

// Output Each Minted NFT Object
listNFTs(NFTs);
// Output Total NFT Supply
getTotalSupply(NFTs);

// Functions
function mintNFT({ name, theme, background, style }) {
    NFTs.push({ name, theme, background, style });
    console.log(`Minted:      ${name}`);
}
function listNFTs(NFTs) {
    NFTs.forEach(({ name, theme, background, style }) => {
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