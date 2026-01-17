// Estado da aplicação
let currentType = null;
let currentLocation = null;
let selectedCliente = null;

// Elementos DOM
const clienteSearch = document.getElementById('cliente-search');
const enderecosVinculados = document.getElementById('enderecos-vinculados');
const taxaUnica = document.getElementById('taxa-unica');
const destinationSelection = document.getElementById('destination-selection');
const typeSelection = document.getElementById('type-selection');
const locationList = document.getElementById('location-list');
const addressList = document.getElementById('address-list');
const bairrosList = document.getElementById('bairros-list');
const breadcrumb = document.getElementById('breadcrumb');
const locationCards = document.getElementById('location-cards');
const addressCards = document.getElementById('address-cards');
const bairrosCards = document.getElementById('bairros-cards');
const enderecosCards = document.getElementById('enderecos-cards');
const clienteCards = document.getElementById('cliente-cards');
const clienteResults = document.getElementById('cliente-results');
const selectedClienteName = document.getElementById('selected-cliente-name');
const enderecosClienteName = document.getElementById('enderecos-cliente-name');
const taxaUnicaClienteName = document.getElementById('taxa-unica-cliente-name');
const taxaUnicaValue = document.getElementById('taxa-unica-value');
const addressSearch = document.getElementById('address-search');
const bairroSearch = document.getElementById('bairro-search');
const enderecosSearch = document.getElementById('enderecos-search');
const clienteSearchInput = document.getElementById('cliente-search-input');
const noResults = document.getElementById('no-results');
const noResultsBairros = document.getElementById('no-results-bairros');
const noResultsCliente = document.getElementById('no-results-cliente');
const noResultsEnderecos = document.getElementById('no-results-enderecos');

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    showClienteSearch();
});

// Event Listeners
function initializeEventListeners() {
    // Seleção de tipo (Centro Comercial ou Cidade Alta)
    document.querySelectorAll('.selection-card').forEach(card => {
        card.addEventListener('click', function() {
            const type = this.getAttribute('data-type');
            selectType(type);
        });
    });

    // Botão voltar para tipo
    document.getElementById('back-to-type').addEventListener('click', function() {
        showClienteSearch();
    });

    // Botão voltar para tipo (bairros)
    document.getElementById('back-to-type-bairros').addEventListener('click', function() {
        showClienteSearch();
    });

    // Botão voltar para lista de localizações
    document.getElementById('back-to-location').addEventListener('click', function() {
        showLocationList(currentType);
    });

    // Busca de clientes
    clienteSearchInput.addEventListener('input', function() {
        handleClienteSearch(this.value);
    });

    // Busca de endereços
    addressSearch.addEventListener('input', function() {
        filterAddresses(this.value);
    });

    // Busca de bairros
    bairroSearch.addEventListener('input', function() {
        filterBairros(this.value);
    });

    // Botões para navegar por localização
    document.getElementById('browse-centro-comercial').addEventListener('click', function() {
        selectType('centro-comercial');
    });

    document.getElementById('browse-cidade-alta').addEventListener('click', function() {
        selectType('cidade-alta');
    });

    // Botão voltar para busca de cliente
    document.getElementById('back-to-cliente-search').addEventListener('click', function() {
        showClienteSearch();
    });

    // Botão voltar para busca de cliente (taxa única)
    document.getElementById('back-to-cliente-search-taxa').addEventListener('click', function() {
        showClienteSearch();
    });

    // Botão voltar para busca de cliente (endereços vinculados)
    document.getElementById('back-to-cliente-search-enderecos').addEventListener('click', function() {
        showClienteSearch();
    });

    // Busca de endereços vinculados
    enderecosSearch.addEventListener('input', function() {
        filterEnderecosVinculados(this.value);
    });

    // Seleção de destino (após selecionar cliente) - usando event delegation
    if (destinationSelection) {
        destinationSelection.addEventListener('click', function(e) {
            const card = e.target.closest('[data-destination]');
            if (card) {
                const destination = card.getAttribute('data-destination');
                selectDestination(destination);
            }
        });
    }
}

