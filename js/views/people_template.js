function processData(data) {
  return data.map(function(item){
    return `
      <li class="person-list-item" data-person-id="${item.objectId}">
        <i class="fa fa-user"></i><span>${item.Name}</span>
      </li>
    `;
  }).join("");
};

export default function(data) {
  return `
    <div class="people-list">
      <h1>Contacts</h1>
      <ul>${processData(data)}</ul>
      <button class="newPersonBtn">Add New Contact</button>
    </div>
  `;
}