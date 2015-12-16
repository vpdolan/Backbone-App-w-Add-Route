let newContactTemplate = `

  <button class="backBtn rats" data-to="people">
    <i class="fa fa-arrow-left"></i>Back to contacts
  </button>
  
  <h2 class="newTitle">New Contact Information</h2>

  <div class="addNewContact">
    <input type="text" placeholder="Name:" id="name"></input>
    <input type="text" placeholder="Email:" id="email"></input>
    <input type="text" placeholder="Phone Number:" id="number"></input> 
    <input type="text" placeholder="Location (city):" id="city"></input>
  </div>
  
  <button class="saveContact">Save Contact</button>

  `; 

export default newContactTemplate;   