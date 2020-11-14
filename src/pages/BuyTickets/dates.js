const currentDate = new Date();

const datePlusOne = new Date(currentDate);
datePlusOne.setDate(datePlusOne.getDate() + 1);

const datePlusTwo = new Date(currentDate);
datePlusTwo.setDate(datePlusTwo.getDate() + 2);

const datePlusThree = new Date(currentDate);
datePlusThree.setDate(datePlusThree.getDate() + 3);

const datePlusFour = new Date(currentDate);
datePlusFour.setDate(datePlusFour.getDate() + 4);

const datePlusFive = new Date(currentDate);
datePlusFive.setDate(datePlusFive.getDate() + 5);

const datePlusSix = new Date(currentDate);
datePlusSix.setDate(datePlusSix.getDate() + 6);

const datePlusSeven = new Date(currentDate);
datePlusSeven.setDate(datePlusSeven.getDate() + 7);

const datePlusEight = new Date(currentDate);
datePlusEight.setDate(datePlusEight.getDate() + 8);

const datePlusNine = new Date(currentDate);
datePlusNine.setDate(datePlusNine.getDate() + 9);

const datePlusTen = new Date(currentDate);
datePlusTen.setDate(datePlusTen.getDate() + 10);

const days = [
  "söndag",
  "måndag",
  "tisday",
  "onsdag",
  "torsdag",
  "fredag",
  "lördag",
];
const months = [
  "januari",
  "februari",
  "mars",
  "april",
  "maj",
  "juni",
  "juli",
  "augusti",
  "september",
  "oktober",
  "november",
  "december",
];

const day = days[currentDate.getDay()];
const dayp1 = days[datePlusOne.getDay()];
const dayp2 = days[datePlusTwo.getDay()];
const dayp3 = days[datePlusThree.getDay()];
const dayp4 = days[datePlusFour.getDay()];
const dayp5 = days[datePlusFive.getDay()];
const dayp6 = days[datePlusSix.getDay()];
const dayp7 = days[datePlusSeven.getDay()];
const dayp8 = days[datePlusEight.getDay()];
const dayp9 = days[datePlusNine.getDay()];
const dayp10 = days[datePlusTen.getDay()];

const dates = [];

const month = months[currentDate.getMonth()];
const month1 = months[datePlusOne.getMonth()];
const month2 = months[datePlusTwo.getMonth()];
const month3 = months[datePlusThree.getMonth()];
const month4 = months[datePlusFour.getMonth()];
const month5 = months[datePlusFive.getMonth()];
const month6 = months[datePlusSix.getMonth()];
const month7 = months[datePlusSeven.getMonth()];
const month8 = months[datePlusEight.getMonth()];
const month9 = months[datePlusNine.getMonth()];
const month10 = months[datePlusTen.getMonth()];

const fullDay = `${day} ${currentDate.getDate()}  ${month} - idag`;
const fullDay1 = `${dayp1} ${datePlusOne.getDate()}  ${month1}`;
const fullDay2 = `${dayp2} ${datePlusTwo.getDate()}  ${month2}`;
const fullDay3 = `${dayp3} ${datePlusThree.getDate()}  ${month3}`;
const fullDay4 = `${dayp4} ${datePlusFour.getDate()}  ${month4}`;
const fullDay5 = `${dayp5} ${datePlusFive.getDate()}  ${month5}`;
const fullDay6 = `${dayp6} ${datePlusSix.getDate()}  ${month6}`;
const fullDay7 = `${dayp7} ${datePlusSeven.getDate()}  ${month7}`;
const fullDay8 = `${dayp8} ${datePlusEight.getDate()}  ${month8}`;
const fullDay9 = `${dayp9} ${datePlusNine.getDate()}  ${month9}`;
const fullDay10 = `${dayp10} ${datePlusTen.getDate()}  ${month10}`;

dates.push(
  fullDay,
  fullDay1,
  fullDay2,
  fullDay3,
  fullDay4,
  fullDay5,
  fullDay6,
  fullDay7,
  fullDay8,
  fullDay9,
  fullDay10
);

export default dates;
