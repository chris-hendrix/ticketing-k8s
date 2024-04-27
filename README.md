# Ticketing app with kubernetes
### Setup
1. Start docker with kubernetes running
2. Run the following command
```
skaffold dev
```
### Setting up dev route
1. Add this line to your `hosts` file as admin
```
127.0.0.1 ticketing.dev
```
2. In chrome, hit an exposed route such as `ticketing.dev/api/users/currentuser`, and if you see "Your connection is not private", type `thisisunsafe`
