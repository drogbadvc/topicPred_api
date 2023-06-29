const data = JSON.stringify({
  "content": "55min Très facile Bon marché 698 kcal / personnes Un gâteau gourmand à l'alliance parfaite : chocolat - banane Ingrédients 5 personnes - 3 bananes - 200 g de farine - 15 cl de crème liquide légère - 3 oeufs - 100 g de sucre - 100 g de chocolat noir pâtissier - 40 g de beurre demi-sel - 1 sachet de sucre vanillé - 1 c. à c. bombée(s) de levure chimique Matériel - Four traditionnel - Moule à manqué ou rond - Saladier Préparation Préparation : Cuisson : - 1Dans un récipient, mélanger la farine, le sucre, le sucre vanillé et la levure.Dans un autre récipient, fouetter les oeufs et le beurre fondu.Verser la préparation liquide sur les éléments secs.Mélanger. - - 2Ajouter 10 cl de crème liquide et mélanger.Ajoutez les bananes coupées en rondelles et mélanger de nouveau. - - 3Faire fondre le chocolat avec le reste de la crème liquide (5 cl).Ajouter ce mélange à la pâte et mélanger juste pour donner un effet marbré.Verser dans un moule beurré et enfourner pour 30 minutes à 180°C. Conseils Pour plus de croquant, vous pouvez y ajouter des noix ou des noisettes. Pour un goût de banane plus prononcé, ajoutez des rondelles de banane sur le dessus pour la déco après cuisson. Nutrition 698kcal35% AR* 12.9 gprotéines26% AR* 103.1 gsucres40% AR* 24.9 gmatières grasses36% AR* - Recettes de pâtisserie - Recettes de gâteau au chocolat - Recettes à base de bananes - Recettes de gâteaux - Recettes de gâteau aux fruits - Recettes à base de chocolat noir - Recettes de gâteau à la banane - Recettes de desserts aux fruits - Recettes de desserts à la banane - Recettes de gâteau à la banane et crème fraîche - Recettes de desserts à la banane et chocolat - Recettes : Recettes de cuisine et conseils durant le confinement Commentaires"
});

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://www.machinools.com/api/pred_topic/predict");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.send(data);
