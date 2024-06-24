// let navbar = document.querySelector('#navbar');
// window.addEventListener('scroll', ()=>{
//       if(window.scrollY > 0) {
//        navbar.style.backgroundColor = 'red'
//      }
// })

let calltoactionbutton = document.querySelector('#calltoactionbutton')
let contenitorecalltoaction = document.querySelector('#contenitorecalltoaction')
calltoactionbutton.addEventListener('click' , ()=>{
contenitorecalltoaction.innerHTML =`

      <div class="showcalltoaction row justify-content-around ">
        <header class="d-flex justify-content-center align-items-center">
          <h2 class="h2style">
            I nostri servizi
          </h2>
        </header>
          <div class="col-3 despair">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <picture>
                    <img class="img-fluid" src="https://cdn3d.iconscout.com/3d/premium/thumb/shake-hand-11103449-8893824.png" alt="">
                  </picture>
                  <header class="headerstyle">
                    <h4>
                      rendiamo il lavoro più facile
                    </h4>
                  </header>
                  <article class="articlestyle">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid molestias doloremque ad animi. Numquam in quibusdam natus cum unde nobis, illum quos praesentium? Rerum laborum vitae soluta? Aliquid, rerum earum?
                    </p>
                  </article>  
                </div>
              </div>
            </div>
          </div>
          <div class="col-3 despair">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <picture>
                    <img class="img-fluid" src="https://cdn3d.iconscout.com/3d/premium/thumb/problem-solving-8315257-6634385.png?f=webp" alt="">
                  </picture>
                  <header class="headerstyle">
                    <h4>
                      Troviamo le soluzioni ai problemi
                    </h4>
                  </header>
                  <article class="articlestyle">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid molestias doloremque ad animi. Numquam in quibusdam natus cum unde nobis, illum quos praesentium? Rerum laborum vitae soluta? Aliquid, rerum earum?
                    </p>
                  </article> 
                </div>
              </div>
            </div>
          </div>
          <div class="col-3 despair" id="capturedespair">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <picture>
                    <img class="img-fluid" src="https://cdn3d.iconscout.com/3d/premium/thumb/fast-time-6013408-4985340.png?f=webp" alt="">
                  </picture>
                  <header class="headerstyle">
                    <h4>
                      La velocità nel nostro lavoro
                    </h4>
                  </header>
                  <article class="articlestyle">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid molestias doloremque ad animi. Numquam in quibusdam natus cum unde nobis, illum quos praesentium? Rerum laborum vitae soluta? Aliquid, rerum earum?
                    </p>
                  </article> 
                </div>
              </div>
            </div>
          </div>
        </div>

  `
})