// Mostrar tela de busca de cliente
function showClienteSearch() {
    currentType = null;
    currentLocation = null;
    selectedCliente = null;
    
    clienteSearch.classList.remove('d-none');
    enderecosVinculados.classList.add('d-none');
    taxaUnica.classList.add('d-none');
    destinationSelection.classList.add('d-none');
    typeSelection.classList.add('d-none');
    locationList.classList.add('d-none');
    addressList.classList.add('d-none');
    bairrosList.classList.add('d-none');
    clienteResults.classList.add('d-none');
    noResultsCliente.classList.add('d-none');
    clienteSearchInput.value = '';
    
    updateBreadcrumb([
        { text: 'Início', active: true }
    ]);
}

// Mostrar tela de seleção de tipo
function showTypeSelection() {
    currentType = null;
    currentLocation = null;
    selectedCliente = null;
    
    clienteSearch.classList.add('d-none');
    destinationSelection.classList.add('d-none');
    typeSelection.classList.remove('d-none');
    locationList.classList.add('d-none');
    addressList.classList.add('d-none');
    bairrosList.classList.add('d-none');
    
    updateBreadcrumb([
        { text: 'Início', active: true }
    ]);
}

// Selecionar tipo (Centro Comercial ou Cidade Alta)
function selectType(type) {
    currentType = type;
    showBairrosList();
}

// Mostrar lista de localizações
function showLocationList(type) {
    currentLocation = null;
    
    typeSelection.classList.add('d-none');
    locationList.classList.remove('d-none');
    addressList.classList.add('d-none');
    bairrosList.classList.add('d-none');
    
    const typeLabel = type === 'centro-comercial' ? 'Centro Comercial' : 'Cidade Alta';
    document.getElementById('location-type-title').textContent = `Selecione um ${typeLabel}`;
    
    const locations = getDataByType(type);
    displayLocations(locations);
    
    updateBreadcrumb([
        { text: 'Início', active: false, action: showTypeSelection },
        { text: typeLabel, active: true }
    ]);
}

// Mostrar lista de bairros (Cidade Alta ou Centro Comercial)
function showBairrosList() {
    currentLocation = null;
    
    clienteSearch.classList.add('d-none');
    enderecosVinculados.classList.add('d-none');
    taxaUnica.classList.add('d-none');
    destinationSelection.classList.add('d-none');
    typeSelection.classList.add('d-none');
    locationList.classList.add('d-none');
    addressList.classList.add('d-none');
    bairrosList.classList.remove('d-none');
    
    const typeLabel = currentType === 'centro-comercial' ? 'Centro Comercial' : 'Cidade Alta';
    document.querySelector('#bairros-list h2').textContent = `${typeLabel} - Bairros`;
    
    const bairros = getBairrosByType(currentType);
    displayBairros(bairros);
    bairroSearch.value = '';
    
    if (selectedCliente) {
        updateBreadcrumb([
            { text: 'Início', active: false, action: showClienteSearch },
            { text: 'Buscar Cliente', active: false, action: showClienteSearch },
            { text: selectedCliente.name, active: false, action: showClienteSearch },
            { text: typeLabel, active: true }
        ]);
    } else {
        updateBreadcrumb([
            { text: 'Início', active: false, action: showClienteSearch },
            { text: typeLabel, active: true }
        ]);
    }
}

// Exibir bairros
function displayBairros(bairros) {
    bairrosCards.innerHTML = '';
    noResultsBairros.classList.add('d-none');
    
    if (bairros.length === 0) {
        noResultsBairros.classList.remove('d-none');
        return;
    }
    
    bairros.forEach(bairro => {
        const card = createBairroCard(bairro);
        bairrosCards.appendChild(card);
    });
}

