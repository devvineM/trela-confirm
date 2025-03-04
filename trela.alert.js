class Alert {
  static _alert;
  static _title;
  static _message;
  static _buttonOk;
  static _buttonCancel;

  static _resolve;
  static _queue = [];

  static init(){
    this._createHtml();
    this._buildElement();
    this._addEvents();
  }

  static _createHtml(){
    document.body.insertAdjacentHTML('afterbegin', `
      <div id="alert-trela" class="trela">
        <div class="window-trela">
          <div class="header-trela">
            <h2 id="title-alert-trela">Aviso</h2>
            <button id="btn-cancel-alert-trela">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
              </svg>
            </button>
          </div>
          <div class="body-trela">
            <p id="message-alert-trela"></p>
          </div>
          <div class="footer-trela">
            <button class="btn-trela btn-ok-trela" id="btn-ok-alert-trela">Ok</button>
          </div>
        </div>
      </div>
    `);
  }

  static _buildElement(){
    this._alert = document.getElementById('alert-trela');
    this._title = document.getElementById('title-alert-trela');
    this._message = document.getElementById('message-alert-trela');
    this._buttonOk = document.getElementById('btn-ok-alert-trela');
    this._buttonCancel = document.getElementById('btn-cancel-alert-trela');
  }

  static _addEvents(){
    this._buttonOk.onclick = () => {
      this._resolve(true);

      this._alert.classList.remove('active-trela');
    }

    this._buttonCancel.onclick = () => {
      this._resolve(true);

      this._alert.classList.remove('active-trela');
    }
  }

  static _showAlert(message){
    return new Promise( resolve => {
      this._resolve = resolve;

      this._alert.classList.add('active-trela');

      this._message.textContent = message;
    })
  }

  static _process(){
    if(this._queue.length < 1) return;

    const {message, resolve} = this._queue.shift();

    this._showAlert(message).then( value => {
      resolve(value)
      this._process();
    } )
  }

  static add(message){
    if(!message) return;

    return new Promise( resolve => {
      this._queue.push({message, resolve});

      if(this._queue.length < 1){
        resolve(null);
        return;
      }

      this._process();
    })
  }
}

Alert.init();