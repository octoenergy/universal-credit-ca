import firebase from 'firebase';

let config = {
 apiKey: "AIzaSyD-kZOnEw-ZkNnaEr-crw_buNZiWedZ2mY",
 authDomain: "cab-demo-51f15.firebaseapp.com",
 databaseURL: "https://cab-demo-51f15.firebaseio.com",
 projectId: "cab-demo-51f15",
 storageBucket: "cab-demo-51f15.appspot.com",
 messagingSenderId: "679001820724"
};

firebase.initializeApp(config);

export function formatPostcode(postcode) {
    const lastMatch = '[0-9][a-zA-Z][a-zA-Z]';
    const tmp = postcode.replace(/ /g, '');
    const match = postcode.match(lastMatch);
    if (match !== null && tmp.length < 7) {
        let padding = ' ';
        if (tmp.length === 5) {
          padding = '  ';
        }
        const newPostcode = tmp.slice(0, -3) + padding + match[0];
        return newPostcode;
    } else {
        return postcode;
    }
}

const repoSearch = async (postcode) => {
  let searchParam = formatPostcode(postcode);
  let snapshot = await firebase.database().ref('/full-postcodes').orderByChild('pcd7').equalTo(searchParam).once('value');
  let data = snapshot.val();
  if (!data) {
    throw new Error('Sorry we could not find that postcode, please try again');
  }
  else {
    if (data.length) {
      data = data[0];
    } else {
      for (let variable in data) {
        if (data.hasOwnProperty(variable)) {
          data = data[variable];
        }
      }
    }
  }
  return data;
};

export default {
  repoSearch,
};