// Criar card de bairro
function createBairroCard(bairro) {
    const col = document.createElement('div');
    col.className = 'col-12 col-md-6 col-lg-4';
    
    // Definir cor do badge baseado no valor
    let badgeClass = 'bg-primary';
    if (bairro.taxValue === 7.00) badgeClass = 'bg-success';
    else if (bairro.taxValue === 8.00) badgeClass = 'bg-info';
    else if (bairro.taxValue === 10.00) badgeClass = 'bg-warning';
    else if (bairro.taxValue === 12.00) badgeClass = 'bg-danger';
    
    col.innerHTML = `
        <div class="card bairro-card">
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-start mb-3">
                    <h5 class="card-title mb-0">
                        <i class="bi bi-geo-alt-fill text-primary me-2"></i>
                        ${bairro.name}
                    </h5>
                </div>
                <div class="tax-value-display">
                    <span class="badge ${badgeClass} badge-lg">
                        <i class="bi bi-currency-dollar me-1"></i>
                        Valor da Taxa: R$ ${bairro.taxValue.toFixed(2).replace('.', ',')}
                    </span>
                </div>
            </div>
        </div>
    `;
    
    return col;
}

// Filtrar bairros
function filterBairros(searchTerm) {
    const filtered = searchBairros(searchTerm, currentType);
    displayBairros(filtered);
}

// Exibir localizações
function displayLocations(locations) {
    locationCards.innerHTML = '';
    
    if (locations.length === 0) {
        locationCards.innerHTML = `
            <div class="col-12">
                <div class="empty-state">
                    <i class="bi bi-inbox"></i>
                    <p>Nenhuma localização disponível no momento.</p>
                </div>
            </div>
        `;
        return;
    }
    
    locations.forEach(location => {
        const card = createLocationCard(location);
        locationCards.appendChild(card);
    });
}

// Criar card de localização
function createLocationCard(location) {
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-4';
    
    const addressCount = location.addresses ? location.addresses.length : 0;
    const addressText = addressCount === 1 ? 'endereço' : 'endereços';
    
    col.innerHTML = `
        <div class="card location-card" data-location-id="${location.id}">
            <div class="card-body">
                <h5 class="card-title">
                    <i class="bi bi-geo-alt-fill text-primary me-2"></i>
                    ${location.name}
                </h5>
                <p class="card-text text-muted">
                    <i class="bi bi-list-ul me-1"></i>
                    ${addressCount} ${addressText} disponível${addressCount !== 1 ? 'eis' : ''}
                </p>
                <button class="btn btn-primary btn-sm">
                    Ver Endereços <i class="bi bi-arrow-right"></i>
                </button>
            </div>
        </div>
    `;
    
    // Adicionar evento de clique
    col.querySelector('.location-card').addEventListener('click', function() {
        const locationId = parseInt(this.getAttribute('data-location-id'));
        selectLocation(locationId);
    });
    
    return col;
}

// Selecionar localização
function selectLocation(locationId) {
    currentLocation = getLocation(currentType, locationId);
    
    if (!currentLocation) {
        alert('Localização não encontrada!');
        return;
    }
    
    showAddressList(currentLocation);
}

// Mostrar lista de endereços
function showAddressList(location) {
    clienteSearch.classList.add('d-none');
    typeSelection.classList.add('d-none');
    locationList.classList.add('d-none');
    addressList.classList.remove('d-none');
    bairrosList.classList.add('d-none');
    
    const typeLabel = currentType === 'centro-comercial' ? 'Centro Comercial' : 'Cidade Alta';
    document.getElementById('location-name-title').textContent = location.name;
    document.getElementById('location-type-subtitle').textContent = typeLabel;
    
    displayAddresses(location.addresses || []);
    addressSearch.value = '';
    
    updateBreadcrumb([
        { text: 'Início', active: false, action: showClienteSearch },
        { text: typeLabel, active: false, action: () => {
            if (currentType === 'cidade-alta') {
                showBairrosList();
            } else {
                showLocationList(currentType);
            }
        }},
        { text: location.name, active: true }
    ]);
}

// Exibir endereços
function displayAddresses(addresses, searchTerm = '') {
    addressCards.innerHTML = '';
    noResults.classList.add('d-none');
    
    if (addresses.length === 0) {
        noResults.classList.remove('d-none');
        return;
    }
    
    addresses.forEach(address => {
        const card = createAddressCard(address);
        addressCards.appendChild(card);
    });
}

