# Project REST-rant

REST-rant is an app where users can review restaurants.

## Tasks that will be completed to make this app functional:

- [x] Part 1: Project setup, stub three routes, and creating a README file
- [x] Part 2: Stub remaining GET and POST routes, planning mock restaurant data, drawing wireframes, and making your first view
- [x] Part 3: Making more views, creating a layout page, and expanding your README
- [x] Part 4: Adding some style with CSS
- [x] Part 5: Forms, validation, and navigation
- [x] Part 6: Implementing delete functionality and adding a DELETE route
- [x] Part 7: Implementing edit form and functionality, adding a PUT route
- [x] Part 8: Implementing the Mongoose ODM
- [ ] Part 9: Seed data, validations, and helper methods
- [ ] Part 10: Adding commentary: rants and raves
- [ ] Part 11: Populating data for star ratings
- [ ] Part 12: Deploying your project


## Routes

| Method | Path | Purpose |
| - | - | - |
| GET | `/` | The home page |
| GET | `/places` | Index page listing all places |
| GET | `/places/new` | New form for a place |
| POST | `/places` | Create a new place |
| GET | `/places/:id` | Show one place in detail (Associated rants, new rant form, delete rant button) |
| GET | `/places/:id/edit` | Edit form for a place |
| PUT | `/places/:id` | Make changes to existing place |
| DELETE | `/places/:id` | Delete a place |
| POST | `/places/:id/rant` | Add rant to a place |
| DELETE | `/places/:id/rant/:rantId` | Delete a rant |

## Database

**places** 

| Field | Type |
| - | - |
| _id | Object ID |
| name | String |
| city | String |
| state | String |
| cuisines | String |
| pic | String |

**rants**

| Field | Type |
| - | - |
| _id | Object ID |
| place_id | ref(places) Object_Id |
| rant | Boolean |
| rating | Number |
| comment | String |
| reviewer | String |
