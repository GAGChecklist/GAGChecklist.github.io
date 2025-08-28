class SeedSearch extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.seeds = [
  "Carrot",
  "Chocolate Carrot",
  "Spring Onion",
  "Strawberry",
  "Blueberry",
  "Orange Tulip",
  "Rose",
  "Flare Daisy",
  "Crown of Thorns",
  "Red Lollipop",
  "Glowpod",
  "Nightshade",
  "Lavender",
  "Manuka Flower",
  "Crocus",
  "Wild Carrot",
  "Stonebite",
  "Monoblooma",
  "Dezen",
  "Onion",
  "Artichoke",
  "Rhubarb",
  "Tomato",
  "Corn",
  "Daffodil",
  "Raspberry",
  "Cauliflower",
  "Foxglove",
  "Horsetail",
  "Twisted Tangle",
  "Duskpuff",
  "Mandrake",
  "Canary Melon",
  "Flare Melon",
  "Glowshroom",
  "Mint",
  "Nectarshade",
  "Dandelion",
  "Succulent",
  "Bee Balm",
  "Pear",
  "Delphinium",
  "Peace Lily",
  "Liberty Lily",
  "Paradise Petal",
  "Serenity",
  "Zenflare",
  "Jalapeno",
  "Butternut Squash",
  "Aura Flora",
  "Blue Lollipop",
  "Broccoli",
  "Log Pumpkin",
  "Mutant Carrot",
  "Noble Flower",
  "Potato",
  "Purple Cabbage",
  "Watermelon",
  "Pumpkin",
  "Apple",
  "Bamboo",
  "Rafflesia",
  "Green Apple",
  "Avocado",
  "Banana",
  "Lilac",
  "Lingon Berry",
  "Veinpetal",
  "Mangosteen",
  "Calla Lily",
  "Willowberry",
  "Candy Sunflower",
  "Cranberry",
  "Durian",
  "Papaya",
  "Moonflower",
  "Starfruit",
  "Lumira",
  "Violet Corn",
  "Nectar Thorn",
  "Cantaloupe",
  "Aloe Vera",
  "Firework Flower",
  "Horned Dinoshroom",
  "Boneboo",
  "Taro Flower",
  "Soft Sunshine",
  "Sakura Bush",
  "Lucky Bamboo",
  "Enkaku",
  "Fruitball",
  "Crown Melon",
  "Badlands Pepper",
  "Dragon Sapling",
  "King Palm",
  "Merica Mushroom",
  "Sinisterdrip",
  "White Mulberry",
  "Lightshoot",
  "Spirit Lantern",
  "Aurora Vine",
  "Coconut",
  "Cactus",
  "Dragon Fruit",
  "Mango",
  "Grape",
  "Mushroom",
  "Pepper",
  "Cacao",
  "Beanstalk",
  "Ember Lily",
  "Sugar Apple",
  "Burning Bud",
  "Giant Pinecone",
  "Elder Strawberry",
  "Romanesco"
        ];
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                .search-container {
                    position: relative;
                    width: 100%;
                }
                .search-input {
                    width: 100%;
                    padding: 10px;
                    font-size: 1.2em;
                }
                .suggestions {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    border: 1px solid #ccc;
                    border-top: none;
                    max-height: 200px;
                    overflow-y: auto;
                    background: white;
                    z-index: 10;
                }
                .suggestion-item {
                    padding: 10px;
                    cursor: pointer;
                }
                .suggestion-item:hover {
                    background: #f1f1f1;
                }
            </style>
            <div class="search-container">
                <input type="text" class="search-input" placeholder="Search for a seed...">
                <div class="suggestions"></div>
            </div>
        `;

        const input = this.shadowRoot.querySelector('.search-input');
        const suggestionsDiv = this.shadowRoot.querySelector('.suggestions');

        input.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            suggestionsDiv.innerHTML = '';
            if (query.length > 0) {
                const filteredSeeds = this.seeds.filter(seed => seed.toLowerCase().includes(query));
                filteredSeeds.forEach(seed => {
                    const item = document.createElement('div');
                    item.classList.add('suggestion-item');
                    item.textContent = seed;
                    item.addEventListener('click', () => {
                        this.generateSeed(seed);
                        input.value = seed;
                        suggestionsDiv.innerHTML = '';
                    });
                    suggestionsDiv.appendChild(item);
                });
            }
        });
    }

    generateSeed(seedName) {
        // You would add your checklist generation logic here
        console.log(`Generating seed: ${seedName}`);
        // For example, you could dispatch an event to the main page
        const event = new CustomEvent('seed-generated', { detail: seedName });
        document.dispatchEvent(event);
    }
}
customElements.define('seed-search', SeedSearch);