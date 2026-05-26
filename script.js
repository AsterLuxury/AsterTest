/* ==========================================================
   ASTER LUXURY — 2026 Refined Edition
   ========================================================== */

const products = [
    { id: 1,  ref: "AL-001", image: "https://i.imgur.com/OErot48.jpg", tags: ["trending", "namaya"], price: "11,000 IQD" },
    { id: 2,  ref: "AL-002", image: "https://i.imgur.com/z00Aaai.jpg", tags: ["trending"], price: "8,000 IQD" },
    { id: 3,  ref: "AL-003", image: "https://i.imgur.com/JjaaugF.jpg", tags: ["new"], price: "10,000 IQD" },
    { id: 4,  ref: "AL-004", image: "https://i.imgur.com/Kte7nzq.jpg", tags: ["exclusive"], price: "10,000 IQD" },
    { id: 5,  ref: "AL-005", image: "https://i.imgur.com/PRowWfH.jpg", tags: ["new"], price: "10,000 IQD" },
    { id: 6,  ref: "AL-006", image: "https://i.imgur.com/SoydXG2.jpg", tags: ["new", "namaya"], price: "9,000 IQD" },
    { id: 7,  ref: "AL-007", image: "https://i.imgur.com/TlQPNKR.jpg", tags: ["trending"], price: "9,000 IQD" },
    { id: 8,  ref: "AL-008", image: "https://i.imgur.com/RrOwOVh.jpg", tags: ["limited"], price: "8,000 IQD" },
    { id: 9,  ref: "AL-009", image: "https://i.imgur.com/Eg3uzN3.jpg", tags: ["exclusive"], price: "8,000 IQD" },
    { id: 10, ref: "AL-010", image: "https://i.imgur.com/f5zWQHf.jpg", tags: ["trending"], price: "9,000 IQD" },
    { id: 11, ref: "AL-011", image: "https://i.imgur.com/fxUaMQ4.jpg", tags: ["new"], price: "9,000 IQD" },
    { id: 12, ref: "AL-012", image: "https://i.imgur.com/LTpzHsW.jpg", tags: ["exclusive"], price: "11,000 IQD" },
    { id: 13, ref: "AL-013", image: "https://i.imgur.com/mXV7gBZ.jpg", tags: ["new"], price: "9,000 IQD" },
    { id: 14, ref: "AL-014", image: "https://i.imgur.com/A3LfT29.jpg", tags: ["limited"], price: "10,000 IQD" },
    { id: 15, ref: "AL-015", image: "https://i.imgur.com/m0g8dYS.jpg", tags: ["trending", "namaya"], price: "12,000 IQD" },
    { id: 16, ref: "AL-016", image: "https://i.imgur.com/RHdbyM9.jpg", tags: ["new"], price: "9,000 IQD" },
    { id: 17, ref: "AL-017", image: "https://i.imgur.com/Szffcti.jpg", tags: ["new"], price: "9,000 IQD" },
    { id: 18, ref: "AL-018", image: "https://i.imgur.com/hDa2JGY.jpg", tags: ["trending"], price: "10,000 IQD" },
    { id: 19, ref: "AL-019", image: "https://i.imgur.com/kPNgeOX.jpg", tags: ["exclusive"], price: "9,000 IQD" },
    { id: 20, ref: "AL-020", image: "https://i.imgur.com/UyzPCFl.jpg", tags: ["trending", "namaya"], price: "10,000 IQD" },
    { id: 21, ref: "AL-021", image: "https://i.imgur.com/17uGewM.jpg", tags: ["new"], price: "8,000 IQD" },
    { id: 22, ref: "AL-022", image: "https://i.imgur.com/UrHw9dD.jpg", tags: ["exclusive"], price: "8,000 IQD" },
    { id: 23, ref: "AL-023", image: "https://i.imgur.com/zXIfG8s.jpg", tags: ["new"], price: "8,000 IQD" },
    { id: 24, ref: "AL-024", image: "https://i.imgur.com/6k1vRsV.jpg", tags: ["limited"], price: "9,000 IQD" },
    { id: 25, ref: "AL-025", image: "https://i.imgur.com/PV0i4eB.jpg", tags: ["trending"], price: "9,000 IQD" },
    { id: 26, ref: "AL-026", image: "https://i.imgur.com/FXHd5nO.jpg", tags: ["exclusive"], price: "9,000 IQD" },
    { id: 27, ref: "AL-027", image: "https://i.imgur.com/ZdkqaU9.jpg", tags: ["new"], price: "8,000 IQD" },
    { id: 28, ref: "AL-028", image: "https://i.imgur.com/Av9tP4X.jpg", tags: ["trending", "namaya"], price: "11,000 IQD" },
    { id: 29, ref: "AL-029", image: "https://i.imgur.com/0puuuwV.jpg", tags: ["limited"], price: "9,000 IQD" },
    { id: 30, ref: "AL-030", image: "https://i.imgur.com/QhhGmoY.jpg", tags: ["exclusive"], price: "8,500 IQD" },
    { id: 31, ref: "AL-031", image: "https://i.imgur.com/s3iVoL3.jpg", tags: ["exclusive", "namaya"], price: "10,000 IQD" },
    { id: 32, ref: "AL-032", image: "https://i.imgur.com/ruRRtpN.jpg", tags: ["new"], price: "9,000 IQD" },
    { id: 33, ref: "AL-033", image: "https://i.imgur.com/4DhDOLu.jpg", tags: ["trending"], price: "8,000 IQD" },
    { id: 34, ref: "AL-034", image: "https://i.imgur.com/NK4CVZ3.jpg", tags: ["exclusive"], price: "8,000 IQD" },
    { id: 35, ref: "AL-035", image: "https://i.imgur.com/nxvRYVN.jpg", tags: ["new"], price: "8,000 IQD" },
    { id: 36, ref: "AL-036", image: "https://i.imgur.com/qSaBKBn.jpg", tags: ["new"], price: "9,000 IQD" },
    { id: 37, ref: "AL-037", image: "https://i.imgur.com/QEZ3xNx.jpg", tags: ["trending"], price: "9,000 IQD" },
    { id: 38, ref: "AL-038", image: "https://i.imgur.com/NotI5dR.jpg", tags: ["new"], price: "9,000 IQD" },
    { id: 39, ref: "AL-039", image: "https://i.imgur.com/y4S1ViE.jpg", tags: ["limited"], price: "8,000 IQD" },
    { id: 40, ref: "AL-040", image: "https://i.imgur.com/8j4QokS.jpg", tags: ["trending"], price: "9,000 IQD" },
    { id: 41, ref: "AL-041", image: "https://i.imgur.com/pHJk2Xe.jpg", tags: ["new", "namaya"], price: "10,000 IQD" },
    { id: 42, ref: "AL-042", image: "https://i.imgur.com/iFkcaIE.jpg", tags: ["exclusive"], price: "9,000 IQD" },
    { id: 43, ref: "AL-043", image: "https://i.imgur.com/OrhpKkD.jpg", tags: ["trending"], price: "8,000 IQD" },
    { id: 44, ref: "AL-044", image: "https://i.imgur.com/MKITY3l.jpg", tags: ["exclusive"], price: "10,000 IQD" },
    { id: 45, ref: "AL-045", image: "https://i.imgur.com/yZ6MkCb.jpg", tags: ["limited"], price: "9,000 IQD" },
    { id: 46, ref: "AL-046", image: "https://i.imgur.com/TaEqJ6k.jpg", tags: ["new"], price: "9,000 IQD" },
    { id: 47, ref: "AL-047", image: "https://i.imgur.com/zm6HOdR.jpg", tags: ["trending"], price: "8,000 IQD" },
    { id: 48, ref: "AL-048", image: "https://i.imgur.com/Jo0v8yf.jpg", tags: ["new"], price: "8,000 IQD" },
    { id: 49, ref: "AL-049", image: "https://i.imgur.com/A2dYFIx.jpg", tags: ["exclusive"], price: "9,000 IQD" },
    { id: 50, ref: "AL-050", image: "https://i.imgur.com/4jGltwy.jpg", tags: ["trending"], price: "8,000 IQD" },
    { id: 52, ref: "AL-052", image: "https://i.imgur.com/MBZbuLs.jpg", tags: ["new"], price: "11,000 IQD" },
    { id: 53, ref: "AL-053", image: "https://i.imgur.com/Jt5Je1s.jpg", tags: ["new"], price: "10,000 IQD" },
    { id: 54, ref: "AL-054", image: "https://i.imgur.com/Gc8080H.jpg", tags: ["trending"], price: "10,000 IQD" },
    { id: 55, ref: "AL-055", image: "https://i.imgur.com/motIsvg.jpg", tags: ["exclusive"], price: "9,000 IQD" },
    { id: 56, ref: "AL-056", image: "https://i.imgur.com/uncBlEB.jpeg", tags: ["exclusive"], price: "9,000 IQD" }
];

