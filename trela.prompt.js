class Prompt {
  static _prompt;
  static _title;
  static _input;
  static _buttonOk;
  static _buttonCancel;

  static _resolve;
  static _queue = [];

  static init(){
    this._createHtml();
    this._buildElements();
    this._addEvents();
  }

  static _addEvents(){
    this._buttonOk.onclick = () => {
      this._prompt.classList.remove('active-trela');

      this._resolve(this._input.value);
    };

    this._buttonCancel.onclick = () => {
      this._prompt.classList.remove('active-trela');

      this._resolve(null);
    };
  }

  static add(message){
    if(!message){
      return null;
    }

    return new Promise( resolve => {
      this._queue.push({message, resolve})

      if(this._queue.length < 1){
        resolve(null);
        return;
      }

      this._process();
    });

  }

  static _createHtml(){
    document.body.insertAdjacentHTML('afterbegin', `
      <div id="prompt-trela" class="trela">
        <div class="window-trela">
          <div class="header-trela">
            <h2 id="title-prompt-trela">Sou o titulo</h2>
            <button id="btn-cancel-prompt-trela"></button>
          </div>
          <div class="body-trela">
            <input type="text" id="input-prompt-trela" placeholder="digite">
          </div>
          <div class="footer-trela">
            <button class="btn-trela btn-ok-trela" id="btn-ok-prompt-trela">Ok</button>
          </div>
        </div>
      </div>
    `);
  }

  static _buildElements(){
    this._prompt = document.getElementById('prompt-trela');
    this._title = document.getElementById('title-prompt-trela');
    this._input = document.getElementById('input-prompt-trela');
    this._buttonOk = document.getElementById('btn-ok-prompt-trela');
    this._buttonCancel = document.getElementById('btn-cancel-prompt-trela');
  }

  static _process(){
    if(this._queue.length < 1) return;

    const {message, resolve} = this._queue.shift();

    this._showPrompt(message).then(value => {
      resolve(value);
      this._process();
    });
  }

  static _showPrompt(message){
    return new Promise(resolve => {
      this._resolve = resolve

      this._prompt.classList.add('active-trela');

      this._title.textContent = message


      this._input.value = '';
      this._input.focus();
    })
  }
}

Prompt.init();