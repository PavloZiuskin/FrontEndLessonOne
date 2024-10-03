const contactBook = {
    contactsList: [
        {
            name: "Doe",
            phone: "+123456789",
            email: "fred.doe@example.com"
        },
        {
            name: "Jane",
            phone: "+987654321",
            email: "jane.green@example.com"
        }
    ],

    findContactByName(name) {
        return this.contactsList.find(contact => contact.name.toLowerCase() === name.toLowerCase()) || "Contact not found";
    },

    addContact(name, phone, email) {
        this.contactsList.push({ name, phone, email });
        return `Contact ${name} added successfully.`;
    }
};

console.log(contactBook.findContactByName("Jane"));
console.log(contactBook.addContact("Alice", "+111222333", "alice.johnsoniyk@example.com"));
console.log(contactBook.contactsList);