class Confirm {
  static _confirm;
  static _title;
  static _message;
  static _buttonOk;
  static _buttonReject;
  static _buttonCancel;

  static _resolve;
  static _queue = [];

  static init(){
    this._createHtml();
    this._buildElements();
    this._addEvents();
  }

  static _createHtml(){
    document.body.insertAdjacentHTML('afterbegin', `
      <div id="confirm-trela" class="trela">
        <div class="window-trela">
          <div class="header-trela">
            <h2 id="title-confirm-trela">Aviso</h2>
            <button id="btn-cancel-confirm-trela">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
              </svg>
            </button>
          </div>
          <div class="body-trela">
            <p id="message-confirm-trela"></p>
          </div>
          <div class="footer-trela">
            <button class="btn-trela btn-no-trela" id="btn-reject-confirm-trela">Não</button>
            <button class="btn-trela btn-ok-trela" id="btn-ok-confirm-trela">Sim</button>
          </div>
        </div>
      </div>
    `);
  }

  static _buildElements(){
    this._confirm = document.getElementById('confirm-trela');
    this._title = document.getElementById('title-confirm-trela');
    this._message = document.getElementById('message-confirm-trela');
    this._buttonOk = document.getElementById('btn-ok-confirm-trela');
    this._buttonReject = document.getElementById('btn-reject-confirm-trela');
    this._buttonCancel = document.getElementById('btn-cancel-confirm-trela');
  }

  static _addEvents(){
    this._buttonOk.onclick = () => {
      this._resolve(true);

      this._confirm.classList.remove('active-trela');
    }

    this._buttonReject.onclick = () => {
      this._resolve(false);

      this._confirm.classList.remove('active-trela');
    }

    this._buttonCancel.onclick = () => {
      this._resolve(false);

      this._confirm.classList.remove('active-trela');
    }
  }

  static _showAlert(title, message){
    return new Promise( resolve => {
      this._resolve = resolve;

      this._confirm.classList.add('active-trela');

      this._title.textContent = title;
      this._message.textContent = message;
    })
  }

  static _process(){
    if(this._queue.length < 1) return;

    const {title, message, resolve} = this._queue.shift();

    this._showAlert(title, message).then( value => {
      resolve(value)
      this._process();
    } )
  }

  static add(title, message){
    if(!title || !message) return;

    return new Promise( resolve => {
      this._queue.push({title, message, resolve});

      if(this._queue.length < 1){
        resolve(null);
        return;
      }

      this._process();
    })
  }
}

Confirm.init();