const WA = "9647503307830";
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

let currentFilter = 'all';
let currentProduct = null;
let favorites = JSON.parse(localStorage.getItem('aster_favs') || '[]');
let cart = JSON.parse(localStorage.getItem('aster_cart') || '[]');

// ==========================================================
// HELPERS
// ==========================================================
function priceToNumber(priceStr) {
    return parseInt(priceStr.replace(/[^0-9]/g, ''), 10) || 0;
}

function formatIQD(n) {
    return n.toLocaleString('en-US') + ' IQD';
}
function badgeText(p) {
    if (p.tags.includes('limited')) return 'Limited';
    if (p.tags.includes('exclusive')) return 'Exclusive';
    if (p.tags.includes('namaya')) return 'Namaya';
    if (p.tags.includes('new')) return 'New';
    if (p.tags.includes('trending')) return 'Trending';
    return 'Featured';
}

function isFeatured(p) {
    return p.tags.includes('limited') || p.tags.includes('exclusive') || p.tags.includes('namaya');
}

function tagDisplay(p) {
    return p.tags[0].charAt(0).toUpperCase() + p.tags[0].slice(1);
}

function getFiltered() {
    if (currentFilter === 'all') return products;
    return products.filter(p => p.tags.includes(currentFilter));
}

// ==========================================================
// PROGRESS BAR (fallback for browsers without scroll-driven anim)
// ==========================================================
const progressFill = $('#progress-fill');
if (!CSS.supports('animation-timeline: scroll()')) {
    window.addEventListener('scroll', () => {
        const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        progressFill.style.width = scrolled + '%';
    }, { passive: true });
}

