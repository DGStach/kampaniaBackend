
export const mockProducts = (req,res) =>{

let mockProductsList = [
    {
        id: "874f0d37-07a0-4ae0-a613-929c17e7b668",
        name: "CAMPAIGN 1",
        cost: 1000,
        scope: 5,
        city: "Grodno",
        keywords:["NORTH AMERICA ", "EUROPE ", "AUSTRALIA "],
        includeInBudget: true
    },
    {
        id: "a060cc9a-a97e-44b3-bf2c-ab28dc5de85b",
        name: "CAMPAIGN 2",
        cost: 500,
        scope: 15,
        city: "Limanowa",
        keywords:["AFRICA","EUROPE", "SOUTH AMERICA"],
        includeInBudget: true

    },
    {
        id: "ce41ba4f-9090-4d21-a43d-da1a48ff6ede",
        name: "CAMPAIGN 3",
        cost: 800,
        scope: 25,
        city: "Warsaw",
        keywords:[],
        includeInBudget: true
    },
    {
        id: "1d121011-d0b9-4606-abed-fb09944fd43e",
        name: "CAMPAIGN 4",
        cost: 200,
        scope: 3,
        city: "Przeworsk",
        keywords:["ASIA", "AUSTRALIA"],
        includeInBudget: true
    }
]
    res.send(mockProductsList)
}