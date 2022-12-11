var code0 = document.getElementById('header')
var code2 = document.getElementById('headerAnimation')
var code3 = document.getElementById('footer')
// var code5 = document.getElementById('headerDirectAccess')

code0.innerHTML = `
<div class="navLogo">
<a>BeautyNatt</a>

<div id="search">
  <input id="searchInput" type="text" placeholder="Find pages">
</div>
</div>
<div class="navbar">
<ul>
  <a href="/home.html"><li>Home</li></a>
  <a href="/latest-pages.html"><li>Latest Pages</li></a>
  <a href="/about-us.html"><li>About Us</li></a>
  <a href="/contact.html"><li>Contact</li></a>
  <a href="/home.html#faq"><li>FAQ</li></a>
</ul>
</div>
    `

code2.innerHTML = `
window.addEventListener("scroll", function() {
    let header = document.getElementById("header");

    if (window.pageYOffset >= 300) {
      header.classList.add("is-sticky");
      header.classList.remove("slide-top");
      header.classList.add("slide-bottom");
    }
    if (window.pageYOffset < 100) {
      header.classList.remove("is-sticky");
      header.classList.remove("slide-top");
    }
    if (window.pageYOffset < 300 && window.pageYOffset > 100) {
      header.classList.remove("slide-bottom");
      header.classList.add("slide-top");
    }
  });
    `

// code3.innerHTML = `

// `
// code5.innerHTML = `
//     <div class="navbar">
//      <div class="section">
//         <a href="brands.html">
//           <li>Brands</li>
//         </a>
//         <div class="dropdown">
//           <div class="dropdownContent">

//             <div>
//             <ul style="list-style: disc;">
//             <li><a href="makeup/brands.html">
//                 <h4 class="hoverUnderline">Makeup Brands</h4>
//               </a></li>
//                 <li><a href="thapath"><span>Brand1</span></a></li>
//                 <li><a href="thapath"><span>Brand2</span></a></li>
//                 <li><a href="thapath"><span>Brand3</span></a></li>
//                 <li><a href="thapath"><span>Brand4</span></a></li>
//                 <li><a href="thapath"><span>Brand5</span></a></li>
//                 <li><a href="thapath"><span>Brand6</span></a></li>
//                 <li><a href="thapath"><span>Brand7</span></a></li>
//                 <li><a href="thapath"><span>Brand8</span></a></li>
//               </ul>
//             </div>

