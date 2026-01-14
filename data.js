// Estrutura de dados para o catálogo de endereços
// Dados baseados nos PDFs fornecidos

const catalogData = {
    "centro-comercial": [
        // R$ 7,00 (ordem alfabética)
        { id: 1, name: "Bela vista", taxValue: 7.00 },
        { id: 2, name: "Boa esperança", taxValue: 7.00 },
        { id: 3, name: "Bom remédio", taxValue: 7.00 },
        { id: 4, name: "Centro", taxValue: 7.00 },
        { id: 5, name: "Cidade baixa", taxValue: 7.00 },
        { id: 6, name: "Floresta (1ª rua até 6ª rua)", taxValue: 7.00 },
        { id: 7, name: "Jardim das araras", taxValue: 7.00 },
        { id: 8, name: "Liberdade", taxValue: 7.00 },
        { id: 9, name: "Perpétuo socorro", taxValue: 7.00 },
        { id: 10, name: "São José (vila caçula/vila nova)", taxValue: 7.00 },
        { id: 11, name: "São Tomé", taxValue: 7.00 },
        
        // R$ 8,00 (ordem alfabética)
        { id: 12, name: "Floresta (7ª rua até 14ª rua) (KM3)", taxValue: 8.00 },
        { id: 13, name: "Jardim tapajós (ao redor v.militar)", taxValue: 8.00 },
        { id: 14, name: "Santo Antônio", taxValue: 8.00 },
        { id: 26, name: "São Francisco (1ª rua até 3ª rua)", taxValue: 8.00 },
        { id: 16, name: "Vila Militar", taxValue: 8.00 },
        
        // R$ 10,00 (ordem alfabética)
        { id: 17, name: "Bairro da coca", taxValue: 10.00 },
        { id: 18, name: "Bairro da paz", taxValue: 10.00 },
        { id: 20, name: "Bom jardim", taxValue: 10.00 },
        { id: 21, name: "Irajá (MORRO DO MACACO)", taxValue: 10.00 },
        { id: 22, name: "Laranjal", taxValue: 10.00 },
        { id: 23, name: "Novo Paraiso", taxValue: 10.00 },
        { id: 24, name: "Piracanã (ATÉ 29 RUA)", taxValue: 10.00 },
        { id: 25, name: "REICON", taxValue: 10.00 },
        { id: 15, name: "São Francisco (a partir da 4ª rua)", taxValue: 10.00 },
        { id: 27, name: "Vitória-régia", taxValue: 10.00 },
        
        // R$ 12,00 (ordem alfabética)
        { id: 28, name: "Açai", taxValue: 12.00 },
        { id: 29, name: "Beco da Shell", taxValue: 12.00 },
        { id: 30, name: "Belas terras (km6)", taxValue: 12.00 },
        { id: 31, name: "Buriti", taxValue: 12.00 },
        { id: 19, name: "Beija Flor", taxValue: 12.00 },
        { id: 32, name: "Campo belo", taxValue: 12.00 },
        { id: 33, name: "Chico do Leite", taxValue: 12.00 },
        { id: 34, name: "Cidade nova (JJP)", taxValue: 12.00 },
        { id: 35, name: "Jacarézinho", taxValue: 12.00 },
        { id: 36, name: "Jardim aeroporto (km5)", taxValue: 12.00 },
        { id: 37, name: "Jardim américa (altos buriti)", taxValue: 12.00 },
        { id: 38, name: "Maria Magdalena 1 e 2", taxValue: 12.00 },
        { id: 39, name: "Pérola do tapajós", taxValue: 12.00 },
        { id: 40, name: "QUARTEL 53 BIS", taxValue: 12.00 },
        { id: 41, name: "Sol Nascente", taxValue: 12.00 },
        { id: 42, name: "Vale do piracanã (residêncial)", taxValue: 12.00 },
        { id: 43, name: "Vale do tapajós", taxValue: 12.00 },
        { id: 44, name: "Valmirlândia 1 e 2", taxValue: 12.00 },
        { id: 45, name: "Viva itaituba (km6)", taxValue: 12.00 },
        { id: 46, name: "Wirland Freire", taxValue: 12.00 },
    ],
    "cidade-alta": [
        // R$ 7,00 (ordem alfabética)
        { id: 1, name: "Bela vista", taxValue: 7.00 },
        { id: 2, name: "Boa esperança", taxValue: 7.00 },
        { id: 3, name: "Bom remédio", taxValue: 7.00 },
        { id: 4, name: "Centro", taxValue: 7.00 },
        { id: 5, name: "Cidade baixa", taxValue: 7.00 },
        { id: 6, name: "Floresta (1ª rua até 6ª rua)", taxValue: 7.00 },
        { id: 7, name: "Jardim das araras", taxValue: 7.00 },
        { id: 8, name: "Liberdade", taxValue: 7.00 },
        { id: 9, name: "Perpétuo socorro", taxValue: 7.00 },
        { id: 10, name: "São José (vila caçula/vila nova)", taxValue: 7.00 },
        { id: 11, name: "São Tomé", taxValue: 7.00 },
        
        // R$ 8,00 (ordem alfabética)
        { id: 12, name: "Floresta (7ª rua até 14ª rua) (KM3)", taxValue: 8.00 },
        { id: 13, name: "Jardim tapajós (ao redor v.militar)", taxValue: 8.00 },
        { id: 14, name: "Santo Antônio", taxValue: 8.00 },
        { id: 16, name: "Vila Militar", taxValue: 8.00 },
        { id: 25, name: "São Francisco (1ª rua até 3ª rua)", taxValue: 8.00 },
        
        // R$ 10,00 (ordem alfabética)
        { id: 17, name: "Bairro da paz", taxValue: 10.00 },
        { id: 19, name: "Floresta (PEDREIRA)", taxValue: 10.00 },
        { id: 20, name: "Irajá (MORRO DO MACACO)", taxValue: 10.00 },
        { id: 21, name: "Laranjal", taxValue: 10.00 },
        { id: 22, name: "Novo Paraiso", taxValue: 10.00 },
        { id: 23, name: "Piracanã (ATÉ 29 RUA)", taxValue: 10.00 },
        { id: 24, name: "REICON", taxValue: 10.00 },
        { id: 15, name: "São Francisco (a partir da 4ª rua)", taxValue: 10.00 },
        { id: 26, name: "Vitória-régia", taxValue: 10.00 },
        { id: 28, name: "Bairro da coca", taxValue: 10.00 },
        
        // R$ 12,00 (ordem alfabética)
        { id: 27, name: "Açai", taxValue: 12.00 },        
        { id: 29, name: "Beco da Shell", taxValue: 12.00 },
        { id: 30, name: "Belas terras (km6)", taxValue: 12.00 },
        { id: 18, name: "Beija Flor", taxValue: 12.00 },
        { id: 31, name: "Bom jardim", taxValue: 12.00 },
        { id: 32, name: "Buriti", taxValue: 12.00 },
        { id: 33, name: "Campo belo", taxValue: 12.00 },
        { id: 34, name: "Chico do Leite", taxValue: 12.00 },
        { id: 35, name: "Cidade nova (JJP)", taxValue: 12.00 },
        { id: 36, name: "Jacarézinho", taxValue: 12.00 },
        { id: 37, name: "Jardim aeroporto (km5)", taxValue: 12.00 },
        { id: 38, name: "Jardim américa (altos buriti)", taxValue: 12.00 },
        { id: 39, name: "Maria Magdalena 1 e 2", taxValue: 12.00 },
        { id: 40, name: "Pérola do tapajós", taxValue: 12.00 },
        { id: 41, name: "QUARTEL 53 BIS", taxValue: 12.00 },
        { id: 42, name: "Sol Nascente", taxValue: 12.00 },
        { id: 43, name: "Vale do piracanã (residêncial)", taxValue: 12.00 },
        { id: 44, name: "Vale do tapajós", taxValue: 12.00 },
        { id: 45, name: "Valmirlândia 1 e 2", taxValue: 12.00 },
        { id: 46, name: "Viva itaituba (km6)", taxValue: 12.00 },
        { id: 47, name: "Wirland Freire", taxValue: 12.00 },
    ]
};

