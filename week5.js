const obj = [
  {
    id: 1,
    name: '칸쵸',
    url: "https://img.danawa.com/prod_img/500000/096/593/img/2593096_1.jpg?shrink=330:*&_v=20161129160122"
  },
  {
    id: 2,
    name:'새우깡',
    url: "https://image.nongshim.com/non/pro/1594682430086.jpg"
  },
  {
    id: 3,
    name: '새우깡3',
    url: "https://image.nongshim.com/non/pro/1594682430086.jpg"
  },
  {
    id: 4,
    name: '새우깡4',
    url: "https://image.nongshim.com/non/pro/1594682430086.jpg"
  },
  {
    id: 5,
    name: '새우깡5',
    url: "https://image.nongshim.com/non/pro/1594682430086.jpg"
  },
  {
    id: 6,
    name: '새우깡6',
    url: "https://image.nongshim.com/non/pro/1594682430086.jpg"
  },
  {
    id: 7,
    name: '새우깡7',
    url: "https://image.nongshim.com/non/pro/1594682430086.jpg"
  },
  {
    id: 8,
    name: '새우깡8',
    url: "https://image.nongshim.com/non/pro/1594682430086.jpg"
  },
  {
    id: 9,
    name: '새우깡9',
    url: "https://image.nongshim.com/non/pro/1594682430086.jpg"
  },
  {
    id: 10,
    name: '새우깡10',
    url: "https://image.nongshim.com/non/pro/1594682430086.jpg"
  },
  {
    id: 11,
    name: '새우깡11',
    url: "https://image.nongshim.com/non/pro/1594682430086.jpg"
  },
  {
    id: 12,
    name: '새우깡12',
    url: "https://image.nongshim.com/non/pro/1594682430086.jpg"
  },
  {
    id: 13,
    name: '새우깡13',
    url: "https://image.nongshim.com/non/pro/1594682430086.jpg"
  },
  {
    id: 14,
    name: '새우깡14',
    url: "https://image.nongshim.com/non/pro/1594682430086.jpg"
  },
  {
    id: 15,
    name: '새우깡15',
    url: "https://image.nongshim.com/non/pro/1594682430086.jpg"
  },
  {
    id: 16,
    name: '새우깡16',
    url: "https://image.nongshim.com/non/pro/1594682430086.jpg"
  },
  {
    id: 17,
    name: '새우깡17',
    url: "https://image.nongshim.com/non/pro/1594682430086.jpg"
  },
  {
    id: 18,
    name: '새우깡18',
    url: "https://image.nongshim.com/non/pro/1594682430086.jpg"
  },
  {
    id: 19,
    name: '새우깡19',
    url: "https://image.nongshim.com/non/pro/1594682430086.jpg"
  },
  {
    id: 20,
    name: '새우깡20',
    url: "https://image.nongshim.com/non/pro/1594682430086.jpg"
  },
  {
    id: 21,
    name: '새우깡21',
    url: "https://image.nongshim.com/non/pro/1594682430086.jpg"
  },
  {
    id: 22,
    name: '새우깡22',
    url: "https://image.nongshim.com/non/pro/1594682430086.jpg"
  },
  {
    id: 23,
    name: '새우깡23',
    url: "https://image.nongshim.com/non/pro/1594682430086.jpg"
  },
  {
    id: 24,
    name: '새우깡24',
    url: "https://image.nongshim.com/non/pro/1594682430086.jpg"
  },
  {
    id: 25,
    name: '새우깡25',
    url: "https://image.nongshim.com/non/pro/1594682430086.jpg"
  },
  {
    id: 26,
    name: '새우깡26',
    url: "https://image.nongshim.com/non/pro/1594682430086.jpg"
  },
  {
    id: 27,
    name: '새우깡27',
    url: "https://image.nongshim.com/non/pro/1594682430086.jpg"
  },
  {
    id: 28,
    name: '새우깡28'  ,
    url: "https://image.nongshim.com/non/pro/1594682430086.jpg"
  },
  {
    id: 29,
    name: '새우깡29',
    url: "https://image.nongshim.com/non/pro/1594682430086.jpg"
  },
  {
    id: 30,
    name: '새우깡30',
    url: "https://image.nongshim.com/non/pro/1594682430086.jpg"
  }
]
const $kart = document.createElement("div")
document.body.append($kart);
const $container = document.createElement("div");
document.body.append($container);
$container.className = 'container';
$kart.className = 'kart';
obj.forEach((i) => {
  const $card = document.createElement("div");
  const $imgBox = document.createElement("div");
  const $img = document.createElement("img");
  const $numberBox = document.createElement("div");
  const $name = document.createElement("div");
  $card.className = 'card';
  $imgBox.className = 'imgBox';
  $img.className = 'img';
  $numberBox.className = 'numberBox';
  $name.className = 'name';
  $img.setAttribute('src', i.url)
  $numberBox.innerText = i.id
  $name.innerText = i.name
  $imgBox.append($img);
  $card.append($imgBox);
  $card.append($numberBox);
  $card.append($name);
  $container.append($card);
}
)

$container.addEventListener('click', (e) => {
  let $img = e.target;
  if (e.target.className != 'img' ) return;

  $kart.append($img.parentNode.parentNode);
})

$kart.addEventListener('click', (e)=>{
  let innerCard = e.target;
  if (e.target.className != 'img') return;
  $container.append(innerCard.parentNode.parentNode);
})