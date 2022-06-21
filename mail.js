const firebaseConfig = {
  apiKey: "AIzaSyC-2X7QqHjj2eclUP6gy-4T5XSJnKSmsRE",
  authDomain: "funwithdsa-86d2d.firebaseapp.com",
  databaseURL: "https://funwithdsa-86d2d-default-rtdb.firebaseio.com",
  projectId: "funwithdsa-86d2d",
  storageBucket: "funwithdsa-86d2d.appspot.com",
  messagingSenderId: "661180752766",
  appId: "1:661180752766:web:73843ddeae4a4c998ec92f"
};
// intitialize firebase
firebase.initializeApp(firebaseConfig);
//for creating refernec of db
var dsaformdb = firebase.database().ref("funwithdsa");
document.getElementById('funwithdsa').addEventListener('submit',submitForm);

function submitForm(e){
  e.preventDefault();
  var name =getElementVal('name');
  var dsalgo = getElementVal('dsalgo');
  var link = getElementVal('link');
  var gitlink = getElementVal('gitlink');
  var reponame = getElementVal('reponame');
savemsg(name,dsalgo,link,gitlink,reponame);
document.querySelector('.alert').style.display="block";
// removing alert
setTimeout(()=>{
  document.querySelector('.alert').style.display="none";
},3000);
//reset
document.getElementById('funwithdsa').reset();

}

const savemsg = (name,dsalgo,link,gitlink,reponame)=>{
  var newContactForm = dsaformdb.push();
  newContactForm.set({
    name:name,
    dsalgo:dsalgo,
    link:link,
    gitlink:gitlink,
    reponame:reponame,
  })
};
const getElementVal = (id) =>{
  return document.getElementById(id).value;
};
