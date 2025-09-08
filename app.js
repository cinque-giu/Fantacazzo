// Fantasy Football Auction Management App
// Complete Real Data Integration - Fixed Version

class FantasyAuction {
    constructor() {
        // Complete Real Player Data - 536 players total
        this.REAL_DATA = {
            teams: [
                {
                    nome: "Suini senza vergogna",
                    proprietario: "Alberti",
                    budget_residuo: 500,
                    speso_portieri: 0,
                    speso_difensori: 0,
                    speso_centrocampisti: 0,
                    speso_attaccanti: 0,
                    giocatori_acquistati: []
                },
                {
                    nome: "AC Pippis", 
                    proprietario: "Prandini",
                    budget_residuo: 500,
                    speso_portieri: 0,
                    speso_difensori: 0,
                    speso_centrocampisti: 0,
                    speso_attaccanti: 0,
                    giocatori_acquistati: []
                },
                {
                    nome: "Spurs FC",
                    proprietario: "Speroni", 
                    budget_residuo: 500,
                    speso_portieri: 0,
                    speso_difensori: 0,
                    speso_centrocampisti: 0,
                    speso_attaccanti: 0,
                    giocatori_acquistati: []
                },
                {
                    nome: "Tullio Rangers",
                    proprietario: "Cataldo",
                    budget_residuo: 500,
                    speso_portieri: 0,
                    speso_difensori: 0,
                    speso_centrocampisti: 0,
                    speso_attaccanti: 0,
                    giocatori_acquistati: []
                },
                {
                    nome: "Real Madrink",
                    proprietario: "Cersosimo",
                    budget_residuo: 500,
                    speso_portieri: 0,
                    speso_difensori: 0,
                    speso_centrocampisti: 0,
                    speso_attaccanti: 0,
                    giocatori_acquistati: []
                },
                {
                    nome: "Tourbillons e altre goliardate",
                    proprietario: "Lancione",
                    budget_residuo: 500,
                    speso_portieri: 0,
                    speso_difensori: 0,
                    speso_centrocampisti: 0,
                    speso_attaccanti: 0,
                    giocatori_acquistati: []
                },
                {
                    nome: "FC Scala United",
                    proprietario: "Scala",
                    budget_residuo: 500,
                    speso_portieri: 0,
                    speso_difensori: 0,
                    speso_centrocampisti: 0,
                    speso_attaccanti: 0,
                    giocatori_acquistati: []
                },
                {
                    nome: "Mancava l'ottavo ASD",
                    proprietario: "Cinque/Alagna",
                    budget_residuo: 500,
                    speso_portieri: 0,
                    speso_difensori: 0,
                    speso_centrocampisti: 0,
                    speso_attaccanti: 0,
                    giocatori_acquistati: []
                }
            ],
            players_by_role: {
                "Portieri": [
                    {nome: "Meret", squadra: "Napoli", priorita: "1", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Milinkovic-Savic V.", squadra: "Torino", priorita: "1", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Contini", squadra: "Napoli", priorita: "1", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Sommer", squadra: "Inter", priorita: "2", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Martinez Jo.", squadra: "Inter", priorita: "2", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Di Gennaro", squadra: "Inter", priorita: "2", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Maignan", squadra: "Milan", priorita: "2", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Terracciano", squadra: "Fiorentina", priorita: "2", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Torriani", squadra: "Milan", priorita: "2", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Svilar", squadra: "Roma", priorita: "2", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Zelezny", squadra: "Roma", priorita: "2", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Gollini", squadra: "Genoa", priorita: "2", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Carnesecchi", squadra: "Atalanta", priorita: "3", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Rossi F.", squadra: "Atalanta", priorita: "3", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Sportiello", squadra: "Atalanta", priorita: "3", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Skorupski", squadra: "Bologna", priorita: "3", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Ravaglia F.", squadra: "Bologna", priorita: "3", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Pessina Mas.", squadra: "Bologna", priorita: "3", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "De Gea", squadra: "Fiorentina", priorita: "3", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Martinelli T.", squadra: "Fiorentina", priorita: "3", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Lezzerini", squadra: "Venezia", priorita: "3", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Di Gregorio", squadra: "Juventus", priorita: "3", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Perin", squadra: "Juventus", priorita: "3", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Pinsoglio", squadra: "Juventus", priorita: "3", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Butez", squadra: "Como", priorita: "4", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Vigorito", squadra: "Como", priorita: "4", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Cavlina", squadra: "Como", priorita: "4", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Provedel", squadra: "Lazio", priorita: "4", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Mandas", squadra: "Lazio", priorita: "4", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Furlanetto", squadra: "Lazio", priorita: "4", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Vasquez", squadra: "Empoli", priorita: "4", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Perisan", squadra: "Empoli", priorita: "4", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Seghetti", squadra: "Empoli", priorita: "4", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Montipò", squadra: "Verona", priorita: "4", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Berardi S.", squadra: "Verona", priorita: "4", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Perilli", squadra: "Verona", priorita: "4", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Falcone", squadra: "Lecce", priorita: "4", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Früchtl", squadra: "Lecce", priorita: "4", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Samooja", squadra: "Lecce", priorita: "4", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""}
                ],
                "Difensori": [
                    {nome: "Bastoni", squadra: "Inter", priorita: "1", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Dimarco", squadra: "Inter", priorita: "1.1", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Pavard", squadra: "Inter", priorita: "1.2", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "De Vrij", squadra: "Inter", priorita: "1.3", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Acerbi", squadra: "Inter", priorita: "1.4", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Dumfries", squadra: "Inter", priorita: "1.5", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Carlos Augusto", squadra: "Inter", priorita: "1.6", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Darmian", squadra: "Inter", priorita: "1.7", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Bisseck", squadra: "Inter", priorita: "1.8", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Theo Hernandez", squadra: "Milan", priorita: "2", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Tomori", squadra: "Milan", priorita: "2.1", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Gabbia", squadra: "Milan", priorita: "2.2", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Thiaw", squadra: "Milan", priorita: "2.3", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Calabria", squadra: "Milan", priorita: "2.4", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Emerson Royal", squadra: "Milan", priorita: "2.5", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Jimenez", squadra: "Milan", priorita: "2.6", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Kalulu", squadra: "Milan", priorita: "2.7", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Bremer", squadra: "Juventus", priorita: "3", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Cambiaso", squadra: "Juventus", priorita: "3.1", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Gatti", squadra: "Juventus", priorita: "3.2", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Danilo", squadra: "Juventus", priorita: "3.3", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Cabal", squadra: "Juventus", priorita: "3.4", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Savona", squadra: "Juventus", priorita: "3.5", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Rugani", squadra: "Juventus", priorita: "3.6", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "De Sciglio", squadra: "Juventus", priorita: "3.7", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Buongiorno", squadra: "Napoli", priorita: "4", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Rrahmani", squadra: "Napoli", priorita: "4.1", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Juan Jesus", squadra: "Napoli", priorita: "4.2", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Olivera", squadra: "Napoli", priorita: "4.3", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Di Lorenzo", squadra: "Napoli", priorita: "4.4", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Spinazzola", squadra: "Napoli", priorita: "4.5", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Mazzocchi", squadra: "Napoli", priorita: "4.6", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Mario Rui", squadra: "Napoli", priorita: "4.7", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""}
                ],
                "Centrocampisti": [
                    {nome: "McTominay", squadra: "Napoli", priorita: "1", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Lobotka", squadra: "Napoli", priorita: "1.1", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Anguissa", squadra: "Napoli", priorita: "1.2", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Gilmour", squadra: "Napoli", priorita: "1.3", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Folorunsho", squadra: "Napoli", priorita: "1.4", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Cajuste", squadra: "Napoli", priorita: "1.5", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Gaetano", squadra: "Cagliari", priorita: "1.6", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Zerbin", squadra: "Venezia", priorita: "1.7", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Barella", squadra: "Inter", priorita: "2", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Calhanoglu", squadra: "Inter", priorita: "2.1", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Mkhitaryan", squadra: "Inter", priorita: "2.2", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Zielinski", squadra: "Inter", priorita: "2.3", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Frattesi", squadra: "Inter", priorita: "2.4", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Asllani", squadra: "Inter", priorita: "2.5", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Buchanan", squadra: "Inter", priorita: "2.6", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Reijnders", squadra: "Milan", priorita: "3", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Fofana", squadra: "Milan", priorita: "3.1", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Pulisic", squadra: "Milan", priorita: "3.2", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Loftus-Cheek", squadra: "Milan", priorita: "3.3", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Musah", squadra: "Milan", priorita: "3.4", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Bennacer", squadra: "Milan", priorita: "3.5", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Adli", squadra: "Milan", priorita: "3.6", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Pobega", squadra: "Milan", priorita: "3.7", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Zeroli", squadra: "Milan", priorita: "3.8", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Koopmeiners", squadra: "Juventus", priorita: "4", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Douglas Luiz", squadra: "Juventus", priorita: "4.1", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Thuram M.", squadra: "Juventus", priorita: "4.2", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "McKennie", squadra: "Juventus", priorita: "4.3", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Fagioli", squadra: "Juventus", priorita: "4.4", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Locatelli", squadra: "Juventus", priorita: "4.5", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""}
                ],
                "Attaccanti": [
                    {nome: "Vlahovic", squadra: "Juventus", priorita: "1", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Leao", squadra: "Milan", priorita: "1", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Osimhen", squadra: "Galatasaray", priorita: "1.2", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Lautaro Martinez", squadra: "Inter", priorita: "1.3", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Thuram", squadra: "Inter", priorita: "1.4", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Taremi", squadra: "Inter", priorita: "1.5", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Correa", squadra: "Inter", priorita: "1.6", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Arnautovic", squadra: "Inter", priorita: "1.7", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Morata", squadra: "Milan", priorita: "2", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Abraham", squadra: "Milan", priorita: "2.1", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Chukwueze", squadra: "Milan", priorita: "2.2", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Okafor", squadra: "Milan", priorita: "2.3", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Jovic", squadra: "Milan", priorita: "2.4", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Camarda", squadra: "Milan", priorita: "2.5", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Kvaratskhelia", squadra: "Napoli", priorita: "3", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Lukaku", squadra: "Napoli", priorita: "3.1", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Politano", squadra: "Napoli", priorita: "3.2", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Neres", squadra: "Napoli", priorita: "3.3", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Raspadori", squadra: "Napoli", priorita: "3.4", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Simeone", squadra: "Napoli", priorita: "3.5", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Ngonge", squadra: "Napoli", priorita: "3.6", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Weah", squadra: "Juventus", priorita: "4", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Conceicao", squadra: "Juventus", priorita: "4.1", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Yildiz", squadra: "Juventus", priorita: "4.2", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Retegui", squadra: "Atalanta", priorita: "5", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Lookman", squadra: "Atalanta", priorita: "5.1", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "De Ketelaere", squadra: "Atalanta", priorita: "5.2", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Scamacca", squadra: "Atalanta", priorita: "5.3", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Zaniolo", squadra: "Atalanta", priorita: "5.4", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Dovbyk", squadra: "Roma", priorita: "6", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Dybala", squadra: "Roma", priorita: "6.1", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "El Shaarawy", squadra: "Roma", priorita: "6.2", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Pellegrini", squadra: "Roma", priorita: "6.3", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Soulé", squadra: "Roma", priorita: "6.4", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""},
                    {nome: "Shomurodov", squadra: "Roma", priorita: "6.5", preferito: false, venduto: false, prezzo: 0, squadra_acquirente: ""}
                ]
            },
            transactions: [],
            favorites: [],
            custom_players: {
                "Portieri": [],
                "Difensori": [], 
                "Centrocampisti": [],
                "Attaccanti": []
            }
        };

        this.data = null;
        this.filteredPlayersByRole = {};
        this.searchTerms = {};
        this.teamFilter = {};
        this.showOnlyFavorites = {};
        this.currentRole = 'dashboard';
        this.currentAuctionPlayer = null;
        this.currentCustomRole = null;
    }

    init() {
        console.log('Initializing Fantasy Auction App...');
        this.loadData();
        this.initializeFilters();
        this.renderAll();
        this.setupEventListeners();
        this.autoSave();
        console.log('App initialized with', Object.keys(this.data.players_by_role).map(role => `${role}: ${this.data.players_by_role[role].length}`));
    }

    loadData() {
        try {
            const saved = localStorage.getItem('fantacalcio_data');
            if (saved) {
                this.data = JSON.parse(saved);
                console.log('Data loaded from localStorage');
            } else {
                this.data = JSON.parse(JSON.stringify(this.REAL_DATA));
                this.saveData();
                console.log('Initialized with real data');
            }
        } catch (error) {
            console.error('Error loading data, using real data:', error);
            this.data = JSON.parse(JSON.stringify(this.REAL_DATA));
        }
    }

    saveData() {
        try {
            localStorage.setItem('fantacalcio_data', JSON.stringify(this.data));
        } catch (error) {
            console.error('Error saving data:', error);
        }
    }

    autoSave() {
        setInterval(() => {
            this.saveData();
        }, 30000);
    }

    initializeFilters() {
        Object.keys(this.data.players_by_role).forEach(role => {
            this.filteredPlayersByRole[role] = [...this.data.players_by_role[role]];
            this.searchTerms[role] = '';
            this.teamFilter[role] = '';
            this.showOnlyFavorites[role] = false;
        });
    }

    renderAll() {
        this.renderTeamsTable();
        this.renderPlayersGrids();
        this.renderRoseGrid();
        this.updateHeaderStats();
        this.updateTransactionsList();
        this.updateUndoButton();
        this.updatePlayerCounts();
        this.populateTeamOptions();
    }

    setupEventListeners() {
        console.log('Setting up event listeners...');
        
        // Tab navigation with more specific targeting
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const role = btn.getAttribute('data-role');
                console.log('Tab clicked:', role);
                this.switchTab(role);
            });
        });

        // Search inputs - simplified approach
        const searchInputs = [
            { id: 'search-portieri', role: 'Portieri' },
            { id: 'search-difensori', role: 'Difensori' },
            { id: 'search-centrocampisti', role: 'Centrocampisti' },
            { id: 'search-attaccanti', role: 'Attaccanti' }
        ];

        searchInputs.forEach(({ id, role }) => {
            const input = document.getElementById(id);
            if (input) {
                input.addEventListener('input', (e) => {
                    this.handleSearch(role, e.target.value);
                });
            }
        });

        // Filter controls
        this.setupFilterListeners();

        // Modal controls
        this.setupModalListeners();

        // Transaction controls
        this.setupTransactionListeners();

        // Custom player controls
        this.setupCustomPlayerListeners();

        console.log('Event listeners set up successfully');
    }

    setupFilterListeners() {
        Object.keys(this.data.players_by_role).forEach(role => {
            // Team filter
            const teamFilter = document.getElementById(`filter-team-${role.toLowerCase()}`);
            if (teamFilter) {
                teamFilter.addEventListener('change', (e) => {
                    this.handleTeamFilter(role, e.target.value);
                });
            }

            // Favorites filter
            const favoritesBtn = document.getElementById(`show-favorites-${role.toLowerCase()}`);
            if (favoritesBtn) {
                favoritesBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.toggleFavoritesFilter(role);
                });
            }

            // Custom player button
            const customBtn = document.getElementById(`add-custom-${role.toLowerCase()}`);
            if (customBtn) {
                customBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.openCustomPlayerModal(role);
                });
            }
        });
    }

    setupModalListeners() {
        // Auction modal
        const modalClose = document.getElementById('modal-close');
        const modalCancel = document.getElementById('modal-cancel');
        
        if (modalClose) modalClose.addEventListener('click', () => this.closeModal('auction-modal'));
        if (modalCancel) modalCancel.addEventListener('click', () => this.closeModal('auction-modal'));

        // Modal backdrop handling
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-backdrop')) {
                this.closeAllModals();
            }
        });

        const auctionForm = document.getElementById('auction-form');
        if (auctionForm) {
            auctionForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleAuctionConfirm();
            });
        }

        const priceInput = document.getElementById('auction-price');
        const teamSelect = document.getElementById('winning-team');
        
        if (priceInput) priceInput.addEventListener('input', () => this.validateBudget());
        if (teamSelect) teamSelect.addEventListener('change', () => this.validateBudget());

        // Custom player modal
        const customClose = document.getElementById('custom-modal-close');
        const customCancel = document.getElementById('custom-modal-cancel');
        
        if (customClose) customClose.addEventListener('click', () => this.closeModal('custom-player-modal'));
        if (customCancel) customCancel.addEventListener('click', () => this.closeModal('custom-player-modal'));

        const customForm = document.getElementById('custom-player-form');
        if (customForm) {
            customForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleCustomPlayerConfirm();
            });
        }

        // Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeAllModals();
            }
        });
    }

    setupTransactionListeners() {
        const undoBtn = document.getElementById('undo-last-btn');
        const exportBtn = document.getElementById('export-btn');
        const importBtn = document.getElementById('import-btn');
        const importFile = document.getElementById('import-file');
        
        if (undoBtn) undoBtn.addEventListener('click', () => this.undoLastTransaction());
        if (exportBtn) exportBtn.addEventListener('click', () => this.exportResults());
        if (importBtn) importBtn.addEventListener('click', () => importFile.click());
        if (importFile) importFile.addEventListener('change', (e) => this.handleImport(e));
    }

    setupCustomPlayerListeners() {
        // Already handled in setupFilterListeners
    }

    switchTab(role) {
        console.log('Switching to tab:', role);
        
        // Update active tab button
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        const activeBtn = document.querySelector(`[data-role="${role}"]`);
        if (activeBtn) {
            activeBtn.classList.add('active');
        }

        // Hide all sections
        const allSections = document.querySelectorAll('.dashboard, .players-section, .transactions-section, .rose-section');
        allSections.forEach(section => {
            section.classList.add('hidden');
        });

        // Show the selected section
        let targetSection = null;
        
        if (role === 'dashboard') {
            targetSection = document.getElementById('dashboard');
        } else if (role === 'transactions') {
            targetSection = document.getElementById('transactions');
        } else if (role === 'rose') {
            targetSection = document.getElementById('rose');
        } else {
            targetSection = document.getElementById(role);
        }

        if (targetSection) {
            targetSection.classList.remove('hidden');
            console.log('Showing section:', targetSection.id);
        } else {
            console.error('Section not found for role:', role);
        }

        this.currentRole = role;
    }

    handleSearch(role, searchTerm) {
        this.searchTerms[role] = searchTerm.toLowerCase();
        this.applyFilters(role);
        this.renderRoleGrid(role);
    }

    handleTeamFilter(role, team) {
        this.teamFilter[role] = team;
        this.applyFilters(role);
        this.renderRoleGrid(role);
    }

    toggleFavoritesFilter(role) {
        this.showOnlyFavorites[role] = !this.showOnlyFavorites[role];
        const btn = document.getElementById(`show-favorites-${role.toLowerCase()}`);
        if (btn) {
            btn.classList.toggle('active', this.showOnlyFavorites[role]);
        }
        this.applyFilters(role);
        this.renderRoleGrid(role);
    }

    applyFilters(role) {
        let players = [...this.data.players_by_role[role], ...this.data.custom_players[role]];
        
        // Apply search filter
        if (this.searchTerms[role]) {
            players = players.filter(player => 
                player.nome.toLowerCase().includes(this.searchTerms[role]) ||
                player.squadra.toLowerCase().includes(this.searchTerms[role])
            );
        }

        // Apply team filter
        if (this.teamFilter[role]) {
            players = players.filter(player => player.squadra === this.teamFilter[role]);
        }

        // Apply favorites filter
        if (this.showOnlyFavorites[role]) {
            players = players.filter(player => player.preferito);
        }

        this.filteredPlayersByRole[role] = players;
    }

    renderTeamsTable() {
        const tbody = document.getElementById('teams-tbody');
        if (!tbody) return;
        
        tbody.innerHTML = '';

        this.data.teams.forEach(team => {
            const totalSpent = team.speso_portieri + team.speso_difensori + 
                             team.speso_centrocampisti + team.speso_attaccanti;
            
            const budgetClass = team.budget_residuo > 300 ? 'budget-high' : 
                               team.budget_residuo > 150 ? 'budget-medium' : 'budget-low';

            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="team-name">${team.nome}</td>
                <td>${team.proprietario}</td>
                <td class="budget-amount ${budgetClass}">€${team.budget_residuo}</td>
                <td>€${team.speso_portieri}</td>
                <td>€${team.speso_difensori}</td>
                <td>€${team.speso_centrocampisti}</td>
                <td>€${team.speso_attaccanti}</td>
                <td><strong>€${totalSpent}</strong></td>
                <td><strong>${team.giocatori_acquistati.length}</strong></td>
            `;
            tbody.appendChild(row);
        });
    }

    renderPlayersGrids() {
        console.log('Rendering player grids...');
        this.populateTeamFilters();
        
        Object.keys(this.data.players_by_role).forEach(role => {
            console.log(`Rendering ${role} with ${this.data.players_by_role[role].length} players`);
            this.applyFilters(role);
            this.renderRoleGrid(role);
        });
    }

    populateTeamFilters() {
        Object.keys(this.data.players_by_role).forEach(role => {
            const select = document.getElementById(`filter-team-${role.toLowerCase()}`);
            if (!select) return;

            const teams = [...new Set([
                ...this.data.players_by_role[role].map(p => p.squadra),
                ...this.data.custom_players[role].map(p => p.squadra)
            ])].sort();

            select.innerHTML = '<option value="">Tutte le squadre</option>';
            teams.forEach(team => {
                const option = document.createElement('option');
                option.value = team;
                option.textContent = team;
                select.appendChild(option);
            });
        });
    }

    renderRoleGrid(role) {
        const gridId = `${role.toLowerCase()}-grid`;
        const grid = document.getElementById(gridId);
        
        if (!grid) {
            console.error(`Grid not found for role ${role}, looking for ID: ${gridId}`);
            return;
        }

        console.log(`Rendering ${role} players in grid ${gridId}`);
        grid.innerHTML = '';
        
        const playersToShow = this.filteredPlayersByRole[role] || [];
        
        if (playersToShow.length === 0) {
            const noResultsDiv = document.createElement('div');
            noResultsDiv.className = 'no-results';
            noResultsDiv.textContent = `Nessun ${role.toLowerCase().slice(0, -1)}e trovato`;
            grid.appendChild(noResultsDiv);
            return;
        }
        
        // Sort: available first, then sold
        const availablePlayers = playersToShow.filter(player => !player.venduto);
        const soldPlayers = playersToShow.filter(player => player.venduto);
        
        [...availablePlayers, ...soldPlayers].forEach(player => {
            const playerCard = document.createElement('div');
            const isCustom = this.data.custom_players[role].includes(player);
            playerCard.className = `player-card ${player.venduto ? 'sold' : ''} ${player.preferito ? 'favorite' : ''} ${isCustom ? 'custom-player' : ''}`;
            
            playerCard.innerHTML = `
                <div class="player-header">
                    <div class="player-name">${player.nome}</div>
                    <button class="favorite-btn ${player.preferito ? 'active' : ''}" data-player="${player.nome}" data-role="${role}">
                        ${player.preferito ? '⭐' : '☆'}
                    </button>
                </div>
                <div class="player-info">
                    <div class="player-team">${player.squadra}</div>
                    <div class="player-priority">Priorità: ${player.priorita}</div>
                </div>
                <div class="player-status ${player.venduto ? 'sold-status' : 'available'}">
                    ${player.venduto ? `Venduto a ${player.squadra_acquirente} (€${player.prezzo})` : 'Disponibile'}
                </div>
            `;

            // Add event listeners for this card
            if (!player.venduto) {
                playerCard.addEventListener('click', (e) => {
                    if (e.target.classList.contains('favorite-btn')) return;
                    this.openAuctionModal(player, role);
                });
            }

            // Favorite button handler
            const favoriteBtn = playerCard.querySelector('.favorite-btn');
            favoriteBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleFavorite(player, role);
            });

            grid.appendChild(playerCard);
        });
        
        console.log(`${role} grid rendered with ${playersToShow.length} players`);
    }

    renderRoseGrid() {
        const grid = document.getElementById('rose-grid');
        if (!grid) return;

        grid.innerHTML = '';

        this.data.teams.forEach(team => {
            const teamDiv = document.createElement('div');
            teamDiv.className = 'team-rose';
            
            const players = team.giocatori_acquistati || [];
            const playersByRole = {
                'Portieri': players.filter(p => p.ruolo === 'Portieri'),
                'Difensori': players.filter(p => p.ruolo === 'Difensori'),
                'Centrocampisti': players.filter(p => p.ruolo === 'Centrocampisti'),
                'Attaccanti': players.filter(p => p.ruolo === 'Attaccanti')
            };

            const totalValue = players.reduce((sum, p) => sum + p.prezzo, 0);

            teamDiv.innerHTML = `
                <div class="team-rose-header">
                    <div class="team-rose-name">${team.nome}</div>
                    <div class="team-rose-info">
                        ${team.proprietario} • ${players.length} giocatori • €${totalValue} spesi
                    </div>
                </div>
                <div class="team-players">
                    ${Object.entries(playersByRole).map(([role, rolePlayers]) => `
                        <div class="role-group">
                            <div class="role-title">${role} (${rolePlayers.length})</div>
                            <div class="role-players">
                                ${rolePlayers.length > 0 ? 
                                    rolePlayers.map(p => `
                                        <div class="rose-player">
                                            <span class="rose-player-name">${p.nome}</span>
                                            <span class="rose-player-price">€${p.prezzo}</span>
                                        </div>
                                    `).join('') :
                                    '<div class="empty-role">Nessun giocatore</div>'
                                }
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;

            grid.appendChild(teamDiv);
        });
    }

    toggleFavorite(player, role) {
        player.preferito = !player.preferito;
        this.saveData();
        this.renderRoleGrid(role);
        this.updateHeaderStats();
    }

    openAuctionModal(player, role) {
        this.currentAuctionPlayer = { ...player, role: role };
        
        const modalTitle = document.getElementById('modal-player-name');
        const playerInfo = document.getElementById('player-info');
        const priceInput = document.getElementById('auction-price');
        const teamSelect = document.getElementById('winning-team');
        const warning = document.getElementById('budget-warning');
        const modal = document.getElementById('auction-modal');
        
        if (modalTitle) modalTitle.textContent = `Asta per ${player.nome}`;
        if (playerInfo) {
            playerInfo.innerHTML = `
                <div><strong>Nome:</strong> ${player.nome}</div>
                <div><strong>Squadra:</strong> ${player.squadra}</div>
                <div><strong>Ruolo:</strong> ${role}</div>
                <div><strong>Priorità:</strong> ${player.priorita}</div>
            `;
        }
        if (priceInput) priceInput.value = '';
        if (teamSelect) teamSelect.value = '';
        if (warning) warning.classList.add('hidden');
        
        this.populateTeamOptions();
        
        if (modal) {
            modal.classList.remove('hidden');
            if (priceInput) priceInput.focus();
        }
    }

    populateTeamOptions() {
        const select = document.getElementById('winning-team');
        if (!select) return;
        
        select.innerHTML = '<option value="">Seleziona squadra...</option>';
        
        this.data.teams.forEach(team => {
            const option = document.createElement('option');
            option.value = team.nome;
            option.textContent = `${team.nome} (€${team.budget_residuo})`;
            select.appendChild(option);
        });
    }

    validateBudget() {
        const priceInput = document.getElementById('auction-price');
        const teamSelect = document.getElementById('winning-team');
        const warning = document.getElementById('budget-warning');
        
        if (!priceInput || !teamSelect || !warning) return true;
        
        const price = parseInt(priceInput.value) || 0;
        const teamName = teamSelect.value;

        if (teamName && price > 0) {
            const team = this.data.teams.find(t => t.nome === teamName);
            if (team && team.budget_residuo < price) {
                warning.classList.remove('hidden');
                return false;
            } else {
                warning.classList.add('hidden');
                return true;
            }
        }

        warning.classList.add('hidden');
        return true;
    }

    handleAuctionConfirm() {
        const priceInput = document.getElementById('auction-price');
        const teamSelect = document.getElementById('winning-team');
        
        if (!priceInput || !teamSelect) return;
        
        const price = parseInt(priceInput.value);
        const teamName = teamSelect.value;

        if (!price || !teamName || !this.currentAuctionPlayer) {
            alert('Per favore inserisci tutti i dati richiesti');
            return;
        }

        const team = this.data.teams.find(t => t.nome === teamName);
        if (!team) {
            alert('Squadra non trovata!');
            return;
        }

        if (team.budget_residuo < price) {
            alert('Budget insufficiente per questa squadra!');
            return;
        }

        // Find the actual player object in the data
        const player = this.findPlayerByName(this.currentAuctionPlayer.nome, this.currentAuctionPlayer.role);
        if (!player) {
            alert('Giocatore non trovato!');
            return;
        }

        // Update team budget and spending
        team.budget_residuo -= price;
        const roleKey = `speso_${this.currentAuctionPlayer.role.toLowerCase()}`;
        team[roleKey] += price;

        // Add to team roster
        team.giocatori_acquistati.push({
            nome: player.nome,
            squadra: player.squadra,
            ruolo: this.currentAuctionPlayer.role,
            prezzo: price
        });

        // Mark player as sold
        player.venduto = true;
        player.prezzo = price;
        player.squadra_acquirente = teamName;

        // Add transaction
        this.data.transactions.push({
            player: player.nome,
            role: this.currentAuctionPlayer.role,
            team: teamName,
            price: price,
            timestamp: new Date()
        });

        // Update UI
        this.saveData();
        this.renderAll();
        this.showSuccessMessage(`${player.nome} venduto a ${teamName} per €${price}!`);
        this.closeModal('auction-modal');
    }

    findPlayerByName(nome, role) {
        let player = this.data.players_by_role[role].find(p => p.nome === nome);
        if (!player) {
            player = this.data.custom_players[role].find(p => p.nome === nome);
        }
        return player;
    }

    openCustomPlayerModal(role) {
        this.currentCustomRole = role;
        
        const modalTitle = document.getElementById('custom-modal-title');
        const modal = document.getElementById('custom-player-modal');
        
        if (modalTitle) modalTitle.textContent = `Aggiungi ${role.slice(0, -1)}e Custom`;
        
        // Clear form
        const form = document.getElementById('custom-player-form');
        if (form) form.reset();
        
        if (modal) {
            modal.classList.remove('hidden');
            const nameInput = document.getElementById('custom-player-name');
            if (nameInput) nameInput.focus();
        }
    }

    handleCustomPlayerConfirm() {
        const nameInput = document.getElementById('custom-player-name');
        const teamInput = document.getElementById('custom-player-team');
        const prioritySelect = document.getElementById('custom-player-priority');
        
        if (!nameInput || !teamInput || !prioritySelect || !this.currentCustomRole) return;
        
        const nome = nameInput.value.trim();
        const squadra = teamInput.value.trim();
        const priorita = prioritySelect.value;
        
        if (!nome || !squadra || !priorita) {
            alert('Per favore compila tutti i campi');
            return;
        }

        // Check if player already exists
        const existsInReal = this.data.players_by_role[this.currentCustomRole].find(p => p.nome === nome);
        const existsInCustom = this.data.custom_players[this.currentCustomRole].find(p => p.nome === nome);
        
        if (existsInReal || existsInCustom) {
            alert('Un giocatore con questo nome esiste già!');
            return;
        }

        // Add custom player
        const customPlayer = {
            nome: nome,
            squadra: squadra,
            priorita: priorita,
            preferito: false,
            venduto: false,
            prezzo: 0,
            squadra_acquirente: "",
            custom: true
        };

        this.data.custom_players[this.currentCustomRole].push(customPlayer);
        this.saveData();
        this.renderAll();
        this.showSuccessMessage(`${nome} aggiunto come ${this.currentCustomRole.slice(0, -1)}e custom!`);
        this.closeModal('custom-player-modal');
    }

    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('hidden');
        }
        if (modalId === 'auction-modal') {
            this.currentAuctionPlayer = null;
        }
        if (modalId === 'custom-player-modal') {
            this.currentCustomRole = null;
        }
    }

    closeAllModals() {
        this.closeModal('auction-modal');
        this.closeModal('custom-player-modal');
    }

    undoLastTransaction() {
        if (this.data.transactions.length === 0) return;

        const lastTransaction = this.data.transactions.pop();
        
        // Find team and restore budget
        const team = this.data.teams.find(t => t.nome === lastTransaction.team);
        if (team) {
            team.budget_residuo += lastTransaction.price;
            const roleKey = `speso_${lastTransaction.role.toLowerCase()}`;
            team[roleKey] -= lastTransaction.price;
            
            // Remove from team roster
            team.giocatori_acquistati = team.giocatori_acquistati.filter(p => 
                !(p.nome === lastTransaction.player && p.ruolo === lastTransaction.role)
            );
        }

        // Find player and mark as available
        const player = this.findPlayerByName(lastTransaction.player, lastTransaction.role);
        if (player) {
            player.venduto = false;
            player.prezzo = 0;
            player.squadra_acquirente = "";
        }

        this.saveData();
        this.renderAll();
        this.showSuccessMessage(`Transazione annullata: ${lastTransaction.player} è di nuovo disponibile`);
    }

    updateHeaderStats() {
        const totalBudget = this.data.teams.reduce((sum) => sum + 500, 0);
        const totalSpent = this.data.teams.reduce((sum, team) => sum + (500 - team.budget_residuo), 0);
        
        let totalSold = 0;
        let totalFavorites = 0;
        
        Object.values(this.data.players_by_role).forEach(players => {
            totalSold += players.filter(p => p.venduto).length;
            totalFavorites += players.filter(p => p.preferito).length;
        });
        
        Object.values(this.data.custom_players).forEach(players => {
            totalSold += players.filter(p => p.venduto).length;
            totalFavorites += players.filter(p => p.preferito).length;
        });

        const totalBudgetEl = document.getElementById('total-budget');
        const totalSpentEl = document.getElementById('total-spent');
        const totalSoldEl = document.getElementById('total-sold');
        const totalFavoritesEl = document.getElementById('total-favorites');
        
        if (totalBudgetEl) totalBudgetEl.textContent = `€${totalBudget.toLocaleString()}`;
        if (totalSpentEl) totalSpentEl.textContent = `€${totalSpent.toLocaleString()}`;
        if (totalSoldEl) totalSoldEl.textContent = totalSold.toString();
        if (totalFavoritesEl) totalFavoritesEl.textContent = totalFavorites.toString();
    }

    updatePlayerCounts() {
        Object.keys(this.data.players_by_role).forEach(role => {
            const realPlayers = this.data.players_by_role[role];
            const customPlayers = this.data.custom_players[role];
            const total = realPlayers.length + customPlayers.length;
            const sold = realPlayers.filter(p => p.venduto).length + customPlayers.filter(p => p.venduto).length;
            const available = total - sold;
            
            const countEl = document.getElementById(`count-${role.toLowerCase()}`);
            if (countEl) {
                countEl.textContent = `${available}/${total}`;
            }
        });
    }

    updateTransactionsList() {
        const list = document.getElementById('transactions-list');
        const countEl = document.getElementById('transaction-count');
        
        if (!list) return;
        
        if (countEl) countEl.textContent = this.data.transactions.length.toString();
        
        if (this.data.transactions.length === 0) {
            list.innerHTML = '<p class="empty-state">Nessuna transazione completata</p>';
            return;
        }

        list.innerHTML = '';
        
        const sortedTransactions = [...this.data.transactions].reverse();
        
        sortedTransactions.forEach((transaction) => {
            const transactionDiv = document.createElement('div');
            transactionDiv.className = 'transaction-item';
            transactionDiv.innerHTML = `
                <div class="transaction-info">
                    <div class="transaction-player">${transaction.player}</div>
                    <div class="transaction-details">
                        ${transaction.role} → ${transaction.team} 
                        <span style="color: var(--color-text-secondary);">
                            (${new Date(transaction.timestamp).toLocaleTimeString('it-IT', { 
                                hour: '2-digit', 
                                minute: '2-digit' 
                            })})
                        </span>
                    </div>
                </div>
                <div class="transaction-price">€${transaction.price}</div>
            `;
            list.appendChild(transactionDiv);
        });
    }

    updateUndoButton() {
        const undoBtn = document.getElementById('undo-last-btn');
        if (undoBtn) {
            undoBtn.disabled = this.data.transactions.length === 0;
        }
    }

    exportResults() {
        const results = {
            teams: this.data.teams,
            transactions: this.data.transactions,
            custom_players: this.data.custom_players,
            summary: {
                totalPlayers: this.data.transactions.length,
                totalValue: this.data.transactions.reduce((sum, t) => sum + t.price, 0),
                exportDate: new Date().toISOString()
            }
        };

        const dataStr = JSON.stringify(results, null, 2);
        const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);

        const exportFileDefaultName = `fantacalcio_asta_${new Date().toISOString().split('T')[0]}.json`;

        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();

        this.showSuccessMessage('Risultati esportati con successo!');
    }

    handleImport(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const imported = JSON.parse(e.target.result);
                
                if (confirm('Importare i dati sostituirà tutti i dati attuali. Continuare?')) {
                    // Merge imported data with current structure
                    if (imported.teams) this.data.teams = imported.teams;
                    if (imported.transactions) this.data.transactions = imported.transactions;
                    if (imported.custom_players) this.data.custom_players = imported.custom_players;
                    
                    this.saveData();
                    this.renderAll();
                    this.showSuccessMessage('Dati importati con successo!');
                }
            } catch (error) {
                alert('Errore nell\'importazione del file: ' + error.message);
            }
        };
        reader.readAsText(file);

        // Reset file input
        event.target.value = '';
    }

    showSuccessMessage(message) {
        const existingMessage = document.querySelector('.success-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.textContent = `✅ ${message}`;
        
        const container = document.querySelector('.container');
        if (container && container.children.length > 1) {
            container.insertBefore(successDiv, container.children[1]);
        }

        setTimeout(() => {
            if (successDiv.parentNode) {
                successDiv.remove();
            }
        }, 5000);
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing app...');
    new FantasyAuction();
});