// Função para obter dados por tipo
function getDataByType(type) {
    return catalogData[type] || [];
}

// Função para obter localização específica
function getLocation(type, locationId) {
    const locations = getDataByType(type);
    return locations.find(loc => loc.id === locationId);
}

// Função para obter bairros de Cidade Alta
function getCidadeAltaBairros() {
    return catalogData["cidade-alta"] || [];
}

// Função para obter bairros de Centro Comercial
function getCentroComercialBairros() {
    return catalogData["centro-comercial"] || [];
}

// Função para obter bairros por tipo
function getBairrosByType(type) {
    if (type === 'cidade-alta') {
        return getCidadeAltaBairros();
    } else if (type === 'centro-comercial') {
        return getCentroComercialBairros();
    }
    return [];
}

// Função para buscar bairros por nome
function searchBairros(searchTerm, type) {
    const bairros = getBairrosByType(type);
    if (!searchTerm || searchTerm.trim() === '') {
        return bairros;
    }
    
    const term = searchTerm.toLowerCase().trim();
    return bairros.filter(bairro => 
        bairro.name.toLowerCase().includes(term)
    );
}

// Dados de clientes
const clientes = [
    { id: 1, name: "BIDAS BURGUER", referencia: "ENDERECOS_VINCULADOS" },
    { id: 2, name: "BBSAURO HAMBURGUER", referencia: "CENTRO" },
    { id: 3, name: "BIS BURGER", referencia: "CENTRO" },
    { id: 4, name: "BOM PÃO", referencia: "CENTRO" },
    { id: 5, name: "BOX BURGER", referencia: "CENTRO" },
    { id: 6, name: "CAFÉ GOIANO", referencia: "CIDADEALTA" },
    { id: 7, name: "CALÇADA DAS OLIVEIRAS", referencia: "CIDADEALTA" },
    { id: 8, name: "CASA DO PASTEL", referencia: "CIDADEALTA" },
    { id: 9, name: "CHIQUINHO SORVETES", referencia: "CENTRO" },
    { id: 10, name: "DELICIAS DO CHEFF", referencia: "CENTRO" },
    { id: 11, name: "DOM HAMBURGUERIA (100 SOLICITAÇÕES)", referencia: "CENTRO" },
    { id: 12, name: "DROGARIA PAG BEM MENOS - 16 RUA", referencia: "ENDERECOS_VINCULADOS" },
    { id: 13, name: "DROGARIA PAG BEM MENOS - 7 RUA", referencia: "ENDERECOS_VINCULADOS" },
    { id: 14, name: "DROGARIA PAG BEM MENOS - TRANSAMAZONICA", referencia: "ENDERECOS_VINCULADOS" },
    { id: 15, name: "DROGARIA PRIME", referencia: "CENTRO" },
    { id: 16, name: "ÉGUA DA PIZZA (120 SOLICITAÇÕES)", referencia: "CIDADEALTA" },
    { id: 17, name: "ESSENCIAL INFORMÁTICA", referencia: "CENTRO" },
    { id: 18, name: "HOLY BURGER", referencia: "CENTRO" },
    { id: 19, name: "KI DELICIAS", referencia: "CENTRO" },
    { id: 20, name: "LAÇAROT PRESENTES", referencia: "FLORESTA" },
    { id: 21, name: "PEIXE NA BRASA", referencia: "CENTRO" },
    { id: 22, name: "PICANHA & CIA", referencia: "CENTRO" },
    { id: 23, name: "PLENITUDE MODAS", referencia: "CIDADEALTA" },
    { id: 24, name: "REI DO CARNEIRO", referencia: "CENTRO" },
    { id: 25, name: "RESTAURANTE DO MEU JEITO", referencia: "CENTRO" },
    { id: 26, name: "RESTAURANTE O LIBERAL", referencia: "CENTRO" },
    { id: 27, name: "ROCKET BURGER (LANCOS)", referencia: "CENTRO" },
    { id: 28, name: "SABOR DA HORA PIZZARIA", referencia: "ENDERECOS_VINCULADOS" },
    { id: 29, name: "SABOR E ARTE", referencia: "CENTRO" },
    { id: 30, name: "SABOREY", referencia: "CENTRO" },
    { id: 31, name: "USE REICERONTE", referencia: "CENTRO" },
    { id: 32, name: "VIP CELL", referencia: "CIDADEALTA" },
    { id: 33, name: "X-TUDO LANCHES (CURICA)", referencia: "CENTRO" },
    { id: 34, name: "AÇAI DO GIL", referencia: "CENTRO" },
    { id: 35, name: "ANA MARIÁ", referencia: "CIDADEALTA" },
    { id: 36, name: "LAB NORTTE - SOMA SEMANAL", referencia: "VALOR ÚNICO 7" },
    { id: 37, name: "CIA DA PIZZA", referencia: "VALOR ÚNICO 10" },
    { id: 38, name: "DOM FRED", referencia: "VALOR ÚNICO 10" },
    { id: 39, name: "MARIBELLA STORE", referencia: "VALOR ÚNICO 10" },
    { id: 40, name: "RAINHA DELIVERY | DELIVERY", referencia: "VALOR ÚNICO 10" },
    { id: 41, name: "RAINHA DELIVERY + LA CARTE", referencia: "VALOR ÚNICO 12" },
    { id: 49, name: "MORENA ROSE MODA FITNESS", referencia: "VALOR ÚNICO 10" },
    { id: 42, name: "ESPET. MARIDO & MULHER", referencia: "ENDERECOS_VINCULADOS" },
    { id: 43, name: "GALETOS DELIVERY", referencia: "ENDERECOS_VINCULADOS" },
    { id: 44, name: "HOTEL AMAZON", referencia: "ENDERECOS_VINCULADOS" },
    { id: 45, name: "GRANDE FAMILIA PIZZARIA", referencia: "ENDERECOS_VINCULADOS" },
    { id: 46, name: "KOALA PIZZARIA", referencia: "ENDERECOS_VINCULADOS" },
    { id: 47, name: "KIPUDIN", referencia: "ENDERECOS_VINCULADOS" },
    { id: 48, name: "NATURELLI COZINHA CRIATIVA", referencia: "FLORESTA" },
];

