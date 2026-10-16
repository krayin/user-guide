# Quick Add

**Quick Add** creates a record from wherever you are, without leaving the page you are on. The **+** button sits in the header, beside the search field.

### Creating a record

**Step-1** Click the **+** button in the header.

**Step-2** Choose what you want to create. Quick Add covers **Lead**, **Quote**, **Person**, **Organization**, **Product** and **Email**.

**Step-3** Fill in the form that opens and save it. The record is created and you stay where you were.

### What each form asks for

A Quick Add form is shorter than the full create page: it shows only the attributes marked for quick add, so a record can be entered in a few fields and completed later.

**1) Lead-** Title and description.

**2) Quote-** Sales owner, subject, description, billing address, grand total, expired at and person.

**3) Person-** Name, emails and contact numbers.

**4) Organization-** Name, address and sales owner.

**5) Product-** Name, description, SKU, quantity and price.

**6) Email-** The recipients, the subject and the message.

**Note- A quote created from Quick Add carries no products. Open the quote afterwards to add its items.**

You can change which fields appear by editing the attributes of that section in **Settings >> Attributes** and turning **Quick Add** on or off for each one.

### Controlling who can use it

Each option appears only for users whose role grants the matching permission. The permissions are set per role in **Settings >> Roles**, under the section each one belongs to.

| Option | Permission |
|---|---|
| Lead | `leads.create.quick-create` |
| Quote | `quotes.create.quick-create` |
| Person | `contacts.persons.create.quick-create` |
| Organization | `contacts.organizations.create.quick-create` |
| Product | `products.create.quick-create` |
| Email | `mail.compose.quick-create` |

A role with none of these permissions sees no **+** button at all.
