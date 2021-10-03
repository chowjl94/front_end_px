```jsx
<div className="grid md:grid-cols-2 gap-x-4 gap-y-8 xl:grid-cols-3 xl:gap-x-6">
    <CartItems
            item={
                  {
                    "_id": "613f3aa42a4e610020f07bf5",
                    "listing": {
                      "_id": "613ed2e82a4e610020f06b5d",
                      "title": "BTC",
                      "description": "TOOO THE MOON",
                      "price": 200,
                      "condition": "used_fair",
                      "imageUrl": "https://www.reuters.com/resizer/zW8rrkfTnMtOWEWkX93b-cRKIKQ=/960x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/QJ5TJE4E45K65B22ENEC7NWOEI.jpg",
                      "availability": "in-stock",
                      "numOfStock": 2,
                      "createdAt": "2021-09-13T04:26:16.597Z",
                      "updatedAt": "2021-09-13T04:26:16.597Z",
                      "__v": 0
                    },
                    "quantity": 1,

                  }
              } 

            /> 

</div>
```

*** need to fit to the shape of item ,
listing is nested into {title, price,imageURL} ***