//"I pledge my honor that I have abided by the Stevens honor system" - igomez1 Ian Gomez 10428821

const dbConnection = require("./mongoConnection");

/* This will allow you to have one reference to each collection per app */
/* Feel free to copy and paste this this */
const getCollectionFn = collection => {
  let _col = undefined;

  return async () => {
    if (!_col) {
      const db = await dbConnection();
      _col = await db.collection(collection);
    }

    return _col;
  };
};

/* Now, you can list your collections here: */
module.exports = {
  animals: getCollectionFn("animals"),
  posts: getCollectionFn("posts")
};
