// Dynamic Year
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll Animations (Intersection Observer)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});

// Update Active Nav Link on Scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// IP & User Agent Fetching (Modernized, preserving the ipstack)
function getUserAgentInfo() {
    const ua = navigator.userAgent;
    const browser = /Edge\/\d+/.test(ua) ? 'Microsoft Edge' : /MSIE 9/.test(ua) ? 'Internet Explorer 9' : /MSIE 10/.test(ua) ? 'Internet Explorer 10' : /MSIE 11/.test(ua) ? 'Internet Explorer 11' : /MSIE\s\d/.test(ua) ? 'Internet Explorer?' : /rv\:11/.test(ua) ? 'Internet Explorer 11' : /Firefox\W\d/.test(ua) ? 'Firefox' : /Chrom(e|ium)\W\d|CriOS\W\d/.test(ua) ? 'Google Chrome' : /\bSafari\W\d/.test(ua) ? 'Safari' : /\bOpera\W\d/.test(ua) ? 'Opera' : /\bOPR\W\d/i.test(ua) ? 'Opera' : 'Other';
    const os = /Windows NT 10/.test(ua) ? "Windows 10" : /Windows NT 6\.0/.test(ua) ? "Windows Vista" : /Windows NT 6\.1/.test(ua) ? "Windows 7" : /Windows NT 6\.\d/.test(ua) ? "Windows 8" : /Windows NT 5\.1/.test(ua) ? "Windows XP" : /Windows NT [1-5]\./.test(ua) ? "Windows NT" : /Mac/.test(ua) ? "macOS" : /Linux/.test(ua) ? "Linux" : "Other OS";
    const mobile = /IEMobile|Windows Phone|Lumia/i.test(ua) ? 'Windows Phone' : /iPhone|iP[oa]d/.test(ua) ? 'iPhone' : /Android/.test(ua) ? 'Android' : /Mobile|Tablet/i.test(ua) ? 'Mobile/Tablet' : 'Desktop';

    document.getElementById('ua-info').innerHTML = `
        <div class="prompt">Browser: <span style="color:var(--text-main)">${browser}</span></div>
        <div class="prompt">OS: <span style="color:var(--text-main)">${os}</span></div>
        <div class="prompt">Device: <span style="color:var(--text-main)">${mobile}</span></div>
    `;
}

async function getIpInfo() {
    try {
        const response = await fetch('https://api.ipstack.com/check?access_key=745f78a7cc0dc3c5b323e239b3e28547');
        const data = await response.json();

        document.getElementById('ip-info').innerHTML = `
            <div class="prompt">IP: <span style="color:var(--neon-cyan)">${data.ip || 'Unknown'}</span></div>
            <div class="prompt">Location: <span style="color:var(--text-main)">${data.city || ''}, ${data.country_name || 'Unknown'} <img src="${data.location?.country_flag_emoji || ''}" width="16" style="vertical-align: middle"></span></div>
            <div class="prompt">Coordinates: <span style="color:var(--text-main)">${data.latitude}, ${data.longitude}</span></div>
        `;
    } catch (error) {
        document.getElementById('ip-info').innerHTML = `<div class="prompt" style="color: #ff5f56">Failed to load geolocation data.</div>`;
    }
}

// Initialize
getUserAgentInfo();
getIpInfo();

// Donate Modal Toggle Logic
const donateBtn = document.getElementById('donate-btn');
const donateModal = document.getElementById('donate-modal');

donateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    donateModal.style.display = donateModal.style.display === 'block' ? 'none' : 'block';
});
