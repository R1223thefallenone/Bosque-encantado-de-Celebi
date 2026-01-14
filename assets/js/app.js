   // -------------------- Data (CSV Kanto 1-151) --------------------
    const csv = `#,Name,Type 1,Type 2,Total,HP,Attack,Defense,Sp. Atk,Sp. Def,Speed,Generation,Legendary
1,Bulbasaur,Grass,Poison,318,45,49,49,65,65,45,1,False
2,Ivysaur,Grass,Poison,405,60,62,63,80,80,60,1,False
3,Venusaur,Grass,Poison,525,80,82,83,100,100,80,1,False
4,Charmander,Fire,,309,39,52,43,60,50,65,1,False
5,Charmeleon,Fire,,405,58,64,58,80,65,80,1,False
6,Charizard,Fire,Flying,534,78,84,78,109,85,100,1,False
7,Squirtle,Water,,314,44,48,65,50,64,43,1,False
8,Wartortle,Water,,405,59,63,80,65,80,58,1,False
9,Blastoise,Water,,530,79,83,100,85,105,78,1,False
10,Caterpie,Bug,,195,45,30,35,20,20,45,1,False
11,Metapod,Bug,,205,50,20,55,25,25,30,1,False
12,Butterfree,Bug,Flying,395,60,45,50,90,80,70,1,False
13,Weedle,Bug,Poison,195,40,35,30,20,20,50,1,False
14,Kakuna,Bug,Poison,205,45,25,50,25,25,35,1,False
15,Beedrill,Bug,Poison,395,65,90,40,45,80,75,1,False
16,Pidgey,Normal,Flying,251,40,45,40,35,35,56,1,False
17,Pidgeotto,Normal,Flying,349,63,60,55,50,50,71,1,False
18,Pidgeot,Normal,Flying,479,83,80,75,70,70,101,1,False
19,Rattata,Normal,,253,30,56,35,25,35,72,1,False
20,Raticate,Normal,,413,55,81,60,50,70,97,1,False
21,Spearow,Normal,Flying,262,40,60,30,31,31,70,1,False
22,Fearow,Normal,Flying,442,65,90,65,61,61,100,1,False
23,Ekans,Poison,,288,35,60,44,40,54,55,1,False
24,Arbok,Poison,,438,60,85,69,65,79,80,1,False
25,Pikachu,Electric,,320,35,55,40,50,50,90,1,False
26,Raichu,Electric,,485,60,90,55,90,80,110,1,False
27,Sandshrew,Ground,,300,50,75,85,20,30,40,1,False
28,Sandslash,Ground,,450,75,100,110,45,55,65,1,False
29,Nidoran♀,Poison,,275,55,47,52,40,40,41,1,False
30,Nidorina,Poison,,365,70,62,67,55,55,56,1,False
31,Nidoqueen,Poison,Ground,505,90,92,87,75,85,76,1,False
32,Nidoran♂,Poison,,273,46,57,40,40,40,50,1,False
33,Nidorino,Poison,,365,61,72,57,55,55,65,1,False
34,Nidoking,Poison,Ground,505,81,102,77,85,75,85,1,False
35,Clefairy,Fairy,,323,70,45,48,60,65,35,1,False
36,Clefable,Fairy,,483,95,70,73,95,90,60,1,False
37,Vulpix,Fire,,299,38,41,40,50,65,65,1,False
38,Ninetales,Fire,,505,73,76,75,81,100,100,1,False
39,Jigglypuff,Normal,Fairy,270,115,45,20,45,25,20,1,False
40,Wigglytuff,Normal,Fairy,435,140,70,45,85,50,45,1,False
41,Zubat,Poison,Flying,245,40,45,35,30,40,55,1,False
42,Golbat,Poison,Flying,455,75,80,70,65,75,90,1,False
43,Oddish,Grass,Poison,320,45,50,55,75,65,30,1,False
44,Gloom,Grass,Poison,395,60,65,70,85,75,40,1,False
45,Vileplume,Grass,Poison,490,75,80,85,110,90,50,1,False
46,Paras,Bug,Grass,285,35,70,55,45,55,25,1,False
47,Parasect,Bug,Grass,405,60,95,80,60,80,30,1,False
48,Venonat,Bug,Poison,305,60,55,50,40,55,45,1,False
49,Venomoth,Bug,Poison,450,70,65,60,90,75,90,1,False
50,Diglett,Ground,,265,10,55,25,35,45,95,1,False
51,Dugtrio,Ground,,405,35,80,50,50,70,120,1,False
52,Meowth,Normal,,290,40,45,35,40,40,90,1,False
53,Persian,Normal,,440,65,70,60,65,65,115,1,False
54,Psyduck,Water,,320,50,52,48,65,50,55,1,False
55,Golduck,Water,,500,80,82,78,95,80,85,1,False
56,Mankey,Fighting,,305,40,80,35,35,45,70,1,False
57,Primeape,Fighting,,455,65,105,60,60,70,95,1,False
58,Growlithe,Fire,,350,55,70,45,70,50,60,1,False
59,Arcanine,Fire,,555,90,110,80,100,80,95,1,False
60,Poliwag,Water,,300,40,50,40,40,40,90,1,False
61,Poliwhirl,Water,,385,65,65,65,50,50,90,1,False
62,Poliwrath,Water,Fighting,510,90,95,95,70,90,70,1,False
63,Abra,Psychic,,310,25,20,15,105,55,90,1,False
64,Kadabra,Psychic,,400,40,35,30,120,70,105,1,False
65,Alakazam,Psychic,,500,50,50,45,135,95,120,1,False
66,Machop,Fighting,,305,70,80,50,35,35,35,1,False
67,Machoke,Fighting,,405,80,100,70,50,60,45,1,False
68,Machamp,Fighting,,505,90,130,80,65,85,55,1,False
69,Bellsprout,Grass,Poison,300,50,75,35,70,30,40,1,False
70,Weepinbell,Grass,Poison,390,65,90,50,85,45,55,1,False
71,Victreebel,Grass,Poison,490,80,105,65,100,70,70,1,False
72,Tentacool,Water,Poison,335,40,40,35,50,100,70,1,False
73,Tentacruel,Water,Poison,515,80,70,65,80,120,100,1,False
74,Geodude,Rock,Ground,300,40,80,100,30,30,20,1,False
75,Graveler,Rock,Ground,390,55,95,115,45,45,35,1,False
76,Golem,Rock,Ground,495,80,120,130,55,65,45,1,False
77,Ponyta,Fire,,410,50,85,55,65,65,90,1,False
78,Rapidash,Fire,,500,65,100,70,80,80,105,1,False
79,Slowpoke,Water,Psychic,315,90,65,65,40,40,15,1,False
80,Slowbro,Water,Psychic,490,95,75,110,100,80,30,1,False
81,Magnemite,Electric,Steel,325,25,35,70,95,55,45,1,False
82,Magneton,Electric,Steel,465,50,60,95,120,70,70,1,False
83,Farfetch'd,Normal,Flying,352,52,65,55,58,62,60,1,False
84,Doduo,Normal,Flying,310,35,85,45,35,35,75,1,False
85,Dodrio,Normal,Flying,460,60,110,70,60,60,100,1,False
86,Seel,Water,,325,65,45,55,45,70,45,1,False
87,Dewgong,Water,Ice,475,90,70,80,70,95,70,1,False
88,Grimer,Poison,,325,80,80,50,40,50,25,1,False
89,Muk,Poison,,500,105,105,75,65,100,50,1,False
90,Shellder,Water,,305,30,65,100,45,25,40,1,False
91,Cloyster,Water,Ice,525,50,95,180,85,45,70,1,False
92,Gastly,Ghost,Poison,310,30,35,30,100,35,80,1,False
93,Haunter,Ghost,Poison,405,45,50,45,115,55,95,1,False
94,Gengar,Ghost,Poison,500,60,65,60,130,75,110,1,False
95,Onix,Rock,Ground,385,35,45,160,30,45,70,1,False
96,Drowzee,Psychic,,328,60,48,45,43,90,42,1,False
97,Hypno,Psychic,,483,85,73,70,73,115,67,1,False
98,Krabby,Water,,325,30,105,90,25,25,50,1,False
99,Kingler,Water,,475,55,130,115,50,50,75,1,False
100,Voltorb,Electric,,330,40,30,50,55,55,100,1,False
101,Electrode,Electric,,480,60,50,70,80,80,140,1,False
102,Exeggcute,Grass,Psychic,325,60,40,80,60,45,40,1,False
103,Exeggutor,Grass,Psychic,520,95,95,85,125,65,55,1,False
104,Cubone,Ground,,320,50,50,95,40,50,35,1,False
105,Marowak,Ground,,425,60,80,110,50,80,45,1,False
106,Hitmonlee,Fighting,,455,50,120,53,35,110,87,1,False
107,Hitmonchan,Fighting,,455,50,105,79,35,110,76,1,False
108,Lickitung,Normal,,385,90,55,75,60,75,30,1,False
109,Koffing,Poison,,340,40,65,95,60,45,35,1,False
110,Weezing,Poison,,490,65,90,120,85,70,60,1,False
111,Rhyhorn,Ground,Rock,345,80,85,95,30,30,25,1,False
112,Rhydon,Ground,Rock,485,105,130,120,45,45,40,1,False
113,Chansey,Normal,,450,250,5,5,35,105,50,1,False
114,Tangela,Grass,,435,65,55,115,100,40,60,1,False
115,Kangaskhan,Normal,,490,105,95,80,40,80,90,1,False
116,Horsea,Water,,295,30,40,70,70,25,60,1,False
117,Seadra,Water,,440,55,65,95,95,45,85,1,False
118,Goldeen,Water,,320,45,67,60,35,50,63,1,False
119,Seaking,Water,,450,80,92,65,65,80,68,1,False
120,Staryu,Water,,340,30,45,55,70,55,85,1,False
121,Starmie,Water,Psychic,520,60,75,85,100,85,115,1,False
122,Mr. Mime,Psychic,,460,40,45,65,100,120,90,1,False
123,Scyther,Bug,Flying,500,70,110,80,55,80,105,1,False
124,Jynx,Ice,Psychic,455,65,50,35,115,95,95,1,False
125,Electabuzz,Electric,,490,65,83,57,95,85,105,1,False
126,Magmar,Fire,,495,65,95,57,100,85,93,1,False
127,Pinsir,Bug,,500,65,125,100,55,70,85,1,False
128,Tauros,Normal,,490,75,100,95,40,70,110,1,False
129,Magikarp,Water,,200,20,10,55,15,20,80,1,False
130,Gyarados,Water,Flying,540,95,125,79,60,100,81,1,False
131,Lapras,Water,Ice,535,130,85,80,85,95,60,1,False
132,Ditto,Normal,,288,48,48,48,48,48,48,1,False
133,Eevee,Normal,,325,55,55,50,45,65,55,1,False
134,Vaporeon,Water,,525,130,65,60,110,95,65,1,False
135,Jolteon,Electric,,525,65,65,60,110,95,130,1,False
136,Flareon,Fire,,525,130,130,60,95,110,65,1,False
137,Porygon,Normal,,395,65,60,70,85,75,40,1,False
138,Omanyte,Rock,Water,355,35,40,100,90,55,35,1,False
139,Omastar,Rock,Water,495,70,60,125,115,70,55,1,False
140,Kabuto,Rock,Water,355,30,80,90,55,45,55,1,False
141,Kabutops,Rock,Water,495,60,115,105,65,70,80,1,False
142,Aerodactyl,Rock,Flying,515,80,105,65,60,75,130,1,False
143,Snorlax,Normal,,540,160,110,65,65,110,30,1,False
144,Articuno,Ice,Flying,580,90,85,100,95,125,85,1,True
145,Zapdos,Electric,Flying,580,90,90,85,125,90,100,1,True
146,Moltres,Fire,Flying,580,90,100,90,125,85,90,1,True
147,Dratini,Dragon,,300,41,64,45,50,50,50,1,False
148,Dragonair,Dragon,,420,61,84,65,70,70,70,1,False
149,Dragonite,Dragon,Flying,600,91,134,95,100,100,80,1,False
150,Mewtwo,Psychic,,680,106,110,90,154,90,130,1,True
151,Mew,Psychic,,600,100,100,100,100,100,100,1,False`;

    // -------------------- Core Functions --------------------
    function parseCSV(text){
      const lines = text.trim().split(/\n+/);
      const headers = lines[0].split(',');
      return lines.slice(1).map(l=>{const cols = l.split(','); let obj={}; headers.forEach((h,i)=>obj[h.trim()]=cols[i]); return obj});
    }

    // Mapeo de evoluciones para Kanto (solo los nombres)
    const manualEvo = {
      'Bulbasaur':['Ivysaur','Venusaur'],'Charmander':['Charmeleon','Charizard'],'Squirtle':['Wartortle','Blastoise'],
      'Caterpie':['Metapod','Butterfree'],'Weedle':['Kakuna','Beedrill'],'Pidgey':['Pidgeotto','Pidgeot'],'Rattata':['Raticate'],
      'Pikachu':['Raichu'],'Poliwag':['Poliwhirl','Poliwrath'],'Abra':['Kadabra','Alakazam'],'Machop':['Machoke','Machamp'],
      'Bellsprout':['Weepinbell','Victreebel'],'Magikarp':['Gyarados'],'Eevee':['Vaporeon','Jolteon','Flareon'],'Dratini':['Dragonair','Dragonite'],
      'Gastly':['Haunter','Gengar'],'Geodude':['Graveler','Golem'],'Oddish':['Gloom','Vileplume'],
      'Ekans':['Arbok'], 'Sandshrew':['Sandslash'], 'Mankey':['Primeape'], 'Growlithe':['Arcanine'], 
      'Seel':['Dewgong'], 'Grimer':['Muk'], 'Horsea':['Seadra'], 'Goldeen':['Seaking'],
      'Koffing':['Weezing'], 'Rhyhorn':['Rhydon'], 'Drowzee':['Hypno'], 'Krabby':['Kingler'],
      'Tentacool':['Tentacruel'], 'Ponyta':['Rapidash'], 'Slowpoke':['Slowbro'], 'Magnemite':['Magneton'],
      'Doduo':['Dodrio'], 'Shellder':['Cloyster'], 'Voltorb':['Electrode'], 'Exeggcute':['Exeggutor'],
      'Cubone':['Marowak'], 'Omanyte':['Omastar'], 'Kabuto':['Kabutops'], 'Kabutops':['Kabutops'],
      'Zubat':['Golbat'], 'Jigglypuff':['Wigglytuff'], 'Clefairy':['Clefable'], 'Meowth':['Persian'], 
      'Psyduck':['Golduck'], 'Venonat':['Venomoth'], 'Diglett':['Dugtrio'], 'Spearow':['Fearow'], 
      'Nidoran♀':['Nidorina', 'Nidoqueen'], 'Nidoran♂':['Nidorino', 'Nidoking'], 'Vulpix':['Ninetales'], 
      'Paras':['Parasect']
    };

    // Inicializa las estadísticas (EXP, Nivel, Estilo) de cualquier Pokémon del CSV
    function calculateStats(row){
      const HP=+row.HP, ATK=+row.Attack, SPA=+row['Sp. Atk'], DEF=+row.Defense, SPD=+row['Sp. Def'], SPEED=+row.Speed;
      const topOff = Math.max(ATK,SPA), topDef = Math.max(DEF,SPD);
      
      // Cálculo del coeficiente: (0.9 * HP + Máx(Off) + Máx(Def)) / Velocidad
      const coef = +( (0.9 * HP + topOff + topDef) / (SPEED||1) ).toFixed(2);
      let clas = ''; 

      // =================================================================
      // ALGORITMO DE BALANCE FINAL
      // =================================================================

      const name = row.Name;
      const technicalOverrideList = ['Bulbasaur', 'Ivysaur', 'Oddish', 'Paras', 'Venonat','Venusaur','Butterfree', 'Nidoqueen', 'Gloom', 'Vileplume', 'Venomoth','Tentacool'];
      const isTechnicalOverride = technicalOverrideList.includes(name);

      if (isTechnicalOverride) {
        clas = 'Técnico';
      }
      // 1. Clasificación FUERTE (coef > 4.25)
      else if (coef > 4.25) { 
          clas = 'Fuerte';
      }
      // 2. Clasificación RÁPIDO (Velocidad extrema)
      else if (SPEED >= 56 && coef < 2.5) {
          clas = 'Rápido';
      }
      // 2.5. Clasificación FUERTE (Promoción por Coeficiente Intermedio + Lento)
      else if (SPEED < 60 && coef >= 3.25) {
          clas = 'Fuerte';
      }
      // 3. Diferenciación para el resto (coef <= 4.25 y no override)
      else { 
          if (SPEED < 68) {
              clas = 'Técnico';
          }
          else {
              clas = 'Ofensivo';
          }
      }

      let vidas = 0;
      if (clas === 'Rápido') {
          vidas = 3; 
      }
      else if (clas === 'Ofensivo' || clas === 'Técnico') {
          vidas = 3; 
      }
      else { // clas === 'Fuerte'
          // 5 Vidas si coef > 5.20. 4 si es menor.
          vidas = (coef > 5.20) ? 5 : 4; 
          
          // --- NUEVA REGLA DE CAPADO PARA ETAPA 1 FUERTE ---
          
          // Identificamos si el Pokémon es una forma básica que tiene al menos una evolución posterior.
          // Si su nombre es una clave en manualEvo, es una Etapa 1 que evoluciona.
          const hasSubsequentEvolution = Object.keys(manualEvo).includes(name);

          if (hasSubsequentEvolution && vidas === 5) {
              // Si es un BÁSICO que evoluciona (Etapa 1), es Fuerte, y el algoritmo le dio 5, se capa a 4.
              // Esto no afecta a Snorlax o Rhydon. Afecta a Rhyhorn (5.86 -> 4), Slowpoke (7.5 -> 4), Geodude (5.5 -> 4), etc.
              vidas = 4;
          }
      }

      const poke = {
        id:+row['#'], name:row.Name, type1:row['Type 1'], type2:row['Type 2'],
        clas:clas, 
        vidas:vidas, 
        exp:0, level:1, evoThresholds:[4,10], 
        spriteId: +row['#'],
        speed: SPEED,
        coef: coef 
      };
      return poke;
    }

    // Lista de Pokédex con TODOS los datos base (151 filas del CSV)
    const pokedexData = parseCSV(csv);
    
    // Mapa de TODAS las estadísticas de los 151 Pokémon por nombre para búsqueda rápida
    const allPokesMap = new Map();
    pokedexData.forEach(p => {
        allPokesMap.set(p.Name, calculateStats(p));
    });

    // Lista completa de 151 Pokémon para la lista izquierda
    const pokedex = pokedexData.map(row => calculateStats(row));

    // Mapa para rastrear el estado mutable: CLAVE = ID del Pokémon seleccionado inicialmente
    const mutableStateMapByCurrentID = new Map();

    // Estado de la Aplicación
    const state = {
      pokedex: pokedex, 
      filtered: [],
      currentPokemon: null, 
      selectedID: null 
    };

    // -------------------- Utility Functions --------------------
    const $ = id => document.getElementById(id);

    function log(t, isEvent = false){ 
      const L=$('log'); 
      const row = document.createElement('div'); 
      row.className = isEvent ? 'event' : '';
      row.innerHTML = `[${new Date().toLocaleTimeString('es-ES').slice(0,-3)}] ${t}`; 
      L.prepend(row); 
    }

    function updateControls(enabled) {
      ['addExp', 'subExp', 'addLife', 'subLife', 'rollBtn', 'resetBtn'].forEach(id => {
        $(id).disabled = !enabled;
      });
    }

    function getBaseName(pName){
        let name = pName;
        while(Object.values(manualEvo).flat().includes(name)){
            const base = Object.keys(manualEvo).find(key => manualEvo[key].includes(name));
            if (base) name = base;
            else break;
        }
        return name;
    }
    
    function getEvoChain(baseName){
        return manualEvo[baseName] || [];
    }

    // -------------------- Game Logic --------------------
    
    function getEvoGoal(p){
      const baseName = getBaseName(p.name);
      const chain = getEvoChain(baseName);

      if (chain.length === 0) return '∞';

      let levelAtThisStage;

      if (p.name === baseName) {
          levelAtThisStage = 1;
      } else if (chain[0] && p.name === chain[0]) {
          levelAtThisStage = 2;
      } else if (chain[1] && p.name === chain[1]) {
          levelAtThisStage = 3;
      } else {
          return '∞'; 
      }
      
      if (levelAtThisStage === 1) {
          return p.evoThresholds[0] || 4; 
      } else if (levelAtThisStage === 2) {
          return p.evoThresholds[1] || 10; 
      } else {
          return '∞'; 
      }
    }

    function checkEvo(p){
      const goal = getEvoGoal(p);
      if(goal === '∞' || p.exp < goal) return; 

      p.exp = 0; 
      p.level += 1;

      const baseName = getBaseName(p.name);
      const chain = getEvoChain(baseName);

      let nextName;
      if (p.level === 2 && chain[0] && p.name === baseName) {
          nextName = chain[0];
      } else if (p.level === 3 && chain[1] && p.name === chain[0]) {
          nextName = chain[1];
      } else {
          if (p === state.currentPokemon) {
              renderSheet(p);
              log(`¡${p.name} subió a Etapa ${p.level} y es su etapa final!`, true);
          }
          return; 
      }

      const evolvedStats = allPokesMap.get(nextName);
      if (evolvedStats) {
          p.name = evolvedStats.name; 
          p.type1 = evolvedStats.type1;
          p.type2 = evolvedStats.type2;
          p.clas = evolvedStats.clas;
          p.spriteId = evolvedStats.id; 
          p.vidas = Math.min(100, p.vidas + 1); 
          p.speed = evolvedStats.speed; 
          p.coef = evolvedStats.coef; 

          if (p === state.currentPokemon) {
              renderSheet(p);
              animateEvo();
              log(`¡${p.name} evolucionó a ${evolvedStats.name}! (Etapa ${p.level})`, true);
          }
      }
    }

    function rollD20(){ return Math.floor(Math.random()*20)+1; }
    function animateEvo(){ const big = $('bigSprite').querySelector('img'); if(big) { big.style.transform='scale(1.06)'; setTimeout(()=>big.style.transform='scale(1)',400); } }


    // -------------------- UI Functions --------------------

    async function selectPokemon(p){
      let pState = mutableStateMapByCurrentID.get(p.id);

      if (!pState) {
          // Inicializa el estado con los valores base (incluyendo la clase recalculada)
          pState = JSON.parse(JSON.stringify(p)); 

          const baseName = getBaseName(p.name);
          pState.baseName = baseName;
          
          const chain = getEvoChain(baseName);
          if (pState.name !== baseName) {
              pState.level = chain.indexOf(p.name) + 2; 
              pState.exp = 0; 
          } else {
              pState.level = 1;
              pState.exp = 0;
          }
          
          const currentBaseStats = allPokesMap.get(p.name);
          if (currentBaseStats) {
              pState.vidas = currentBaseStats.vidas;
              pState.speed = currentBaseStats.speed; 
              pState.clas = currentBaseStats.clas; // Usamos la clase del mapa que tiene el nuevo algoritmo
          }
          
          mutableStateMapByCurrentID.set(p.id, pState);
      }
      
      if (state.selectedID) {
          const prevCard = document.querySelector(`.poke-card[data-id="${state.selectedID}"]`);
          if (prevCard) prevCard.style.border = '1px solid rgba(0,0,0,0.05)';
      }
      
      state.currentPokemon = pState; 
      state.selectedID = p.id; 
      
      const currentCard = document.querySelector(`.poke-card[data-id="${state.selectedID}"]`);
      if (currentCard) currentCard.style.border = `2px solid var(--accent)`;

      renderSheet(pState); 
      updateControls(true); 

      log(`Seleccionado ${pState.name} (Etapa ${pState.level})`);
    }

    function renderSheet(p){
      const currentBaseStats = allPokesMap.get(p.name);
      // Usamos la velocidad del Pokémon en su etapa actual
      const pokeSpeed = currentBaseStats ? currentBaseStats.speed : p.speed;

      $('pokeName').textContent = p.name;
      $('expNum').textContent = p.exp;
      $('lifeNum').textContent = p.vidas; 
      
      // Iconos de Estilo
      $('styleIcon').textContent = p.clas==='Rápido'?'⚡':(p.clas==='Técnico'?'⭐':(p.clas==='Ofensivo'?'⚔️':'💥'));
      $('styleText').textContent = p.clas;
      $('levelNum').textContent = p.level;
      
      // Mostrar la velocidad
      $('speedStat').textContent = `Velocidad: ${pokeSpeed}`;
      $('speedStat').style.display='flex'; 

      const goal = getEvoGoal(p);
      const expPercent = goal === '∞' ? 100 : (p.exp / goal) * 100;

      $('expBarProgress').style.width = `${Math.min(100, expPercent)}%`;

      const bigSprite = $('bigSprite');
      bigSprite.innerHTML = ''; 
      const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${p.spriteId}.png`;
      const img = document.createElement('img');
      img.src = spriteUrl;
      img.alt = p.name;
      img.onerror = () => { bigSprite.textContent = '❓'; }; 
      bigSprite.appendChild(img);

      showStyleDescription(p.clas);
    }

    function renderList(list = state.pokedex){
      list.sort((a,b) => a.id - b.id);
      
      state.filtered = list;
      const listArea = $('listArea');
      listArea.innerHTML='';
      state.filtered.forEach(p=>{
        const el = document.createElement('div'); el.className='poke-card';
        el.setAttribute('data-id', p.id); 
        const spriteUrlSmall = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`;
        const spriteHtml = `<img src="${spriteUrlSmall}" alt="${p.name}" onerror="this.outerHTML='${p.id}'"/>`;
        el.innerHTML = `<div class='mini-sprite'>${spriteHtml}</div><div class='meta'><strong>${p.id}. ${p.name}</strong><small>${p.clas} • ${p.vidas} vidas</small></div>`;
        
        el.onclick = ()=>selectPokemon(p);
        listArea.appendChild(el);
        
        if (state.selectedID === p.id) {
            el.style.border = `2px solid var(--accent)`;
        } else {
            el.style.border = '1px solid rgba(0,0,0,0.05)';
        }
      });
    }

    // Descripciones de Estilo Actualizadas con las reglas de combate finales
    function showStyleDescription(clas){
      const desc = $('styleDescription');
      desc.style.display='block';
      desc.innerHTML = '';
      
      // Obtenemos las vidas base del Pokémon actualmente seleccionado, asegurándonos de que esté en el estado mutable.
      const p = state.currentPokemon;
      const currentVidas = p ? p.vidas : 0;
      
      if(clas==='Fuerte'){
        desc.innerHTML = `<strong>Fuerte 💥 (${currentVidas} Vidas Base)</strong><p>💥 hace <strong>2 corazones</strong> de daño si en la tirada de d20 obtienes un número <strong>mayor o igual a 13</strong> (13–20).<br><em>Habilidad: Daño colateral, si obtienes un 1 o 2 dañas en 1 corazon al rival .</em></p>`;
      } else if(clas==='Ofensivo'){ 
        desc.innerHTML = `<strong>Ofensivo ⚔️ (${currentVidas} Vidas Base)</strong><p>⚔️ hace <strong>2 corazones</strong> de daño si en la tirada de d20 obtienes un número <strong>mayor o igual a 13</strong> (13–20).<br><em>Habilidad: Golpe critico, si obtienes un 20 golpeas con de 3 corazones al rival.</em></p>`;
      } else if(clas==='Técnico'){
        desc.innerHTML = `<strong>Técnico ⭐ (${currentVidas} Vidas Base)</strong><p>⭐ hace <strong>1 corazón</strong> de daño si sacas <strong>12 o más</strong> en d20. Además, si obtienes <strong>1,2,3</strong> o <strong>20</strong>, se aplica un <strong>problema de estado</strong>.<p><div style="margin-top:8px;font-size:13px;color:var(--muted)">Habilidad: Problema de estado, si quema o envenena el pokemon rival pierde 1 corazon cada turno. Si paraliza el pokemon rival no puede atacar a menos que en su turno al lanzar una moneda obtenga cara ||(Envenena:Planta,Bicho,Veneno) (Quema:Fuego) (Paraliza:El resto de los tecnicos)|| .</div>`;
      } else { // Rápido
        desc.innerHTML = `<strong>Rápido ⚡ (${currentVidas} Vidas Base)</strong><p>⚡ hace <strong>1 corazón</strong> de daño si sacas <strong>10 o más</strong> en d20. Si sacas <strong>18-20</strong>, el golpe es **Critico**.</p><div style="margin-top:8px;font-size:13px;color:var(--muted)"></div>`;
      }
    }

    // -------------------- Event Handlers --------------------

    function handleSearchAndFilter(){
      const q=$('search').value.toLowerCase();
      const v=$('filter').value;
      let list = state.pokedex.filter(p=>
        p.name.toLowerCase().includes(q) ||
        (p.type1 && p.type1.toLowerCase().includes(q)) ||
        (p.type2 && p.type2.toLowerCase().includes(q))
      );
      if(v!=='all') list = list.filter(p=>p.clas===v);
      renderList(list);
    }
    $('search').addEventListener('input', handleSearchAndFilter);
    $('filter').addEventListener('change', handleSearchAndFilter);

    $('addExp').onclick = ()=>{
      const p=state.currentPokemon; if(!p) return;
      p.exp += 1;
      checkEvo(p);
      renderSheet(p);
      saveAll();
    }
    $('subExp').onclick = ()=>{
      const p=state.currentPokemon; if(!p) return;
      p.exp = Math.max(0,p.exp-1);
      renderSheet(p);
      saveAll();
    }
    $('addLife').onclick = ()=>{
      const p=state.currentPokemon; if(!p) return;
      p.vidas = Math.min(100,p.vidas+1);
      renderSheet(p);
      saveAll();
    }
    $('subLife').onclick = ()=>{
      const p=state.currentPokemon; if(!p) return;
      p.vidas = Math.max(0,p.vidas-1);
      renderSheet(p);
      saveAll();
    }
    
    // FUNCIÓN CRÍTICA: Reseteo (Rojo)
    $('resetBtn').onclick = ()=>{
      const p=state.currentPokemon; if(!p) return;
      
      const initialVisual = state.pokedex.find(x => x.id === state.selectedID); 
      
      if (initialVisual) {
        
        p.exp = 0;
        
        const baseStats = allPokesMap.get(initialVisual.name);
        p.vidas = baseStats.vidas; 
        
        p.name = initialVisual.name;
        p.clas = initialVisual.clas;
        p.spriteId = initialVisual.id; 
        
        const baseName = getBaseName(initialVisual.name);
        const chain = getEvoChain(baseName);
        
        let calculatedLevel = 1;
        if (chain.includes(initialVisual.name)) {
            calculatedLevel = chain.indexOf(initialVisual.name) + 2; 
        } else if (initialVisual.name === baseName) {
            calculatedLevel = 1;
        }

        p.level = calculatedLevel;

        renderSheet(p);
        renderList(); 
        saveAll();
        log(`Reset completado: ${initialVisual.name} restaurado a Etapa ${p.level} (EXP 0/${getEvoGoal(p)}).`, true);
      }
    }

    // FUNCIÓN CRÍTICA: Dado (Negro) - Lógica de acierto con las nuevas reglas
    $('rollBtn').onclick = ()=>{
      const p=state.currentPokemon; if(!p) return;
      const r=rollD20();
      $('rollResult').textContent = `Resultado: d20 = ${r}`;

      const clas = p.clas;

      let logMsg = `Tirada ${r} → ${clas}: `;
      
      let resultText = "No acierta."; 

      // Lógica de acierto y efectos según la clase
      if(clas==='Fuerte'){
        if(r>=13){ // Fuerte: >= 14 para 2 daño
          resultText = `Resultado de **Fuerte**: ¡Acierta! (2 corazones)`;
        } else {
          resultText = `Resultado de **Fuerte**: Falla (necesita 13+)`;
        }
        if(r===1 || r===2){
          resultText += ` | ¡Daño colateral!`;
        }
      } else if(clas==='Ofensivo'){ 
        if(r>=13){ // Ofensivo: >= 13 para 2 daño
          resultText = `Resultado de **Ofensivo**: ¡Acierta! (2 corazones)`;
        } else {
          resultText = `Resultado de **Ofensivo**: Falla (necesita 13+)`;
        }
        if(r===20)     {
          resultText += ` | ¡Critico!`;
        }
      } else if(clas==='Técnico'){
        if(r>=12){ // Técnico: >= 11 para 1 daño
          resultText = `Resultado de **Técnico**: ¡Acierta! (1 corazón)`;
        } else {
          resultText = `Resultado de **Técnico**: Falla (necesita 12+)`;
        }
        if(r===1 || r===2 || r===3 || r===20){
          resultText += ` | ¡Problema de estado aplicable!`;
        }
      } else { // Rápido
        if(r>=10){ // Rápido: >= 8 para 1 daño
          resultText = `Resultado de **Rápido**: ¡Acierta! (1 corazón)`;
        } else {
          resultText = `Resultado de **Rápido**: Falla (necesita 10+)`;
        }
        if(r===18 || r===19 || r===20)     {
          resultText += ` | ¡Critico!`;
        }
      }
      
      let isHit = (clas === 'Rápido' && r >= 10) || 
                  (clas === 'Técnico' && r >= 12) || 
                  (clas === 'Ofensivo' && r >= 13) || 
                  (clas === 'Fuerte' && r >= 13);

      log(`${logMsg}${resultText}`, isHit); 

      saveAll(); 
    };

    // -------------------- Persistence (localStorage) --------------------
    function saveAll(){
      const saveData = Array.from(mutableStateMapByCurrentID.values()).map(p=>({
        id:p.id, 
        name:p.name, 
        exp:p.exp,
        level:p.level,
        vidas:p.vidas,
        spriteId: p.spriteId,
        baseName: p.baseName,
        speed: p.speed 
      }));
      localStorage.setItem('pokestate_151_dynamic', JSON.stringify(saveData));
      localStorage.setItem('selectedPokeId_151_dynamic', state.selectedID);
    }

    // Carga de Datos
    function loadAll(){
      try{
        const raw = JSON.parse(localStorage.getItem('pokestate_151_dynamic')||'[]');
        
        raw.forEach(r=>{
          const initialStats = state.pokedex.find(x => x.id === r.id);
          if(!initialStats) return;

          // Re-calculamos las stats para asegurar que la clase se actualice con la nueva lógica
          const updatedStats = allPokesMap.get(r.name) || initialStats;

          const pState = {
            id: r.id,
            name: r.name,
            exp: r.exp,
            level: r.level,
            vidas: r.vidas,
            spriteId: r.spriteId,
            baseName: r.baseName,
            // Tomamos la clase y velocidad recalculadas de la tabla base actualizada
            clas: updatedStats.clas,
            evoThresholds: [4, 10],
            speed: updatedStats.speed
          };
          mutableStateMapByCurrentID.set(r.id, pState);
        });

        const selectedId = localStorage.getItem('selectedPokeId_151_dynamic');
        if (selectedId) {
            const selectedPoke = state.pokedex.find(p => p.id === parseInt(selectedId));
            if (selectedPoke) {
                // Usamos el ID del Pokémon base para cargarlo, aunque su estado mutable ya esté cargado
                selectPokemon(selectedPoke);
            }
        }
        
        renderList(); 

      }catch(e){
        console.error("Error al cargar estado:", e);
        // En caso de error de carga (p. ej. datos corruptos), limpiamos el storage y recargamos
        localStorage.removeItem('pokestate_151_dynamic');
        loadAll(); 
      }
    }

    // Auto-guardado
    setInterval(saveAll, 5000);

    // -------------------- PWA Setup --------------------
    let deferredPrompt;
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
      $('installBtn').style.display='inline-block';
    });

    $('installBtn').onclick = async ()=>{
      if(deferredPrompt){
        deferredPrompt.prompt();
        const choice = await deferredPrompt.userChoice;
        if(choice.outcome==='accepted') log('App instalada!', true);
        deferredPrompt=null;
        $('installBtn').style.display='none';
      } else {
        alert('Instalación disponible desde el menú del navegador (Agregar a pantalla inicio)');
      }
    };

    // service worker simple for PWA offline capabilities (no changes needed)
    const swCode = `self.addEventListener('install', e=>{self.skipWaiting();});self.addEventListener('activate', e=>{clients.claim();});self.addEventListener('fetch', e=>{e.respondWith(fetch(e.request).catch(e=>new Response(null)));});`;
    const swBlob = new Blob([swCode], {type:'application/javascript'});
    const swUrl = URL.createObjectURL(swBlob);
    if('serviceWorker' in navigator){
      navigator.serviceWorker.register(swUrl).catch(e=>console.warn('Registro de Service Worker fallido:', e));
    }

    // manifest link (no changes needed)
    const manifest = {name:'Pokémon Tracker (privado)',short_name:'PokeTrack',start_url:'.',display:'standalone',background_color:'#f6efe0',theme_color:'#9b59b6', icons: [
        {src:'./icon-192.png',sizes:'192x192',type:'image/png'},
        {src:'./icon-512.png',sizes:'512x512',type:'image/png',purpose:'any maskable'}
    ]};
    const manBlob = new Blob([JSON.stringify(manifest)], {type:'application/json'});
    const manUrl = URL.createObjectURL(manBlob);
    const link = document.createElement('link'); link.rel='manifest'; link.href = manUrl; document.head.appendChild(link);

    // -------------------- Initialisation --------------------
    loadAll();

    if (!state.currentPokemon) {
        updateControls(false);
        $('styleDescription').style.display='block';
        $('styleDescription').innerHTML = '<strong>Bienvenido</strong><p style="margin-top:6px">Selecciona un Pokémon de la lista (hay 151) para comenzar a hacer el seguimiento de su EXP, vidas y simular tiradas de ataque con el dado d20.</p>';
    }