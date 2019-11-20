const profile = {
    firstName: 'Rikuma',
    familyName: 'Sakamoto',
    age: 20,
    hobby: 'dancing',
    major: 'archaeology',
};

const keks = Object.keys(profile);

for (let i = 0; i < keys. length; i = i + 1 ){
    const key = keys[i];
    const value = profile[key];
    const text = "私の" + key + "は" + value + "です。";
    console.log(text);
}