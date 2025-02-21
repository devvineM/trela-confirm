class Trela {
    static elTrela;
    static elWindow;
    static elTitle;
    static elParagraph;
    static elBtnYes;
    static elBtnNo;

    static main() {
        const isTrela = document.getElementById('root-trela');

        if (isTrela) {
            return;
        }

        document.body.insertAdjacentHTML('beforeend', this.__getHtml__());

        this.__setElements__();
    }

    static hide() {
        this.__elementsValueClear__();
        this.__setEffectInWindow__(100, 0);
        let delay = setTimeout(() => {
            this.elTrela.style.display = "none";
            clearTimeout(delay);
        }, 800);
    }

    static confirm(title, description) {
        if (this.elTrela.style.display == "flex") {
            return;
        }

        if (!title || !description) {
            console.log("Você precisa passar o título e a descrição para o Trela.");
            return;
        }

        this.elTitle.textContent = title;
        this.elParagraph.textContent = description;
        this.elTrela.style.display = 'flex';
        this.__setEffectInWindow__(0, 100);

        return new Promise((resolve) => {
            this.elBtnNo.onclick = () => {
                this.no();
                resolve(false);
            };

            this.elBtnYes.onclick = () => {
                this.yes();
                resolve(true);
            };
        });
    }

    static yes() {
        this.hide();
    }

    static no() {
        this.hide();
    }

    static __setEffectInWindow__(height, time) {
        let delay = setTimeout(() => {
            this.elWindow.style.transform = `translateY(${height}vh)`;
            clearTimeout(delay);
        }, time);
    }

    static __elementsValueClear__() {
        this.elTitle.textContent = "";
        this.elParagraph.textContent = "";
    }

    static __setElements__() {
        this.elTrela = document.getElementById('root-trela');
        this.elWindow = document.querySelector('#root-trela .window-trela');
        this.elTitle = document.querySelector('#root-trela .title-trela');
        this.elParagraph = document.querySelector('#root-trela .paragraph-trela');
        this.elBtnYes = document.querySelector('#root-trela .btn-yes-trela');
        this.elBtnNo = document.querySelector('#root-trela .btn-no-trela');
    }

    static __getHtml__() {
        return `
            <div id="root-trela" class="root-trela">
                <div class="window-trela">
                    <div class="view-icon-trela">
                        <svg class="icon-trela" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.15.15 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.2.2 0 0 1-.054.06.1.1 0 0 1-.066.017H1.146a.1.1 0 0 1-.066-.017.2.2 0 0 1-.054-.06.18.18 0 0 1 .002-.183L7.884 2.073a.15.15 0 0 1 .054-.057m1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767z"/>
                        <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
                        </svg>
                    </div>
                    <h5 class="title-trela"></h5>
                    <p class="paragraph-trela"></p>
                    <div class="view-action-trela">
                        <button class="btn-trela btn-no-trela">Não</button>
                        <button class="btn-trela btn-yes-trela">Sim</button>
                    </div>
                </div>
            <div>
        `;
    }
}

Trela.main();