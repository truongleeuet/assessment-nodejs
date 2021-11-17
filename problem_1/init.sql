CREATE TABLE user (
  id int NOT NULL AUTO_INCREMENT,
  email VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  PRIMARY KEY(id)
);

CREATE TABLE tree (
  id int NOT NULL AUTO_INCREMENT,
  friendly_name VARCHAR(255) NOT NULL,
  scientific_name VARCHAR(255) NOT NULL,
  owner_id int NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE likes_table (tree_id int NOT NULL, user_id int NOT NULL);

INSERT INTO
  user(email, name)
values
  ('adam@versett.com', 'Adam');

INSERT INTO
  user(email, name)
values
  ('jackey@versett.com', 'Jackey');

INSERT INTO
  user(email, name)
values
  ('jane@versett.com', 'Jane');

INSERT INTO
  user(email, name)
values
  ('mike@versett.com', 'Mike');

INSERT INTO
  tree(friendly_name, scientific_name, owner_id)
values
  ('Oak', 'Quercus', 1);

INSERT INTO
  tree(friendly_name, scientific_name, owner_id)
values
  ('English Yew', 'Taxus baccata', 1);

INSERT INTO
  tree(friendly_name, scientific_name, owner_id)
values
  (
    'Giant Redwood',
    'Sequoiadendron giganteum',
    2
  );

INSERT INTO
  likes_table(tree_id, user_id)
values
  (1, 2);

INSERT INTO
  likes_table(tree_id, user_id)
values
  (2, 2);

INSERT INTO
  likes_table(tree_id, user_id)
values
  (1, 3);

INSERT INTO
  likes_table(tree_id, user_id)
values
  (3, 3);

INSERT INTO
  likes_table(tree_id, user_id)
values
  (1, 4);