// ==========================================================
// HEADER SCROLL
// ==========================================================
const header = $('#header');
let lastY = 0;
window.addEventListener('scroll', () => {
    const y = window.scrollY;
    header.classList.toggle('scrolled', y > 20);
    lastY = y;
}, { passive: true });

// ==========================================================
// MOBILE MENU
// ==========================================================
const menuToggle = $('#menu-toggle');
const mobileMenu = $('#mobile-menu');

menuToggle.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    menuToggle.classList.toggle('active', open);
    document.body.style.overflow = open ? 'hidden' : '';
});

$$('.mobile-menu a').forEach(a => {
    a.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        menuToggle.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// ==========================================================
// FILTER COUNTS
// ==========================================================
function updateCounts() {
    $('#count-all').textContent = products.length;
    ['new', 'trending', 'exclusive', 'limited', 'namaya'].forEach(t => {
        const el = $(`#count-${t}`);
        if (el) el.textContent = products.filter(p => p.tags.includes(t)).length;
    });
}

// ==========================================================
// PRODUCT GRID (all visible, refined stagger)
// ==========================================================
const grid = $('#grid');
const empty = $('#empty');
const visibleCount = $('#visible-count');

function renderGrid() {
    const list = getFiltered();
    grid.innerHTML = '';

    if (list.length === 0) {
        empty.hidden = false;
        visibleCount.textContent = 0;
        return;
    }
    empty.hidden = true;
    visibleCount.textContent = list.length;

    const frag = document.createDocumentFragment();
    list.forEach((p, i) => {
        const isFav = favorites.includes(p.id);
        const inCart = cart.some(c => c.id === p.id);
        const card = document.createElement('article');
        card.className = 'card' + (inCart ? ' in-cart' : '');
        card.dataset.id = p.id;
        card.style.transitionDelay = Math.min(i * 30, 600) + 'ms';
        card.innerHTML = `
            <div class="card-frame">
                <span class="card-badge ${isFeatured(p) ? 'featured' : ''}">${badgeText(p)}</span>
                <button class="heart-btn ${isFav ? 'active' : ''}" data-fav="${p.id}" aria-label="Favorite">
                    <i class="${isFav ? 'fas' : 'far'} fa-heart"></i>
                </button>
                <img class="card-img" src="${p.image}" alt="Aster ${p.ref}" loading="lazy">
                <div class="card-quick">
                    <span class="card-quick-text">${inCart ? 'Added · view detail' : 'View detail'}</span>
                    <button class="card-quick-order" data-add="${p.id}" aria-label="${inCart ? 'In cart' : 'Add to cart'}" title="${inCart ? 'In cart' : 'Add to cart'}">
                        <i class="fas ${inCart ? 'fa-check' : 'fa-plus'}"></i>
                    </button>
                </div>
            </div>
            <div class="card-meta">
                <span class="card-ref">Ref. ${p.ref}</span>
                <span class="card-tag">${tagDisplay(p)}</span>
            </div>
            <h3 class="card-name"><em>Aster</em>Piece</h3>
            <span class="card-price">${p.price}</span>
        `;
        frag.appendChild(card);
    });
    grid.appendChild(frag);

    // Reveal each card as it enters viewport
    const cards = $$('.card', grid);
    if ('IntersectionObserver' in window) {
        const obs = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add('in');
                    obs.unobserve(e.target);
                }
            });
        }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });
        cards.forEach(c => obs.observe(c));
    } else {
        cards.forEach(c => c.classList.add('in'));
    }

    attachCardHandlers();
}

