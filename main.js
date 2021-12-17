setInterval(() => {
    //الحصول على التاريخ الهجري
    const date = new Date();
    let h = date.toLocaleDateString("ar-SA", {
        weekday: "long", month: "long", day: "numeric", year: "numeric"
    });

    function right(str, char) {
        return str.length - char;
    }

    let nameday = (h.split(" ")[0]).split("").filter(names => names != "،").join("");

    let day = h.split(" ")[1];
    let month = h.split(" ")[2];
    let year = "";

    for (i of h.split(" ")[3].split("")) {
        if (i == "١") {
            year = h.split(" ")[3];
            break;
        } else {
            month = `${h.split(" ")[2]} ${h.split(" ")[3]}`;
            year = h.split(" ")[4];
            break;
        }
    }

    let thedate = `${nameday}
${day} ${month} ${year}هـ`;
    document.querySelector("header h3").innerText = thedate;

    //نهاية التاريخ الهجري
});

let lastScrollTop = 0;
const header = document.querySelector("header");

let scrolli = 0;
window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        header.classList.add("hide");
    } else {
        header.classList.remove("hide");
    }
    lastScrollTop = scrollTop;
});