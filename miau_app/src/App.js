import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <html lang="es">
      <head>
        <meta charset="UTF-8"/>
        <title>MIAU</title>
        <style type="text/css">
          @import url("styles/commonStyles.css");
          @import url("styles/indexStyle.css");
        </style>
      </head>
      <body>
        <img src="" alt="MIAU logo" width="240"/>

        <fieldset id="titulico">
          <h3>¡Practica tu inglés mientras juegas!</h3>
        </fieldset>

        <fieldset id="linkecito" style={{ width: '170px' }}>
          <a role="button" className="self-align:center" href="login.html">
            <button>¡Start!</button>
          </a>
        </fieldset>

        {/*<script src="js/index.js"></script>*/}
      </body>
    </html>
  );
}

export default App;
