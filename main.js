/* function createGame(player1, hour, player2) {
  return `
  <li>
    <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
  </li>
`
} */

let tea = 0
function sabores() {
  tea = tea + 0.1
  return `
  <div class="card">
    <h2>Chá Mate</h2>
    <ul id="epp">
      <li><strong>
      Limão 
      </strong><br>
      <span>Chá mate adoçado, com suco de limão.</span>
      </li>

      <li><strong>
      Pêssego 
      </strong><br>
      <span>Chá mate adoçado, batido com polpa de pêssego.</span>
      </li>

      <li><strong>
      Cajá
      </strong><br>
      <span>Chá mate adoçado, batido com polpa de cajá.</span>
      </li>

      <li><strong>
      Tangerina
      </strong><br>
      <span>Chá mate adoçado, batido com polpa de tangerina.</span>
      </li>

      <li><strong>
      Cupuaçu
      </strong><br>
      <span>Chá mate adoçado, batido com polpa de cupuaçu.</span>
      </li>

      <li><strong>
      Tamarindo
      </strong><br>
      <span>Chá mate adoçado, batido com polpa de tamarindo.</span>
      </li>

      <li><strong>
      Café
      </strong><br>
      <span>Chá mate adoçado, batido com café 100% arábica e com um toque de limão.</span>
      </li>
    </ul>

    <ul>
      <h2>Chá Preto</h2>
      <li><strong>
      Limão Siciliano
      </strong><br>
      <span>Chá preto adoçado, batido com limão siciliano.</span>
      </li>
    </ul>

    <ul>
      <h2>Chá de Hibisco</h2>
      <li><strong>
      Canela e Limão
      </strong><br>
      <span>Chá de hibisco com canela adoçado, batido com limão.</span>
      </li>

      <li><strong>
      Limão
      </strong><br>
      <span>Chá de hibisco adoçado, batido com suco de limão.</span>
      </li>
    </ul>

    <ul>
      <h2>Chá Verde</h2>
      <li><strong>
      Hortelã e Limão
      </strong><br>
      <span>Chá verde com hortelã adoçado, batido com suco de limão.</span>
      </li>

      <li><strong>
      Hibisco e Limão
      </strong><br>
      <span>Chá verde com hibisco adoçado, batido com suco de limão.</span>
      </li>
    </ul>

    <ul>
      <h2>Chá de Capim-Cidreira</h2>
      <li><strong>
      Manga
      </strong><br>
      <span>Chá de capim-cidreira adoçado, batido com polpa de manga e um toque de limão.</span>
      </li>

      <li><strong>
      Tangerina
      </strong><br>
      <span>Chá de capim-cidreira adoçado, batido com polpa de tangerina e um toque de limão.</span>
      </li>
    </ul>

    <ul>
      <h2>Edições Limitadas</h2>
      <li><strong class="halloween">
      Especial Halloween
      </strong><br>
      <span>Chá mate com groselha adoçado, com um toque de limão.</span>
      </li>

      <li><strong class="natal">
      Especial de Natal
      </strong><br>
      <span>Chá preto com frutas vermelhas adoçado, com um toque de limão.</span>
      </li>
    </ul>
  </div>
  `
}

document.querySelector("#cards").innerHTML = sabores()
