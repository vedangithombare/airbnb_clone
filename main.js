document.addEventListener("DOMContentLoaded", function () {
  const scrollIcons = document.querySelector(".scrollIcons");
  const scrollLength = scrollIcons.scrollWidth - scrollIcons.clientWidth;
  const leftBtn = document.querySelector(".left");
  const rightBtn = document.querySelector(".right");
  const checkIn = document.getElementById("checkIn");
  const stayDiv = document.getElementById("stayDiv");
  const houseOptions = document.getElementById("houseOptions");
  const destination = document.getElementById("destination");
  const justCheckIn = document.getElementById("justCheckIn");
  const justCheckOut = document.getElementById("justCheckOut");
  const guests = document.getElementById("guests");

  //checking the current position of the scrollbar so acc to that we can set the
  // buttons
  function checkScroll() {
    const currentScroll = scrollIcons.scrollLeft;

    if (currentScroll === 0) {
      leftBtn.style.display = "none";
      rightBtn.style.display = "flex";
    } else if (Math.abs(currentScroll - scrollLength) < 1) {
      leftBtn.style.display = "flex";
      rightBtn.style.display = "none";
    } else {
      leftBtn.style.display = "flex";
      rightBtn.style.display = "flex";
    }
  }

  scrollIcons.addEventListener("scroll", checkScroll);
  window.addEventListener("resize", checkScroll);
  checkScroll();

  function leftScroll() {
    scrollIcons.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  }

  function rightScroll() {
    scrollIcons.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  }

  leftBtn.addEventListener("click", leftScroll);
  rightBtn.addEventListener("click", rightScroll);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      stayDiv.innerHTML = `
       <div class="anyTime" id="anyTime">
        <div class="anywhere">
          <span class="Anywhere1">Anywhere</span>
        </div>

        <div class="anyWeek">
                   <span class="Anyweek1">Any Week</span>
         </div>
        <div class="AddGuest">
     <span class="AddGuest1" style = " color:#bcbaba">Add Guest</span>

          </div>
          <div class="searchGuests1">
            <span class="material-symbols-outlined"> search </span>
          </div>
        </div>
      </div>
      `;
      checkIn.style.display = "none";
      houseOptions.style.marginTop = "0";
      houseOptions.style.borderBottom = "1px solid lightgray";
    } else {
      stayDiv.innerHTML = `<div class="stayClass" id="stayDiv">
            <span class="stays">Stays</span>
            <span class="Experiences" style="color: #bcbaba">Experiences</span>
          </div>`;
      checkIn.style.display = "flex";
      houseOptions.style.marginTop = "20px";
      houseOptions.style.borderBottom = "0";
    }
  });

  console.log("windows", window.scrollY);

  const changeBorderLeft = () => {
    justCheckIn.style.borderLeft = "0";
  };

  const resetBorderLeft = () => {
    justCheckIn.style.borderLeft = "1px solid lightgray";
  };

  const changeBorderRight = () => {
    justCheckIn.style.borderLeft = "0";
  };

  const resetBorderRight = () => {
    justCheckIn.style.borderLeft = "1px solid lightgray";
  };

  destination.addEventListener("mouseenter", changeBorderLeft);

  destination.addEventListener("mouseleave", resetBorderLeft);

  justCheckOut.addEventListener("mouseenter", changeBorderRight);

  justCheckOut.addEventListener("mouseleave", resetBorderRight);

  guests.addEventListener("mouseenter", changeBorderRight);

  guests.addEventListener("mouseleave", resetBorderRight);
});