function attachCardHandlers() {
    // Use event delegation on the grid for resilience
    // (handlers are attached once per render via fresh elements)
    $$('.card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.closest('[data-fav]') || e.target.closest('[data-add]') || e.target.closest('[data-order]')) return;
            openModal(parseInt(card.dataset.id));
        });
    });

    $$('[data-fav]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
            toggleFav(parseInt(btn.dataset.fav));
        });
    });

    $$('[data-add]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
            addToCart(parseInt(btn.dataset.add));
        });
    });

    $$('[data-order]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
            quickOrder(parseInt(btn.dataset.order));
        });
    });
}

// ==========================================================
// FILTERS
// ==========================================================
$$('.chip[data-filter]').forEach(chip => {
    chip.addEventListener('click', () => {
        $$('.chip[data-filter]').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        currentFilter = chip.dataset.filter;
        renderGrid();
    });
});

// Footer quick filters
$$('[data-quick-filter]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = link.dataset.quickFilter;
        const chip = $(`.chip[data-filter="${filter}"]`);
        if (chip) chip.click();
        $('#shop').scrollIntoView({ behavior: 'smooth' });
    });
});

// Empty state reset
$('.empty button')?.addEventListener('click', () => {
    $('.chip[data-filter="all"]').click();
});

// ==========================================================
// VIEW DENSITY TOGGLE
// ==========================================================
const viewToggle = $('#view-toggle');
viewToggle.addEventListener('click', () => {
    grid.classList.toggle('dense');
    viewToggle.classList.toggle('dense');
    const isDense = grid.classList.contains('dense');
    viewToggle.querySelector('i').className = isDense ? 'fas fa-th' : 'fas fa-th-large';
});

// ==========================================================
// MODAL
// ==========================================================
const modal = $('#modal');

