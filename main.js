/* MENU MÓVEL */

const menuToggle = document.getElementById("menu-toggle");
const navigation = document.getElementById("navigation");

// Tem de coincidir com o breakpoint do menu móvel no CSS (max-width: 960px)
const MOBILE_MENU_BREAKPOINT = 960;

if (menuToggle && navigation) {
    const closeMenu = () => {
        navigation.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");

        document.body.classList.remove("menu-open");
    };

    menuToggle.addEventListener("click", () => {
        const isOpen = navigation.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", String(isOpen));

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Fechar menu" : "Abrir menu"
        );

        document.body.classList.toggle("menu-open", isOpen);
    });

    navigation.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > MOBILE_MENU_BREAKPOINT) {
            closeMenu();
        }
    });
}

/* PAÍSES — LISTAGEM */

const countriesGrid = document.getElementById("countries-grid");
const filterButtons = document.querySelectorAll(".filter-btn[data-filter]");
const countrySearch = document.getElementById("country-search");
const countrySort = document.getElementById("country-sort");

if (
    countriesGrid &&
    typeof FOOTBALL_ATLAS_DATA !== "undefined" &&
    Array.isArray(FOOTBALL_ATLAS_DATA.countries)
) {
    let activeConfederation = "ALL";
    let searchTerm = "";

    const getTotalTitles = (country) =>
        (Array.isArray(country.nationalTeamTitles) ? country.nationalTeamTitles : []).reduce(
            (acc, item) => acc + (Number(item.count) || 0),
            0
        );

    const updateAllFilterCount = () => {
        const allBtn = document.querySelector('.filter-btn[data-filter="ALL"]');
        if (allBtn) {
            allBtn.textContent = `Todos (${FOOTBALL_ATLAS_DATA.countries.length})`;
        }
    };

    const renderCountries = () => {
        const query = searchTerm.trim().toLowerCase();

        const filtered = FOOTBALL_ATLAS_DATA.countries.filter((country) => {
            if (!country || typeof country !== "object") return false;

            const conf = (country.confederation || "").toUpperCase();
            const matchesConf =
                activeConfederation === "ALL" || conf === activeConfederation.toUpperCase();

            const nameMatch = (country.name || "").toLowerCase().includes(query);
            const summaryMatch = (country.summary || "").toLowerCase().includes(query);
            const matchesQuery = !query || nameMatch || summaryMatch;

            return matchesConf && matchesQuery;
        });

        const sortBy = countrySort ? countrySort.value : "default";

        const sorted = [...filtered].sort((a, b) => {
            const nameA = a.name || "";
            const nameB = b.name || "";

            if (sortBy === "name-asc") {
                return nameA.localeCompare(nameB, "pt");
            }
            if (sortBy === "name-desc") {
                return nameB.localeCompare(nameA, "pt");
            }
            if (sortBy === "titles-desc") {
                return getTotalTitles(b) - getTotalTitles(a) || nameA.localeCompare(nameB, "pt");
            }
            return 0;
        });

        if (sorted.length === 0) {
            countriesGrid.innerHTML =
                '<p class="empty-state">Nenhum país encontrado com esse filtro.</p>';
            return;
        }

        countriesGrid.innerHTML = sorted
            .map((country) => {
                const totalTitles = getTotalTitles(country);
                const safeId = encodeURIComponent(country.id || "");
                const safeName = country.name || "País";
                const safeConf = country.confederation || "FIFA";
                const safeSummary = country.summary || "";
                const crestSrc = country.crest ? `../${country.crest}` : "";

                return `
                    <a href="country.html?id=${safeId}" class="country-card">
                        <div class="country-card-top">
                            <img src="${crestSrc}" alt="Emblema da seleção de ${safeName}" class="country-crest" loading="lazy" onerror="console.error('Imagem não encontrada:', this.src)">
                            <span class="country-badge">${safeConf}</span>
                        </div>

                        <div class="country-card-body">
                            <h2>${safeName}</h2>
                            <p>${safeSummary}</p>
                        </div>

                        <div class="country-card-meta">
                            <span><strong>${totalTitles}</strong> ${totalTitles === 1 ? "título oficial" : "títulos oficiais"}</span>
                        </div>
                    </a>
                `;
            })
            .join("");
    };

    filterButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            filterButtons.forEach((b) => b.classList.remove("is-active"));
            btn.classList.add("is-active");
            activeConfederation = btn.dataset.filter || "ALL";
            renderCountries();
        });
    });

    if (countrySearch) {
        countrySearch.addEventListener("input", (e) => {
            searchTerm = e.target.value;
            renderCountries();
        });
    }

    if (countrySort) {
        countrySort.addEventListener("change", renderCountries);
    }

    updateAllFilterCount();
    renderCountries();
}