// Criar card de endereço
function createAddressCard(address) {
    const col = document.createElement('div');
    col.className = 'col-12 col-md-6 col-lg-4';
    
    col.innerHTML = `
        <div class="card address-card">
            <div class="card-body">
                <div class="address-info">
                    <div class="address-icon">
                        <i class="bi bi-geo-alt-fill"></i>
                    </div>
                    <div class="address-details">
                        <h5 class="mb-2">${address.street}</h5>
                        <p class="mb-1">
                            <i class="bi bi-geo me-1"></i>
                            ${address.neighborhood}
                        </p>
                        <p class="mb-1">
                            <i class="bi bi-building me-1"></i>
                            ${address.city} - ${address.state}
                        </p>
                        <p class="mb-2">
                            <i class="bi bi-postcard me-1"></i>
                            CEP: ${address.zipCode}
                        </p>
                        ${address.additionalInfo ? `
                            <p class="mb-0">
                                <span class="badge bg-info badge-custom">
                                    <i class="bi bi-info-circle me-1"></i>
                                    ${address.additionalInfo}
                                </span>
                            </p>
                        ` : ''}
                    </div>
                </div>
            </div>
        </div>
    `;
    
    return col;
}

// Filtrar endereços
function filterAddresses(searchTerm) {
    if (!currentLocation || !currentLocation.addresses) {
        return;
    }
    
    const term = searchTerm.toLowerCase().trim();
    
    if (term === '') {
        displayAddresses(currentLocation.addresses);
        return;
    }
    
    const filtered = currentLocation.addresses.filter(address => {
        const searchableText = `
            ${address.street}
            ${address.neighborhood}
            ${address.city}
            ${address.state}
            ${address.zipCode}
            ${address.additionalInfo || ''}
        `.toLowerCase();
        
        return searchableText.includes(term);
    });
    
    displayAddresses(filtered, term);
}

// Buscar clientes (handler)
function handleClienteSearch(searchTerm) {
    const term = searchTerm.trim();
    
    if (term === '') {
        clienteResults.classList.add('d-none');
        noResultsCliente.classList.add('d-none');
        return;
    }
    
    const resultados = searchClientes(term);
    
    if (resultados.length === 0) {
        clienteResults.classList.add('d-none');
        noResultsCliente.classList.remove('d-none');
        return;
    }
    
    clienteResults.classList.remove('d-none');
    noResultsCliente.classList.add('d-none');
    displayClientes(resultados);
}

// Exibir clientes encontrados
function displayClientes(clientes) {
    clienteCards.innerHTML = '';
    
    clientes.forEach(cliente => {
        const card = createClienteCard(cliente);
        clienteCards.appendChild(card);
    });
}

