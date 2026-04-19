/**
 * Reusable Header Component for JanuriDP Portfolio
 * This script defines a custom <app-header> element that can be used across all pages.
 */

class AppHeader extends HTMLElement {
    connectedCallback() {
        // Determine base path to root
        // If we are in a subdirectory (e.g., /tools/), we need to go up one level
        const path = window.location.pathname;
        const isSubdir = path.includes('/tools/') || (path.split('/').length > 2 && !path.endsWith('/index.html') && path !== '/');
        const base = isSubdir ? '../' : './';

        this.innerHTML = `
            <nav>
                <a href="${base}index.html#home" class="nav-brand">januridp<span>.</span></a>
                <ul class="nav-links">
                    <li><a href="${base}index.html#home">./home</a></li>
                    <li><a href="${base}index.html#about">./about</a></li>
                    <li><a href="${base}index.html#tools">./tools</a></li>
                    <li><a href="https://blog.januridp.web.id/" target="_blank">./blog</a></li>
                    <li><a href="${base}index.html#contact">./contact</a></li>
                </ul>
            </nav>
        `;

        // Highlight active link based on current URL
        const currentPath = window.location.pathname;
        const links = this.querySelectorAll('.nav-links a');
        
        links.forEach(link => {
            const href = link.getAttribute('href');
            // If we are on the tool page, highlight tools
            if (currentPath.includes('subnet-calculator.html') && href.includes('#tools')) {
                link.classList.add('active');
            }
        });
    }
}

customElements.define('app-header', AppHeader);