/* PAÍS — PÁGINA INDIVIDUAL */

const countryDetail = document.getElementById("country-detail");

const COUNTRY_POSITION_GROUPS = [
    { label: "Guarda-redes:", match: (pos) => /guarda[\s-]*redes/i.test(pos) },
    { label: "Defesas:", match: (pos) => /defesa|lateral|central/i.test(pos) },
    { label: "Médios:", match: (pos) => /m[eé]dio|trinco|volante|ala/i.test(pos) },
    { label: "Avançados:", match: (pos) => /avan[cç]ado|extremo|ponta/i.test(pos) }
];

const renderCountryPlayerCard = (player, index) => {
    const safeName = player.name || "Jogador";
    const safeNumber = player.number ?? "-";
    const safePosition = player.position || "Posição";
    const club = player.club || "Não indicado";
    const age = player.age ? `${player.age} anos` : "Não indicada";
    const foot = player.foot || "Não indicado";
    const extraInfo =
        player.info ||
        player.bio ||
        `Atua como ${safePosition.toLowerCase()} e veste o dorsal #${safeNumber}.`;

    return `
        <div class="squad-entry" data-player-index="${index}">
            <button type="button" class="squad-item squad-item--interactive" aria-expanded="false">
                <span class="squad-number">#${safeNumber}</span>
                <div class="squad-main-text">
                    <strong>${safeName}</strong>
                    <small>${safePosition}</small>
                </div>
                <span class="squad-toggle-hint" aria-hidden="true">+</span>
            </button>
            <div class="squad-player-details" hidden>
                <p><strong>Clube:</strong> ${club}</p>
                <p><strong>Idade:</strong> ${age}</p>
                <p><strong>Pé preferencial:</strong> ${foot}</p>
                <p><strong>Nota:</strong> ${extraInfo}</p>
            </div>
        </div>
    `;
};

const renderCountrySquad = (squad) => {
    if (!Array.isArray(squad) || squad.length === 0) {
        return "";
    }

    const indexedSquad = squad.map((player, index) => ({ player, index }));

    const groupsHtml = COUNTRY_POSITION_GROUPS.map((group) => {
        const playersInGroup = indexedSquad.filter(({ player }) =>
            group.match(player.position || "")
        );
        if (playersInGroup.length === 0) return "";

        return `
            <div class="squad-position-group">
                <h3>${group.label}</h3>
                <div class="squad-list squad-list--stacked">
                    ${playersInGroup
                        .map(({ player, index }) => renderCountryPlayerCard(player, index))
                        .join("")}
                </div>
            </div>
        `;
    })
        .filter(Boolean)
        .join("");

    const remaining = indexedSquad.filter(
        ({ player }) => !COUNTRY_POSITION_GROUPS.some((group) => group.match(player.position || ""))
    );

    const remainingHtml =
        remaining.length > 0
            ? `
            <div class="squad-position-group">
                <h3>Outros:</h3>
                <div class="squad-list squad-list--stacked">
                    ${remaining
                        .map(({ player, index }) => renderCountryPlayerCard(player, index))
                        .join("")}
                </div>
            </div>`
            : "";

    return `
        <article class="detail-card detail-card--wide">
            <h2>Plantel Atual</h2>
            <div class="squad-groups">${groupsHtml}${remainingHtml}</div>
        </article>
    `;
};