// Endereços vinculados ao cliente ESPET. MARIDO & MULHER
const enderecosEspecial = {
    "ESPET. MARIDO & MULHER": [
        // R$ 7,00
        { id: 1, name: "Bela vista", taxValue: 7.00 },
        { id: 2, name: "Boa esperança", taxValue: 7.00 },
        { id: 3, name: "Bom remédio", taxValue: 7.00 },
        { id: 4, name: "Centro", taxValue: 7.00 },
        { id: 5, name: "Cidade baixa", taxValue: 7.00 },
        { id: 6, name: "Floresta (1ª rua até 6ª rua)", taxValue: 7.00 },
        { id: 7, name: "Jardim das araras", taxValue: 7.00 },
        { id: 8, name: "Liberdade", taxValue: 7.00 },
        { id: 9, name: "Perpétuo socorro", taxValue: 7.00 },
        { id: 10, name: "São Tomé", taxValue: 7.00 },
        
        // R$ 8,00
        { id: 11, name: "Floresta (7ª rua até 14ª rua) (KM3)", taxValue: 8.00 },
        { id: 12, name: "Jardim tapajós (ao redor v.militar)", taxValue: 8.00 },
        { id: 23, name: "São Francisco (1ª rua até 3ª rua)", taxValue: 8.00 },
        { id: 14, name: "Vila Militar", taxValue: 8.00 },
        
        // R$ 10,00
        { id: 15, name: "Bairro da coca", taxValue: 10.00 },
        { id: 16, name: "Bairro da paz", taxValue: 10.00 },
        { id: 17, name: "Floresta (PEDREIRA)", taxValue: 10.00 },
        { id: 18, name: "Irajá (MORRO DO MACACO)", taxValue: 10.00 },
        { id: 19, name: "Laranjal", taxValue: 10.00 },
        { id: 20, name: "Novo Paraiso", taxValue: 10.00 },
        { id: 21, name: "Piracanã (ATÉ 29 RUA)", taxValue: 10.00 },
        { id: 22, name: "REICON", taxValue: 10.00 },
        { id: 13, name: "São Francisco (a partir da 4ª rua)", taxValue: 10.00 },
        { id: 24, name: "São José (vila caçula/vila nova)", taxValue: 10.00 },
        { id: 25, name: "Vitória-régia", taxValue: 10.00 },
        
        // R$ 12,00
        { id: 26, name: "Açai", taxValue: 12.00 },
        { id: 27, name: "Beija Flor", taxValue: 12.00 },
        { id: 28, name: "Beco da Shell", taxValue: 12.00 },
        { id: 29, name: "Belas terras (km6)", taxValue: 12.00 },
        { id: 30, name: "Bom jardim", taxValue: 12.00 },
        { id: 31, name: "Buriti", taxValue: 12.00 },
        { id: 32, name: "Campo belo", taxValue: 12.00 },
        { id: 33, name: "Cidade nova (JJP)", taxValue: 12.00 },
        { id: 34, name: "Chico do Leite", taxValue: 12.00 },
        { id: 35, name: "Jacarézinho", taxValue: 12.00 },
        { id: 36, name: "Jardim aeroporto (km5)", taxValue: 12.00 },
        { id: 37, name: "Jardim américa (altos buriti)", taxValue: 12.00 },
        { id: 38, name: "Maria Magdalena 1 e 2", taxValue: 12.00 },
        { id: 39, name: "Pérola do tapajós", taxValue: 12.00 },
        { id: 40, name: "Santo Antônio", taxValue: 12.00 },
        { id: 41, name: "Sol Nascente", taxValue: 12.00 },
        { id: 42, name: "Vale do piracanã (residêncial)", taxValue: 12.00 },
        { id: 43, name: "Vale do tapajós", taxValue: 12.00 },
        { id: 44, name: "Valmirlândia 1 e 2", taxValue: 12.00 },
        { id: 45, name: "Viva itaituba (km6)", taxValue: 12.00 },
        { id: 46, name: "Wirland Freire", taxValue: 12.00 },
        { id: 47, name: "QUARTEL 53 BIS", taxValue: 12.00 },
    ],
    "GALETOS DELIVERY": [
        // R$ 7,00
        { id: 1, name: "Beco da Shell", taxValue: 7.00 },
        { id: 2, name: "Boa esperança", taxValue: 7.00 },
        { id: 3, name: "Bom jardim", taxValue: 7.00 },
        { id: 4, name: "Centro", taxValue: 7.00 },
        { id: 5, name: "Cidade baixa", taxValue: 7.00 },
        { id: 6, name: "Floresta (1ª rua até 6ª rua)", taxValue: 7.00 },
        { id: 7, name: "Jardim tapajós (ao redor v.militar)", taxValue: 7.00 },
        { id: 8, name: "Liberdade", taxValue: 7.00 },
        { id: 9, name: "Perpétuo socorro", taxValue: 7.00 },
        { id: 10, name: "REICON", taxValue: 7.00 },
        { id: 11, name: "São José (vila caçula/vila nova)", taxValue: 7.00 },
        { id: 12, name: "Vila Militar", taxValue: 7.00 },
        
        // R$ 8,00
        { id: 13, name: "Bela vista", taxValue: 8.00 },
        { id: 14, name: "Bom remédio", taxValue: 8.00 },
        { id: 15, name: "Floresta (7ª rua até 14ª rua) (KM3)", taxValue: 8.00 },
        { id: 16, name: "São Tomé", taxValue: 8.00 },
        
        // R$ 10,00
        { id: 17, name: "Bairro da coca", taxValue: 10.00 },
        { id: 18, name: "Bairro da paz", taxValue: 10.00 },
        { id: 19, name: "Floresta (PEDREIRA)", taxValue: 10.00 },
        { id: 20, name: "Irajá (MORRO DO MACACO)", taxValue: 10.00 },
        { id: 21, name: "Laranjal", taxValue: 10.00 },
        { id: 22, name: "Novo Paraiso", taxValue: 10.00 },
        { id: 23, name: "Piracanã (ATÉ 29 RUA)", taxValue: 10.00 },
        { id: 24, name: "Santo Antônio", taxValue: 10.00 },
        { id: 25, name: "São Francisco (1ª rua até 3ª rua)", taxValue: 10.00 },
        { id: 26, name: "São Francisco (a partir da 4ª rua)", taxValue: 10.00 },
        
        // R$ 12,00
        { id: 27, name: "Açai", taxValue: 12.00 },
        { id: 28, name: "Beija Flor", taxValue: 12.00 },
        { id: 29, name: "Belas terras (km6)", taxValue: 12.00 },
        { id: 30, name: "Buriti", taxValue: 12.00 },
        { id: 31, name: "Campo belo", taxValue: 12.00 },
        { id: 32, name: "Cidade nova (JJP)", taxValue: 12.00 },
        { id: 33, name: "Chico do Leite", taxValue: 12.00 },
        { id: 34, name: "Jacarézinho", taxValue: 12.00 },
        { id: 35, name: "Jardim aeroporto (km5)", taxValue: 12.00 },
        { id: 36, name: "Jardim américa (altos buriti)", taxValue: 12.00 },
        { id: 37, name: "Jardim das araras", taxValue: 12.00 },
        { id: 38, name: "Maria Magdalena 1 e 2", taxValue: 12.00 },
        { id: 39, name: "Pérola do tapajós", taxValue: 12.00 },
        { id: 40, name: "Sol Nascente", taxValue: 12.00 },
        { id: 41, name: "Vale do piracanã (residêncial)", taxValue: 12.00 },
        { id: 42, name: "Vale do tapajós", taxValue: 12.00 },
        { id: 43, name: "Valmirlândia 1 e 2", taxValue: 12.00 },
        { id: 44, name: "Vitória-régia", taxValue: 12.00 },
        { id: 45, name: "Viva itaituba (km6)", taxValue: 12.00 },
        { id: 46, name: "Wirland Freire", taxValue: 12.00 },
        { id: 47, name: "QUARTEL 53 BIS", taxValue: 12.00 },
    ],
    "HOTEL AMAZON": [
        // R$ 7,00
        { id: 1, name: "Beco da Shell", taxValue: 7.00 },
        { id: 2, name: "Boa esperança", taxValue: 7.00 },
        { id: 3, name: "Bom jardim", taxValue: 7.00 },
        { id: 4, name: "Centro", taxValue: 7.00 },
        { id: 5, name: "Cidade baixa", taxValue: 7.00 },
        { id: 6, name: "Floresta (1ª rua até 6ª rua)", taxValue: 7.00 },
        { id: 7, name: "Jardim tapajós (ao redor v.militar)", taxValue: 7.00 },
        { id: 8, name: "Liberdade", taxValue: 7.00 },
        { id: 9, name: "Perpétuo socorro", taxValue: 7.00 },
        { id: 10, name: "REICON", taxValue: 7.00 },
        { id: 11, name: "São José (vila caçula/vila nova)", taxValue: 7.00 },
        { id: 12, name: "Vila Militar", taxValue: 7.00 },
        
        // R$ 8,00
        { id: 13, name: "Bela vista", taxValue: 8.00 },
        { id: 14, name: "Bom remédio", taxValue: 8.00 },
        { id: 15, name: "Floresta (7ª rua até 14ª rua) (KM3)", taxValue: 8.00 },
        { id: 16, name: "São Tomé", taxValue: 8.00 },
        
        // R$ 10,00
        { id: 17, name: "Bairro da coca", taxValue: 10.00 },
        { id: 18, name: "Bairro da paz", taxValue: 10.00 },
        { id: 19, name: "Floresta (PEDREIRA)", taxValue: 10.00 },
        { id: 20, name: "Irajá (MORRO DO MACACO)", taxValue: 10.00 },
        { id: 21, name: "Laranjal", taxValue: 10.00 },
        { id: 22, name: "Novo Paraiso", taxValue: 10.00 },
        { id: 23, name: "Piracanã (ATÉ 29 RUA)", taxValue: 10.00 },
        { id: 24, name: "Santo Antônio", taxValue: 10.00 },
        { id: 25, name: "São Francisco (1ª rua até 3ª rua)", taxValue: 8.00 },
        { id: 26, name: "São Francisco (a partir da 4ª rua)", taxValue: 10.00 },
        
        // R$ 12,00
        { id: 27, name: "Açai", taxValue: 12.00 },
        { id: 28, name: "Beija Flor", taxValue: 12.00 },
        { id: 29, name: "Belas terras (km6)", taxValue: 12.00 },
        { id: 30, name: "Buriti", taxValue: 12.00 },
        { id: 31, name: "Campo belo", taxValue: 12.00 },
        { id: 32, name: "Cidade nova (JJP)", taxValue: 12.00 },
        { id: 33, name: "Chico do Leite", taxValue: 12.00 },
        { id: 34, name: "Jacarézinho", taxValue: 12.00 },
        { id: 35, name: "Jardim aeroporto (km5)", taxValue: 12.00 },
        { id: 36, name: "Jardim américa (altos buriti)", taxValue: 12.00 },
        { id: 37, name: "Jardim das araras", taxValue: 12.00 },
        { id: 38, name: "Maria Magdalena 1 e 2", taxValue: 12.00 },
        { id: 39, name: "Pérola do tapajós", taxValue: 12.00 },
        { id: 40, name: "Sol Nascente", taxValue: 12.00 },
        { id: 41, name: "Vale do piracanã (residêncial)", taxValue: 12.00 },
        { id: 42, name: "Vale do tapajós", taxValue: 12.00 },
        { id: 43, name: "Valmirlândia 1 e 2", taxValue: 12.00 },
        { id: 44, name: "Vitória-régia", taxValue: 12.00 },
        { id: 45, name: "Viva itaituba (km6)", taxValue: 12.00 },
        { id: 46, name: "Wirland Freire", taxValue: 12.00 },
        { id: 47, name: "QUARTEL 53 BIS", taxValue: 12.00 },
    ],
    "GRANDE FAMILIA PIZZARIA": [
        // R$ 7,00
        { id: 1, name: "Bela vista", taxValue: 7.00 },
        { id: 2, name: "Boa esperança", taxValue: 7.00 },
        { id: 3, name: "Bom jardim", taxValue: 7.00 },
        { id: 4, name: "Centro", taxValue: 7.00 },
        { id: 5, name: "Cidade baixa", taxValue: 7.00 },
        { id: 6, name: "Floresta (1ª rua até 6ª rua)", taxValue: 7.00 },
        { id: 7, name: "Jardim das araras", taxValue: 7.00 },
        { id: 8, name: "Jardim tapajós (ao redor v.militar)", taxValue: 7.00 },
        { id: 9, name: "Liberdade", taxValue: 7.00 },
        { id: 10, name: "Perpétuo socorro", taxValue: 7.00 },
        { id: 11, name: "São José (vila caçula/vila nova)", taxValue: 7.00 },
        { id: 12, name: "São Tomé", taxValue: 7.00 },
        
        // R$ 8,00
        { id: 13, name: "Bom remédio", taxValue: 8.00 },
        { id: 14, name: "Floresta (7ª rua até 14ª rua) (KM3)", taxValue: 8.00 },
        { id: 15, name: "Floresta (PEDREIRA)", taxValue: 8.00 },
        { id: 16, name: "Vila Militar", taxValue: 8.00 },
        
        // R$ 10,00
        { id: 17, name: "Bairro da coca", taxValue: 10.00 },
        { id: 18, name: "Bairro da paz", taxValue: 10.00 },
        { id: 19, name: "Beco da Shell", taxValue: 10.00 },
        { id: 20, name: "Irajá (MORRO DO MACACO)", taxValue: 10.00 },
        { id: 21, name: "Laranjal", taxValue: 10.00 },
        { id: 22, name: "Novo Paraiso", taxValue: 10.00 },
        { id: 23, name: "Piracanã (ATÉ 29 RUA)", taxValue: 10.00 },
        { id: 24, name: "REICON", taxValue: 10.00 },
        { id: 25, name: "Santo Antônio", taxValue: 10.00 },
        { id: 26, name: "São Francisco (a partir da 4ª rua)", taxValue: 10.00 },
        
        // R$ 12,00
        { id: 27, name: "Açai", taxValue: 12.00 },
        { id: 28, name: "Beija Flor", taxValue: 12.00 },
        { id: 29, name: "Belas terras (km6)", taxValue: 12.00 },
        { id: 30, name: "Buriti", taxValue: 12.00 },
        { id: 31, name: "Campo belo", taxValue: 12.00 },
        { id: 32, name: "Cidade nova (JJP)", taxValue: 12.00 },
        { id: 33, name: "Chico do Leite", taxValue: 12.00 },
        { id: 34, name: "Jacarézinho", taxValue: 12.00 },
        { id: 35, name: "Jardim aeroporto (km5)", taxValue: 12.00 },
        { id: 36, name: "Jardim américa (altos buriti)", taxValue: 12.00 },
        { id: 37, name: "Maria Magdalena 1 e 2", taxValue: 12.00 },
        { id: 38, name: "Pérola do tapajós", taxValue: 12.00 },
        { id: 39, name: "São Francisco (1ª rua até 3ª rua)", taxValue: 12.00 },
        { id: 40, name: "Sol Nascente", taxValue: 12.00 },
        { id: 41, name: "Vale do piracanã (residêncial)", taxValue: 12.00 },
        { id: 42, name: "Vale do tapajós", taxValue: 12.00 },
        { id: 43, name: "Valmirlândia 1 e 2", taxValue: 12.00 },
        { id: 44, name: "Viva itaituba (km6)", taxValue: 12.00 },
        { id: 45, name: "Wirland Freire", taxValue: 12.00 },
        { id: 46, name: "QUARTEL 53 BIS", taxValue: 12.00 },
    ],
    "KOALA PIZZARIA": [
        // R$ 7,00
        { id: 1, name: "Bela vista (30° RUA -10° RUA)", taxValue: 7.00 },
        { id: 2, name: "Bom remédio", taxValue: 7.00 },
        { id: 3, name: "Floresta (1ª rua até 6ª rua)", taxValue: 7.00 },
        { id: 4, name: "Floresta (7ª rua até 14ª rua) (KM3)", taxValue: 7.00 },
        { id: 5, name: "Floresta (PEDREIRA)", taxValue: 7.00 },
        { id: 6, name: "Novo Paraiso", taxValue: 7.00 },
        { id: 7, name: "Piracanã (ATÉ 29 RUA)", taxValue: 7.00 },
        { id: 8, name: "Santo Antônio", taxValue: 7.00 },
        { id: 9, name: "São Francisco (1ª rua até 3ª rua)", taxValue: 7.00 },
        { id: 10, name: "São Tomé", taxValue: 7.00 },
        { id: 11, name: "Vale do piracanã (residêncial)", taxValue: 7.00 },
        { id: 12, name: "Vale do tapajós", taxValue: 7.00 },
        { id: 13, name: "Valmirlândia 1 e 2", taxValue: 7.00 },
        
        // R$ 8,00
        { id: 14, name: "Bela vista (9º RUA - 1º RUA)", taxValue: 8.00 },
        { id: 15, name: "Irajá (MORRO DO MACACO)", taxValue: 8.00 },
        { id: 16, name: "Jardim das araras", taxValue: 8.00 },
        { id: 17, name: "Liberdade", taxValue: 8.00 },
        { id: 18, name: "São Francisco (a partir da 4ª rua)", taxValue: 8.00 },
        { id: 19, name: "Vitória-régia", taxValue: 8.00 },
        
        // R$ 10,00
        { id: 20, name: "Bairro da coca", taxValue: 10.00 },
        { id: 21, name: "Bairro da paz", taxValue: 10.00 },
        { id: 22, name: "Boa esperança", taxValue: 10.00 },
        { id: 23, name: "Bom jardim", taxValue: 10.00 },
        { id: 24, name: "Centro", taxValue: 10.00 },
        { id: 25, name: "Cidade baixa", taxValue: 10.00 },
        { id: 26, name: "Jardim tapajós (ao redor v.militar)", taxValue: 10.00 },
        { id: 27, name: "Laranjal", taxValue: 10.00 },
        { id: 28, name: "Perpétuo socorro", taxValue: 10.00 },
        { id: 29, name: "São José (vila caçula/vila nova)", taxValue: 10.00 },
        { id: 30, name: "Vila Militar", taxValue: 10.00 },
        
        // R$ 12,00
        { id: 31, name: "Açai", taxValue: 12.00 },
        { id: 32, name: "Beija Flor", taxValue: 12.00 },
        { id: 33, name: "Beco da Shell", taxValue: 12.00 },
        { id: 34, name: "Belas terras (km6)", taxValue: 12.00 },
        { id: 35, name: "Buriti", taxValue: 12.00 },
        { id: 36, name: "Campo belo", taxValue: 12.00 },
        { id: 37, name: "Cidade nova (JJP)", taxValue: 12.00 },
        { id: 38, name: "Chico do Leite", taxValue: 12.00 },
        { id: 39, name: "Jacarézinho", taxValue: 12.00 },
        { id: 40, name: "Jardim aeroporto (km5)", taxValue: 12.00 },
        { id: 41, name: "Jardim américa (altos buriti)", taxValue: 12.00 },
        { id: 42, name: "Maria Magdalena 1 e 2", taxValue: 12.00 },
        { id: 43, name: "Pérola do tapajós", taxValue: 12.00 },
        { id: 44, name: "REICON", taxValue: 12.00 },
        { id: 45, name: "Sol Nascente", taxValue: 12.00 },
        { id: 46, name: "Viva itaituba (km6)", taxValue: 12.00 },
        { id: 47, name: "Wirland Freire", taxValue: 12.00 },
        { id: 48, name: "QUARTEL 53 BIS", taxValue: 12.00 },
    ],
    "FLORESTA": [
        // R$ 7,00
        { id: 1, name: "Floresta (1ª rua até 6ª rua)", taxValue: 7.00 },
        { id: 2, name: "Floresta (7ª rua até 14ª rua) (KM3)", taxValue: 7.00 },
        { id: 3, name: "Floresta (PEDREIRA)", taxValue: 7.00 },
        { id: 4, name: "Liberdade", taxValue: 7.00 },
        { id: 5, name: "Santo Antônio", taxValue: 7.00 },
        { id: 6, name: "São Francisco (1ª rua até 3ª rua)", taxValue: 7.00 },
        
        // R$ 8,00
        { id: 7, name: "Bela vista", taxValue: 8.00 },
        { id: 8, name: "Boa esperança", taxValue: 8.00 },
        { id: 9, name: "Bom remédio", taxValue: 8.00 },
        { id: 10, name: "Centro", taxValue: 8.00 },
        { id: 11, name: "Cidade baixa", taxValue: 8.00 },
        { id: 12, name: "Irajá (MORRO DO MACACO)", taxValue: 8.00 },
        { id: 13, name: "Jardim das araras", taxValue: 8.00 },
        { id: 14, name: "Jardim tapajós (ao redor v.militar)", taxValue: 8.00 },
        { id: 15, name: "Novo Paraiso", taxValue: 8.00 },
        { id: 16, name: "Perpétuo socorro", taxValue: 8.00 },
        { id: 17, name: "São José (vila caçula/vila nova)", taxValue: 8.00 },
        { id: 18, name: "São Tomé", taxValue: 8.00 },
        { id: 19, name: "Viva itaituba (km6)", taxValue: 8.00 },
        
        // R$ 10,00
        { id: 20, name: "Bairro da coca", taxValue: 10.00 },
        { id: 21, name: "Bairro da paz", taxValue: 10.00 },
        { id: 22, name: "Beco da Shell", taxValue: 10.00 },
        { id: 23, name: "Bom jardim", taxValue: 10.00 },
        { id: 24, name: "Laranjal", taxValue: 10.00 },
        { id: 25, name: "Pérola do tapajós", taxValue: 10.00 },
        { id: 26, name: "Piracanã (ATÉ 29 RUA)", taxValue: 10.00 },
        { id: 27, name: "REICON", taxValue: 10.00 },
        { id: 28, name: "São Francisco (a partir da 4ª rua)", taxValue: 10.00 },
        { id: 29, name: "Vale do tapajós", taxValue: 10.00 },
        { id: 30, name: "Vitória-régia", taxValue: 10.00 },
        
        // R$ 12,00
        { id: 31, name: "Açai", taxValue: 12.00 },
        { id: 32, name: "Beija Flor", taxValue: 12.00 },
        { id: 33, name: "Belas terras (km6)", taxValue: 12.00 },
        { id: 34, name: "Buriti", taxValue: 12.00 },
        { id: 35, name: "Campo belo", taxValue: 12.00 },
        { id: 36, name: "Cidade nova (JJP)", taxValue: 12.00 },
        { id: 37, name: "Chico do Leite", taxValue: 12.00 },
        { id: 38, name: "Jacarézinho", taxValue: 12.00 },
        { id: 39, name: "Jardim aeroporto (km5)", taxValue: 12.00 },
        { id: 40, name: "Jardim américa (altos buriti)", taxValue: 12.00 },
        { id: 41, name: "Maria Magdalena 1 e 2", taxValue: 12.00 },
        { id: 42, name: "Sol Nascente", taxValue: 12.00 },
        { id: 43, name: "Vale do piracanã (residêncial)", taxValue: 12.00 },
        { id: 44, name: "Valmirlândia 1 e 2", taxValue: 12.00 },
        { id: 45, name: "Vila Militar", taxValue: 12.00 },
        { id: 46, name: "Wirland Freire", taxValue: 12.00 },
        { id: 47, name: "QUARTEL 53 BIS", taxValue: 12.00 },
    ],
    "KIPUDIN": [
        // R$ 7,00
        { id: 1, name: "Bela vista (30° RUA - 10° RUA)", taxValue: 7.00 },
        { id: 2, name: "Bom remédio", taxValue: 7.00 },
        { id: 3, name: "Floresta (1ª rua até 6ª rua)", taxValue: 7.00 },
        { id: 4, name: "Floresta (7ª rua até 14ª rua) (KM3)", taxValue: 7.00 },
        { id: 5, name: "Piracanã (ATÉ 29 RUA)", taxValue: 7.00 },
        { id: 6, name: "Santo Antônio", taxValue: 7.00 },
        { id: 7, name: "São Francisco (1ª rua até 3ª rua)", taxValue: 7.00 },
        { id: 8, name: "São Tomé", taxValue: 7.00 },
        { id: 9, name: "Vale do piracanã (residêncial)", taxValue: 7.00 },
        { id: 10, name: "Valmirlândia 1 e 2", taxValue: 7.00 },
        { id: 11, name: "Vitória-régia", taxValue: 7.00 },
        
        // R$ 8,00
        { id: 12, name: "Floresta (PEDREIRA)", taxValue: 8.00 },
        { id: 13, name: "Jardim das araras", taxValue: 8.00 },
        { id: 14, name: "Maria Magdalena 1 e 2", taxValue: 8.00 },
        { id: 15, name: "Pérola do tapajós", taxValue: 8.00 },
        { id: 16, name: "São Francisco (a partir da 4ª rua)", taxValue: 8.00 },
        { id: 17, name: "Vale do tapajós", taxValue: 8.00 },
        
        // R$ 10,00
        { id: 18, name: "Bela vista (9° RUA - 1º RUA)", taxValue: 10.00 },
        { id: 19, name: "Boa esperança", taxValue: 10.00 },
        { id: 20, name: "Centro", taxValue: 10.00 },
        { id: 21, name: "Cidade baixa", taxValue: 10.00 },
        { id: 22, name: "Irajá (MORRO DO MACACO)", taxValue: 10.00 },
        { id: 23, name: "Jardim tapajós (ao redor v.militar)", taxValue: 10.00 },
        { id: 24, name: "Laranjal", taxValue: 10.00 },
        { id: 25, name: "Perpétuo socorro", taxValue: 10.00 },
        { id: 26, name: "São José (vila caçula/vila nova)", taxValue: 10.00 },
        { id: 27, name: "Vila Militar", taxValue: 10.00 },
        
        // R$ 12,00
        { id: 28, name: "Açai", taxValue: 12.00 },
        { id: 29, name: "Bairro da coca", taxValue: 12.00 },
        { id: 30, name: "Bairro da paz", taxValue: 12.00 },
        { id: 31, name: "Beija Flor", taxValue: 12.00 },
        { id: 32, name: "Beco da Shell", taxValue: 12.00 },
        { id: 33, name: "Belas terras (km6)", taxValue: 12.00 },
        { id: 34, name: "Bom jardim", taxValue: 12.00 },
        { id: 35, name: "Buriti", taxValue: 12.00 },
        { id: 36, name: "Campo belo", taxValue: 12.00 },
        { id: 37, name: "Cidade nova (JJP)", taxValue: 12.00 },
        { id: 38, name: "Chico do Leite", taxValue: 12.00 },
        { id: 39, name: "Jacarézinho", taxValue: 12.00 },
        { id: 40, name: "Jardim aeroporto (km5)", taxValue: 12.00 },
        { id: 41, name: "Jardim américa (altos buriti)", taxValue: 12.00 },
        { id: 42, name: "Liberdade", taxValue: 12.00 },
        { id: 43, name: "Novo Paraiso", taxValue: 12.00 },
        { id: 44, name: "REICON", taxValue: 12.00 },
        { id: 45, name: "Sol Nascente", taxValue: 12.00 },
        { id: 46, name: "Viva itaituba (km6)", taxValue: 12.00 },
        { id: 47, name: "Wirland Freire", taxValue: 12.00 },
        { id: 48, name: "QUARTEL 53 BIS", taxValue: 12.00 },
    ],
    "BIDAS BURGUER": [
        // R$ 7,00
        { id: 1, name: "Bela vista", taxValue: 7.00 },
        { id: 2, name: "Boa esperança", taxValue: 7.00 },
        { id: 3, name: "Bom jardim", taxValue: 7.00 },
        { id: 4, name: "Centro", taxValue: 7.00 },
        { id: 5, name: "Cidade baixa", taxValue: 7.00 },
        { id: 6, name: "Floresta (1ª rua até 6ª rua)", taxValue: 7.00 },
        { id: 7, name: "Jardim das araras", taxValue: 7.00 },
        { id: 8, name: "Jardim tapajós (ao redor v.militar)", taxValue: 7.00 },
        { id: 9, name: "Liberdade", taxValue: 7.00 },
        { id: 10, name: "Perpétuo socorro", taxValue: 7.00 },
        { id: 11, name: "São José (vila caçula/vila nova)", taxValue: 7.00 },
        { id: 12, name: "São Tomé", taxValue: 7.00 },
        
        // R$ 8,00
        { id: 13, name: "Bom remédio", taxValue: 8.00 },
        { id: 14, name: "Floresta (7ª rua até 14ª rua) (KM3)", taxValue: 8.00 },
        { id: 15, name: "Floresta (PEDREIRA)", taxValue: 8.00 },
        { id: 16, name: "São Francisco (1ª rua até 3ª rua)", taxValue: 8.00 },
        
        // R$ 10,00
        { id: 17, name: "Bairro da coca", taxValue: 10.00 },
        { id: 18, name: "Bairro da paz", taxValue: 10.00 },
        { id: 19, name: "Beco da Shell", taxValue: 10.00 },
        { id: 20, name: "Irajá (MORRO DO MACACO)", taxValue: 10.00 },
        { id: 21, name: "Laranjal", taxValue: 10.00 },
        { id: 22, name: "Novo Paraiso", taxValue: 10.00 },
        { id: 23, name: "Piracanã (ATÉ 29 RUA)", taxValue: 10.00 },
        { id: 24, name: "REICON", taxValue: 10.00 },
        { id: 25, name: "Santo Antônio", taxValue: 10.00 },
        { id: 26, name: "São Francisco (a partir da 4ª rua)", taxValue: 10.00 },
        { id: 27, name: "Vila Militar", taxValue: 10.00 },
        
        // R$ 12,00
        { id: 28, name: "Açai", taxValue: 12.00 },
        { id: 29, name: "Beija Flor", taxValue: 12.00 },
        { id: 30, name: "Belas terras (km6)", taxValue: 12.00 },
        { id: 31, name: "Buriti", taxValue: 12.00 },
        { id: 32, name: "Campo belo", taxValue: 12.00 },
        { id: 33, name: "Cidade nova (JJP)", taxValue: 12.00 },
        { id: 34, name: "Chico do Leite", taxValue: 12.00 },
        { id: 35, name: "Jacarézinho", taxValue: 12.00 },
        { id: 36, name: "Jardim aeroporto (km5)", taxValue: 12.00 },
        { id: 37, name: "Jardim américa (altos buriti)", taxValue: 12.00 },
        { id: 38, name: "Maria Magdalena 1 e 2", taxValue: 12.00 },
        { id: 39, name: "Pérola do tapajós", taxValue: 12.00 },
        { id: 40, name: "Sol Nascente", taxValue: 12.00 },
        { id: 41, name: "Vale do piracanã (residêncial)", taxValue: 12.00 },
        { id: 42, name: "Vale do tapajós", taxValue: 12.00 },
        { id: 43, name: "Valmirlândia 1 e 2", taxValue: 12.00 },
        { id: 44, name: "Vitória-régia", taxValue: 12.00 },
        { id: 45, name: "Viva itaituba (km6)", taxValue: 12.00 },
        { id: 46, name: "Wirland Freire", taxValue: 12.00 },
        { id: 47, name: "QUARTEL 53 BIS", taxValue: 12.00 },
    ],
    "SABOR DA HORA PIZZARIA": [
        // R$ 7,00 (ordem alfabética)
        { id: 1, name: "Bela vista", taxValue: 7.00 },
        { id: 2, name: "Boa esperança", taxValue: 7.00 },
        { id: 3, name: "Bom remédio", taxValue: 7.00 },
        { id: 4, name: "Centro", taxValue: 7.00 },
        { id: 5, name: "Cidade baixa", taxValue: 7.00 },
        { id: 6, name: "Floresta (1ª rua até 6ª rua)", taxValue: 7.00 },
        { id: 7, name: "Jardim das araras", taxValue: 7.00 },
        { id: 8, name: "Liberdade", taxValue: 7.00 },
        { id: 9, name: "Perpétuo socorro", taxValue: 7.00 },
        { id: 10, name: "São José (vila caçula/vila nova)", taxValue: 7.00 },
        { id: 11, name: "São Tomé", taxValue: 7.00 },
        
        // R$ 8,00 (ordem alfabética)
        { id: 12, name: "Floresta (7ª rua até 14ª rua) (KM3)", taxValue: 8.00 },
        { id: 13, name: "Jardim tapajós (ao redor v.militar)", taxValue: 8.00 },
        { id: 14, name: "Santo Antônio", taxValue: 8.00 },
        { id: 15, name: "São Francisco (1ª rua até 3ª rua)", taxValue: 8.00 },
        { id: 16, name: "Vila Militar", taxValue: 8.00 },
        
        // R$ 10,00 (ordem alfabética)
        { id: 17, name: "Bairro da coca", taxValue: 10.00 },
        { id: 18, name: "Bairro da paz", taxValue: 10.00 },
        { id: 19, name: "Beija Flor", taxValue: 10.00 },
        { id: 20, name: "Floresta (PEDREIRA)", taxValue: 10.00 },
        { id: 21, name: "Irajá (MORRO DO MACACO)", taxValue: 10.00 },
        { id: 22, name: "Laranjal", taxValue: 10.00 },
        { id: 23, name: "Novo Paraiso", taxValue: 10.00 },
        { id: 24, name: "Piracanã (ATÉ 29 RUA)", taxValue: 10.00 },
        { id: 25, name: "REICON", taxValue: 10.00 },
        { id: 26, name: "São Francisco (a partir da 4ª rua)", taxValue: 10.00 },
        { id: 27, name: "Vitória-régia", taxValue: 10.00 },
        
        // R$ 12,00 (ordem alfabética)
        { id: 28, name: "Açai", taxValue: 12.00 },
        { id: 29, name: "Beco da Shell", taxValue: 12.00 },
        { id: 30, name: "Belas terras (km6)", taxValue: 12.00 },
        { id: 31, name: "Bom jardim", taxValue: 12.00 },
        { id: 32, name: "Buriti", taxValue: 12.00 },
        { id: 33, name: "Campo belo", taxValue: 12.00 },
        { id: 34, name: "Chico do Leite", taxValue: 12.00 },
        { id: 35, name: "Cidade nova (JJP)", taxValue: 12.00 },
        { id: 36, name: "Jacarézinho", taxValue: 12.00 },
        { id: 37, name: "Jardim aeroporto (km5)", taxValue: 12.00 },
        { id: 38, name: "Jardim américa (altos buriti)", taxValue: 12.00 },
        { id: 39, name: "Maria Magdalena 1 e 2", taxValue: 12.00 },
        { id: 40, name: "Pérola do tapajós", taxValue: 12.00 },
        { id: 41, name: "QUARTEL 53 BIS", taxValue: 12.00 },
        { id: 42, name: "Sol Nascente", taxValue: 12.00 },
        { id: 43, name: "Vale do piracanã (residêncial)", taxValue: 12.00 },
        { id: 44, name: "Vale do tapajós", taxValue: 12.00 },
        { id: 45, name: "Valmirlândia 1 e 2", taxValue: 12.00 },
        { id: 46, name: "Viva itaituba (km6)", taxValue: 12.00 },
        { id: 47, name: "Wirland Freire", taxValue: 12.00 },
    ],
    "DROGARIA PAG BEM MENOS - 16 RUA": [
        // R$ 7,00 (ordem alfabética)
        { id: 1, name: "Bela vista", taxValue: 7.00 },
        { id: 2, name: "Boa esperança", taxValue: 7.00 },
        { id: 3, name: "Bom remédio", taxValue: 7.00 },
        { id: 4, name: "Centro", taxValue: 7.00 },
        { id: 5, name: "Cidade baixa", taxValue: 7.00 },
        { id: 6, name: "Floresta (1ª rua até 6ª rua)", taxValue: 7.00 },
        { id: 7, name: "Jardim das araras", taxValue: 7.00 },
        { id: 8, name: "Liberdade", taxValue: 7.00 },
        { id: 9, name: "Perpétuo socorro", taxValue: 7.00 },
        { id: 10, name: "São José (vila caçula/vila nova)", taxValue: 7.00 },
        { id: 11, name: "São Tomé", taxValue: 7.00 },
        
        // R$ 8,00 (ordem alfabética)
        { id: 12, name: "Floresta (7ª rua até 14ª rua) (KM3)", taxValue: 8.00 },
        { id: 13, name: "Jardim tapajós (ao redor v.militar)", taxValue: 8.00 },
        { id: 14, name: "Santo Antônio", taxValue: 8.00 },
        { id: 15, name: "São Francisco (1ª rua até 3ª rua)", taxValue: 8.00 },
        { id: 16, name: "Vila Militar", taxValue: 8.00 },
        
        // R$ 10,00 (ordem alfabética)
        { id: 17, name: "Bairro da coca", taxValue: 10.00 },
        { id: 18, name: "Bairro da paz", taxValue: 10.00 },
        { id: 19, name: "Beija Flor", taxValue: 10.00 },
        { id: 20, name: "Floresta (PEDREIRA)", taxValue: 10.00 },
        { id: 21, name: "Irajá (MORRO DO MACACO)", taxValue: 10.00 },
        { id: 22, name: "Laranjal", taxValue: 10.00 },
        { id: 23, name: "Novo Paraiso", taxValue: 10.00 },
        { id: 24, name: "Piracanã (ATÉ 29 RUA)", taxValue: 10.00 },
        { id: 25, name: "REICON", taxValue: 10.00 },
        { id: 26, name: "São Francisco (a partir da 4ª rua)", taxValue: 10.00 },
        { id: 27, name: "Vitória-régia", taxValue: 10.00 },
        
        // R$ 12,00 (ordem alfabética)
        { id: 28, name: "Açai", taxValue: 12.00 },
        { id: 29, name: "Beco da Shell", taxValue: 12.00 },
        { id: 30, name: "Belas terras (km6)", taxValue: 12.00 },
        { id: 31, name: "Bom jardim", taxValue: 12.00 },
        { id: 32, name: "Buriti", taxValue: 12.00 },
        { id: 33, name: "Campo belo", taxValue: 12.00 },
        { id: 34, name: "Chico do Leite", taxValue: 12.00 },
        { id: 35, name: "Cidade nova (JJP)", taxValue: 12.00 },
        { id: 36, name: "Jacarézinho", taxValue: 12.00 },
        { id: 37, name: "Jardim aeroporto (km5)", taxValue: 12.00 },
        { id: 38, name: "Jardim américa (altos buriti)", taxValue: 12.00 },
        { id: 39, name: "Maria Magdalena 1 e 2", taxValue: 12.00 },
        { id: 40, name: "Pérola do tapajós", taxValue: 12.00 },
        { id: 41, name: "QUARTEL 53 BIS", taxValue: 12.00 },
        { id: 42, name: "Sol Nascente", taxValue: 12.00 },
        { id: 43, name: "Vale do piracanã (residêncial)", taxValue: 12.00 },
        { id: 44, name: "Vale do tapajós", taxValue: 12.00 },
        { id: 45, name: "Valmirlândia 1 e 2", taxValue: 12.00 },
        { id: 46, name: "Viva itaituba (km6)", taxValue: 12.00 },
        { id: 47, name: "Wirland Freire", taxValue: 12.00 },
    ],
    "DROGARIA PAG BEM MENOS - 7 RUA": [
        // R$ 7,00 (ordem alfabética)
        { id: 1, name: "Bela vista", taxValue: 7.00 },
        { id: 2, name: "Boa esperança", taxValue: 7.00 },
        { id: 3, name: "Bom remédio", taxValue: 7.00 },
        { id: 4, name: "Centro", taxValue: 7.00 },
        { id: 5, name: "Cidade baixa", taxValue: 7.00 },
        { id: 6, name: "Floresta (1ª rua até 6ª rua)", taxValue: 7.00 },
        { id: 7, name: "Jardim das araras", taxValue: 7.00 },
        { id: 8, name: "Liberdade", taxValue: 7.00 },
        { id: 9, name: "Perpétuo socorro", taxValue: 7.00 },
        { id: 10, name: "São José (vila caçula/vila nova)", taxValue: 7.00 },
        { id: 11, name: "São Tomé", taxValue: 7.00 },
        
        // R$ 8,00 (ordem alfabética)
        { id: 12, name: "Floresta (7ª rua até 14ª rua) (KM3)", taxValue: 8.00 },
        { id: 13, name: "Jardim tapajós (ao redor v.militar)", taxValue: 8.00 },
        { id: 14, name: "Santo Antônio", taxValue: 8.00 },
        { id: 15, name: "São Francisco (1ª rua até 3ª rua)", taxValue: 8.00 },
        { id: 16, name: "Vila Militar", taxValue: 8.00 },
        
        // R$ 10,00 (ordem alfabética)
        { id: 17, name: "Bairro da coca", taxValue: 10.00 },
        { id: 18, name: "Bairro da paz", taxValue: 10.00 },
        { id: 19, name: "Beija Flor", taxValue: 10.00 },
        { id: 20, name: "Floresta (PEDREIRA)", taxValue: 10.00 },
        { id: 21, name: "Irajá (MORRO DO MACACO)", taxValue: 10.00 },
        { id: 22, name: "Laranjal", taxValue: 10.00 },
        { id: 23, name: "Novo Paraiso", taxValue: 10.00 },
        { id: 24, name: "Piracanã (ATÉ 29 RUA)", taxValue: 10.00 },
        { id: 25, name: "REICON", taxValue: 10.00 },
        { id: 26, name: "São Francisco (a partir da 4ª rua)", taxValue: 10.00 },
        { id: 27, name: "Vitória-régia", taxValue: 10.00 },
        
        // R$ 12,00 (ordem alfabética)
        { id: 28, name: "Açai", taxValue: 12.00 },
        { id: 29, name: "Beco da Shell", taxValue: 12.00 },
        { id: 30, name: "Belas terras (km6)", taxValue: 12.00 },
        { id: 31, name: "Bom jardim", taxValue: 12.00 },
        { id: 32, name: "Buriti", taxValue: 12.00 },
        { id: 33, name: "Campo belo", taxValue: 12.00 },
        { id: 34, name: "Chico do Leite", taxValue: 12.00 },
        { id: 35, name: "Cidade nova (JJP)", taxValue: 12.00 },
        { id: 36, name: "Jacarézinho", taxValue: 12.00 },
        { id: 37, name: "Jardim aeroporto (km5)", taxValue: 12.00 },
        { id: 38, name: "Jardim américa (altos buriti)", taxValue: 12.00 },
        { id: 39, name: "Maria Magdalena 1 e 2", taxValue: 12.00 },
        { id: 40, name: "Pérola do tapajós", taxValue: 12.00 },
        { id: 41, name: "QUARTEL 53 BIS", taxValue: 12.00 },
        { id: 42, name: "Sol Nascente", taxValue: 12.00 },
        { id: 43, name: "Vale do piracanã (residêncial)", taxValue: 12.00 },
        { id: 44, name: "Vale do tapajós", taxValue: 12.00 },
        { id: 45, name: "Valmirlândia 1 e 2", taxValue: 12.00 },
        { id: 46, name: "Viva itaituba (km6)", taxValue: 12.00 },
        { id: 47, name: "Wirland Freire", taxValue: 12.00 },
    ],
    "DROGARIA PAG BEM MENOS - TRANSAMAZONICA": [
        // R$ 7,00 (ordem alfabética)
        { id: 1, name: "Bela vista", taxValue: 7.00 },
        { id: 2, name: "Boa esperança", taxValue: 7.00 },
        { id: 3, name: "Bom remédio", taxValue: 7.00 },
        { id: 4, name: "Centro", taxValue: 7.00 },
        { id: 5, name: "Cidade baixa", taxValue: 7.00 },
        { id: 6, name: "Floresta (1ª rua até 6ª rua)", taxValue: 7.00 },
        { id: 7, name: "Jardim das araras", taxValue: 7.00 },
        { id: 8, name: "Liberdade", taxValue: 7.00 },
        { id: 9, name: "Perpétuo socorro", taxValue: 7.00 },
        { id: 10, name: "São José (vila caçula/vila nova)", taxValue: 7.00 },
        { id: 11, name: "São Tomé", taxValue: 7.00 },
        
        // R$ 8,00 (ordem alfabética)
        { id: 12, name: "Floresta (7ª rua até 14ª rua) (KM3)", taxValue: 8.00 },
        { id: 13, name: "Jardim tapajós (ao redor v.militar)", taxValue: 8.00 },
        { id: 14, name: "Santo Antônio", taxValue: 8.00 },
        { id: 15, name: "São Francisco (1ª rua até 3ª rua)", taxValue: 8.00 },
        { id: 16, name: "Vila Militar", taxValue: 8.00 },
        
        // R$ 10,00 (ordem alfabética)
        { id: 17, name: "Bairro da coca", taxValue: 10.00 },
        { id: 18, name: "Bairro da paz", taxValue: 10.00 },
        { id: 19, name: "Beija Flor", taxValue: 10.00 },
        { id: 20, name: "Floresta (PEDREIRA)", taxValue: 10.00 },
        { id: 21, name: "Irajá (MORRO DO MACACO)", taxValue: 10.00 },
        { id: 22, name: "Laranjal", taxValue: 10.00 },
        { id: 23, name: "Novo Paraiso", taxValue: 10.00 },
        { id: 24, name: "Piracanã (ATÉ 29 RUA)", taxValue: 10.00 },
        { id: 25, name: "REICON", taxValue: 10.00 },
        { id: 26, name: "São Francisco (a partir da 4ª rua)", taxValue: 10.00 },
        { id: 27, name: "Vitória-régia", taxValue: 10.00 },
        
        // R$ 12,00 (ordem alfabética)
        { id: 28, name: "Açai", taxValue: 12.00 },
        { id: 29, name: "Beco da Shell", taxValue: 12.00 },
        { id: 30, name: "Belas terras (km6)", taxValue: 12.00 },
        { id: 31, name: "Bom jardim", taxValue: 12.00 },
        { id: 32, name: "Buriti", taxValue: 12.00 },
        { id: 33, name: "Campo belo", taxValue: 12.00 },
        { id: 34, name: "Chico do Leite", taxValue: 12.00 },
        { id: 35, name: "Cidade nova (JJP)", taxValue: 12.00 },
        { id: 36, name: "Jacarézinho", taxValue: 12.00 },
        { id: 37, name: "Jardim aeroporto (km5)", taxValue: 12.00 },
        { id: 38, name: "Jardim américa (altos buriti)", taxValue: 12.00 },
        { id: 39, name: "Maria Magdalena 1 e 2", taxValue: 12.00 },
        { id: 40, name: "Pérola do tapajós", taxValue: 12.00 },
        { id: 41, name: "QUARTEL 53 BIS", taxValue: 12.00 },
        { id: 42, name: "Sol Nascente", taxValue: 12.00 },
        { id: 43, name: "Vale do piracanã (residêncial)", taxValue: 12.00 },
        { id: 44, name: "Vale do tapajós", taxValue: 12.00 },
        { id: 45, name: "Valmirlândia 1 e 2", taxValue: 12.00 },
        { id: 46, name: "Viva itaituba (km6)", taxValue: 12.00 },
        { id: 47, name: "Wirland Freire", taxValue: 12.00 },
    ]
};

// Função para obter endereços vinculados a um cliente especial
function getEnderecosEspecial(clienteName) {
    return enderecosEspecial[clienteName] || [];
}

// Função para obter endereços por referência
function getEnderecosByReferencia(referencia) {
    return enderecosEspecial[referencia] || [];
}

// Função para buscar clientes por nome
function searchClientes(searchTerm) {
    if (!searchTerm || searchTerm.trim() === '') {
        return [];
    }
    
    const term = searchTerm.toLowerCase().trim();
    return clientes.filter(cliente => 
        cliente.name.toLowerCase().includes(term)
    );
}

// Função para obter todos os clientes
function getAllClientes() {
    return clientes;
}




