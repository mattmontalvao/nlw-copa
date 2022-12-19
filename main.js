let tea = 0
function sabores() {
  tea = tea + 0.1
  return `
  <div class="card">
    <ul>
      <h2>Chá Mate</h2>
      <li>
      <span>Sabores: limão, pêssego, cajá, tangerina, cupuaçu, tamarindo, café.</span>
      </li>
    </ul>

    <ul>
      <h2>Chá Preto</h2>
      <li>
      <span>Sabores: limão siciliano, cranberry.</span>
      </li>
    </ul>

    <ul>
      <h2>Chá de Hibisco</h2>
      <li>
      <span>Sabores: canela e limão.</span>
      </li>
    </ul>

    <ul>
      <h2>Chá Verde</h2>
      <li>
      <span>Sabores: Hortelã e limão, hibisco e limão.</span>
      </li>
    </ul>

    <ul>
      <h2>Chá de Capim-Cidreira</h2>
      <li>
      <span>Sabores: Manga, tangerina.</span>
      </li>
    </ul>
    
    <ul>
      <h2>Edições Limitadas</h2>
      <li><strong class="halloween">
      Especial Halloween
      </strong><br>
      <span>Sabor: Chá mate com groselha, com um toque de limão.
      <br><a>(Consulte valores e disponibilidade)</a></span>
      </li>

      <li><strong class="natal">
      Especial de Natal
      </strong><br>
      <span>Sabor: Chá preto com cranberry.
      <br><a>(Consulte valores e disponibilidade)</a></span>
      </li>
    </ul>

    <nav class="dropdown-menu">
    <ul>
      <li>
        <a>Valores ▼</a>
        <ul class="dropdown">
          <li><a>500mL - R$ 12,00</a></li>
          <li><a>1L - R$ 18,00</a></li>
          <li><a>2L - R$ 25,00</a></li>
          <li class="last"><a>Atacado - Fale Conosco</a></li>
        </ul>
      </li>
    </ul>
    </nav>
  </div>
  `
}

document.querySelector("#cards").innerHTML = sabores()



/* 
<link rel="whatsApp" href="https://wa.me/5562982404526">

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
      

      <nav class="dropdown-menu">
    <ul>
      <li>
        <a>Valores ▼</a>
        <ul class="dropdown">
          <li><a>500mL - R$ 12,00</a></li>
          <li><a>1L - R$ 18,00</a></li>
          <li><a>2L - R$ 25,00</a></li>
          <li class="last"><a>Atacado - Fale Conosco</a></li>
        </ul>
      </li>
    </ul>
    </nav>
      
      */