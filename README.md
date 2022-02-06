# Cheshire West Vehicles

This is a Django Rest Framework and React project for Cheshire West Vehicles. 

## Features

## Endpoints

### Home

### Sales

`GET /api/sales/`
- Returns all vehicles.

`GET /api/sales/:id/`
- Returns vehicle with supplied id.

`GET /api/sales/state/:id/`
- Returns the current sales state of a vehicle.

`POST /api/sales/reserve/:id/`
- Sends post data to reserve a vehicle with the following data:
```
{
    "name": string,
    "email": email,
    "phone_number": string,
}
```

If a trade-in box is ticked, the follow data will also be required.

```
{
    "make": string,
    "model": string,
    "trim": string,
    "year": string,
    "mileage": string,
    "comments": string
}
```

### Gallery

`GET /api/gallery/`
- Returns all gallery items.

`GET /api/gallery/:id/`
- Returns gallery item with supplied id.

### Contact

`POST /api/contact/`
- Posts contact form data for sending via email using the following data:
```
{
    "name": string,
    "phone_number": string,
    "email": email,
    "subject": string,
    "message": string

}
```

## Database Design

## Deployment

