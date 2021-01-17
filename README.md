# jwt-session-manager

Mikroservice pro enc/dekodovani JWT tokenu.
Nemá být dostupná z internetu, ale pouze pro mikroslužby, které ji potřebují.

## SETTINGS

Pouze pomocí ENVIRONMENT VARIABLES, jsou samovysvětlující:
- PORT=3000 (default 3000)
- HOST=0.0.0.0 (default localhost)
- SERVER_SECRET=superSecretString

[Dockerfile](Dockerfile) umožňuje nasadit jako kontejner,
idealně pomocí orchestrátoru jako např. [kubernetes](https://kubernetes.io/).

### Develop with minikube

```
eval $(minikube -p minikube docker-env)
docker build . -f dev/Dockerfile -t modularniurad/jwt-session-manager
kubectl apply -f dev/pod.yaml
```

Pak minikube zařídí běh podu s vybuildovaným image kde, krom vlastního kodu
poslouchá node remote debugger na portu 9229.
Napojit se na něj lze po portforwardu tohoto portu 9229 z podu na host mašinu:
```
kubectl port-forward jwt-session-manager 9229:9229
```
Kde už se na něj napojíte např. z VSCode.

kubectl delete pod jwt-session-manager