if (countryDetail && typeof FOOTBALL_ATLAS_DATA !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    const countryId = params.get("id");
    const country = FOOTBALL_ATLAS_DATA.countries.find((c) => c.id === countryId);

    if (!country) {
        countryDetail.innerHTML = `
            <div class="detail-empty">
                <h1>País não encontrado</h1>
                <p>O país pedido não existe na base de dados.</p>
                <a class="primary-button" href="countries.html">Voltar aos Países</a>
            </div>
        `;
    } else {
        document.title = `${country.name} | Football Atlas`;

        const titlesHtml =
            country.nationalTeamTitles.length > 0
                ? `<ul class="titles-list">
                    ${country.nationalTeamTitles
                        .map(
                            (t) => `
                            <li>
                                <strong>${t.competition}</strong>
                                <span class="title-count">${t.count}×</span>
                                <small>(${t.years.join(", ")})</small>
                            </li>`
                        )
                        .join("")}
                   </ul>`
                : `<p class="muted-note">Sem títulos oficiais seniores em Mundiais, Europeus ou Copa América.</p>`;

        const countryStatsHtml =
            country.stats && country.stats.length > 0
                ? `<ul class="titles-list">
                    ${country.stats
                        .map(
                            (s) => `
                            <li>
                                <strong>${s.label}:</strong>
                                <span>${s.value}</span>
                            </li>`
                        )
                        .join("")}
                   </ul>`
                : `<p class="muted-note">Sem estatísticas registadas.</p>`;

        const squadSectionHtml = renderCountrySquad(country.squad);

        countryDetail.innerHTML = `
            <div class="detail-container">
                <a href="countries.html" class="back-link">← Voltar a todos os países</a>

                <header class="country-hero-card">
                    <img src="../${country.crest}" alt="Emblema da seleção de ${country.name}" class="detail-crest" onerror="console.error('Imagem não encontrada:', this.src)">
                    <div>
                        <span class="country-badge">${country.confederation}</span>
                        <h1>${country.name}</h1>
                        <p>${country.summary}</p>
                    </div>
                </header>

                <div class="detail-grid">
                    <article class="detail-card detail-card--wide">
                        <h2>História do Futebol no País</h2>
                        <p>${country.history}</p>
                    </article>

                    <article class="detail-card">
                        <h2>Principais Estatísticas</h2>
                        ${countryStatsHtml}
                    </article>

                    <article class="detail-card">
                        <h2>Seleção Nacional — Títulos Oficiais</h2>
                        ${titlesHtml}
                    </article>

                    <article class="detail-card">
                        <h2>Principais Competições</h2>
                        <div class="tag-list">
                            ${country.mainCompetitions
                                .map((comp) => `<span class="info-pill">${comp}</span>`)
                                .join("")}
                        </div>
                    </article>

                    <article class="detail-card">
                        <h2>Jogadores Históricos Relevantes</h2>
                        <div class="tag-list">
                            ${country.historicPlayers
                                .map((player) => `<span class="info-pill info-pill--gold">${player}</span>`)
                                .join("")}
                        </div>
                    </article>

                    ${squadSectionHtml}
                </div>
            </div>
        `;

        countryDetail.querySelectorAll(".squad-item--interactive").forEach((btn) => {
            btn.addEventListener("click", () => {
                const entry = btn.closest(".squad-entry");
                const details = entry ? entry.querySelector(".squad-player-details") : null;
                const hint = btn.querySelector(".squad-toggle-hint");
                if (!details) return;

                const isOpen = btn.getAttribute("aria-expanded") === "true";
                btn.setAttribute("aria-expanded", String(!isOpen));
                details.hidden = isOpen;
                entry.classList.toggle("is-open", !isOpen);
                if (hint) {
                    hint.textContent = !isOpen ? "−" : "+";
                }
            });
        });
    }
}

/* CLUBES — LISTAGEM */

const clubsGrid = document.getElementById("clubs-grid");
const clubCountryButtons = document.querySelectorAll(".filter-btn[data-country]");
const clubSearch = document.getElementById("club-search");
const clubSort = document.getElementById("club-sort");

