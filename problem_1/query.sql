-- A
-- a. The query should return all trees that belong to the user with the email address “adam@versett.com”
SELECT
  t.*
FROM
  user as u
  INNER JOIN tree as t on u.id = t.owner_id
WHERE
  u.email = 'adam@versett.com';

--b. The query returns the following information for each tree: the ID, friendly name, scientific name, the owner’s name.
SELECT
  t.id,
  t.friendly_name,
  t.scientific_name,
  u.name as owner_name
FROM
  tree as t
  LEFT JOIN user as u on t.owner_id = u.id;

--c. The query also returns the total number of “likes” for each tree.
SELECT
  t.*,
  count(l.tree_id) as total_likes
FROM
  tree as t
  LEFT JOIN likes_table as l on t.id = l.tree_id
GROUP BY
  l.tree_id;

--B. Same as A, but instead of condition a, return only trees that do not belong to the user with the email address “adam@versett.com”.
SELECT
  t.*
FROM
  user as u
  INNER JOIN tree as t on u.id = t.owner_id
WHERE
  u.email != 'adam@versett.com';

--C. Same as A and B, but instead of condition a, return only trees with 3 or more likes.*/
SELECT
  t.*
FROM
  tree as t
  LEFT JOIN likes_table as l on t.id = l.tree_id
GROUP BY
  l.tree_id
HAVING
  count(l.tree_id) >= 3;