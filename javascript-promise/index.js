function isImpactByteStudent(name) {
  if (name === "albert" || nama === "adam" || nama === "wippy") {
    return Promise.resolve(`${name} is impact byte student `);
  } else return Promise.reject(`${name} is not impact byte student`);
}
//Resolve
isImpactByteStudent("albert")
  .then(ans => console.log(ans))
  .catch(err => console.log(err));

isImpactByteStudent("adam")
  .then(ans => console.log(ans))
  .catch(err => console.log(err));

//Reject
isImpactByteStudent("susi")
  .then(ans => console.log(ans))
  .catch(err => console.log(err));
