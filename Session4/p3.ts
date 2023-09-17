const contacts = {
    first_name: "",
    last_name: "",
    phone_number:"",
   };

   const contactList: string[] = [];
  
  function addcontact(first_name: string , last_name: string , phone_number:number) {
    const contactapp = Object.create(contacts);
    contactapp.first_name = first_name;
    contactapp.last_name = last_name;
    contactapp.phone_number = phone_number;
  
    contactList.push(contactapp);
  }
  
  addcontact("Mani", "Mk", 9112223344 );
  addcontact("felan", "besar", 9112223344);
  
  function printcontacts() {
    if (!contactList[0]) {
      return;
    }
    console.log(contactList);
  }
  printcontacts();