function openModal(id) {
    const p = products.find(x => x.id === id);
    if (!p) return;
    currentProduct = p;

    $('#modal-image').src = p.image;
    $('#modal-image').alt = `Aster ${p.ref}`;
    $('#modal-eyebrow').textContent = `${badgeText(p)} · Ref. ${p.ref}`;
    $('#modal-price').textContent = p.price;
    $('#qty-value').textContent = 1;

    const isFav = favorites.includes(p.id);
    const favBtn = $('#modal-fav');
    favBtn.classList.toggle('active', isFav);
    favBtn.querySelector('i').className = (isFav ? 'fas' : 'far') + ' fa-heart';

    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    currentProduct = null;
}

$$('[data-close]').forEach(el => el.addEventListener('click', closeModal));
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') closeModal();
});

// Quantity
let qty = 1;
$('#qty-minus').addEventListener('click', () => {
    if (qty > 1) {
        qty--;
        $('#qty-value').textContent = qty;
    }
});
$('#qty-plus').addEventListener('click', () => {
    if (qty < 10) {
        qty++;
        $('#qty-value').textContent = qty;
    }
});

// Modal order
// Modal: Add to cart
$('#modal-add').addEventListener('click', () => {
    if (!currentProduct) return;
    const q = parseInt($('#qty-value').textContent);
    addToCart(currentProduct.id, q);
    closeModal();
});

// Modal: Order this single piece now
$('#modal-order').addEventListener('click', () => {
    if (!currentProduct) return;
    const q = parseInt($('#qty-value').textContent);
    const msg = `Hello Aster Luxury,\n\nI would like to order:\n\nReference: ${currentProduct.ref}\nPrice: ${currentProduct.price}\nQuantity: ${q}\n\nPlease share more details. Thank you!`;
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, '_blank');
});

// Modal favorite
$('#modal-fav').addEventListener('click', () => {
    if (!currentProduct) return;
    toggleFav(currentProduct.id);
    const isFav = favorites.includes(currentProduct.id);
    const btn = $('#modal-fav');
    btn.classList.toggle('active', isFav);
    btn.querySelector('i').className = (isFav ? 'fas' : 'far') + ' fa-heart';
});

// ==========================================================
// QUICK ORDER
// ==========================================================
function quickOrder(id) {
    const p = products.find(x => x.id === id);
    if (!p) return;
    const msg = `Hello Aster Luxury,\n\nI would like to order:\n\nReference: ${p.ref}\nPrice: ${p.price}\nQuantity: 1\n\nPlease share more details. Thank you!`;
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, '_blank');
}

// ==========================================================
// FAVORITES
// ==========================================================
function toggleFav(id) {
    const i = favorites.indexOf(id);
    if (i === -1) {
        favorites.push(id);
        toast('Added to favorites');
    } else {
        favorites.splice(i, 1);
        toast('Removed from favorites');
    }
    localStorage.setItem('aster_favs', JSON.stringify(favorites));
    updateFavCount();

    $$(`[data-fav="${id}"]`).forEach(btn => {
        const isFav = favorites.includes(id);
        btn.classList.toggle('active', isFav);
        btn.querySelector('i').className = (isFav ? 'fas' : 'far') + ' fa-heart';
    });
}

function updateFavCount() {
    const badge = $('#fav-count');
    if (favorites.length > 0) {
        badge.textContent = favorites.length;
        badge.classList.add('show');
    } else {
        badge.classList.remove('show');
    }
}

