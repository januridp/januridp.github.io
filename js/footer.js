/**
 * Reusable Footer Component for JanuriDP Portfolio
 * This script defines a custom <app-footer> element.
 */

class AppFooter extends HTMLElement {
    connectedCallback() {
        const year = new Date().getFullYear();
        this.innerHTML = `
            <footer>
                <p>Copyleft <i class="fa-solid fa-copyright fa-flip-horizontal"></i> 2016-<span>${year}</span> &middot; <a
                        href="https://januridp.web.id">JanuriDP</a></p>
            </footer>
        `;
    }
}

customElements.define('app-footer', AppFooter);
