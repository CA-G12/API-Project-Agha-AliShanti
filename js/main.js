function fetch(url, cb) {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        cb(JSON.parse(xhr.responseText));
      } else {
        console.log("Error " + xhr.status);
      }
    }
  };
  xhr.open("GEt", url, true);
  xhr.setRequestHeader(
    "Authorization",
    "token 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"
  );
  xhr.send();
}