if (clubsGrid && typeof FOOTBALL_ATLAS_DATA !== "undefined" && Array.isArray(FOOTBALL_ATLAS_DATA.clubs)) {
    let activeCountry = "ALL";
    let clubSearchTerm = "";

    const getClubTotalTitles = (club) =>
        (club.titles || []).reduce((acc, item) => acc + item.count, 0);

    const renderClubs = () => {
        const filtered = FOOTBALL_ATLAS_DATA.clubs.filter((club) => {
            const matchesCountry =
                activeCountry === "ALL" || club.country === activeCountry;

            const query = clubSearchTerm.trim().toLowerCase();
            const matchesQuery =
                !query ||
                club.name.toLowerCase().includes(query) ||
                club.fullName.toLowerCase().includes(query) ||
                club.city.toLowerCase().includes(query) ||
                club.country.toLowerCase().includes(query);

            return matchesCountry && matchesQuery;
        });

        const sortBy = clubSort ? clubSort.value : "default";

        const sorted = [...filtered].sort((a, b) => {
            if (sortBy === "name-asc") {
                return a.name.localeCompare(b.name, "pt");
            }
            if (sortBy === "name-desc") {
                return b.name.localeCompare(a.name, "pt");
            }
            if (sortBy === "titles-desc") {
                return (
                    getClubTotalTitles(b) - getClubTotalTitles(a) ||
                    a.name.localeCompare(b.name, "pt")
                );
            }
            if (sortBy === "founded-asc") {
                return a.founded - b.founded || a.name.localeCompare(b.name, "pt");
            }
            return 0;
        });

        if (sorted.length === 0) {
            clubsGrid.innerHTML =
                '<p class="empty-state">Nenhum clube encontrado com esse filtro.</p>';
            return;
        }

        clubsGrid.innerHTML = sorted
            .map((club) => {
                const totalTitles = getClubTotalTitles(club);

                return `
                    <a href="club.html?id=${encodeURIComponent(club.id)}" class="country-card">
                        <div class="country-card-top">
                            <img src="../${club.crest}" alt="Emblema oficial do ${club.name}" class="country-crest" loading="lazy" onerror="this.style.visibility='hidden'">
                            <span class="country-badge">${club.country}</span>
                        </div>

                        <div class="country-card-body">
                            <h2>${club.name}</h2>
                            <p>${club.summary}</p>
                        </div>

                        <div class="country-card-meta">
                            <span><strong>${club.city}</strong> · Fund. ${club.founded}</span>
                            <span><strong>${totalTitles}</strong> ${totalTitles === 1 ? "título" : "títulos"}</span>
                        </div>
                    </a>
                `;
            })
            .join("");
    };

    clubCountryButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            clubCountryButtons.forEach((b) => b.classList.remove("is-active"));
            btn.classList.add("is-active");
            activeCountry = btn.dataset.country;
            renderClubs();
        });
    });

    if (clubSearch) {
        clubSearch.addEventListener("input", (e) => {
            clubSearchTerm = e.target.value;
            renderClubs();
        });
    }

    if (clubSort) {
        clubSort.addEventListener("change", renderClubs);
    }

    renderClubs();
}

/* CLUBE — PÁGINA INDIVIDUAL */

const clubDetail = document.getElementById("club-detail");

const CLUB_POSITION_GROUPS = [
    { label: "Guarda-redes:", match: (pos) => /guarda[\s-]*redes/i.test(pos) },
    { label: "Defesas:", match: (pos) => /defesa|lateral|central/i.test(pos) },
    { label: "Médios:", match: (pos) => /m[eé]dio|trinco|volante|ala/i.test(pos) },
    { label: "Avançados:", match: (pos) => /avan[cç]ado|extremo|ponta/i.test(pos) }
];

const renderPlayerCard = (player, index) => {
    const safeName = player.name || "Jogador";
    const safeNumber = player.number ?? "-";
    const safePosition = player.position || "Posição";
    const nationality = player.nationality || "Não indicada";
    const age = player.age ? `${player.age} anos` : "Não indicada";
    const foot = player.foot || "Não indicado";
    const extraInfo =
        player.info ||
        player.bio ||
        `Atua como ${safePosition.toLowerCase()} e veste o dorsal #${safeNumber}.`;

    return `
        <div class="squad-entry" data-player-index="${index}">
            <button type="button" class="squad-item squad-item--interactive" aria-expanded="false">
                <span class="squad-number">#${safeNumber}</span>
                <div class="squad-main-text">
                    <strong>${safeName}</strong>
                    <small>${safePosition}</small>
                </div>
                <span class="squad-toggle-hint" aria-hidden="true">+</span>
            </button>
            <div class="squad-player-details" hidden>
                <p><strong>Nacionalidade:</strong> ${nationality}</p>
                <p><strong>Idade:</strong> ${age}</p>
                <p><strong>Pé preferencial:</strong> ${foot}</p>
                <p><strong>Nota:</strong> ${extraInfo}</p>
            </div>
        </div>
    `;
};

