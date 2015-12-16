export default function(data) {
  console.log(data);
  return `
    <div class="person">
      <button class="backBtn qrs" data-to="people">
        <i class="fa fa-arrow-left"></i>
      </button>

      <h2>Contact Information</h2>
        <ul>
          <li><i class="fa fa-android"></i><span>Name:</span>${data.Name}</li>
          <li><i class='fa fa-envelope'></i><span>Email:</span>${data.Email}</li> 
          <li><i class='fa fa-phone'></i><span>Phone:</span>${data.Phone}</li> 
          <li><i class='fa fa-globe'></i><span>City:</span>${data.Location}
          </li>
        </ul>      
      
    </div>
  `;
}