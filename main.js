let header = `      
          <div class="w-full h-32 bg-slate-600 flex items-center justify-center text-8xl pl-14  text-black font-serif">
              <div class="w-96 h-32 flex items-start justify-center pt-3">

              <div class="text-5xl mt-8 mr-24">
                FoxChat
              </div>

              <div class="dropdown">
                  <button class="dropbtn rounded-lg mr-8">Menu</button>
                  <div class="dropdown-content rounded-lg overflow-hidden text-lg">
                    <a href="index.html">Home</a>
                    <a href="Editorials.html">Editorials</a>
                    <a href="Weather.html">Weather</a>
                    <a href="About.html">About</a>
                    <a href="Contact.html">Contact</a>
                  </div>
                </div>

                 
                      
              </div>`


document.getElementById("header").innerHTML = header;


let footer = `<div class="w-full h-12 bg-slate-600 flex items-center justify-center text-black font-serif text-sm">copyright FoxChat 2024</div>`

document.getElementById("footer").innerHTML = footer;

