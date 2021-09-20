```jsx
<div className="grid md:grid-cols-2 gap-x-4 gap-y-8 xl:grid-cols-3 xl:gap-x-6">
  <CartItems
      imageUrl={item.imageUrl}
      title={item.title}
      price={item.price}
      quantity={item.quantity}     
      onClick= {(removeItem(item.listing._id,auth))}
      key={item.listing_id}
      />
  />
  <CartItems
      imageUrl={item[0].listing.imageUrl}
      title={item[0].listing.title}
      price={item[0].listing.price}
      quantity={item.quantity}     
      onClick= {(removeItem(item.listing._id,auth))}
      key={item.listing_id}
  />
</div>
```
<!-- 
// const sampleCartItem = [
//     {
//       "_id": "613e9371cc12a00020653f76",
//       "listing": {
//         "_id": "613e8b19cc12a00020653b60",
//         "title": "Chicken",
//         "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
//         "price": 272,
//         "condition": "used_good",
//         "imageUrl": "https://images.unsplash.com/photo-1611174743420-3d7df880ce32?ixid=MnwyNDY1NjJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjYyNDYyMDc&ixlib=rb-1.2.1&auto=format&fit=crop&w=543&h=384&q=80",
//         "availability": "single-item",
//         "createdAt": "2021-09-12T23:19:53.900Z",
//         "updatedAt": "2021-09-12T23:19:53.900Z",
//         "__v": 0
//       },
//       "quantity": 3,
//       "createdAt": "2021-09-12T23:55:29.127Z",
//       "updatedAt": "2021-09-13T00:20:37.652Z"
//     }
// ] -->