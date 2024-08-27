class Header extends HTMLElement {

    static get observedAttributes() {
        return ['base-url', 'base-nav', 'base-img'];
    }

    constructor() {
        super();
        this.baseUrl = '';
        this.baseNav = '';
        this.baseImg = '';
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'base-url') {
            this.baseUrl = newValue;
        } else if (name === 'base-nav') {
            this.baseNav = newValue;
        } else if (name === 'base-img') {
            this.baseImg = newValue;
        }
        this.render();
    }

    render() {
        this.innerHTML = `
        <header>
            <a href="${this.baseNav}index.html"><img src="${this.baseImg}img/logo.png" class="logo"/></a>
        
            <nav class="nav-header">
                <ul>
                    <li class="dropdown dropbtn">
                        <div class="fitnessNav">Projeto</div>
                        <div class="dropdown-content">
                            <a href="${this.baseUrl}modelagemIntro.html">• Modelagem e Intro</a>
                            <a href="${this.baseUrl}diagramas.html">• UML Diagramas</a>
                            <a href="${this.baseUrl}escopo.html">• Escopo</a>
                            <a href="${this.baseUrl}analise.html">• Análise de requisitos <br/> no ambiente de teste</a>
                        </div>
                    </li>
                    <li class="dropdown dropbtn">
                        <div class="fitnessNav">Pesquisas</div>
                        <div class="dropdown-content">
                            <a href="${this.baseUrl}desenhoUniversal.html">• Desenho Universal </a>
                            <a href="${this.baseUrl}deficiencia.html">• Deficiência</a>
                            <a href="${this.baseUrl}inclusao.html">• Inclusão </a>
                            <a href="${this.baseUrl}acessibilidade.html">• Acessibilidade</a>
                            <a href="${this.baseUrl}estudoDeViabilidade.html">• Estudo de viabilidade</a>
                            <a href="${this.baseUrl}tecnologiasAssistivas.html">• Tecnologias Assistivas</a>
                            <a href="${this.baseUrl}w3c.html">• W3C</a>
                        </div>
                    </li>
                    <li id="menu-margem"><a href="${this.baseUrl}quemsomos.html">Quem somos</a></li>
                </ul>
            </nav>
        </header>
        <div class="faixa"></div>
        `;
    }
}

customElements.define("main-header", Header);
