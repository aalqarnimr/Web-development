let book1 = {
  bookImg:
    "https://storage.googleapis.com/du-prd/books/images/9780316572101.jpg",
  bookName: "THE RUNNING GRAVE",
  bookDescription:
    "The seventh book in the Cormoran Strike series. Strike's business partner, Robin Ellacott, goes inside a cult to rescue someone who has joined it.",
  bookPrice: "10$",
};
let book2 = {
  bookImg:
    "https://storage.googleapis.com/du-prd/books/images/9780525954996.jpg",
  bookName: "THE ARMOR OF LIGHT",
  bookDescription:
    "The fifth book in the Kingsbridge series. Change and turmoil affect various aspects of society in the latter part of the 18th century.",
  bookPrice: "15$",
};
let book3 = {
  bookImg:
    "https://storage.googleapis.com/du-prd/books/images/9781649374042.jpg",
  bookName: "FOURTH WING",
  bookDescription:
    "Violet Sorrengail is urged by the commanding general, who also is her mother, to become a candidate for the elite dragon riders.",
  bookPrice: "9$",
};
let book4 = {
  bookImg:
    "https://storage.googleapis.com/du-prd/books/images/9780316405690.jpg",
  bookName: "12 MONTHS TO LIVE",
  bookDescription:
    "A criminal defense attorney who received a terminal diagnosis might be in danger of being murdered.",
  bookPrice: "10$",
};

const isbn = "0451526538";
const apiUrl = `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=data&format=json`;
let apiBook;
fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    apiBook = data[`ISBN:${isbn}`];
    displayData(apiBook);
  });

function displayData(apiBook) {
  book5 = {
    bookImg: apiBook.cover.medium,
    bookName: apiBook.title,
    bookDescription:
      "A criminal defense attorney who received a terminal diagnosis might be in danger of being murdered.",
    bookPrice: "14$",
  };

  let books = [book1, book2, book3, book4,book5];
  interactiveSliderElement = document.querySelector("div.interactive_slider");
  for (book of books) {
    bookElement = document.createElement("div");
    bookElement.setAttribute("class", "Sproduct");
    bookElement.innerHTML = `<div class="sInfo">
    <img
      src=${book.bookImg}
      alt="sImage"
      style="
        width: 159.589px;
        height: 209px;
        flex-shrink: 0;
        border-radius: 5px;
      "
    />
    <figcaption class="bottom-left" style="position: absolute; bottom: 350px; left: 50px; color: aqua;">A.A.Q</figcaption>
    <p>${book.bookName}</p>
    <p>
      ${book.bookDescription}
    </p>
    <p>$ ${book.bookPrice}</p>
    <div class="date" style="padding-top: 180px;">2023-10-3</div>
    <div class="buttons">
      <img src="assets/icons/Cart.svg" alt="" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
      >
        <circle cx="20" cy="20" r="20" fill="white" />
        <circle
          cx="20"
          cy="20"
          r="19.4167"
          stroke="#EAEAEA"
          stroke-opacity="0.9"
          stroke-width="1.16667"
        />
        <g filter="url(#filter0_ii_713_182)">
          <path
            d="M9.71402 11.888C7.42866 14.1829 7.42866 17.9038 9.71402 20.1988L19.7041 30.2308L29.6941 20.1988C31.9794 17.9038 31.9794 14.1829 29.6941 11.888C27.4087 9.59301 23.7034 9.59301 21.4181 11.888L19.7041 13.6093L17.99 11.888C15.7047 9.59301 11.9994 9.59301 9.71402 11.888Z"
            fill="#0D0842"
            fill-opacity="0.6"
          />
        </g>
        <defs>
          <filter
            id="filter0_ii_713_182"
            x="8"
            y="7.63087"
            width="23.4081"
            height="25.1358"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2.53588" />
            <feGaussianBlur stdDeviation="2.53588" />
            <feComposite
              in2="hardAlpha"
              operator="arithmetic"
              k2="-1"
              k3="1"
            />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0509804 0 0 0 0 0.0313726 0 0 0 0 0.258824 0 0 0 0.15 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_713_182"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-2.53588" />
            <feGaussianBlur stdDeviation="2.53588" />
            <feComposite
              in2="hardAlpha"
              operator="arithmetic"
              k2="-1"
              k3="1"
            />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0509804 0 0 0 0 0.0313726 0 0 0 0 0.258824 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_innerShadow_713_182"
              result="effect2_innerShadow_713_182"
            />
          </filter>
        </defs>
      </svg>
    </div>
  </div>`;
    interactiveSliderElement.append(bookElement);
  }
}
