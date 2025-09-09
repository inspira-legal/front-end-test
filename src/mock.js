const products = [
  {
    id: 1,
    name: "Fones de Ouvido Sem Fio",
    category: "Áudio",
    price: "R$ 129,99",
    priceValue: 129.99,
    imageUrl: "https://images.unsplash.com/photo-1623788728910-23180a99871d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHdpcmVsZXNzJTIwaGVhZHBob25lc3xlbnwxfHx8fDE3NTc0MzQ1OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    dateAdded: new Date('2025-09-08'), // Recent - 1 day ago
    onSale: true,
    description: "Fones de ouvido sem fio com cancelamento de ruído e bateria de longa duração",
    brand: "TechSound",
    rating: 4.5,
    reviewCount: 128,
    inStock: true,
    tags: ["sem fio", "bluetooth", "cancelamento de ruído"]
  },
  {
    id: 2,
    name: "Fones Bluetooth",
    category: "Áudio", 
    price: "R$ 89,99",
    priceValue: 89.99,
    imageUrl: "https://images.unsplash.com/photo-1603336540413-009bd9dc5133?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwd2lyZWxlc3MlMjBlYXJidWRzfGVufDF8fHx8MTc1NzQzNDU5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    dateAdded: new Date('2025-09-05'), // Recent - 4 days ago
    onSale: false,
    description: "Earbuds Bluetooth com design ergonômico e som cristalino",
    brand: "AudioMax",
    rating: 4.2,
    reviewCount: 86,
    inStock: true,
    tags: ["bluetooth", "earbuds", "compacto"]
  },
  {
    id: 3,
    name: "Capinha de Celular",
    category: "Acessórios",
    price: "R$ 24,99", 
    priceValue: 24.99,
    imageUrl: "https://images.unsplash.com/photo-1726763581169-e7643070cf64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGxhcHRvcCUyMGRldmljZXxlbnwxfHx8fDE3NTc0MzQ1OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    dateAdded: new Date('2025-08-15'), // Older
    onSale: true,
    description: "Capinha transparente resistente a quedas e arranhões",
    brand: "ProtectCase",
    rating: 4.7,
    reviewCount: 203,
    inStock: true,
    tags: ["transparente", "proteção", "anti-queda"]
  },
  {
    id: 4,
    name: "Mouse Sem Fio",
    category: "Informática",
    price: "R$ 45,99",
    priceValue: 45.99,
    imageUrl: "https://images.unsplash.com/photo-1662896973947-bc4b6e6ccbfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMG1vdXNlJTIwYmxhY2t8ZW58MXx8fHwxNzU3NDM0NTk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    dateAdded: new Date('2025-09-07'), // Recent - 2 days ago
    onSale: false,
    description: "Mouse óptico sem fio com precisão de 1600 DPI e bateria de longa duração",
    brand: "TechMouse",
    rating: 4.3,
    reviewCount: 97,
    inStock: true,
    tags: ["sem fio", "óptico", "1600 DPI"]
  },
  {
    id: 5,
    name: "Headset Gamer",
    category: "Games",
    price: "R$ 159,99",
    priceValue: 159.99,
    imageUrl: "https://images.unsplash.com/photo-1673669236244-60f764c15f27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwaGVhZHBob25lcyUyMGdhbWluZ3xlbnwxfHx8fDE3NTc0MzQ1OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    dateAdded: new Date('2025-07-20'), // Older
    onSale: true,
    description: "Headset gamer com som surround 7.1 e microfone com cancelamento de ruído",
    brand: "GameZone",
    rating: 4.6,
    reviewCount: 156,
    inStock: true,
    tags: ["gamer", "surround 7.1", "microfone"]
  },
  {
    id: 6,
    name: "Suporte para Notebook",
    category: "Informática",
    price: "R$ 79,99",
    priceValue: 79.99,
    imageUrl: "https://images.unsplash.com/photo-1643900074574-8295e3f0af5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGxhcHRvcCUyMGRldmljZXxlbnwxfHx8fDE3NTc0MzQ1OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    dateAdded: new Date('2025-09-04'), // Recent - 5 days ago
    onSale: false,
    description: "Suporte ergonômico ajustável para notebook com ventilação integrada",
    brand: "ErgoDesk",
    rating: 4.4,
    reviewCount: 74,
    inStock: true,
    tags: ["ergonômico", "ajustável", "ventilação"]
  },
  {
    id: 7,
    name: "Caixa de Som Bluetooth",
    category: "Áudio",
    price: "R$ 199,99",
    priceValue: 199.99,
    imageUrl: "https://images.unsplash.com/photo-1623788728910-23180a99871d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHdpcmVsZXNzJTIwaGVhZHBob25lc3xlbnwxfHx8fDE3NTc0MzQ1OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    dateAdded: new Date('2025-08-10'), // Older
    onSale: false,
    description: "Caixa de som portátil com graves potentes e resistência à água IPX7",
    brand: "SoundWave",
    rating: 4.8,
    reviewCount: 242,
    inStock: true,
    tags: ["portátil", "à prova d'água", "graves potentes"]
  },
  {
    id: 8,
    name: "Relógio Inteligente",
    category: "Vestíveis",
    price: "R$ 299,99",
    priceValue: 299.99,
    imageUrl: "https://images.unsplash.com/photo-1673669236244-60f764c15f27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwaGVhZHBob25lcyUyMGdhbWluZ3xlbnwxfHx8fDE3NTc0MzQ1OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    dateAdded: new Date('2025-09-03'), // Recent - 6 days ago
    onSale: true,
    description: "Smartwatch com monitoramento de saúde, GPS e bateria de 7 dias",
    brand: "SmartTime",
    rating: 4.5,
    reviewCount: 189,
    inStock: false,
    tags: ["smartwatch", "GPS", "monitoramento de saúde"]
  }
];