const renderSquadByPosition = (squad) => {
    if (!Array.isArray(squad) || squad.length === 0) {
        return `<p class="muted-note">Plantel em atualização.</p>`;
    }

    const indexedSquad = squad.map((player, index) => ({ player, index }));

    const groupsHtml = CLUB_POSITION_GROUPS.map((group) => {
        const playersInGroup = indexedSquad.filter(({ player }) =>
            group.match(player.position || "")
        );
        if (playersInGroup.length === 0) return "";

        return `
            <div class="squad-position-group">
                <h3>${group.label}</h3>
                <div class="squad-list squad-list--stacked">
                    ${playersInGroup
                        .map(({ player, index }) => renderPlayerCard(player, index))
                        .join("")}
                </div>
            </div>
        `;
    })
        .filter(Boolean)
        .join("");

    const remaining = indexedSquad.filter(
        ({ player }) => !CLUB_POSITION_GROUPS.some((group) => group.match(player.position || ""))
    );

    const remainingHtml =
        remaining.length > 0
            ? `
            <div class="squad-position-group">
                <h3>Outros:</h3>
                <div class="squad-list squad-list--stacked">
                    ${remaining
                        .map(({ player, index }) => renderPlayerCard(player, index))
                        .join("")}
                </div>
            </div>`
            : "";

    return `<div class="squad-groups">${groupsHtml}${remainingHtml}</div>`;
};

if (
    clubDetail &&
    typeof FOOTBALL_ATLAS_DATA !== "undefined" &&
    Array.isArray(FOOTBALL_ATLAS_DATA.clubs)
) {
    const params = new URLSearchParams(window.location.search);
    const clubId = params.get("id");
    const club = FOOTBALL_ATLAS_DATA.clubs.find((c) => c.id === clubId);

    if (!club) {
        clubDetail.innerHTML = `
            <div class="detail-empty">
                <h1>Clube não encontrado</h1>
                <p>O clube pedido não existe na base de dados.</p>
                <a class="primary-button" href="clubs.html">Voltar aos Clubes</a>
            </div>
        `;
    } else {
        document.title = `${club.name} | Football Atlas`;

        const titlesHtml =
            club.titles && club.titles.length > 0
                ? `<ul class="titles-list">
                    ${club.titles
                        .map(
                            (t) => `
                            <li>
                                <strong>${t.competition}</strong>
                                <span class="title-count">${t.count}×</span>
                                <small>(${t.years.join(", ")})</small>
                            </li>`
                        )
                        .join("")}
                   </ul>`
                : `<p class="muted-note">Sem títulos registados.</p>`;

        const statsHtml =
            club.stats && club.stats.length > 0
                ? `<ul class="titles-list">
                    ${club.stats
                        .map(
                            (s) => `
                            <li>
                                <strong>${s.label}:</strong>
                                <span>${s.value}</span>
                            </li>`
                        )
                        .join("")}
                   </ul>`
                : `<p class="muted-note">Sem estatísticas registadas.</p>`;

        const curiositiesHtml =
            club.curiosities && club.curiosities.length > 0
                ? `<ul class="titles-list">
                    ${club.curiosities.map((item) => `<li>${item}</li>`).join("")}
                   </ul>`
                : `<p class="muted-note">Sem curiosidades registadas.</p>`;

        const photosHtml =
            club.photos && club.photos.length > 0
                ? `<div class="club-photos-grid">
                    ${club.photos
                        .map(
                            (photo, index) => `
                            <figure class="club-photo-card">
                                <img src="../${photo}" alt="${club.name} — fotografia ${index + 1}" loading="lazy" onerror="this.closest('figure').style.display='none'">
                            </figure>`
                        )
                        .join("")}
                   </div>`
                : `<p class="muted-note">Sem fotografias adicionadas.</p>`;

        clubDetail.innerHTML = `
            <div class="detail-container">
                <a href="clubs.html" class="back-link">← Voltar a todos os clubes</a>

                <header class="country-hero-card">
                    <img src="../${club.crest}" alt="Emblema oficial do ${club.name}" class="detail-crest" onerror="this.style.visibility='hidden'">
                    <div>
                        <span class="country-badge">${club.country} · ${club.city} · Fundado em ${club.founded}</span>
                        <h1>${club.name}</h1>
                        <p><strong>${club.fullName}</strong> · Estádio: <strong>${club.stadium}</strong></p>
                        <p>${club.summary}</p>
                    </div>
                </header>

                <div class="detail-grid">
                    <article class="detail-card">
                        <h2>Identificação do Clube</h2>
                        <ul class="titles-list">
                            <li><strong>Nome completo:</strong> <span>${club.fullName}</span></li>
                            <li><strong>País:</strong> <span>${club.country}</span></li>
                            <li><strong>Cidade:</strong> <span>${club.city}</span></li>
                            <li><strong>Ano de fundação:</strong> <span>${club.founded}</span></li>
                            <li><strong>Estádio:</strong> <span>${club.stadium}</span></li>
                        </ul>
                    </article>

                    <article class="detail-card">
                        <h2>Principais Estatísticas</h2>
                        ${statsHtml}
                    </article>

                    <article class="detail-card detail-card--wide">
                        <h2>História do Clube</h2>
                        <p>${club.history}</p>
                    </article>

                    <article class="detail-card">
                        <h2>Títulos Conquistados</h2>
                        ${titlesHtml}
                    </article>

                    <article class="detail-card">
                        <h2>Algumas lendas do clube</h2>
                        <div class="tag-list">
                            ${(club.legends || [])
                                .map((legend) => `<span class="info-pill info-pill--gold">${legend}</span>`)
                                .join("")}
                        </div>
                    </article>

                    <article class="detail-card detail-card--wide">
                        <h2>Plantel Atual</h2>
                        ${renderSquadByPosition(club.squad)}
                    </article>

                    <article class="detail-card detail-card--wide">
                        <h2>Curiosidades</h2>
                        ${curiositiesHtml}
                    </article>

                    <article class="detail-card detail-card--wide">
                        <h2>Fotografias</h2>
                        ${photosHtml}
                    </article>
                </div>
            </div>
        `;

        clubDetail.querySelectorAll(".squad-item--interactive").forEach((btn) => {
            btn.addEventListener("click", () => {
                const entry = btn.closest(".squad-entry");
                const details = entry ? entry.querySelector(".squad-player-details") : null;
                const hint = btn.querySelector(".squad-toggle-hint");
                if (!details) return;

                const isOpen = btn.getAttribute("aria-expanded") === "true";
                btn.setAttribute("aria-expanded", String(!isOpen));
                details.hidden = isOpen;
                entry.classList.toggle("is-open", !isOpen);
                if (hint) {
                    hint.textContent = !isOpen ? "−" : "+";
                }
            });
        });
    }
}

