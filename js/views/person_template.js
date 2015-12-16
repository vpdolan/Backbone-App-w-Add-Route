export default function(data) {
  console.log(data);
  return `
    <div class="person">
      <button class="back-button" data-to="people">
        <i class="fa fa-arrow-left"></i>
      </button>
      <div class="gravatar">
        <h2>Contact Information</h2>
        <img src="${data.Gravatar}">
      </div>
      <h1>${data.Name}</h1> 
      <p>${data.Email}</p>
      <p>${data.Phone}</p>
      <p>${data.Location}</p>
      
    </div>
  `;
};