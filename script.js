let weeks = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
  whyDay = new Date().getDay();

for (let i = 0; i < weeks.length; i++) {
  if (i == whyDay) {
    if (weeks[i] == 'Суббота' || weeks[i] == 'Воскресенье') {
      document.write(`<p><i>${weeks[i]}</i></p>`);
    } else {
      document.write(`<p><b>${weeks[i]}</b></p>`);
    }
  } else if (weeks[i] == 'Суббота' || weeks[i] == 'Воскресенье') {
    document.write(`<p><b>${weeks[i]}</b></p>`);
  } else {
    document.write(`<p>${weeks[i]}</p>`);
  }
}
console.log(weeks);
console.log(whyDay);