$('#favorites-btn').addEventListener('click', () => {
    if (favorites.length === 0) {
        toast('No favorites yet — tap the heart on any piece');
        return;
    }
    // Show only favorites in grid
    const list = products.filter(p => favorites.includes(p.id));
    grid.innerHTML = '';
    visibleCount.textContent = list.length;
    list.forEach(p => {
        const inCart = cart.some(c => c.id === p.id);
        const card = document.createElement('article');
        card.className = 'card in' + (inCart ? ' in-cart' : '');
        card.dataset.id = p.id;
        card.innerHTML = `
            <div class="card-frame">
                <span class="card-badge ${isFeatured(p) ? 'featured' : ''}">${badgeText(p)}</span>
                <button class="heart-btn active" data-fav="${p.id}" aria-label="Favorite">
                    <i class="fas fa-heart"></i>
                </button>
                <img class="card-img" src="${p.image}" alt="Aster ${p.ref}" loading="lazy">
                <div class="card-quick">
                    <span class="card-quick-text">${inCart ? 'Added · view detail' : 'View detail'}</span>
                    <button class="card-quick-order" data-add="${p.id}" aria-label="${inCart ? 'In cart' : 'Add to cart'}">
                        <i class="fas ${inCart ? 'fa-check' : 'fa-plus'}"></i>
                    </button>
                </div>
            </div>
            <div class="card-meta">
                <span class="card-ref">Ref. ${p.ref}</span>
                <span class="card-tag">${tagDisplay(p)}</span>
            </div>
            <h3 class="card-name"><em>Aster</em>Piece</h3>
            <span class="card-price">${p.price}</span>
        `;
        grid.appendChild(card);
    });
    $$('.chip[data-filter]').forEach(c => c.classList.remove('active'));
    $('#shop').scrollIntoView({ behavior: 'smooth' });
    toast(`${list.length} favorite piece${list.length > 1 ? 's' : ''}`);
    attachCardHandlers();
});

// ==========================================================
// SEARCH
// ==========================================================
const searchOverlay = $('#search-overlay');
const searchInput = $('#search-input');
const searchResults = $('#search-results');

$('#search-btn').addEventListener('click', () => {
    searchOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => searchInput.focus(), 200);
});

$('#search-close').addEventListener('click', () => {
    searchOverlay.classList.remove('open');
    document.body.style.overflow = '';
    searchInput.value = '';
    searchResults.innerHTML = '';
});

$$('.suggestion-chip').forEach(chip => {
    chip.addEventListener('click', () => {
        searchInput.value = chip.dataset.search;
        searchInput.dispatchEvent(new Event('input'));
        searchInput.focus();
    });
});

function runSearch(q) {
    searchResults.innerHTML = '';
    if (!q) return;
    const matches = products.filter(p =>
        p.ref.toLowerCase().includes(q) ||
        p.tags.some(t => t.includes(q)) ||
        p.price.toLowerCase().replace(/,/g, '').includes(q.replace(/,/g, ''))
    ).slice(0, 8);

    if (matches.length === 0) {
        searchResults.innerHTML = `<div style="padding: 24px; text-align: center; color: var(--muted); font-style: italic;">No matches — try a reference like AL-015</div>`;
        return;
    }
    matches.forEach(p => {
        const item = document.createElement('button');
        item.className = 'search-result';
        item.innerHTML = `
            <img src="${p.image}" alt="${p.ref}">
            <div class="search-result-info">
                <strong>Aster Piece — Ref. ${p.ref}</strong>
                <span>${p.price} · ${tagDisplay(p)}</span>
            </div>
            <i class="fas fa-arrow-right search-result-arrow"></i>
        `;
        item.addEventListener('click', () => {
            $('#search-close').click();
            setTimeout(() => openModal(p.id), 300);
        });
        searchResults.appendChild(item);
    });
}

searchInput.addEventListener('input', (e) => {
    runSearch(e.target.value.toLowerCase().trim());
});

// ==========================================================
// TOAST
// ==========================================================
let toastTimer;
function toast(msg) {
    const el = $('#toast');
    $('#toast-msg').textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 2400);
}

// ==========================================================
// ACTIVE NAV ON SCROLL
// ==========================================================
const sections = ['home', 'shop', 'story', 'contact'];
const navLinks = $$('.nav-link');

let scrollTicking = false;
window.addEventListener('scroll', () => {
    if (!scrollTicking) {
        requestAnimationFrame(() => {
            let current = 'home';
            sections.forEach(id => {
                const sec = document.getElementById(id);
                if (sec && window.scrollY >= sec.offsetTop - 150) current = id;
            });
            navLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === '#' + current);
            });
            scrollTicking = false;
        });
        scrollTicking = true;
    }
}, { passive: true });

// ==========================================================
// SUBTLE PARALLAX ON HERO IMAGES (desktop only)
// ==========================================================
const heroVisual = $('.hero-visual');
const heroImgMain = $('.hero-img-main');
const heroImg2 = $('.hero-img-2');
const heroImg3 = $('.hero-img-3');

