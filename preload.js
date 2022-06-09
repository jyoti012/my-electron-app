var Airtable = require('airtable');

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const dependency of ['chrome', 'node', 'electron']) {
    replaceText(`${dependency}-version`, process.versions[dependency])
  }


  const exeCodingAppApi = async() => {
    let base = new Airtable({apiKey: ''}).base('');

    let api_result = [];
    const records = await base('Coding app').select().all();
    console.log("records", records);
    records.forEach(function(record) {
      api_result.push(record.get("Name"));
    });
    console.log(api_result)
    return api_result;
  }
  exeCodingAppApi();

  let coding_app_arr = exeCodingAppApi();
  console.log("coding_app_arr", coding_app_arr);

  // coding_app_arr.then(resp => {
  //     coder_arr = resp
  // })

})