/* COMPETIÇÕES — LISTAGEM */

const competitionsGrid = document.getElementById("competitions-grid");
const competitionCategoryButtons = document.querySelectorAll(".filter-btn[data-category]");
const competitionSearch = document.getElementById("competition-search");
const competitionSort = document.getElementById("competition-sort");

if (
    competitionsGrid &&
    typeof FOOTBALL_ATLAS_DATA !== "undefined" &&
    Array.isArray(FOOTBALL_ATLAS_DATA.competitions)
) {
    let activeCategory = "ALL";
    let competitionSearchTerm = "";

    const updateAllCompetitionsCount = () => {
        const allBtn = document.querySelector('.filter-btn[data-category="ALL"]');
        if (allBtn) {
            allBtn.textContent = `Todas (${FOOTBALL_ATLAS_DATA.competitions.length})`;
        }
    };

    const renderCompetitionsList = () => {
        const query = competitionSearchTerm.trim().toLowerCase();

        const filtered = FOOTBALL_ATLAS_DATA.competitions.filter((comp) => {
            if (!comp || typeof comp !== "object") return false;

            const category = (comp.category || "").toLowerCase();
            const matchesCategory =
                activeCategory === "ALL" || category === activeCategory.toLowerCase();

            const nameMatch = (comp.name || "").toLowerCase().includes(query);
            const confMatch = (comp.confederation || "").toLowerCase().includes(query);
            const summaryMatch = (comp.summary || "").toLowerCase().includes(query);
            const matchesQuery = !query || nameMatch || confMatch || summaryMatch;

            return matchesCategory && matchesQuery;
        });

        const sortBy = competitionSort ? competitionSort.value : "default";

        const sorted = [...filtered].sort((a, b) => {
            const nameA = a.name || "";
            const nameB = b.name || "";

            if (sortBy === "name-asc") return nameA.localeCompare(nameB, "pt");
            if (sortBy === "name-desc") return nameB.localeCompare(nameA, "pt");
            return 0;
        });

        if (sorted.length === 0) {
            competitionsGrid.innerHTML =
                '<p class="empty-state">Nenhuma competição encontrada com esse filtro.</p>';
            return;
        }

        competitionsGrid.innerHTML = sorted
            .map((comp) => {
                const safeId = encodeURIComponent(comp.id || "");
                const safeName = comp.name || "Competição";
                const safeCategory = comp.category || "Competição";
                const safeConf = comp.confederation || "";
                const safeSummary = comp.summary || "";
                const crestSrc = comp.crest ? `../${comp.crest}` : "";
                const badgeText = safeConf ? `${safeCategory} · ${safeConf}` : safeCategory;
                const winnersCount = Array.isArray(comp.winners) ? comp.winners.length : 0;

                return `
                    <a href="competition.html?id=${safeId}" class="country-card">
                        <div class="country-card-top">
                            <img src="${crestSrc}" alt="Logótipo de ${safeName}" class="country-crest" loading="lazy" onerror="this.style.visibility='hidden'">
                            <span class="country-badge">${badgeText}</span>
                        </div>

                        <div class="country-card-body">
                            <h2>${safeName}</h2>
                            <p>${safeSummary}</p>
                        </div>

                        <div class="country-card-meta">
                            <span><strong>${winnersCount}</strong> ${winnersCount === 1 ? "edição registada" : "edições registadas"}</span>
                        </div>
                    </a>
                `;
            })
            .join("");
    };

    competitionCategoryButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            competitionCategoryButtons.forEach((b) => b.classList.remove("is-active"));
            btn.classList.add("is-active");
            activeCategory = btn.dataset.category || "ALL";
            renderCompetitionsList();
        });
    });

    if (competitionSearch) {
        competitionSearch.addEventListener("input", (e) => {
            competitionSearchTerm = e.target.value;
            renderCompetitionsList();
        });
    }

    if (competitionSort) {
        competitionSort.addEventListener("change", renderCompetitionsList);
    }

    updateAllCompetitionsCount();
    renderCompetitionsList();
}