if (window.matchMedia('(hover: hover) and (min-width: 1024px)').matches && heroVisual) {
    heroVisual.addEventListener('mousemove', (e) => {
        const rect = heroVisual.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        if (heroImgMain) heroImgMain.style.transform = `translate3d(${x * 12}px, ${y * 12}px, 0)`;
        if (heroImg2) heroImg2.style.transform = `translate3d(${x * -8}px, ${y * -8}px, 0)`;
        if (heroImg3) heroImg3.style.transform = `translate3d(${x * 18}px, ${y * 18}px, 0)`;
    });

    heroVisual.addEventListener('mouseleave', () => {
        if (heroImgMain) heroImgMain.style.transform = '';
        if (heroImg2) heroImg2.style.transform = '';
        if (heroImg3) heroImg3.style.transform = '';
    });
}

// ==========================================================
// FOOTER YEAR
// ==========================================================
$('#year').textContent = new Date().getFullYear();

// ==========================================================
// CART
// ==========================================================
const cartDrawer = $('#cart-drawer');
const cartBody = $('#cart-body');

function saveCart() {
    try {
        localStorage.setItem('aster_cart', JSON.stringify(cart));
    } catch (e) {
        console.warn('Could not save cart', e);
    }
}

function addToCart(id, qty = 1) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    const existing = cart.find(c => c.id === id);
    if (existing) {
        existing.qty = Math.min(10, existing.qty + qty);
        toast(`Quantity updated · Ref. ${product.ref}`);
    } else {
        cart.push({ id, qty });
        toast(`Added to cart · Ref. ${product.ref}`);
    }
    saveCart();
    updateCartCount();
    renderCart();
    refreshCardCartState(id);
    pulseCartBtn();
}

function removeFromCart(id) {
    cart = cart.filter(c => c.id !== id);
    saveCart();
    updateCartCount();
    renderCart();
    refreshCardCartState(id);
}

function updateCartQty(id, delta) {
    const item = cart.find(c => c.id === id);
    if (!item) return;
    item.qty = Math.max(1, Math.min(10, item.qty + delta));
    saveCart();
    updateCartCount();
    renderCart();
}

function clearCart() {
    const ids = cart.map(c => c.id);
    cart = [];
    saveCart();
    updateCartCount();
    renderCart();
    ids.forEach(refreshCardCartState);
    toast('Cart cleared');
}

function refreshCardCartState(id) {
    const inCart = cart.some(c => c.id === id);
    document.querySelectorAll(`.card[data-id="${id}"]`).forEach(card => {
        card.classList.toggle('in-cart', inCart);
        const btn = card.querySelector('[data-add]');
        if (btn) {
            btn.querySelector('i').className = 'fas ' + (inCart ? 'fa-check' : 'fa-plus');
            btn.setAttribute('aria-label', inCart ? 'In cart' : 'Add to cart');
            btn.setAttribute('title', inCart ? 'In cart' : 'Add to cart');
        }
        const text = card.querySelector('.card-quick-text');
        if (text) text.textContent = inCart ? 'Added · view detail' : 'View detail';
    });
}

function updateCartCount() {
    const count = cart.reduce((sum, c) => sum + c.qty, 0);
    const badge = $('#cart-count');
    if (count > 0) {
        badge.textContent = count;
        badge.classList.add('show');
    } else {
        badge.classList.remove('show');
    }
}

function pulseCartBtn() {
    const btn = $('#cart-btn');
    btn.querySelector('i').classList.add('in-cart-pulse');
    setTimeout(() => btn.querySelector('i').classList.remove('in-cart-pulse'), 600);
}