//             <div>
//             <ul style="list-style: disc;">
//             <li><a href="cosmetics/brands.html">
//                 <h4 class="hoverUnderline">Cosmetics Brands</h4>
//               </a></li>
//                 <li><a href="thapath"><span>Brand1</span></a></li>
//                 <li><a href="thapath"><span>Brand2</span></a></li>
//                 <li><a href="thapath"><span>Brand3</span></a></li>
//                 <li><a href="thapath"><span>Brand4</span></a></li>
//                 <li><a href="thapath"><span>Brand5</span></a></li>
//                 <li><a href="thapath"><span>Brand6</span></a></li>
//                 <li><a href="thapath"><span>Brand7</span></a></li>
//                 <li><a href="thapath"><span>Brand8</span></a></li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div class="section">
//         <a href="makeup.html">
//           <li>Makeup</li>
//         </a>
//         <div class="dropdown">
//           <div class="dropdownContent">
//             <div>
//               <h4>Makeup Products</h4>
//               <div class="displayFlex">
//                 <ul style="list-style: disc;">
//                   <li><a href="makeup/blush.html"><span>Blushes</span></a></li>
//                   <li><a href="makeup/brush.html"><span>Brushes</span></a></li>
//                   <li><a href="makeup/concealer.html"><span>Concealers</span></a></li>
//                   <li><a href="makeup/eye-liner.html"><span>Eye Liners</span></a></li>
//                   <li><a href="makeup/eye-shadow.html"><span>Eye Shadows</span></a></li>
//                   <li><a href="makeup/foundation.html"><span>Foundations</span></a></li>
//                   <li><a href="makeup/lipstick.html"><span>Lipsticks</span></a></li>
//                   <li><a href="makeup/mascara.html"><span>Mascaras</span></a></li>
//                 </ul>
//                 <ul style="list-style: disc;">
//                   <li><a href="makeup/powder.html"><span>Powders</span></a></li>
//                   <li><a href="makeup/tweezers.html"><span>Tweezers</span></a></li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div class="section">
//         <a href="cosmetics/body-care.html">
//           <li>Body Care</li>
//         </a>
//         <div class="dropdown">
//           <div class="dropdownContent">
//             <div>
//               <h4>Body Care Products</h4>
//               <div class="displayFlex">
//                 <ul style="list-style: disc;">
//                   <li><a href="cosmetics/body-care/antiperspirants.html"><span>Anteperspirants</span></a></li>
//                   <li><a href="cosmetics/body-care/body-lotions.html"><span>Body Lotions</span></a></li>
//                   <li><a href="cosmetics/body-care/body-whashes.html"><span>Body Whashes</span></a></li>
//                   <li><a href="cosmetics/body-care/oils.html"><span>Oils</span></a></li>
//                   <li><a href="cosmetics/body-care/scrubs.html"><span>Scrubs</span></a></li>
//                   <li><a href="cosmetics/body-care/shower-gels.html"><span>Shower Gels</span></a></li>
//                   <li><a href="cosmetics/body-care/soaps.html"><span>Soaps</span></a></li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div class="section">
//         <a href="cosmetics/fragrance.html">
//           <li>Fragrance</li>
//         </a>
//         <div class="dropdown">
//           <div class="dropdownContent">
//             <div>
//               <h4>Fragrance Products</h4>
//               <div class="displayFlex">
//                 <ul style="list-style: disc;">
//                   <li><a href="cosmetics/fragrance/after-shave.html"><span>After Shave</span></a></li>
//                   <li><a href="cosmetics/fragrance/perfumes.html"><span>Perfumes</span></a></li>
//                   <li><a href="cosmetics/fragrance/salves.html"><span>Salves</span></a></li>
//                   <li><a href="cosmetics/fragrance/scented-oils.html"><span>Scented Oils</span></a></li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div class="section">
//         <a href="cosmetics/hair-care.html">
//           <li>Hair Care</li>
//         </a>
//         <div class="dropdown">
//           <div class="dropdownContent">
//             <div>
//               <h4>Hair Care Products</h4>
//               <div class="displayFlex">
//                 <ul style="list-style: disc;">
//                   <li><a href="cosmetics/hair-care/anti-dandruff-shampoos.html"><span>Anti Danduff Shampoos</span></a>
//                   </li>
//                   <li><a href="cosmetics/hair-care/conditioners.html"><span>Conditioners</span></a></li>
//                   <li><a href="cosmetics/hair-care/hair-colorant.html"><span>Hair Colorants</span></a></li>
//                   <li><a href="cosmetics/hair-care/lotions.html"><span>Lotions</span></a></li>
//                   <li><a href="cosmetics/hair-care/mousses.html"><span>Mousses</span></a></li>
//                   <li><a href="cosmetics/hair-care/serums.html"><span>Serums</span></a></li>
//                   <li><a href="cosmetics/hair-care/shampoos.html"><span>Shampoos</span></a></li>
//                   <li><a href="cosmetics/hair-care/texturizes.html"><span>Texturizes</span></a></li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div class="section">
//         <a href="cosmetics/oral-care.html">
//           <li>Oral Care</li>
//         </a>
//         <div class="dropdown">
//           <div class="dropdownContent">
//             <div>
//               <h4>Oral Care Products</h4>
//               <div class="displayFlex">
//                 <ul style="list-style: disc;">
//                   <li><a href="cosmetics/oral-care/flosses.html"><span>Flosses</span></a></li>
//                   <li><a href="cosmetics/oral-care/mouth-washes.html"><span>Mouth Washes</span></a></li>
//                   <li><a href="cosmetics/oral-care/toothpaste.html"><span>Toothpaste</span></a></li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div class="section">
//         <a href="cosmetics/skin-care.html">
//           <li>Skin Care</li>
//         </a>
//         <div class="dropdown">
//           <div class="dropdownContent">
//             <div>
//               <h4>Skin Care Products</h4>
//               <div class="displayFlex">
//                 <ul style="list-style: disc;">
//                   <li><a href="cosmetics/skin-care/cleasing-lotions.html"><span>Cleasing Lotions</span></a></li>
//                   <li><a href="cosmetics/skin-care/exfoliators.html"><span>Exfoliators</span></a></li>
//                   <li><a href="cosmetics/skin-care/eye-creams.html"><span>Eye Creams</span></a></li>
//                   <li><a href="cosmetics/skin-care/facial-masks.html"><span>Facial Masks</span></a></li>
//                   <li><a href="cosmetics/skin-care/hydrating-and-antiaging-creams.html"><span>Hydrating and Anti Aging
//                         Creams</span></a></li>
//                   <li><a href="cosmetics/skin-care/moisturizes.html"><span>Moisturizes</span></a></li>
//                   <li><a href="cosmetics/skin-care/serums.html"><span>Serums</span></a></li>
//                   <li><a href="cosmetics/skin-care/shaving-creams.html"><span>Shaving Creams</span></a></li>
//                 </ul>
//                 <ul style="list-style: disc;">
//                   <li><a href="cosmetics/skin-care/toners.html"><span>Toners</span></a></li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div class="section">
//         <a href="cosmetics/sun-care.html">
//           <li>Sun Care</li>
//         </a>
//         <div class="dropdown">
//           <div class="dropdownContent">
//             <div>
//               <h4>Sun Care Products</h4>
//               <div class="displayFlex">
//                 <ul style="list-style: disc;">
//                   <li><a href="cosmetics/sun-care/creams.html"><span>Creams</span></a></li>
//                   <li><a href="cosmetics/sun-care/gels.html"><span>Gels</span></a></li>
//                   <li><a href="cosmetics/sun-care/lotions.html"><span>Lotions</span></a></li>
//                   <li><a href="cosmetics/sun-care/oils.html"><span>Oils</span></a></li>
//                   <li><a href="cosmetics/sun-care/sprays.html"><span>Sprays</span></a></li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//     </div>
//   `