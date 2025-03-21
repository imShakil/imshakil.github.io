---
title: 2115. Find All Possible Recipes from Given Supplies
date: 2025-03-21
categories: [Programming, Algorithms]
tags: [python, leetcode]
---


> Porblem Link: [leetcode-2115](https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/)

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
I thought in greedy approach to solve the problem. We have to try to make recipe one by one. if any recipe couldn't possible to make, that means we have to try it later. 

# Approach
<!-- Describe your approach to solving the problem. -->
Approach is very easy, try to make all the recipes one by one. If any recipe is not possible to make that means that recipes might be dependent on another recipe that not yet made. So, We need to try it later after completing one rotation of all the recipes. 

Let's see an example:

```
recipes = ["bread","burger", "sandwich"]
ingredients = [["yeast","flour"],["sandwich","meat","bread"],["bread","meat"]]
supplies = ["yeast","flour","meat"]
```



At first: We will try to make `bread`. Since, All the ingredients are available, we can make it easily. 

2nd, for `burger`: We see it dependent on ingredient `sandwitch` which is not available in `supplies` also we did not made yet the recipe as well So, We are skipping it now and try to make next recipe which is `sandwitch`. 

3rd, `Sandwitch`: We have `meat` in the supplies and we already made `bread` recipe. So, we can make this recipe as well. 

So, We done the first rotation and completed two recipes `bread` and `sandwitch`. 


Now, we can make the `burger` since we have `sandwitch` ingredient`. 
So, We are trying multiple times with rotation. Question is How many times should I attempt to make one recipe that failed to make over and over due to lack of ingredients? The answer is: We have to try each recipe at most n-1 times. after that we can gurantee it's not possible to make. 

# Coding Approach

- Created a list of tuple for index and recipe name
- created deque from the above list of tuples
- loop over deque, try from left, if not possible put in the right
- keep completed recipes in list
- counted recipes that couldn't make possible, since we have to try multiple times, this will limit us from infinte loop
- once all tried done, end the loop


# Complexity
- Time complexity: O(n*(n-1)) = O(n^2)

# Code

```python
from collections import deque

class Solution:
    def findAllRecipes(self, recipes: List[str], ingredients: List[List[str]], supplies: List[str]) -> List[str]:
        
        recipes_with_idx = [(i, r) for i, r in enumerate(recipes)]
        #print(recipes_with_idx)
        dq = deque(recipes_with_idx)
        #print(dq)
        completed_recipes = []
        not_completed_recipes = []
        tried_recipes = dict()

        while dq:
            idx, r = dq.popleft()
            have_all_ingredients = True
            for ingredient in ingredients[idx]:
                if ingredient not in supplies and ingredient not in completed_recipes:
                    have_all_ingredients = False
                    break
            if have_all_ingredients:
                completed_recipes.append(r)
            else:
                if r not in tried_recipes:
                    tried_recipes[r] = 1
                    dq.append((idx, r))
                elif r in tried_recipes and tried_recipes[r] < len(recipes)-1:
                    tried_recipes[r] += 1
                    dq.append((idx, r))
            
            #print(idx, r)
        #print(compl)
        return completed_recipes
```