function renderCart() {
    if (cart.length === 0) {
        cartDrawer.classList.add('empty');
        cartBody.innerHTML = '';
        return;
    }
    cartDrawer.classList.remove('empty');

    cartBody.innerHTML = '';
    let total = 0;
    let itemCount = 0;

    cart.forEach(c => {
        const p = products.find(x => x.id === c.id);
        if (!p) return;
        const unit = priceToNumber(p.price);
        const lineTotal = unit * c.qty;
        total += lineTotal;
        itemCount += c.qty;

        const item = document.createElement('div');
        item.className = 'cart-item';
        item.innerHTML = `
            <img src="${p.image}" alt="Aster ${p.ref}">
            <div class="cart-item-info">
                <div class="cart-item-top">
                    <div class="cart-item-meta">
                        <span class="cart-item-ref">Ref. ${p.ref}</span>
                        <h4 class="cart-item-name"><em>Aster</em>Piece</h4>
                        <div class="cart-item-price">${p.price}</div>
                    </div>
                    <button class="cart-item-remove" data-cart-remove="${p.id}" aria-label="Remove">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="cart-item-bottom">
                    <div class="cart-qty">
                        <button data-cart-dec="${p.id}" aria-label="Decrease">−</button>
                        <span>${c.qty}</span>
                        <button data-cart-inc="${p.id}" aria-label="Increase">+</button>
                    </div>
                    <span class="cart-item-line">${formatIQD(lineTotal)}</span>
                </div>
            </div>
        `;
        cartBody.appendChild(item);
    });

    $('#cart-items-count').textContent = itemCount + ' piece' + (itemCount !== 1 ? 's' : '');
    $('#cart-total').textContent = formatIQD(total);
}

// Event delegation for cart item controls (attached once)
cartBody.addEventListener('click', (e) => {
    const removeBtn = e.target.closest('[data-cart-remove]');
    if (removeBtn) {
        e.preventDefault();
        removeFromCart(parseInt(removeBtn.dataset.cartRemove));
        return;
    }
    const incBtn = e.target.closest('[data-cart-inc]');
    if (incBtn) {
        e.preventDefault();
        updateCartQty(parseInt(incBtn.dataset.cartInc), 1);
        return;
    }
    const decBtn = e.target.closest('[data-cart-dec]');
    if (decBtn) {
        e.preventDefault();
        updateCartQty(parseInt(decBtn.dataset.cartDec), -1);
        return;
    }
});

function openCart() {
    renderCart();
    cartDrawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    cartDrawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

// Use event delegation on document.body so this works even if DOM changes
document.body.addEventListener('click', (e) => {
    // Cart icon — open drawer
    if (e.target.closest('#cart-btn')) {
        e.preventDefault();
        openCart();
        return;
    }
    // Anything with data-cart-close — close drawer
    if (e.target.closest('[data-cart-close]')) {
        e.preventDefault();
        closeCart();
        return;
    }
    // Cart clear
    if (e.target.closest('#cart-clear')) {
        e.preventDefault();
        if (cart.length === 0) return;
        if (confirm('Remove all pieces from your cart?')) clearCart();
        return;
    }
    // Send order via WhatsApp
    if (e.target.closest('#cart-order')) {
        e.preventDefault();
        sendCartOrder();
        return;
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && cartDrawer.getAttribute('aria-hidden') === 'false') closeCart();
});

function sendCartOrder() {
    if (cart.length === 0) return;

    let total = 0;
    let totalQty = 0;
    const lines = cart.map((c, i) => {
        const p = products.find(x => x.id === c.id);
        if (!p) return '';
        const unit = priceToNumber(p.price);
        const lineTotal = unit * c.qty;
        total += lineTotal;
        totalQty += c.qty;
        return `${i + 1}. Ref. ${p.ref}\n   Quantity: ${c.qty}\n   Price: ${p.price}\n   Subtotal: ${formatIQD(lineTotal)}`;
    }).filter(Boolean).join('\n\n');

    const msg = `Hello Aster Luxury,\n\nI would like to order the following pieces:\n\n${lines}\n\n────────────────\nTotal pieces: ${totalQty}\nEstimated total: ${formatIQD(total)}\n\nPlease confirm availability and delivery details. Thank you!`;

    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, '_blank');
}

// ==========================================================
// INIT
// ==========================================================
updateCounts();
renderGrid();
updateFavCount();
updateCartCount();
renderCart();
