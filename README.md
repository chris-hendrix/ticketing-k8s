# Ticketing app with kubernetes
### Dev setup
1. Start docker with kubernetes running
2. Install [ingress-nginx](https://kubernetes.github.io/ingress-nginx/deploy/#quick-start) using this command if you have docker desktop
```
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.10.1/deploy/static/provider/cloud/deploy.yaml
```
3. Run the following command
```
skaffold dev
```
### Setting up dev route
1. Add this line to your `hosts` file as admin
```
127.0.0.1 ticketing.dev
```
2. In chrome, hit an exposed route such as `ticketing.dev/api/users/currentuser`, and if you see "Your connection is not private", type `thisisunsafe`
