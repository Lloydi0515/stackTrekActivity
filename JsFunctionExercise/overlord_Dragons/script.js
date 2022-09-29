function hero(bullets, dragons) {
  let temp = dragons * 2;
  if (bullets >= temp) {
    return true;
  } else {
    return false;
  }
}

// console.log(hero(bullets, dragons))

// Line 2:
// kasi isang dragon need mo 2 bullets to kill
// what i did was multiplied dragons by 2
// para dito, alam ko ilan bullets need ko
// yung value nayun nilagay ko sa variable temp
// tapos I compare if bullets is equal or greater
// no need na sa result since you only return true or false naman
