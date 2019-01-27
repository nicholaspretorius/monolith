const db = () => {
  const config = {
    data: false
  };
  const data = [
    { title: "Hello world!", content: "This is my first blog post. Yay!" }
  ];

  if (config.data) {
    return data;
  } else {
    // simulating app crash ... even though 'only db' crashed, whole app crashes
    process.exit(1);
  }
};

module.exports = {
  db
};
