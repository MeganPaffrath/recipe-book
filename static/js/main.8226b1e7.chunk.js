(this["webpackJsonprecipe-book"]=this["webpackJsonprecipe-book"]||[]).push([[0],{11:function(e,t,i){},12:function(e,t,i){"use strict";i.r(t);var n=i(0),o=i(1),s=i(4),a=i.n(s),r=i(5),u=i(3);function l(e){var t,i=e.recipe,o=e.ingredients,s=e.instructions,a=e.ovenTemp,r=e.categories,u=e.prepTime,l=e.cookTime,c=e.totalTime,p=0,m="",d=0;if(r.length>1)for(t=0;t<r.length-1;t++)m=m+r[t]+", ";return m+=r[r.length-1],Object(n.jsxs)("div",{className:"recipe",children:[Object(n.jsx)("h1",{children:i}),Object(n.jsxs)("center",{children:[a>0?Object(n.jsx)("div",{children:Object(n.jsxs)("p",{children:["Oven: ",a,"\u02daF"]})}):null,Object(n.jsxs)("p",{children:["Prep Time: ",u," min, Cook Time: ",l," min"]}),Object(n.jsxs)("p",{children:["Total Time: ",c," min"]}),Object(n.jsxs)("p",{children:["Categories: ",m]})]}),Object(n.jsx)("h2",{children:"Ingredients:"}),Object(n.jsx)("ul",{children:o.map((function(e){return d++,Object(n.jsx)("li",{children:"count"===e.units?e.value+" "+e.item:e.value+" "+e.units+" "+e.item},"ingr"+d)}))}),Object(n.jsx)("h2",{children:"Instructions:"}),Object(n.jsx)("ol",{children:s.map((function(e){return p++,Object(n.jsx)("li",{children:e},"inst"+p)}))})]})}function c(){return Object(n.jsx)("header",{children:Object(n.jsxs)("center",{children:[Object(n.jsx)("h1",{children:"Megan's Recipes"}),Object(n.jsx)("p",{children:"meganpaffrath.com"})]})})}i(11);function p(){var e=Object(o.useState)("all"),t=Object(r.a)(e,2),i=t[0],s=t[1];function a(e){var t=e.ovenTemp?e.ovenTemp:0;return Object(n.jsx)(l,{recipe:e.recipe,ingredients:e.ingredients,instructions:e.instructions,categories:e.categories,ovenTemp:t,prepTime:e.prepTime,cookTime:e.cookTime,totalTime:e.totalTime},e.recipe)}return Object(n.jsxs)("div",{children:[Object(n.jsx)(c,{}),Object(n.jsx)("div",{className:"page-container",children:Object(n.jsxs)("div",{className:"content",children:[Object(n.jsxs)("center",{children:[Object(n.jsx)("p",{children:"Search by title/ingredient/type/temperature:"}),Object(n.jsx)("input",{onChange:function(e){s(e.target.value)},type:"search",id:"mySearch",value:i,placeholder:"Search by title/ingredient/type/temperature",size:"40",onKeyDown:function(e){"Enter"===e.key&&console.log("ENTER")}})]}),Object(n.jsx)("br",{}),Object(n.jsxs)("center",{className:"category-btns",children:[Object(n.jsx)("button",{onClick:function(){return s("all")},children:"all"}),Object(n.jsx)("button",{onClick:function(){return s("meal")},children:"meal"}),Object(n.jsx)("button",{onClick:function(){return s("breakfast")},children:"breakfast"}),Object(n.jsx)("button",{onClick:function(){return s("protein")},children:"protein"}),Object(n.jsx)("button",{onClick:function(){return s("side")},children:"side"}),Object(n.jsx)("button",{onClick:function(){return s("salad")},children:"salad"}),Object(n.jsx)("button",{onClick:function(){return s("dessert")},children:"dessert"}),Object(n.jsx)("button",{onClick:function(){return s("hors d'oeuvre")},children:"hors d'oeuvre"}),Object(n.jsx)("button",{onClick:function(){return s("oven")},children:"oven"}),Object(n.jsx)("button",{onClick:function(){return s("blender")},children:"blender"}),Object(n.jsx)("button",{onClick:function(){return s("stove")},children:"stove"}),Object(n.jsx)("button",{onClick:function(){return s("sheet pan")},children:"sheet pan"})]}),Object(n.jsx)("br",{}),"all"===i?u.map(a):function(e,t){return e.filter((function(e){if(e.recipe.toLowerCase().includes(t.toLowerCase()))return!0;for(var i in e.ingredients)if(e.ingredients[i].item.toLowerCase().includes(t.toLowerCase()))return!0;for(var n in e.categories)if(e.categories[n].toLowerCase().includes(t.toLowerCase()))return!0;return e.ovenTemp===t}))}(u,i).map(a)]})})]})}a.a.render(Object(n.jsx)(p,{}),document.getElementById("root"))},3:function(e){e.exports=JSON.parse('[{"recipe":"Roasted Chicken","ovenTemp":"400","prepTime":"15","cookTime":"70","totalTime":"85","ingredients":[{"item":"chicken","value":"1","units":"count"},{"item":"lemon","value":"1","units":"count"},{"item":"garlic clove","value":"16","units":"count"},{"item":"thyme","value":"8","units":"count"},{"item":"salt","value":"2","units":"tsp"},{"item":"pepper","value":"2","units":"tsp"}],"categories":["protein","oven"],"instructions":["note: spice measurements are esimates - season as desired","preheat oven to 400\u02daF","chop up lemon into small slices and cut unpealed garlic cloves in halves","take insides out of chiken","fill bird with thyme, lemon, and garlic","place extra lemon and garlic in dish","coat bird with pepper, salt and thyme","truss the bird","roast for 70-? minutes until internal temperature reaches 165\u02daF"]},{"recipe":"Cod","ovenTemp":"450","prepTime":"10","cookTime":"15-22","totalTime":"32","ingredients":[{"item":"cod (frozen fillet)","value":"1","units":"count"},{"item":"zucchini","value":"2","units":"count"},{"item":"rosemary","value":"1/4","units":"tsp"},{"item":"thyme","value":"1/4","units":"tsp"},{"item":"garlic","value":"1/2","units":"tsp"},{"item":"lemon","value":"1/4","units":"tsp"},{"item":"salt","value":"1","units":"tsp"}],"categories":["protein","oven","sheet pan"],"instructions":["preheat oven to 450\u02daF","chop zuchini into small peices","coat cod in olive oil, rosemary, thyme, garlic, and salt","coat zucchini in olive oil and garlic","lay lemon slice on top of fish fillet","bake for 15-22 minutes until internal temp reaches 145\u02daF"]},{"recipe":"Bacon Wrapped Pears","prepTime":"10","cookTime":"35","totalTime":"45","ingredients":[{"item":"bacon","value":"4","units":"count"},{"item":"pear","value":"1","units":"count"},{"item":"cinnamon","value":"1","units":"tbsp"},{"item":"toothpick (optional)","value":"4","units":"count"}],"categories":["dessert","hors d\'oeuvre"],"instructions":["preheat oven to 350\u02daF","wrap each pair slice with bacon - secure loose ends with toothpick (optional)","bake for around 35 minutes","let cool & enjoy warm"]},{"recipe":"Breakfast Hash","ovenTemp":"400","prepTime":"10","cookTime":"20","totalTime":"30","ingredients":[{"item":"bacon","value":"8","units":"count"},{"item":"apple","value":"1","units":"count"},{"item":"broccoli","value":"1","units":"count"},{"item":"garlic clove","value":"2","units":"count"},{"item":"onion","value":"1","units":"count"},{"item":"sweet potato (large white)","value":"1","units":"count"},{"item":"olive oil","value":"2","units":"tbsp"},{"item":"salt","value":"2","units":"tsp"}],"categories":["meal","breakfast","stove"],"instructions":["bake bacon at 400\u02daF for 15 minutes","heat oil in large frying pan","cut up potato into small cubes, add to pan","cut up broccoli, add to pan","cut up onion, add to pan","cut up apple, add to pan","cook & mix until ready","crumble up bacon and mix in","optionally add a small spoonful of bacon grease for flavor"]},{"recipe":"Butternut Squash Soup","ovenTemp":"400","prepTime":"10","cookTime":"60","totalTime":"70","ingredients":[{"item":"butternut squash (large)","value":"1","units":"count"},{"item":"sweet potato (large orange)","value":"1","units":"count"},{"item":"carrot (large)","value":"3","units":"count"},{"item":"onion","value":"1","units":"count"},{"item":"apple","value":"1","units":"count"},{"item":"garlic clove","value":"4","units":"count"},{"item":"olive oil","value":"2","units":"tbsp"},{"item":"salt","value":"1","units":"tsp"},{"item":"pepper","value":"1","units":"tsp"},{"item":"water or broth","value":"3","units":"cups"}],"categories":["meal","side","sheet pan","oven","blender"],"instructions":["preheat oven to 400\u02daF","line sheet pan","half and core squash","half onion","cut apple into quarters","put all ingredients on tray","coat items with olive oil, salt, and pepper","20 minutes in: remove garlic and apples - put in blender","40 minutes in: remove onion and carrots - put in blender and blend (add water/broth as needed)","60 minutes in: remove sweet potato and squash","put insides of sweet potato and squash in blender and blend (add water/broth as needed)","mix and season as desired"]},{"recipe":"Chicken Asparagus Sheet Pan","ovenTemp":"400","prepTime":"10","cookTime":"35","totalTime":"45","ingredients":[{"item":"chicken thigh","value":"3","units":"count"},{"item":"asperagus bundle","value":"1","units":"count"},{"item":"sweet potato (large white)","value":"1","units":"count"},{"item":"garlic powder","value":"2","units":"tsp"},{"item":"sage","value":"2","units":"tsp"}],"categories":["meal","sheet pan","oven"],"instructions":["note: spice measurements are esimates - season as desired","preheat oven to 400\u02daF","cut sweet potato into small cubes","cut asparagus into thirds","put all ingredients sectioned out on the pan","coat each item in olive oil, salt, garlic, and sage","bake for around 35 minutes - until chicken reaches 165\u02daF"]},{"recipe":"Chicken Drumsticks","ovenTemp":"425","prepTime":"10","cookTime":"35","totalTime":"50","ingredients":[{"item":"chicken drumstick","value":"6","units":"count"},{"item":"olive oil","value":"1","units":"tbsp"},{"item":"garlic powder","value":"1","units":"tsp"},{"item":"onion powder","value":"1","units":"tsp"},{"item":"sage","value":"1/4","units":"tsp"},{"item":"oregano","value":"1/4","units":"tsp"},{"item":"thyme","value":"1/4","units":"tsp"},{"item":"basil","value":"1/4","units":"tsp"},{"item":"paprika (optional)","value":"1","units":"tsp"},{"item":"salt","value":"1 1/2","units":"tsp"}],"categories":["protein","oven","sheet pan"],"instructions":["preheat oven to 425\u02daF","line baking sheet with foil and place wire rack on top","coat chicken in olive oil","eavenly spread seasonings","bake around 35 minutes (internal temp should reach 165\u02daF)"]},{"recipe":"Chicken Thighs","ovenTemp":"425","prepTime":"10","cookTime":"35-40","totalTime":"50","ingredients":[{"item":"chicken thigh","value":"4","units":"count"},{"item":"olive oil","value":"1","units":"tbsp"},{"item":"garlic powder","value":"1","units":"tsp"},{"item":"onion powder","value":"1","units":"tsp"},{"item":"sage","value":"1/4","units":"tsp"},{"item":"oregano","value":"1/4","units":"tsp"},{"item":"thyme","value":"1/4","units":"tsp"},{"item":"basil","value":"1/4","units":"tsp"},{"item":"paprika (optional)","value":"1","units":"tsp"},{"item":"salt","value":"1 1/2","units":"tsp"}],"categories":["protein","oven","sheet pan"],"instructions":["preheat oven to 425\u02daF","line baking sheet with foil and place wire rack on top","coat chicken in olive oil","eavenly spread seasonings","bake 35-40 minutes (internal temp should reach 165\u02daF)"]},{"recipe":"Cucumber Apple Salad","prepTime":"20","cookTime":"0","totalTime":"20","ingredients":[{"item":"cucumber","value":"2","units":"count"},{"item":"apple","value":"1","units":"count"},{"item":"lemon","value":"1/2","units":"count"},{"item":"red onion","value":"2","units":"tbsp"},{"item":"fresh basil","value":"2","units":"tbsp"},{"item":"salt","value":"1","units":"tsp"}],"categories":["salad","side"],"instructions":["Chop and mix cucumber, apple, onion, and basil","Sqeeze over lemon juice","Season with salt"]},{"recipe":"Green Smoothie","ovenTemp":"x","prepTime":"10","cookTime":"x","totalTime":"10","ingredients":[{"item":"avocado","value":"1/2","units":"count"},{"item":"kale leaf","value":"2","units":"count"},{"item":"apple","value":"1","units":"count"},{"item":"ginger powder","value":"1/4","units":"tsp"},{"item":"ice cubes","value":"5","units":"count"},{"item":"collagen peptides","value":"1 1/2","units":"tsp"}],"categories":["meal","blender"],"instructions":["add water or milk to blender","add kale, avocado, apple, and ginger - then blend","add ice and blend","add callogen peptides and blend to mix","enjoy"]},{"recipe":"Lamb and Squash Spaghetti","ovenTemp":"400","prepTime":"10","cookTime":"60","totalTime":"70","ingredients":[{"item":"Ground lamb","value":"16","units":"oz"},{"item":"Spaghetti Squash (large)","value":"1","units":"count"},{"item":"olive oil","value":"1","units":"tbsp"},{"item":"salt","value":"1","units":"tsp"},{"item":"onion powser","value":"1","units":"tsp"},{"item":"garlic powder","value":"1","units":"tsp"},{"item":"ginger","value":"1","units":"tsp"},{"item":"sage","value":"1","units":"tsp"}],"categories":["meal","oven","stove","sheet pan"],"instructions":["note: spice measurements are esimates - season as desired","preheat oven to 400\u02daF","cut squash in half and remove seeds, coat flesh side with olive oil and spices","cook squash flesh side down for 50-60 minutes","during the last 10 minutes, cook ground meat in spices and drain","combine ground meat and scooped out spaghetti squash - add extra seasoning as desired"]},{"recipe":"Mushroom and Sweet Potato Sheet Pan","ovenTemp":"450","prepTime":"10","cookTime":"35","totalTime":"45","ingredients":[{"item":"sweet potato (large white)","value":"1","units":"count"},{"item":"sliced mushroom","value":"8","units":"oz"},{"item":"onion","value":"1","units":"count"},{"item":"garlic clove","value":"2","units":"count"},{"item":"salt","value":"1","units":"tsp"}],"categories":["side"],"category":["dinner","sheet pan","oven"],"instructions":["preheat oven to 450\u02daF","line sheet pan","chop up sweet potato into small cubes","chop onion into small cubes","mince garlic","bake for 35 minutes"]},{"recipe":"Salmon","ovenTemp":"450","prepTime":"10","cookTime":"15-22","totalTime":"32","ingredients":[{"item":"salmon (frozen fillet)","value":"1","units":"count"},{"item":"zucchini","value":"2","units":"count"},{"item":"thyme","value":"1/4","units":"tsp"},{"item":"garlic","value":"1/2","units":"tsp"},{"item":"lemon","value":"1/4","units":"tsp"},{"item":"salt","value":"1","units":"tsp"}],"categories":["protein","oven","sheet pan"],"instructions":["preheat oven to 450\u02daF","chop zuchini into small peices","coat salmon in olive oil, rosemary, garlic, and salt","coat zucchini in olive oil and garlic","lay lemon slice on top of fish fillet","bake for 15-22 minutes until internal temp reaches 145\u02daF"]}]')}},[[12,1,2]]]);
//# sourceMappingURL=main.8226b1e7.chunk.js.map