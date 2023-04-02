import { getData, append } from "../componants/fetch-1.js";

import { getData_1, append_1 } from "../componants/fetch-1.js";
import { getData_2, append_2 } from "../componants/fetch-1.js";
import { getData_3, append_3 } from "../componants/fetch-1.js";
import { getData_4, append_4 } from "../componants/fetch-1.js";
import { getData_5, append_5 } from "../componants/fetch-1.js";

// console.log(getData)
// let cont = document.getElementById("cont")

// for best seller section
const url = "https://cult-fit-86n9.onrender.com/bestSellerData";

fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    console.log(res);
    append(res);
  });

// for just luch section
const url_1 = "https://cult-fit-86n9.onrender.com/justLauched";

fetch(url_1)
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    console.log(res);
    append_1(res);
  });

// for tradmills
const url_2 = "https://cult-fit-86n9.onrender.com/TREADMILLS";

fetch(url_2)
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    console.log(res);
    append_2(res);
  });
// for spinbikes
const url_3 = "https://cult-fit-86n9.onrender.com/Spinbikes";

fetch(url_3)
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    console.log(res);
    append_3(res);
  });

// for accessories
const url_4 = "https://cult-fit-86n9.onrender.com/Accessories";

fetch(url_4)
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    console.log(res);
    append_4(res);
  });

// for health
const url_5 = "https://cult-fit-86n9.onrender.com/health";

fetch(url_5)
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    console.log(res);
    append_5(res);
  });
