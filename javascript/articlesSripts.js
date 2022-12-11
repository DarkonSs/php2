var code = document.getElementById('header')
var code2 = document.getElementById('headerAnimation')
var code3 = document.getElementById('footer')
var code4 = document.getElementById('reeplaceSymbols')

code.innerHTML = `
<ul class="navbar">
      <a href="../../home.html"><li>HOME</li></a>
      <a href="../../contact.html"><li>CONTACT</li></a>
      <a href="../../home.html"><li class="hatton" style="font-size: 50px; letter-spacing: 0.05em; color: var(--colorText);">BeautyNatt</li></a>
      <a href="../../cosmetics.html"><li>COSMETICS</li></a>
      <a href="../../makeup.html"><li>MAKEUP</li></a>
    </ul>
    `

code2.innerHTML = `
window.addEventListener("scroll", function() {
    let header = document.getElementById("header");

    if (window.pageYOffset >= 500) {
      header.classList.add("is-sticky");
      header.classList.remove("slide-top");
      header.classList.add("slide-bottom");
    }
    if (window.pageYOffset < 100) {
      header.classList.remove("is-sticky");
      header.classList.remove("slide-top");
    }
    if (window.pageYOffset < 500 && window.pageYOffset > 100) {
      header.classList.remove("slide-bottom");
      header.classList.add("slide-top");
    }
  });
    `

code3.innerHTML = `
<div class="backUpBtn">
      <a href="#upOfThePage">BACK UP ▲</a>
    </div>
    <div class="footer">
      <div class="mainFooter">
        <span class="hatton" style="font-size: 50px; letter-spacing: 0.05em; color: var(--whiteColor);">BeautyNatt</span>
        <p style="color: var(--inColorLabel);">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio.</p>
        <div class="socialMedia">
          <span><b>SOCIAL MEDIA</b></span>
          <div class="socialMediaImgSide">
            <a target="_blank" href="https://www.facebook.com/"><img src="../../img/facebookLogo.png" alt="" width="40px;"></a>
            <a target="_blank" href="https://www.instagram.com/"><img src="../../img/instagramLogo.png" alt="" width="40px;"></a>
            <a target="_blank" href="https://twitter.com/"><img src="../../img/twitterLogo.png" alt="" width="40px;"></a>
            <a target="_blank" href="https://www.youtube.com/"><img src="../../img/youtubeLogo.png" alt="" width="40px;"></a>
            <p class="noMargin" style="color: var(--inColorLabel);">beautynatt@gmail.com</p>
          </div>
        </div>
      </div>

      <div class="linksFooter">
        <div class="linksPArt">
          <div class="">
            <span><b>COSMETICS</b></span>
          </div>
          <div class="linksSide">
            <div class="">
              <a>PRODUCT</a>
              <a>PRODUCT</a>
              <a>PRODUCT</a>
              <a>PRODUCT</a>
              <a>PRODUCT</a>
            </div>
            <div class="">
              <a>PRODUCT</a>
              <a>PRODUCT</a>
              <a>PRODUCT</a>
              <a>PRODUCT</a>
              <a>PRODUCT</a>
            </div>
          </div>
        </div>
        <div class="linksPArt">
          <div class="">
            <span><b>MAKEUP</b></span>
          </div>
          <div class="linksSide">
            <div class="">
              <a>PRODUCT</a>
              <a>PRODUCT</a>
              <a>PRODUCT</a>
              <a>PRODUCT</a>
              <a>PRODUCT</a>
            </div>
            <div class="">
              <a>PRODUCT</a>
              <a>PRODUCT</a>
              <a>PRODUCT</a>
              <a>PRODUCT</a>
              <a>PRODUCT</a>
            </div>
          </div>
        </div>
        <div class="linksPArt">
          <div class="">
            <span><b>BRANDS</b></span>
          </div>
          <div class="linksSide">
            <div class="">
              <a>BRAND</a>
              <a>BRAND</a>
              <a>BRAND</a>
              <a>BRAND</a>
              <a>BRAND</a>
            </div>
            <div class="">
              <a>BRAND</a>
              <a>BRAND</a>
              <a>BRAND</a>
              <a>BRAND</a>
              <a>BRAND</a>
            </div>
          </div>
        </div>
        <div class="linksPArt">
          <div class="">
            <span><b>LINKS</b></span>
          </div>
          <div class="linksSide">
            <div class="">
              <a>LINK</a>
              <a>LINK</a>
              <a>LINK</a>
              <a>LINK</a>
              <a>LINK</a>
            </div>
            <div class="">
              <a>LINK</a>
              <a>LINK</a>
              <a>LINK</a>
              <a>LINK</a>
              <a>LINK</a>
            </div>
          </div>
        </div>
      </div>
    </div>
`

code4.innerHTML = `
let elements = Array.prototype.slice.call(document.querySelectorAll("h1, h2, h3, p, span"));

elements.forEach(function(el){

  const textArray = el.textContent

    const reg1 = /\!\/g
    const reg2 = /\'\/g
    const reg3 = /\@\/g
    const reg4 = /\\*\/g
    const reg5 = /4/g

    const symboleReplaced = textArray.replace(reg1, \`<span style="font-family: sans serif">!</span>\`)
    const symboleReplaced2 = symboleReplaced.replace(reg2, \`<span style="font-family: sans serif">'</span>\`)
    const symboleReplaced3 = symboleReplaced2.replace(reg3, \`<span style="font-family: sans serif">@</span>\`)
    const symboleReplaced4 = symboleReplaced3.replace(reg4, \`<span style="font-family: sans-serif; color: rgb(172, 30, 30);">*</span>\`)
    const symboleReplaced5 = symboleReplaced4.replace(reg5, \`<span style="font-family: sans-serif;">4</span>\`)

    el.innerHTML = symboleReplaced5

});
`