// Criar card de cliente
function createClienteCard(cliente) {
    const col = document.createElement('div');
    col.className = 'col-12 mb-3';
    
    // Mapear referência para cor
    let badgeClass = 'bg-secondary';
    let referenciaLabel = cliente.referencia;
    
    if (cliente.referencia === 'CENTRO') {
        badgeClass = 'bg-primary';
    } else if (cliente.referencia === 'LIBERDADE') {
        badgeClass = 'bg-info';
    } else if (cliente.referencia === 'CIDADEALTA') {
        badgeClass = 'bg-success';
    } else if (cliente.referencia === 'FLORESTA') {
        badgeClass = 'bg-warning';
    }
    
    col.innerHTML = `
        <div class="card cliente-result-card">
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="flex-grow-1">
                        <h5 class="card-title mb-1">
                            <i class="bi bi-building text-primary me-2"></i>
                            ${cliente.name}
                        </h5>
                        <p class="card-text mb-0">
                            <span class="badge ${badgeClass}">
                                <i class="bi bi-geo-alt-fill me-1"></i>
                                Referência: ${referenciaLabel}
                            </span>
                        </p>
                    </div>
                    <div class="ms-3">
                        <button class="btn btn-primary btn-select-cliente" data-cliente-id="${cliente.id}">
                            <i class="bi bi-check-circle me-1"></i> Selecionar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Adicionar evento de clique no botão
    col.querySelector('.btn-select-cliente').addEventListener('click', function(e) {
        e.stopPropagation();
        const clienteId = parseInt(this.getAttribute('data-cliente-id'));
        selectCliente(clienteId);
    });
    
    return col;
}

// Selecionar cliente
function selectCliente(clienteId) {
    const cliente = getAllClientes().find(c => c.id === clienteId);
    if (!cliente) {
        alert('Cliente não encontrado!');
        return;
    }
    
    selectedCliente = cliente;
    
    // Verificar se é cliente com valor único
    if (cliente.referencia && cliente.referencia.includes('VALOR ÚNICO')) {
        showTaxaUnica();
    } 
    // Verificar se é cliente com endereços vinculados
    else if (cliente.referencia && cliente.referencia === 'ENDERECOS_VINCULADOS') {
        showEnderecosVinculados();
    }
    // Verificar se é cliente com referência FLORESTA
    else if (cliente.referencia && cliente.referencia === 'FLORESTA') {
        showEnderecosVinculados();
    }
    // Se referência for CENTRO, mostrar diretamente Centro Comercial
    else if (cliente.referencia && cliente.referencia === 'CENTRO') {
        currentType = 'centro-comercial';
        showBairrosList();
    }
    // Se referência for CIDADEALTA, mostrar diretamente Cidade Alta
    else if (cliente.referencia && cliente.referencia === 'CIDADEALTA') {
        currentType = 'cidade-alta';
        showBairrosList();
    }
    else {
        showDestinationSelection();
    }
}

// Mostrar tela de endereços vinculados
function showEnderecosVinculados() {
    clienteSearch.classList.add('d-none');
    enderecosVinculados.classList.remove('d-none');
    taxaUnica.classList.add('d-none');
    destinationSelection.classList.add('d-none');
    typeSelection.classList.add('d-none');
    locationList.classList.add('d-none');
    addressList.classList.add('d-none');
    bairrosList.classList.add('d-none');
    
    if (selectedCliente) {
        enderecosClienteName.textContent = `Cliente: ${selectedCliente.name}`;
        
        // Tentar obter endereços pelo nome do cliente primeiro, depois pela referência
        let enderecos = getEnderecosEspecial(selectedCliente.name);
        if (enderecos.length === 0 && selectedCliente.referencia) {
            enderecos = getEnderecosByReferencia(selectedCliente.referencia);
        }
        
        displayEnderecosVinculados(enderecos);
        enderecosSearch.value = '';
    }
    
    updateBreadcrumb([
        { text: 'Início', active: false, action: showClienteSearch },
        { text: 'Buscar Cliente', active: false, action: showClienteSearch },
        { text: 'Endereços Vinculados', active: true }
    ]);
}

// Exibir endereços vinculados
function displayEnderecosVinculados(enderecos, searchTerm = '') {
    enderecosCards.innerHTML = '';
    noResultsEnderecos.classList.add('d-none');
    
    if (enderecos.length === 0) {
        noResultsEnderecos.classList.remove('d-none');
        return;
    }
    
    enderecos.forEach(endereco => {
        const card = createEnderecoVinculadoCard(endereco);
        enderecosCards.appendChild(card);
    });
}

// Criar card de endereço vinculado
function createEnderecoVinculadoCard(endereco) {
    const col = document.createElement('div');
    col.className = 'col-12 col-md-6 col-lg-4';
    
    // Definir cor do badge baseado no valor
    let badgeClass = 'bg-primary';
    if (endereco.taxValue === 7.00) badgeClass = 'bg-success';
    else if (endereco.taxValue === 8.00) badgeClass = 'bg-info';
    else if (endereco.taxValue === 10.00) badgeClass = 'bg-warning';
    else if (endereco.taxValue === 12.00) badgeClass = 'bg-danger';
    
    col.innerHTML = `
        <div class="card bairro-card">
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-start mb-3">
                    <h5 class="card-title mb-0">
                        <i class="bi bi-geo-alt-fill text-primary me-2"></i>
                        ${endereco.name}
                    </h5>
                </div>
                <div class="tax-value-display">
                    <span class="badge ${badgeClass} badge-lg">
                        <i class="bi bi-currency-dollar me-1"></i>
                        Valor da Taxa: R$ ${endereco.taxValue.toFixed(2).replace('.', ',')}
                    </span>
                </div>
            </div>
        </div>
    `;
    
    return col;
}

// Filtrar endereços vinculados
function filterEnderecosVinculados(searchTerm) {
    if (!selectedCliente) {
        return;
    }
    
    // Tentar obter endereços pelo nome do cliente primeiro, depois pela referência
    let enderecos = getEnderecosEspecial(selectedCliente.name);
    if (enderecos.length === 0 && selectedCliente.referencia) {
        enderecos = getEnderecosByReferencia(selectedCliente.referencia);
    }
    
    const term = searchTerm.toLowerCase().trim();
    
    if (term === '') {
        displayEnderecosVinculados(enderecos);
        return;
    }
    
    const filtered = enderecos.filter(endereco => 
        endereco.name.toLowerCase().includes(term)
    );
    
    displayEnderecosVinculados(filtered, term);
}

// Mostrar tela de taxa única
function showTaxaUnica() {
    clienteSearch.classList.add('d-none');
    taxaUnica.classList.remove('d-none');
    destinationSelection.classList.add('d-none');
    typeSelection.classList.add('d-none');
    locationList.classList.add('d-none');
    addressList.classList.add('d-none');
    bairrosList.classList.add('d-none');
    
    if (selectedCliente) {
        taxaUnicaClienteName.textContent = `Cliente: ${selectedCliente.name} - Referência: ${selectedCliente.referencia}`;
        
        // Extrair o valor numérico da referência (ex: "VALOR ÚNICO 7" -> 7)
        const valorMatch = selectedCliente.referencia.match(/\d+/);
        const valor = valorMatch ? parseFloat(valorMatch[0]) : 0;
        taxaUnicaValue.textContent = valor.toFixed(2).replace('.', ',');
    }
    
    updateBreadcrumb([
        { text: 'Início', active: false, action: showClienteSearch },
        { text: 'Buscar Cliente', active: false, action: showClienteSearch },
        { text: 'Taxa Única', active: true }
    ]);
}

// Mostrar tela de seleção de destino
function showDestinationSelection() {
    clienteSearch.classList.add('d-none');
    destinationSelection.classList.remove('d-none');
    typeSelection.classList.add('d-none');
    locationList.classList.add('d-none');
    addressList.classList.add('d-none');
    bairrosList.classList.add('d-none');
    
    if (selectedCliente) {
        selectedClienteName.textContent = `Cliente: ${selectedCliente.name} - Referência: ${selectedCliente.referencia}`;
    }
    
    updateBreadcrumb([
        { text: 'Início', active: false, action: showClienteSearch },
        { text: 'Buscar Cliente', active: false, action: showClienteSearch },
        { text: 'Selecionar Destino', active: true }
    ]);
}

// Selecionar destino
function selectDestination(destination) {
    currentType = destination;
    showBairrosList();
    
    updateBreadcrumb([
        { text: 'Início', active: false, action: showClienteSearch },
        { text: 'Buscar Cliente', active: false, action: showClienteSearch },
        { text: selectedCliente ? selectedCliente.name : 'Cliente', active: false, action: showDestinationSelection },
        { text: destination === 'centro-comercial' ? 'Centro Comercial' : 'Cidade Alta', active: true }
    ]);
}

// Atualizar breadcrumb
function updateBreadcrumb(items) {
    breadcrumb.innerHTML = '';
    
    items.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = `breadcrumb-item ${item.active ? 'active' : ''}`;
        
        if (item.active) {
            li.setAttribute('aria-current', 'page');
            li.textContent = item.text;
        } else {
            const a = document.createElement('a');
            a.href = '#';
            a.textContent = item.text;
            if (item.action) {
                a.addEventListener('click', function(e) {
                    e.preventDefault();
                    item.action();
                });
            }
            li.appendChild(a);
        }
        
        breadcrumb.appendChild(li);
    });
}