/* COMPETIÇÃO — PÁGINA INDIVIDUAL */

const competitionDetail = document.getElementById("competition-detail");

const renderWinningXISimple = (winningXI) => {
    if (!Array.isArray(winningXI) || winningXI.length === 0) {
        return `<p class="muted-note">XI vencedor não registado para esta edição.</p>`;
    }

    const groups = typeof CLUB_POSITION_GROUPS !== "undefined" ? CLUB_POSITION_GROUPS : [];

    const groupsHtml = groups
        .map((group) => {
            const players = winningXI.filter((p) => group.match(p.position || ""));
            if (players.length === 0) return "";

            return `
                <div class="squad-position-group">
                    <h4>${group.label}</h4>
                    <div class="squad-list squad-list--stacked">
                        ${players
                            .map(
                                (player) => `
                                <div class="squad-entry">
                                    <div class="squad-item">
                                        <span class="squad-number">#${player.number ?? "-"}</span>
                                        <div class="squad-main-text">
                                            <strong>${player.name || "Jogador"}</strong>
                                            <small>${player.position || "Posição"}</small>
                                        </div>
                                    </div>
                                </div>`
                            )
                            .join("")}
                    </div>
                </div>
            `;
        })
        .filter(Boolean)
        .join("");

    const remaining = winningXI.filter(
        (p) => !groups.some((group) => group.match(p.position || ""))
    );

    const remainingHtml =
        remaining.length > 0
            ? `
                <div class="squad-position-group">
                    <h4>Outros:</h4>
                    <div class="squad-list squad-list--stacked">
                        ${remaining
                            .map(
                                (player) => `
                                <div class="squad-entry">
                                    <div class="squad-item">
                                        <span class="squad-number">#${player.number ?? "-"}</span>
                                        <div class="squad-main-text">
                                            <strong>${player.name || "Jogador"}</strong>
                                            <small>${player.position || "Posição"}</small>
                                        </div>
                                    </div>
                                </div>`
                            )
                            .join("")}
                    </div>
                </div>`
            : "";

    return `<div class="squad-groups">${groupsHtml}${remainingHtml}</div>`;
};

const renderCompetitionWinners = (winners) => {
    if (!Array.isArray(winners) || winners.length === 0) {
        return `<p class="muted-note">Histórico de vencedores em atualização.</p>`;
    }

    return winners
        .map((entry, idx) => {
            const runnerUpHtml = entry.runnerUp
                ? `<small class="muted-note">Vice: ${entry.runnerUp}</small>`
                : "";

            const hasWinningXI =
                Array.isArray(entry.winningXI) && entry.winningXI.length > 0;

            const xiButtonHtml = hasWinningXI
                ? `
                    <button
                        type="button"
                        class="secondary-button toggle-champion-xi-btn"
                        aria-expanded="false"
                        aria-controls="champion-xi-${idx}"
                    >
                        Ver XI vencedor
                    </button>
                `
                : "";

            const xiPanelHtml = hasWinningXI
                ? `
                    <div id="champion-xi-${idx}" class="champion-xi-panel" hidden>
                        ${renderWinningXISimple(entry.winningXI)}
                    </div>
                `
                : "";

            return `
                <article class="detail-card detail-card--wide winner-edition-card">
                    <div class="winner-edition-row">
                        <div>
                            <strong>${entry.year || ""}</strong> — <span>${entry.champion || ""}</span>
                            ${runnerUpHtml}
                        </div>
                        ${xiButtonHtml}
                    </div>
                    ${xiPanelHtml}
                </article>
            `;
        })
        .join("");
};

if (
    competitionDetail &&
    typeof FOOTBALL_ATLAS_DATA !== "undefined" &&
    Array.isArray(FOOTBALL_ATLAS_DATA.competitions)
) {
    const params = new URLSearchParams(window.location.search);
    const competitionId = params.get("id");
    const competition = FOOTBALL_ATLAS_DATA.competitions.find((c) => c.id === competitionId);

    if (!competition) {
        competitionDetail.innerHTML = `
            <div class="detail-empty">
                <h1>Competição não encontrada</h1>
                <p>A competição pedida não existe na base de dados.</p>
                <a class="primary-button" href="competitions.html">Voltar às Competições</a>
            </div>
        `;
    } else {
        document.title = `${competition.name} | Football Atlas`;

        const crestSrc = competition.crest ? `../${competition.crest}` : "";
        const category = competition.category || "Competição";
        const conf = competition.confederation || "";
        const badgeText = conf ? `${category} · ${conf}` : category;

const teamsList = Array.isArray(competition.lastEditionParticipants)
            ? competition.lastEditionParticipants
            : Array.isArray(competition.lastEditionTeams)
              ? competition.lastEditionTeams
              : Array.isArray(competition.teams)
                ? competition.teams
                : [];

        const teamsHtml =
            teamsList.length > 0
                ? `<div class="tag-list">
                    ${teamsList.map((team) => `<span class="info-pill">${team}</span>`).join("")}
                   </div>`
                : `<p class="muted-note">Participantes da última edição em atualização.</p>`;

        const trophyHistoryHtml = competition.trophyHistory
            ? `<p>${competition.trophyHistory}</p>`
            : `<p class="muted-note">História do troféu em atualização.</p>`;

        competitionDetail.innerHTML = `
            <div class="detail-container">
                <a href="competitions.html" class="back-link">← Voltar a todas as competições</a>

                <header class="country-hero-card">
                    <img src="${crestSrc}" alt="Logótipo de ${competition.name}" class="detail-crest" onerror="this.style.visibility='hidden'">
                    <div>
                        <span class="country-badge">${badgeText}</span>
                        <h1>${competition.name}</h1>
                        <p>${competition.summary || competition.description || ""}</p>
                    </div>
                </header>

                <div class="detail-grid">
                    <article class="detail-card detail-card--wide">
                        <h2>História do Troféu</h2>
                        ${trophyHistoryHtml}
                    </article>

                    <article class="detail-card detail-card--wide">
                        <h2>Participantes da Última Edição</h2>
                        ${teamsHtml}
                    </article>

                    <div class="detail-card--wide">
                        <h2>Vencedores por Ano</h2>
                        ${renderCompetitionWinners(competition.winners)}
                    </div>
                </div>
            </div>
        `;

        competitionDetail.addEventListener("click", (event) => {
            const btn = event.target.closest(".toggle-champion-xi-btn");
            if (!btn) return;

            const panelId = btn.getAttribute("aria-controls");
            const panel = panelId ? document.getElementById(panelId) : null;
            if (!panel) return;

            const isOpen = btn.getAttribute("aria-expanded") === "true";
            btn.setAttribute("aria-expanded", String(!isOpen));
            panel.hidden = isOpen;
            btn.textContent = !isOpen ? "Ocultar XI vencedor" : "Ver XI vencedor";
        });
    }
}